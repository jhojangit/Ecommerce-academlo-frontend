import axios from 'axios'





const useAuthentication = () => {


    const createNewUser = data => {
        const url = `https://ecommerce-academlo-backend.onrender.com/users`
        axios.post(url, data)
            .then(res => console.log(res.data))

            .catch(err => console.log(err))


    }




    const loginUser = async data => {
        const url = "https://ecommerce-academlo-backend.onrender.com/users/login";

        try {
            const response = await axios.post(url, data);
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            return response.data; // Devuelve los datos de respuesta si es necesario
        } catch (error) {
            console.error(error);
            localStorage.removeItem('token');
            throw error; // Lanza el error para que se pueda manejar en la función que lo llama
        }
    };




    return { createNewUser, loginUser }
}

export default useAuthentication