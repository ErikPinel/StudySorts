import React, { useEffect, useState } from 'react'
import { startAlgo } from '../algorithm/MergeSort';
import "./mergePage.css"
export const MergeDisplay = () => {
    const[arr,setArr]=useState([]);
    const[mergeStart,setMergeStart]=useState(0);
    const[mergeEnd,setMergeEnd]=useState(0);
    const[first,setFirst]=useState(0);
    let side="start";
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
    <div className='mergePage-container'>
{arr.map((e,i)=><div className='coulmns' style={{'height':`${arr[i]/2}px`}} key={i} ></div>)}


<button id='merge'  onClick={()=>
    {if(first==0){startAlgo(arr,mergeStart,mergeEnd-1,side,setArr);};setFirst(first+1)}}> merge</button>
<button id='s' onClick={()=>{}}> time</button>

    </div>
  )
}
