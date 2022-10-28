import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Home } from './componnets/Home';
import { Add } from './componnets/Add';
import { useRef, useState, useEffect } from "react";
import {startAlgo} from "./algorithm/MergeSort"
import { HeapDisplay } from './HeapDisplay/HeapDisplay';
import { QuickDisplay } from './quickDisplay/QuickDisplay';
import { MergeDisplay } from './mergeDisplay/MergeDisplay';
let side="start";
function App() {
  const[arr,setArr]=useState([]);
  const[min,setMin]=useState();
  const[I,setI]=useState();
 
  const[stop,setStop]=useState(true);
  let run=false;
  const[cont,setCont]=useState(0);
  const[bblI,setBblI]=useState(0);
  const[bblJ,setBblJ]=useState(0);
  const[insI,setInsI]=useState(0);
  const[insJ,setInsJ]=useState(0);
  const[mergeStart,setMergeStart]=useState(0);
  const[mergeEnd,setMergeEnd]=useState(0);
  const[first,setFirst]=useState(0);
  const[quickI,setQuickI]=useState(0);
  const[quickJ,setQuickJ]=useState(0);
  const[heapI,setHeapI]=useState(0);
  const[heapLarge,setHeapLarge]=useState(0);

// const boxRef = useRef();

// // X
// const [x, setX] = useState();

// // Y
// const [y, setY] = useState();

// // This function calculate X and Y
// const getPosition = () => {
//   const x = boxRef.current.offsetLeft;
//   setX(x);

//   const y = boxRef.current.offsetTop;
//   setY(y);

// };

// // Get the position of the red box in the beginning
// useEffect(() => {
//   getPosition();
//   setTimeout(()=>{ if(y>600) setPos(600);else if(y== 600) setPos(pos); else  setPos(pos+9.8)  },100)

// }, [pos]);

// // Re-calculate X and Y of the red box when the window is resized by the user
// useEffect(() => {
//   window.addEventListener("resize", getPosition);
// }, []);
// onClick={()=>{setPos(pos-100);console.log(y)}}   ref={boxRef}   style={{"marginTop":`${pos}px`}}


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




// useEffect(() => {

  
 
// // console.log("useEffectEnd"+mergeEnd)
 
// }, [mergeEnd]);



function randomNum(min,max)

{
  let randomNum = Math.floor(Math.random() * (max-min+1)+min);
return randomNum
}


 async function selectionSort(inputArr,cont1) { 
  let n = inputArr.length;
  setStop(false)
      console.log("****"+cont1)
  const element = document.getElementById("stop");
  element.addEventListener("click", ()=>run?run=false:run=true);

  for( let i =cont1; i < n; i++) {
      // Finding the smallest number in the subarray
      let is;
      let min = i;

      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("foo");
        }, 65);
      });  
      

      await myPromise


      for(let j = i+1; j < n; j++){
        console.log("meow")
        setCont(i)
    
          if(inputArr[j] < inputArr[min]) {
            min=j; 
            setI(i)
          setMin(min)
          setCont(i)
          if(run)
          return inputArr


          }
          setMin(min)
          setI(i)

          setCont(i)

      

          
       }
      

      

      
       if (min != i) {
           // Swapping the elements
          
           let tmp = inputArr[i]; 
           inputArr[i] = inputArr[min];
           inputArr[min] = tmp;      
           setI(i)
           setMin(min)
           setCont(i)
           setArr([...inputArr])
       

      }
      setCont(i)
      if(run)
          return inputArr

   
    
    
       
  }
  
  return inputArr;
}





async function bblSort(arr,bblI,bblJ){
  setStop(false)
  const element = document.getElementById("bubble");
  element.addEventListener("click", ()=>run?run=false:run=true);
let first=true;

  for(var i = bblI; i < arr.length; i++){

    if(run)
    return arr
    // Last i elements are already in place 
    for(var j = 0; j < ( arr.length - i -1 ); j++){
      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("foo");
        }, 1);
      });  
  
  
      await myPromise


      if(first) {j=bblJ;first=false} 
      setBblI(i)
      setBblJ(j)
     
      setArr([...arr])
      console.log("meow")
      // Checking if the item at present iteration
      // is greater than the next iteration

     
      if(arr[j] > arr[j+1]){
         
        // If the condition is true then swap them
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
        setBblI(i)
        setBblJ(j)
     
      setArr([...arr])
            
      if(run)
      return arr
      }



      
      
    }
  }
  // Print the sorted array
  return arr
 }



