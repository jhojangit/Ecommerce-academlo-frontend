import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const FilterByPrice = ({setFromTo}) => {

    const {reset, register, handleSubmit} = useForm()

    

    const submit = data =>{
        setFromTo(data);

        reset({
            from:"",
            to:""
        })
    }


  return (
    <article >
        <h3 className='filter__byprice-title'>Price</h3>

        <form  onSubmit={handleSubmit(submit)} >
            <div className='filter__byPrice'>
                <label className='filter__byPrice-label' htmlFor="from">From</label>
                <input className='filter__byPrice-input' {...register("from")}  type="text"  id='from'/>

                <label className='filter__byPrice-label' htmlFor="to">To</label>
                <input className='filter__byPrice-input'{...register("to")}  type="text"  id='to'/>

                <button className='filter__byPrice-btn'>Filter Price</button>
            </div>
        </form>
    </article>
  )
}

export default FilterByPrice