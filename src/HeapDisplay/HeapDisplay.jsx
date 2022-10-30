


import React, { useContext, useEffect, useState } from 'react'
import { HeapAlgo } from '../algorithm/HeapSort';
import "./HeapDisplay.css"

import { tokens, ColorModeContext } from "../theme";
import Prism from "prismjs";
import "../quickDisplay/prism.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Box, Button } from "@mui/material";
import { useTheme } from '@emotion/react';





export const HeapDisplay = () => {

    const[heapI,setHeapI]=useState(0);
    const[heapLarge,setHeapLarge]=useState(0);
    const[arr,setArr]=useState([]);
    const[mergeStart,setMergeStart]=useState(0);
    const[mergeEnd,setMergeEnd]=useState(0);
    let side="start"
    const[first,setFirst]=useState(0);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [isCopied, setIsCopied] = useState(false);
    const [isCopied2, setIsCopied2] = useState(false);
    const [isStopBtn, setIsStopBtn] = useState("התחל");
    const [reset, setReset] = useState(true);




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
   
  }, [reset]);
  
  
  
  useEffect(() => {
  
    setMergeEnd(arr.length)
    // console.log(arr.length)
  
   
  }, [arr]);
  
  function randomNum(min,max)

{
  let randomNum = Math.floor(Math.random() * (max-min+1)+min);
return randomNum
}



useEffect(() => {
    Prism.highlightAll();
  }, []);
  
  const mergeCode1 = `    function Heapsort(arr) {

    // נוסחה לסידור הערימה
    // iParent = Math.floor(N / 2) - 1
    // iLeftChild= 2*i + 1
    // iRightChild= 2*i + 2

    var N = arr.length;
    for (
      var i = Math.floor(N / 2) - 1;  i >= 0;i--) // סידור של המערך - בניית הערימה
    { 
      heapify1(arr, N, i);
    }

    // הוצאת איבר מקסימלי בכל איטרציה
    for (var i = N - 1; i > 0; i--) {
      // נדחוף את איבר האב לסוף
      var temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      // ניצור ערימה חדשה ללא איבר האב
      heapify1(arr, i, 0);
    }
  }

  `;
  
  const mergeCode2= `function heapify(arr, N, i) {
    var largest = i; // נאתחל את האיבר הגדול ביותר באיבר האב

    var l = 2 * i + 1; // left = 2*i + 1//נוסחה למציאת בן שמאלי
    var r = 2 * i + 2; // right = 2*i + 2/נוסחה למציאת בן ימני

    // נבדוק האם הבן השמאלי גדול מהאיבר הגדול ביותר שראינוד עד כה
    if (l < N && arr[l] > arr[largest]) {
      largest = l; // largest=3-5
    }

    // נבדוק האם הבן הימני גדול מהאיבר הגדול ביותר שראינוד עד כה
    if (r < N && arr[r] > arr[largest]) {
      largest = r; // largest=2-5
    }

    // במידה והאב הוא לא האיבר הגדול
    if (largest != i) {
      var swap = arr[i]; //
      arr[i] = arr[largest]; // כעת האב הוא האיבר הגדול ביותר
      arr[largest] = swap;

      // נקרא באופן רקורסיבי לפונקציה עם האב החדש
      heapify1(arr, N, largest);
    }
  }`;
  



    // {arr.map((e,i)=>((heapI==i||heapLarge==i)? <div className='coulmns' style={{'height':`${arr[i]/2}px`,"backgroundColor":"black"}} key={i} ></div>: <div className='coulmns' style={{'height':`${arr[i]/2}px`}} key={i} ></div>))}

    // <button id='heap' onClick={()=>{HeapAlgo(arr,setHeapI,setHeapLarge,setArr,side,randomNum)}}> heap</button>

