import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex w-screen'>
      <nav className='bg-indigo-600 p-5 h-screen text-white hover:'>
        <div className=''>
          Daesan
        </div>
        <ul className='flex flex-col justify-between mt-28 h-1/2 bg-slate-700'>
          <li className='m-3'>HOME</li>
          <li className='m-3'>ABOUT</li>
          <li className='m-3'>SKILLS</li>
          <li className='m-3'>WORKS</li>
          <li className='m-3'>CONTACT</li>
        </ul>
      </nav>
      <div className='flex w-5/6 h-1/2'>
        <div className='flex w-full justify-center mt-52'>
          <img  className='rounded-full' src="/doge.jpg" alt="image of a cute dog with a hat and a monocle" />
        </div>
        <div className='flex flex-col w-full justify-center mt-52' >
          <p> HI THERE I'M </p>
          <h1 className='mt-3 mb-3'> DAESAN KIM</h1>
          <p> I'm Daesan I'm cool I like rice lmaooo.  </p>
          <p> I like development and stuff... </p>
        </div>
      </div>
    </div>
  )
}

export default App
