import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Home } from './componnets/Home';
import { Add } from './componnets/Add';
import { useRef, useState, useEffect } from "react";

function App() {
  const[arr,setArr]=useState([]);
  const[obj,setObj]=useState({});
  const[min,setMin]=useState();
  const[I,setI]=useState();
  const[minS,setMinS]=useState();
  const[IS,setIS]=useState(0);
  const[stop,setStop]=useState(true);
  let run=false;
  const[cont,setCont]=useState(0);
  const[bblI,setBblI]=useState(0);
  const[bblJ,setBblJ]=useState(0);
  const[insI,setInsI]=useState(0);
  const[insJ,setInsJ]=useState(0);
  const[mergeI,setMergeI]=useState(0);
  const[mergeJ,setMergeJ]=useState(0);
  const[left,setLeft]=useState([]);
  const[rigth,setRight]=useState([]);

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
  for(let i=0; i<100;i++)
  {
    let num=randomNum(5,500)
    startArr.push([num,i])

  }
  let temp={};
  setArr([...startArr])
//  for(let i=0;i<startArr.length;i++)
//  {
  
// temp[i]=startArr[i]
//  }
//  setObj(temp)
 
}, []);







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
          setCont(i)

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
      if(first) {j=bblJ;first=false} 
      setBblI(i)
      setBblJ(j)
      setCont(i)
      setArr([...arr])
      console.log("meow")
      // Checking if the item at present iteration
      // is greater than the next iteration

      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("foo");
        }, 1);
      });  


      await myPromise
      if(arr[j] > arr[j+1]){
         
        // If the condition is true then swap them
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
        setBblI(i)
        setBblJ(j)
      setCont(i)
      setArr([...arr])
            
      if(run)
      return arr
      }



      
      if(run)
          return arr
    }
  }
  // Print the sorted array
  return arr
 }



/////ins


  function insertionSort(arr,insI,insJ) 
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
             
              setTimeout(() => {
              ""
              }, 10);
           
            
      
           
      
         } 
         arr[j + 1] = key; 
         setArr([...arr])
         if(run)
         return arr
     } 
 } 








 /// mergeSort


async function mergeSort(arr)
{
  console.log(arr)
if(arr.length<2)
return;
console.log(arr.length)
let midIndex= Math.floor(arr.length/2)
let leftHalf=[];
let righttHalf=[];

for(let i=0;i<midIndex;i++)
{
leftHalf[i]=arr[i];


}


for(let j=midIndex;j<arr.length;j++)
{
righttHalf[j-midIndex]=arr[j];

}


mergeSort(leftHalf)
mergeSort(righttHalf)
merge(arr,leftHalf,righttHalf)

}



async function merge(arr1,leftHalf,righttHalf)////////////////////////////

{
let temp;
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 100);
  });

  await myPromise

let leftSize=leftHalf.length;
let rightSize=righttHalf.length;

let i=0
let j=0
let k=0;

while(i<leftSize&&j<rightSize)
{

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 250);
  });  
  

  await myPromise



if(leftHalf[i][0]<=righttHalf[j][0])
{
  arr1[k]=leftHalf[i]
 let index=arr.findIndex(e=>e[1]==leftHalf[i][1])

  temp=arr
  temp[index]=leftHalf[i]
  setMergeJ(index)
  setArr([...temp])
  i++
 

}
else{
  arr1[k]=righttHalf[j];
  let index=arr.findIndex(e=>e[1]==righttHalf[j][1])
  setMergeI(index)
  temp=arr
  temp[index]=righttHalf[j]
  setArr([...temp])
  j++



  

}

k++;
}
while(i<leftSize)
{
  arr1[k]=leftHalf[i]
  let index=arr.findIndex(e=>e[1]==leftHalf[i][1])
  setMergeI(index)
  temp=arr
  temp[index]=leftHalf[i]
  setArr([...temp])
  i++;
  k++;

}

while(j<rightSize)
{
  arr1[k]=righttHalf[j]
  let index=arr.findIndex(e=>e[1]==righttHalf[j][1])
  console.log(righttHalf[j][1])
  setMergeJ(index)
  temp=arr
  temp[index]=righttHalf[j]
 setArr([...temp])
  j++;
  k++;

 
}


}







  return (
    <div className="App">
   

 

{arr.map((e,i)=>((bblI==i|| bblJ==i)||(I==i||min==i)||(insI==i||insJ==i)||(mergeI==i||mergeJ==i)? <div className='coulmns' style={{'height':`${arr[i][0]/2}px`,"backgroundColor":"black"}} key={i} ></div>: <div className='coulmns' style={{'height':`${arr[i][0]/2}px`}} key={i} ></div>)
 
  
)}


<button id='stop' onClick={()=>{stop?selectionSort(arr,cont): setStop(true)}}> sort</button>
{/* <button  onClick={()=>{stop?setStop(false): setStop(true)}}> {stop}</button> */}

<button id='bubble' onClick={()=>{stop?bblSort(arr,bblI,bblJ): setStop(true)}}> bbl</button>

<button id='insert' onClick={()=>{stop?insertionSort(arr,bblI,bblJ): setStop(true)}}> bbl</button>

<button id='merge' onClick={()=>{stop?mergeSort(arr): setStop(true)}}> merge</button>



    </div>
  );
}

export default App;