function resetChart()
{


}


  return (
    <div className='heapSort-container'>
        
        <div dir="rtl" className="content-container">
        <div className="header">
          <h1> מיון הערימה </h1>
          <hr></hr>
          <div>
            <h3 dir="rtl">מה זה מיון הערימה?</h3>
            <p>
            מיון הערימה הוא מיון המבוסס על "ערימה בינארית", דבר אשר מאפשר למצוא את האיבר הגדול במערך המאורגן כערימה בבמהירות של  O(log(n), האלגוריתם עובד כך שהמערך מאורגן מחדש בכל פעם עם איבר האב בשורש   (i=0) והוא האיבר הגדול ביותר בתת ערימה. לאחר מציאת האיבר הגדול והכנסת האיבר לשורש אנו מאתחלים את השורש באיבר האחרון בתת מערך (הבן השמאל קיצון בתת ערימה). ולאחר מכן מוחקים את איבר האב הקודם שמצאנו מהתת ערימה ודוחפים אותו לחלק הממוין של המערך.
            <br></br>
         
            </p>
          </div>
          <hr></hr>
          <h1> ישום האלגוריתם ב JavaScript</h1>

          <pre
           style={{"marginBottom":"75px"}}
            onClick={() => {
              navigator.clipboard.writeText(mergeCode1);
              setIsCopied(true);
              setTimeout(()=>{setIsCopied(false);},1000)
            }}
            className="language-javascript pre-insertion"
          >
            <Box className="copyIcon-container" >
              
              {isCopied ? (
                <AssignmentTurnedInIcon />
              ) : (
                <ContentCopyIcon className="clipIcon" />
              )}
            </Box>

            <code dir="rtl">{mergeCode1}</code>
          </pre>

          <pre
         
            onClick={() => {
              navigator.clipboard.writeText(mergeCode2);
              setIsCopied2(true);
              setTimeout(()=>{setIsCopied2(false);},1000)
            }}
            className="language-javascript pre-insertion"
          >
            <Box className="copyIcon-container">
              {" "}
              {isCopied2 ? (
                <AssignmentTurnedInIcon />
              ) : (
                <ContentCopyIcon className="clipIcon" />
              )}
            </Box>

            <code dir="rtl">{mergeCode2}</code>
          </pre>



          <br />
          <hr />

          <h2>מתי מיון הערימה עלול להיות שימושי?</h2>
          <p>
            מיון הערימה שימושי כאשר אנחנו מעוניינים לצמצם בזיכרון ובעיקר למציאת ערכי קיצון או כאשר יש לנו נתונים אשר מסודרים כערימה מראש.
          </p>
          <hr></hr>
          <h2>סיבוכיות מיון הערימה</h2>
          <ul>
            <li>
             זמן ריצה הגרוע ביותר שמיון הערימה יכול להגיע אליו : O(n*log(n)) 
            </li>
            <li>זמן ריצה הממוצע של מיון הערימה : O(n*log(n))</li>
            <li>זמן ריצה הטוב ביותר שמיון הערימה יכול להגיע אליו : O(n*log(n))</li>
            <li>סיבוכיות מקום של מיון הערימה : O(1)</li>
          </ul>
          <hr></hr>
        </div>
      </div>

      {isStopBtn=="הפסק"?
      
      <Button
      variant="contained"
      color="success"
      id="heap"
      className="insertionBtn"
       disabled
      
      onClick={() => {
        isStopBtn == "התחל" ? setIsStopBtn("הפסק") : setIsStopBtn("התחל");
        if(first==0){HeapAlgo(arr,setHeapI,setHeapLarge,setArr,side,randomNum)};setFirst(first+1)}}
    >
      
      {"התחל"}
    </Button>
      
      :  <Button
      variant="contained"
      color="success"
      id="heap"
      className="insertionBtn"
     
      
      onClick={() => {
        isStopBtn == "התחל" ? setIsStopBtn("הפסק") : setIsStopBtn("התחל");
        if(first==0){HeapAlgo(arr,setHeapI,setHeapLarge,setArr,side,randomNum)};setFirst(first+1)}}
    >
      
      {"התחל"}
    </Button>}


    
      <Button id='hs'  variant="contained" className="insertionBtn"
        color="success"  onClick={()=>{isStopBtn == "התחל" ? setIsStopBtn("הפסק") : setIsStopBtn("התחל")}}> הפסק</Button>

{/* <Button   variant="contained" className="insertionBtn"
        color="success"  onClick={()=>{}}> התחל מחדש</Button> */}


      <div className="chart-father-container">
       
       
      <Box backgroundColor={colors.sort} className="chart-container"  >
        {arr.map((e, i) =>
        (heapI==i||heapLarge==i) ? (
            <div
              className="coulmns"
              style={{ height: `${arr[i] / 2}px`, "borderColor": `green`, backgroundColor: `white` ,"tansform":"scale3d(2, 2, 2)" }}
              key={i}
            ></div>
          ) : (
            <div
              className="coulmns"
              style={{ height: `${arr[i] / 2}px`, "borderColor": `${colors.primary[900]}`  }}
              key={i}
            ></div>
          )
        )}
      </Box>
      </div>



    </div>
  )
}
