import React from 'react'
import { AiOutlineLine } from 'react-icons/ai'
import { IoLaptop } from 'react-icons/io5'
import { BsFillCameraVideoFill } from 'react-icons/bs'
function Service() {
    return (
        <div id='SERVICE'className='text-white grid bg-header-hero 
        lg:grid-cols-2 grid-cols-1 w-[100%] lg:h-[39rem] lg:mt-[35rem] place-items-center
        md:mt-[33rem] md:h-[46rem]
        h-[60rem] mt-[32rem]
        '>
            <img src="../../images/s.jpg" className='mt-[3rem] h-[24rem] 
            lg:w-[25rem] lg:h-[26rem] lg:ml-[11.5rem] md:mt-[30px] md:w-[33%] md:h-[20rem]  w-[15rem]'alt="" />
            <div className='w-[15rem] lg:w-[25rem] md:w-[25rem]'>
                <div>
                    <h5 className='font-bold lg:text-[25px] text-yellow-400'> OUR SERVICES  </h5>
                    <h1>Download Your Shows Watch Offline.</h1>
                    <p className='font-light text-gray-500'>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
                        tempor.There are many variations of passages of
                        lorem Ipsum available, but the majority have suffered alteration in some injected humour.</p>

                </div>

                <div >
                        
                    <div >
                        <div className='flex flex-row'>
                        <IoLaptop className='hidden lg:block lg:h-[2rem] lg:w-[3rem] lg:mt-[31px]' />
                        <h1 className='font-bold mt-7 ml-0'> Enjoy on Your TV.  </h1>
                        </div>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>


                <div>
                        
                    <div >
                        <div className='flex flex-row'>

                        
                    <BsFillCameraVideoFill className='hidden  lg:block lg:h-[2rem] lg:w-[3rem] lg:mt-[26px]'/>
                        <h1 className='font-bold mt-6 ml-1'> Watch Everywhere.
</h1>
</div>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div></div>
    )
}

export default Service