import React from 'react'
import { useState } from 'react'

export const Add = () => {
    const[title,setTitle]=useState("")
    const[author,setAuthor]=useState("")
    const[image,setImail]=useState("")
    const[bookQuantity,setBookQuantity]=useState("")
    const[price,setPrice]=useState("")




  return (
    <div>
<form action="">
<label> book name</label>
<input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />

<label>author</label>
<input type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}} />

<label>image</label>
<input type="text" value={image} onChange={(e)=>{setImail(e.target.value)}} />

<label>bookQuantity</label>
<input type="text" value={bookQuantity} onChange={(e)=>{setBookQuantity(e.target.value)}} />

<label> book name</label>
<input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} />

</form>

    </div>
  )
}
