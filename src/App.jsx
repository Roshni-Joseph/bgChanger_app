import { useState } from 'react'
import './App.css'

function App() {
  const [colour,setColour] = useState('gray');
  return (
    <div className='h-screen w-full flex justify-center items-center' style={{backgroundColor:colour}}>
    <div className=' bg-slate-300 rounded-full flex items-center mt-72'>
    <div className='justify-center flex p-6 '>
      <button onClick={() => setColour('red')} className=' bg-red-700 rounded-full p-2 w-20'>red</button>
      <button onClick={() => setColour('green')} className='bg-green-600 rounded-full p-2 w-20'>green</button>
    </div>
  </div>
</div>
  )
}

export default App
