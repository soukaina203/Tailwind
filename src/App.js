import React from 'react'
import Header from './Components/header';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Series from './Components/series';
import Service from './Components/service';

function App() {
  return (
    <div className='flex flex-col lg:h-[230rem] bg-header-black2'>
      <Header />
      <Home />
      <Service />
      <Series />
      <Movies />

    </div>
  )
}

export default App
