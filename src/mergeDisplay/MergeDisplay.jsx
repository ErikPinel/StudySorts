import React, { useContext, useEffect, useState } from 'react'
import { startAlgo } from '../algorithm/MergeSort';
import "./mergePage.css"


import { tokens, ColorModeContext } from "../theme";

import Prism from "prismjs";
import "../quickDisplay/prism.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Box, Button } from "@mui/material";
import { useTheme } from '@emotion/react';






export const MergeDisplay = () => {
    const[arr,setArr]=useState([]);
    const[mergeStart,setMergeStart]=useState(0);
    const[mergeEnd,setMergeEnd]=useState(0);
    const[first,setFirst]=useState(0);
    let side="start";



    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [isCopied, setIsCopied] = useState(false);
    const [isStopBtn, setIsStopBtn] = useState("התחל");






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


  
useEffect(() => {
  Prism.highlightAll();
}, []);

const mergeCode1 = `   function merge(arr, l, m, r) {
  let range1 = m - l + 1;//התחלה -אמצע
  let range2 = r - m;//אמצע-סוף

  // אתחול מערך ימין ושמאל
  let L = [];
  let R = [];

  // הכנסת איברים למערכים החדשים
  for (let i = 0; i < range1; i++) L[i] = arr[l + i];
  for (let j = 0; j < range2; j++) R[j] = arr[m + 1 + j];

  // Merge the temp arrays back into arr[l..r]

  // מיקום התחלתי של המערך הראשון
  let i = 0;

  // מיקום התחלתי של המערך השני

  let j = 0;

  // מיקום התחלתי של המערך הממוזג
  let k = l;

  //ריצה על המערכים המשניים 
  while (i < range1 && j < range2) {
    if (L[i] <= R[j]) {//
      arr[k] = L[i]; //הכנסה של האיבר הקטן למערך הממוזג
      i++; //נסתכל בהשוואה הבאה על האיבר הבא במערך המשני
    } else {
      arr[k] = R[j]; //הכנסה של האיבר הקטן למערך הממוזג
      j++; //נסתכל בהשוואה הבאה על האיבר הבא במערך המשני
    }
    k++;//לאחר שדחפנו איבר במקום הנוכחי נרצה לדחוף למקום הבא
  }

//במידה ונשארו איברים במערך הראשון נדחוף אותם למערך ההמוזג
  while (i < range1) {
    arr[k] = L[i];
    i++;
    k++;
   
  }

//במידה ונשארו איברים במערך הראשון נדחוף אותם למערך ההמוזג
  while (j < range2) {
    arr[k] = R[j];
    j++;
    k++;
   
  }


}
`;

const mergeCode2= `function mergeSort(arr, l, r, side) {

  //תנאי עצירה רקורסיבי במידה והטווחים נפגשים
    if (l >= r) 
      return;
    
  
    let m = l + Math.floor((r - l) / 2);//חישוב נקודת אמצע
  
    mergeSort(arr, l, m, side);//ריצה רקורסיבית על "הצד" הראשון
  
    mergeSort(arr, m + 1, r, side);//ריצה רקורסיבית על "הצד" השני
  
  
    merge(arr, l, m, r);//קריאה לפונקצית 
  }`;






// {arr.map((e,i)=><div className='coulmns' style={{'height':`${arr[i]/2}px`}} key={i} ></div>)}


{/* <button id='merge'  onClick={()=>
    {if(first==0){startAlgo(arr,mergeStart,mergeEnd-1,side,setArr);};setFirst(first+1)}}> merge</button>
<button id='s' onClick={()=>{}}> time</button>
 */}


  return (
    <div className='mergePage-container'>

<div dir="rtl" className="content-container">
        <div className="header">
          <h1> מיון המיזוג </h1>
          <hr></hr>
          <div>
            <h3 dir="rtl">מה זה מיון המיזוג?</h3>
            <p>
            מיון המיזוג הוא אלגוריתם רקורסיבי אשר עובד לפי עקרון "הפרד ומשול",<br></br>
             הוא פועל בכך שהוא מפרק את המערך לחצאים, עד שהוא נתקל במערך בעל איבר אחד.<br></br>
              לאחר מכן מתחיל שלב המיזוג בין שני החצאים שנוצרו עד למיזוג האחרון אשר יוצר את המערך השלם כאשר הוא ממויין.
            <br></br>
          ודוחף אותו לסוף "המערך המשני" שנוצר בזמן ריצת האלגוריתם. (בהנחה שהמיון הוא בסדר עולה)
            </p>
          </div>
          <hr></hr>
          <h1> ישום האלגוריתם ב JavaScript</h1>

          <pre
           style={{"marginBottom":"75px"}}
            onClick={() => {
              navigator.clipboard.writeText(mergeCode1);
              setIsCopied(true);
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
              setIsCopied(true);
            }}
            className="language-javascript pre-insertion"
          >
            <Box className="copyIcon-container">
              {" "}
              {isCopied ? (
                <AssignmentTurnedInIcon />
              ) : (
                <ContentCopyIcon className="clipIcon" />
              )}
            </Box>

            <code dir="rtl">{mergeCode2}</code>
          </pre>



          <br />
          <hr />

          <h2>מתי מיון המיזוג עלול להיות שימושי?</h2>
          <p>
            
            מיון המיזוג יעיל כאשר אנחנו מתמודדים עם מערכים גדולים וכאשר הם ברובם לא ממויינים .
          </p>
          <hr></hr>
          <h2>סיבוכיות מיון המיזוג</h2>
          <ul>
            <li>
              זמן ריצה הגרוע ביותר שמיון המיזוג יכול להגיע אליו : O((N log N)
            </li>
            <li>זמן ריצה הממוצע של מיון המיזוג : O(N log N)</li>
            <li>זמן ריצה הטוב ביותר שמיון המיזוג יכול להגיע אליו : O((N log N)</li>
            <li>סיבוכיות מקום של מיון המיזוג : O(N)</li>
          </ul>
          <hr></hr>
        </div>
      </div>

      {isStopBtn=="הפסק"?
      
      <Button
      variant="contained"
      color="success"
      id="merge"
      className="insertionBtn"
       disabled
      
      onClick={() => {
        isStopBtn == "התחל" ? setIsStopBtn("הפסק") : setIsStopBtn("התחל");
        if(first==0){startAlgo(arr,mergeStart,mergeEnd-1,side,setArr);};setFirst(first+1)}}
    >
      
      {"התחל"}
    </Button>
      
      :  <Button
      variant="contained"
      color="success"
      id="merge"
      className="insertionBtn"
     
      
      onClick={() => {
        isStopBtn == "התחל" ? setIsStopBtn("הפסק") : setIsStopBtn("התחל");
        if(first==0){startAlgo(arr,mergeStart,mergeEnd-1,side,setArr);};setFirst(first+1)}}
    >
      
      {"התחל"}
    </Button>}


    
      <Button id='s'  variant="contained" className="insertionBtn"
        color="success"  onClick={()=>{isStopBtn == "התחל" ? setIsStopBtn("הפסק") : setIsStopBtn("התחל")}}> הפסק</Button>
      <div className="chart-father-container">
        <Box backgroundColor={colors.sort} className="chart-container">
          {arr.map((e, i) =>
           (
              <div
                className="coulmns"
                style={{
                  height: `${arr[i] / 2}px`,
                  borderColor: `${colors.primary[900]}`,
                }}
                key={i}
              ></div>
            )
          )}
        </Box>
     

      </div>






    </div>
  )
}
