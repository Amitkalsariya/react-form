
import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [data,setData]=useState("amit")
    const a=useMemo(()=>{
        return data   
    })
  return (
    <div>
      <h1>{data}</h1>
      <h1>{a}</h1>
      
    </div>
  )
}

export default Memo
