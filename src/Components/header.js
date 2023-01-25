import React, { useState } from "react";
import { GiFilmSpool, GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
function Header() {
  const [isClicked, setClicked] = useState({ menu: true, exit: false });
  let handleClick = () => {
    if (isClicked.menu) {
      setClicked({ menu: false, exit: true });
    } else {
      setClicked({ menu: true, exit: false });
    }
  };
  return (
    <div
      className="h-20 z-40 bg-header-hero
        lg:w-[100%]  lg:h-16  text-white  
        lg:fixed 
        "
    >
      <div className="flex lg:flex-row lg:ml-1 hover:cursor-pointer">
        <GiFilmSpool
          className="h-14 w-20 mt-4
                lg:w-[7rem] lg:h-[3rem] lg:ml-[2rem]  text-header-red lg:relative lg:top-[-8px]
                
                "
        />
        <h1 className=" font-bold mt-6 ml-[3px] text-[26px]  lg:text-[34px] lg:ml-[-1rem] lg:mt-[13px]">
          FilmLand
        </h1>
        <button
        

          className="text-2xl absolute right-5 top-6 z-40"
          onClick={() => {
            handleClick();
          }}
        >
          {isClicked.menu ? (
            <GiHamburgerMenu className="lg:hidden" />
          ) : (
            <MdOutlineClose className="lg:hidden " />
          )}
        </button>
        {isClicked.menu ? (
          " "
        ) : (
          <div className="lg:hidden flex flex-col justify-center w-[100%] h-[100vh] md:w-[45%] bg-header-hero z-30 absolute right-0  ">
            <div className="flex flex-row mt-0 absolute top-0">
              <GiFilmSpool
                className="h-12 w-20 mt-16
                lg:w-[7rem] lg:h-[5rem]  text-header-red lg:relative lg:top-4"
              />
              <h1 className="font-bold mt-[4.5rem] ml-[-3px] text-[26px] lg:mt-8 lg:text-[40px] ">
                FilmLand
              </h1>
            </div>
            <ul className="flex flex-col lg:gap-16 ml-4 gap-8 bg-header-hero w-[93%]  mt-[-28rem] font-semibold   ">
              <li className="duration-500 hover:text-header-red"><a href="#HOME">HOME</a>  </li>
              <li className="duration-500 hover:text-header-red"><a href="#SERVICE">SERVICE</a> </li>
              <li className="duration-500 hover:text-header-red"><a href="#MOVIE"> MOVIE </a></li>
              <li className="duration-500 hover:text-header-red"><a href="#SERIES">SERIES</a> </li>
            </ul>

            <button className="absolute top-[27rem] ml-4 lg:right-6 w-[10rem]  h-[3rem] 
                font-bold border-header-red hover:bg-header-red  hover:text-black ">
              WELCOME
            </button>
          </div>
        )}

        <div className="hidden md:hidden  lg:flex  justify-center w-[100%] h-28 items-center font-semibold lg:ml-[9rem] lg:text-[17px]">
          <ul className="flex flex-row gap-16  mt-[-3rem] lg:mr-[18rem]">
          <li className="duration-500 hover:text-header-red"><a href="#HOME">HOME</a>  </li>
              <li className="duration-500 hover:text-header-red"><a href="#SERVICE">SERVICE</a> </li>
              <li className="duration-500 hover:text-header-red"><a href="#SERIES">SERIES</a> </li>
              <li className="duration-500 hover:text-header-red"><a href="#MOVIE"> MOVIE </a></li>
          </ul>
          <button className="laptop:hidden desktop:block lg:text-[17px] lg:mt-[-2.8rem] lg:absolute 
          lg:right-[2rem] lg:w-[8rem] lg:font-bold lg:h-[2.5rem]  hover:text-red-500 duration-500 ">
WELCOME
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
