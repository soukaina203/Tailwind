
import React from 'react'
import {serieData} from '../Data/data'
function Series() {
  return (
    <div id='SERIES' className='w-[100%] text-white relative  h-[140rem] top-0
    lg:h-[46rem] bg-header-black2  lg:top-[-1rem]
    md:h-[75rem] md:top-[0rem]
    '>
<p className='lg:text-[1rem] text-header-red font-semibold  ml-[3rem] md:ml-[5rem] lg:ml-[5rem] relative 
top-[68px] text-[0.9rem]
'>   BEST TV SERIES</p>
<h1 className='lg:text-[2.5rem] text-[1.5rem] font-bold ml-[3rem] lg:ml-[5rem] mt-[3rem] md:text-[2rem] md:ml-[5rem] ' >World Best TV Series
</h1>
<div className='lg:w-[90%] h-[27rem] mt-12 lg:m-[5rem] md:m-[5rem]  grid place-items-center	 gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'> 
{serieData.map((e)=>{
    return(

        <div className='w-[15rem] h-[30rem] flex flex-col bg-black rounded text-white '>
<img src={e.pic} alt="" className='w-[17rem] rounded h-[26rem] hover:opacity-80' />
<h3 className='font-bold ml-3 hover:text-header-red duration-500'>{e.name}</h3>
    <p className='ml-3 font-light'>year:{e.year}</p>
    <p className='ml-3 font-light' >Duration:{e.duree}</p>
</div>
    
    )
})}

    </div>
    </div>
  )
}

export default Series