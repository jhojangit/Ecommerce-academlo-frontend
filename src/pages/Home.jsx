import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProducts from '../components/home/cardProducts/CardProducts';
import FilterCategory from '../components/home/FilterCategory';
import FilterByPrice from '../components/home/FilterByPrice';
import "./home.css"




const Home = () => {

  const [inputValue, setInputValue] = useState("");

  const  {productsGlobal}  = useSelector(state => state)

  const [menu, setMenu] = useState("");

  const [fromTo, setFromTo] = useState({from:0, to: Infinity})

  const input = useRef()


  const handleMenu = () =>{
    setMenu("products__filters-section_show")
  }

  const handleClose = () =>{
    setMenu("")
  }


  const handleChangeInput = () => {
    setInputValue(input.current.value.toLowerCase().trim())
  }



  const productFliter = productsGlobal
  ?.filter(prod => prod.title.toLowerCase().includes(inputValue)) 
  .filter(prod => {
    const to = +fromTo.to
    const from = +fromTo.from
    const price = +prod.price

    if(from && to){
      return price >= from && price <= to 
    }

    if(from && !to){
      return from <= price
    }

    if(!from && to){
      return price <= to
    }

    if(!from && !to){
      return true
    }




  }) 
  return (
    <div className='products__container'>



      <div className={`products__filters-section ${menu}`}>
        <h3 className='products__menu-close' onClick={handleClose} >❌</h3>
        <FilterByPrice setFromTo={setFromTo}/>
        <FilterCategory/>
      </div>


      <input className='products__container-filterByName' ref={input} onChange={handleChangeInput} type="text" placeholder='What are you looking for?' />
      
        <i onClick={handleMenu} className='bx bx-filter products__filter-btn-show'>Filters</i>
      
      
      
      <section className='products__show'>
          {
            productFliter?.map(prod =>(
              <CardProducts 
              key={prod.id}
              product ={prod}
              />
              ))
            }
      </section>
    </div>
  )
}

export default Home