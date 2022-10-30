import React, { useContext, useEffect, useState } from 'react'
import { selectionAlgo } from '../algorithm/SeclectionSort';
import { tokens, ColorModeContext } from "../theme";

import Prism from "prismjs";
import "../quickDisplay/prism.css";
import "./SelectionDisplay.css"
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Box, Button } from "@mui/material";
import { useTheme } from '@emotion/react';
import gif from '../Quicksort-example.gif'





export const SelectionDisplay = () => {

    const[arr,setArr]=useState([]);
    const[min,setMin]=useState();
    const[I,setI]=useState(0);
    const[stop,setStop]=useState(true);
    const[mergeStart,setMergeStart]=useState(0);
    const[mergeEnd,setMergeEnd]=useState(0);

    let run=false;

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
      
      
      useEffect(() => {
        Prism.highlightAll();
      }, []);
    
      const BubbleCode = `   function selectionSort2(arr) {
        for (let i = 0; i < arr.length; i++) {
          // ריצה כמספר האיברים הנמצאים במערך
          let min = i; //שמירת  מיקום האיבר הקטן ביותר
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
              //במידה והאיבר הנוכחי קטן יותר
              //מהאיבר הקטן ביותר שראינו עד כה
              //נעדכן את מיקומו של האיבר הקטן ביותר
              min = j;
            }
          }
          if (min != i) {
            // במידה והיה שינוי בהצבעה על האיבר הקטן ביותר
            //נדחוף לסוף המערך המשני את הערך הקטן ביותר
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
          }
        }
      }`;



        //   {arr.map((e,i)=>((I==i||min==i)? <div className='coulmns' style={{'height':`${arr[i]/2}px`,"backgroundColor":"black"}} key={i} ></div>: <div className='coulmns' style={{'height':`${arr[i]/2}px`}} key={i} ></div>))}

        //   <button id='stop' onClick={()=>{stop?selectionAlgo(arr,setI,I,setMin,setArr,setStop,run): setStop(true)}}> sort</button>
  

  return (
    <div className='selectionSort-container'>


<div dir="rtl" className="content-container">
        <div className="header">
          <h1> מיון הבחירה </h1>
          <hr></hr>
          <div>
            <h3 dir="rtl">מה זה מיון הבחירה?</h3>
            <p>
            מיון הבחירה הוא מיון יחסית פשוט, הפועל כך שהוא מוצא את האיבר הקטן ביותר 
            <br></br>
          ודוחף אותו לסוף "המערך המשני" שנוצר בזמן ריצת האלגוריתם. (בהנחה שהמיון הוא בסדר עולה)
            </p>
            <img className='main-sec' src={gif}></img> 
          </div>
          <hr></hr>
          <h1> ישום האלגוריתם ב JavaScript</h1>

          <pre
            onClick={() => {
              navigator.clipboard.writeText(BubbleCode);
              setIsCopied(true);
                setTimeout(()=>{setIsCopied(false);},1000)
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

            <code dir="rtl">{BubbleCode}</code>
          </pre>
          <br />
          <hr />

          <h2>מתי מיון הבחירה עלול להיות שימושי?</h2>
          <p>
            
            מיון הבחירה יעיל כאשר אנחנו מתמודדים עם מערכים קטנים .
          </p>
          <hr></hr>
          <h2>סיבוכיות מיון הבחירה</h2>
          <ul>
            <li>
              זמן ריצה הגרוע ביותר שמיון הבחירה יכול להגיע אליו (הוא קורה במידה
              והמערך ממויין והמספר הקטן ביותר הנמצא במקום האחרון): O(N^2)
            </li>
            <li>זמן ריצה הממוצע של מיון הבחירה : O(N^2)</li>
            <li>זמן ריצה הטוב ביותר שמיון הבחירה יכול להגיע אליו : O(N^2)</li>
            <li>סיבוכיות מקום של מיון הבחירה : O(1)</li>
          </ul>
          <hr></hr>
        </div>
      </div>

      <Button
        variant="contained"
        color="success"
        id="stop"
        className="insertionBtn"
        onClick={() => {
          isStopBtn == "התחל" ? setIsStopBtn("הפסק") : setIsStopBtn("התחל");
          stop?selectionAlgo(arr,setI,I,setMin,setArr,setStop,run): setStop(true);
        }}
      >
        {" "}
        {isStopBtn}
      </Button>

      <div className="chart-father-container">
        <Box backgroundColor={colors.sort} className="chart-container">
          {arr.map((e, i) =>
            (I==i||min==i) ? (
              <div
                className="coulmns"
                style={{
                  height: `${arr[i] / 2}px`,
                  borderColor: `green`,
                  backgroundColor: `green`,
                  width: "4px",
                }}
                key={i}
              ></div>
            ) : (
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




