import axios from 'axios'





const useAuthentication = () => {


    const createNewUser = data =>{
        const url = `http://localhost:8080/users`
        axios.post(url, data)
        .then(res => console.log(res.data))

        .catch(err => console.log(err))
    }




    const loginUser = data =>{
        const url = `http://localhost:8080/users/login`
        axios.post(url, data)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
        })

        .catch(err => {
            console.log(err)
            localStorage.removeItem('token')
        })
    }



    return {createNewUser, loginUser}
}

export default useAuthentication