/////ins


  async function insertionSort(arr,insI,insJ) 
 { 

  setStop(false)
  const element = document.getElementById("insert");
  element.addEventListener("click", ()=>run?run=false:run=true);
     let i, key, j; 
     for (i = insI; i < arr.length; i++)
     { 
         key = arr[i]; 
         j = i - 1; 
         setInsJ(j)
         setInsI(i)
         if(run)
         return arr
         /* Move elements of arr[0..i-1], that are 
         greater than key, to one position ahead 
         of their current position */
         while (j >= 0 && arr[j] > key)
         { 
             arr[j + 1] = arr[j]; 
             j = j - 1; 
             setInsJ(j)
            setInsI(i)
             setArr([...arr])
             if(run)
             return arr
             
             const myPromise = new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve("foo");
              }, 1);
            });  
      
      
            await myPromise
           
            
      
           
      
         } 
         arr[j + 1] = key; 
         setArr([...arr])
         if(run)
         return arr
     } 
 } 










//  function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   setQuickJ(j)
//   setQuickI(i)
//   setArr([...arr])
// console.log(side)
// return   new Promise((resolve, reject) => {
//   setTimeout(() => {
//   resolve("foo");

// }, 15);
//     })



// }

// /* This function takes last element as pivot, places
//  the pivot element at its correct position in sorted
//  array, and places all smaller (smaller than pivot)
//  to left of pivot and all greater elements to right
//  of pivot */
// async function partition(arr, low, high) {

//   // pivot
//   let pivot = arr[high];

//   // Index of smaller element and
//   // indicates the right position
//   // of pivot found so far
//   let i = (low - 1);

//   for (let j = low; j <= high - 1; j++) {

//       // If current element is smaller 
//       // than the pivot
//       if (arr[j] < pivot) {

//           // Increment index of 
//           // smaller element
//           i++;
//          await swap(arr, i, j);
//       }
//   }
//  await swap(arr, i + 1, high);

//   return (i + 1);
// }

// /* The main function that implements QuickSort
//         arr[] --> Array to be sorted,
//         low --> Starting index,
//         high --> Ending index
// */
// async function quickSort(arr, low, high) {
//   if (low < high) {

//       // pi is partitioning index, arr[p]
//       // is now at right place 
      
//       let pi = await partition(arr, low, high);
// console.log("....... low :"+low+" high: "+high+" pi: "+pi)
//       // Separately sort elements before
//       // partition and after partition
//       side="left"
//       await quickSort(arr, low, pi - 1);
//       side="right"

//       await  quickSort(arr, pi + 1, high);
//   }
// }













////////////////////////////////////////////////////////////////////////////////////////heap sort








 




  return (
    <div className="App">
   

{/*  

{arr.map((e,i)=>((bblI==i|| bblJ==i)||(I==i||min==i)||(insI==i||insJ==i)||(quickI==i||quickJ==i)||(heapI==i||heapLarge==i)? <div className='coulmns' style={{'height':`${arr[i]/2}px`,"backgroundColor":"black"}} key={i} ></div>: <div className='coulmns' style={{'height':`${arr[i]/2}px`}} key={i} ></div>)
 
  
)}


<button id='stop' onClick={()=>{stop?selectionSort(arr,cont): setStop(true)}}> sort</button>
{/* <button  onClick={()=>{stop?setStop(false): setStop(true)}}> {stop}</button> 

<button id='bubble' onClick={()=>{stop?bblSort(arr,bblI,bblJ): setStop(true)}}> bbl</button>

<button id='insert' onClick={()=>{stop?insertionSort(arr,bblI,bblJ): setStop(true)}}> insertion</button>

<button id='merge'  onClick={()=>{if(first==0){startAlgo(arr,mergeStart,mergeEnd-1,side,setArr);};setFirst(first+1)}}> merge</button>

<button id='s' onClick={()=>{}}> time</button>

<button id='quick' onClick={()=>{quickSort(arr, 0, arr.length-1);}}> quick</button>
<button id='heap' onClick={()=>{Heapsort(arr)}}> heap</button> */}


<Routes>

<Route path='/heapSort' element={<HeapDisplay/>}></Route>
<Route path='/quickSort' element={<QuickDisplay/>}></Route>
<Route path='/mergeSort' element={<MergeDisplay/>}></Route>
<Route path='/' element={<HeapDisplay/>}></Route>
<Route path='/' element={<HeapDisplay/>}></Route>
</Routes>



    </div>
  );
}

export default App;
