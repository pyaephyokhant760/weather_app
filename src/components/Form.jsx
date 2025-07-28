import React from 'react'

const Form = () => {
  return (
    <div className='w-100 d-flex justify-content-center mt-3'>
      <input type="text" className='form-control ms-4' placeholder='Enter Country'/>
      <input type="button" className='btn me-5 ms-2 bg-black text-white' value="search"/>
    </div>
  )
}

export default Form