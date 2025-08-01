import React from 'react'

const NewslatterBox = () => {
    const OnsumbitHendler = (event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
        <p className='text-gray-400 mt-3'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi maxime repellat similique delectus facilis iusto. Saepe vero numquam explicabo similique sit quis, harum eos repudiandae quae. Nisi ratione repellat amet!</p>
        <form onSubmit={OnsumbitHendler} action="" className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-6'>
            <input type="Email" placeholder='Enter your Email'  className='w-full sm:flex-1 px-10 py-3 rounded-2xl shadow-2xl outline-none' required/>
            <button className='bg-black text-white text-xs px-10 py-4 rounded-2xl shadow-2xl ' type='submit'>Subcribe</button>
        </form>
    </div>
  )
}

export default NewslatterBox