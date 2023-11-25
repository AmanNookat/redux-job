import React from 'react'
import gif from '../../assets/7Fmb.gif'

const Loading = () => {
    
  return (
    <div className="min-h-screen flex justify-center items-center bg-transparent">
        <p className="ml-4 text-6xl font-light text-gray-800 uppercase tracking-widest">Redux</p>
        <img src={gif} alt="planet-gif" />
      <p className="ml-4 text-6xl font-light text-gray-800 uppercase tracking-widest">job</p>
    </div>
    
  )
}

export default Loading