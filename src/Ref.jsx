import React, { useRef } from 'react'

const Ref = () => {
    const ak=useRef()
    const a=useRef()
    const n=()=>{
        ak.current.style.backgroundColor="Red"
    }
    const handleData=()=>{
        a.current.style.color="white"
        a.current.style.backgroundColor="black"
    }
  return (
    <div>
        <input type="text" ref={a} onClick={handleData} placeholder='Enter Value'/>
        <button ref={ak} onClick={n}>Click Me</button>
    </div>
  )
}

export default Ref
