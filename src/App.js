import './App.css';
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
function App() {
  const [isClicked, setClicked] = useState({ menu: true, exit: false })
  let handleClick = () => {
    if (isClicked.menu) {
      setClicked({ menu: false, exit: true })
    }
    else {
      setClicked({ menu: true, exit: false })

    }
  }
  return (
    <div className="  h-screen lg:bg-gray-200 md:bg-bg-gray1">
      <nav className='p-5 bg-white shadow h-16 
'>
        <div className=''>
          <img src="1.png" alt="" className='md:mt-[-15px] lg:inline cursor-pointer mt-[-15px] ' />
          <span className='font-bold text-2xl md:ml-[3rem] absolute top-5  ml-[3rem]
          lg:ml-[0.3rem]
          '>
            Tailwind
          </span>
          <button className='text-2xl absolute right-5 top-6 ' onClick={() => {
            handleClick()
          }}>
            {isClicked.menu ? <GiHamburgerMenu className='lg:hidden' /> : <MdOutlineClose className='lg:hidden' />}
          </button>
        </div>
        {isClicked.menu ? " " : <div className='flex flex-col mt-[2rem] h-[12rem] 
       md:bg-white md:h-[16rem] md:w-[100%] md:absolute md:left-0 md:top-[39px] 
       lg:hidden
        '>
          <ul className=' flex flex-col  gap-4 font-medium ml-[2rem] duration-500
          md:ml-[3rem] md:mt-[1rem] md:duration-500 

        '>
            <li><a href="facebook" className='text-xl md:ml-[28px]  hover:text-cyan-500 duration-500 mt-[15px]'>Home</a></li>
            <li><a href="facebook" className='text-xl md:ml-[28px] hover:text-cyan-500 duration-500 '>Link</a></li>
            <li><a href="facebook" className='text-xl md:ml-[28px] hover:text-cyan-500 duration-500 '>About</a></li>
            <li><a href="facebook" className='text-xl md:ml-[28px] hover:text-cyan-500 duration-500 '>Contact</a></li>
          </ul>
          <span>
            <button className='bg-cyan-500  mt-[-15px] p-[5rem] mr-[15px] ml-[2rem] relative top-10 px-6 duration-500 py-6 pt-3 pb-3 hover:bg-cyan-400rounded text-white font-bold
                               md:ml-[4rem]
                               
                               '

            > Get Started </button>
          </span>
        </div>
        }
        <div className='hidden md:hidden  lg:flex'>
          <ul className='
      lg:flex lg:flex-row lg:absolute lg:top-5 lg:right-[30rem] lg:gap-8
   

        '>
            <li><a href="facebook" className='text-xl font-semibold  hover:text-cyan-500 duration-500 ]'>Home</a></li>
            <li><a href="facebook" className='text-xl font-semibold hover:text-cyan-500 duration-500 '>Link</a></li>
            <li><a href="facebook" className='text-xl font-semibold  hover:text-cyan-500 duration-500 '>About</a></li>
            <li><a href="facebook" className='text-xl font-semibold  hover:text-cyan-500 duration-500 '>Contact</a></li>
          </ul>
          <span>
            <button className='bg-cyan-500  duration-500 py-2 pt-3 pb-3 hover:bg-cyan-400 rounded text-white font-bold
            lg:absolute lg:top-2 lg:right-[2rem] lg:rounded lg:px-5 '
            > Get Started </button>
          </span>
        </div>

      </nav>
      <div>

      </div>
    </div>
  );
}

export default App;
