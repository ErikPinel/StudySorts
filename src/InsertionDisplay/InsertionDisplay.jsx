import React, { useContext, useEffect, useState } from "react";
import { insertionAlgo } from "../algorithm/InsertionSort";
import "./insertionDisplay.css";
import { ColorModeContext, tokens } from "../theme";
import { useTheme } from "@emotion/react";
import { Box, Button } from "@mui/material";
import Prism from "prismjs"
import "../quickDisplay/prism.css"
 import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';


export const InsertionDisplay = () => {
  const theme = useTheme();
  const colors=tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext);
  
  const [insI, setInsI] = useState(0);
  const [insJ, setInsJ] = useState(0);
  const [arr, setArr] = useState([]);
  const [isColor, setIsColor] = useState(0);

  const [isStopBtn, setIsStopBtn] = useState("התחל")
  const [stop, setStop] = useState(true);
  const [mergeStart, setMergeStart] = useState(0);
  const [mergeEnd, setMergeEnd] = useState(0);
 const [isCopied, setIsCopied] = useState(false);
  let run = false;









  useEffect(() => {
    var startArr = [];
    for (let i = 0; i < 180; i++) {
      let num = randomNum(20, 900);
      startArr.push(num);
    }
    let temp = {};
    setArr(startArr);
    // setArr([5,1,9,2,39,2,3])
    setMergeEnd(arr.length);
    //  for(let i=0;i<startArr.length;i++)
    //  {

    // temp[i]=startArr[i]
    //  }
    //  setObj(temp)
  }, []);

  useEffect(() => {
    setMergeEnd(arr.length);
    // console.log(arr.length)
  }, [arr]);
  function randomNum(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum;
  }

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const insertionCode=
 `   function insertionSort(arr) {
   
    let i, current, j;
   
    for (i = 0; i < arr.length; i++) { //רצים כמספר האיברים במערך
    current = arr[i];  //שמירת האיבר הנוכחי לצורך השוואה
      j = i - 1; 

      /*במידה והאיבר הקודם במערך גדול מהנוכחי
       נזיז אותו שמאלה עד אשר יפגוש איבר הקטן ממנו */
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j]; 
        j = j - 1;
      }
      arr[j + 1] = current; 
     
    }
  }

  }`













  return (
    <div className="insertionSort-container">
      <div dir="rtl" className="content-container">
        <div className="header">
          <h1> מיון הכנסה </h1>
          <hr></hr>
          <div>
            <h3 dir="rtl">מה זה מיון הכנסה?</h3>
            <p>
              מיון ההכנסה משווה בין שני משתנים בכל איטרציה, (בהנחה שאנחנו
              ממיינים בסדר עולה) במידה והאיבר במקום ה-i גדול מהאיבר במקום ה-i+1,
              לא מתבצעת פעולה אחרת אנחנו מזיזים את המספר במקום ה- i+1 מיקום אחד
              שמאלה עד שהאיבר יפגוש מספר קטן ממנו.
            </p>
          </div>
          <hr></hr>
          <h1> ישום האלגוריתם ב JavaScript</h1>

<pre 
  onClick={() =>
    {navigator.clipboard.writeText(insertionCode)  ;setIsCopied(true)
      setTimeout(()=>{setIsCopied(false);},1000)
    }
  }
  className="language-javascript pre-insertion"
>
 <Box className="copyIcon-container"> {isCopied?<AssignmentTurnedInIcon />:<ContentCopyIcon className="clipIcon"/>}

 </Box>

  <code>{insertionCode}</code>
</pre>
<br />
<hr />

          <h2>מתי מיון ההכנסה עלול להיות שימושי?</h2>
          <p>
            {" "}
            מיון ההכנסה יעיל כאשר אנחנו מתמודדים עם מערכים קטנים או/ו כאשר אנחנו
            רוצים לסדר מערך שברובו כבר מסודר מראש.
          </p>
          <hr></hr>
          <h2>סיבוכיות מיון ההכנסה</h2>
          <ul>
            <li>
              זמן ריצה הגרוע ביותר שמיון ההכנסה יכול להגיע אליו (הוא קורה במידה
              והמערך נמצא בסדר יורד): O(N^2)
            </li>
            <li>זמן ריצה הממוצע של מיון ההכנסה : O(N^2)</li>
            <li>זמן ריצה הטוב ביותר שמיון ההכנסה יכול להגיע אליו : O(N)</li>
            <li>סיבוכיות מקום של מיון ההכנסה : O(1)</li>
          </ul>
          <hr></hr>
        
        </div>
      </div>




      <Button
      variant="contained"
      color="success"
        id="insert"
        className="insertionBtn"
        onClick={() => {isStopBtn==("התחל")? setIsStopBtn("הפסק"):setIsStopBtn("התחל")
          stop
            ? insertionAlgo(
                arr,
                insI,
                insJ,
                run,
                setArr,
                setStop,
                setInsI,
                setInsJ
              )
            : setStop(true);
        }}
      >
        {" "}
        {isStopBtn}
      </Button>
    
<div className="chart-father-container" >





      <Box backgroundColor={colors.sort} className="chart-container"  >
        {arr.map((e, i) =>
          insI == i || insJ == i ? (
            <div
              className="coulmns"
              style={{ height: `${arr[i] / 2}px`, "borderColor": `green`, backgroundColor: `green` ,"width":"4px" }}
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
  );
};
