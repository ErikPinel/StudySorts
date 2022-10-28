


import React, { useEffect, useState } from 'react'
import { HeapAlgo } from '../algorithm/HeapSort';
import "./HeapDisplay.css"

export const HeapDisplay = () => {

    const[heapI,setHeapI]=useState(0);
    const[heapLarge,setHeapLarge]=useState(0);
    const[arr,setArr]=useState([]);
    const[mergeStart,setMergeStart]=useState(0);
    const[mergeEnd,setMergeEnd]=useState(0);
let side="start"

  useEffect(() => {
    var startArr=[];
    for(let i=0; i<180;i++)
    {
      let num=randomNum(20,900)
      startArr.push(num)
  
    }
    let temp={};
    setArr(startArr)
    // setArr([5,1,9,2,39,2,3])
    setMergeEnd(arr.length)
  //  for(let i=0;i<startArr.length;i++)
  //  {
    
  // temp[i]=startArr[i]
  //  }
  //  setObj(temp)
   
  }, []);
  
  
  
  useEffect(() => {
  
    setMergeEnd(arr.length)
    // console.log(arr.length)
  
   
  }, [arr]);
  
  function randomNum(min,max)

{
  let randomNum = Math.floor(Math.random() * (max-min+1)+min);
return randomNum
}








  return (
    <div className='heapSort-container'>
        
 {arr.map((e,i)=>((heapI==i||heapLarge==i)? <div className='coulmns' style={{'height':`${arr[i]/2}px`,"backgroundColor":"black"}} key={i} ></div>: <div className='coulmns' style={{'height':`${arr[i]/2}px`}} key={i} ></div>))}




 <button id='heap' onClick={()=>{HeapAlgo(arr,setHeapI,setHeapLarge,setArr,side,randomNum)}}> heap</button>

    </div>
  )
}
