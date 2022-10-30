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
import { SelectionDisplay } from './SelectionDisplay/SelectionDisplay';
import { BubbleDisplay } from './BubbleDisplay/BubbleDisplay';
import { InsertionDisplay } from './InsertionDisplay/InsertionDisplay';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import Topbar from './Topbar';
let side="start";
function App() {
  const[arr,setArr]=useState([]);

 
  const[stop,setStop]=useState(true);
  
  const[cont,setCont]=useState(0);
  
  
  const[mergeStart,setMergeStart]=useState(0);
  const[mergeEnd,setMergeEnd]=useState(0);
 
  let run=false;

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);





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


 







/////ins


 









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


{/* <button  onClick={()=>{stop?setStop(false): setStop(true)}}> {stop}</button> 



<button id='merge'  onClick={()=>{if(first==0){startAlgo(arr,mergeStart,mergeEnd-1,side,setArr);};setFirst(first+1)}}> merge</button>

<button id='s' onClick={()=>{}}> time</button>

<button id='quick' onClick={()=>{quickSort(arr, 0, arr.length-1);}}> quick</button>
<button id='heap' onClick={()=>{Heapsort(arr)}}> heap</button> */}

   

  
<ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
<Route path='/heapSort' element={<HeapDisplay/>}></Route>
<Route path='/quickSort' element={<QuickDisplay/>}></Route>
<Route path='/mergeSort' element={<MergeDisplay/>}></Route>
<Route path='/selectionSort' element={<SelectionDisplay/>}></Route>
<Route path='/bubbleSort' element={<BubbleDisplay/>}></Route>
<Route path='/insertionSort' element={<InsertionDisplay/>}></Route>
</Routes>

</main>
      </ThemeProvider >
      </ColorModeContext.Provider >
        
       
          

    </div>
  );
}

export default App;
