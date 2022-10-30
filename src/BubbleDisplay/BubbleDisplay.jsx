import { useTheme } from "@emotion/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { bubbleAlgo } from "../algorithm/BubleSort";
import { tokens, ColorModeContext } from "../theme";
import "./BubbleDisplay.css";
import Prism from "prismjs";
import "../quickDisplay/prism.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Box, Button } from "@mui/material";

export const BubbleDisplay = () => {
  const [bblI, setBblI] = useState(0);
  const [bblJ, setBblJ] = useState(0);
  const [arr, setArr] = useState([]);
  const [stop, setStop] = useState(true);
  const [mergeStart, setMergeStart] = useState(0);
  const [mergeEnd, setMergeEnd] = useState(0);
  let run = false;
  const ref = useRef(null);
  const element = ref.current;

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [isCopied, setIsCopied] = useState(false);
  const [isStopBtn, setIsStopBtn] = useState("התחל");

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

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const BubbleCode = `     function bubbleSort(arr){
    //לולאה חיצונית אשר רצה כמספר האיברים במערך 
        for(let i = 0; i < arr.length; i++){
         
          //  נמצא במקומו עם סיום הלולאה הפנימית i - האיבר במקום ה    
         //  לכן אין צורך לרוץ עליו באיטרציה הבאה
          for(let j = 0; j < ( arr.length -i -1 ); j++){
            // במידה והאיבר במקום הנוכחי גדול מהאיבר הבא אחריו,נחליף ביניהם
            //אחרת נמשיך לאיבר הבא
            if(arr[j] > arr[j+1]){
              let temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j+1] = temp
           
            }
          }
        }
      }`;

  function randomNum(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum;
  }









  return (
    <div className="bubbleSort-container">
      <div dir="rtl" className="content-container">
        <div className="header">
          <h1> מיון הבועות </h1>
          <hr></hr>
          <div>
            <h3 dir="rtl">מה זה מיון הבועות?</h3>
            <p>
           מיון הבועות הוא אחד מאלגוריתמי המיון המוכרים והנפוצים ביותר  (בעיקר לצורכי לימוד) , 
             <br></br> הוא פועל כך שהוא משוואה בין שני מספרים 
              וכך כל פעם "מבעבע" איבר ימינה במערך (בהנחה שממיינים בסדר עולה).
            </p>
          </div>
          <hr></hr>
          <h1> ישום האלגוריתם ב JavaScript</h1>

          <pre
            onClick={() => {
              navigator.clipboard.writeText(BubbleCode);
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

            <code dir="rtl">{BubbleCode}</code>
          </pre>
          <br />
          <hr />

          <h2>מתי מיון הבועות עלול להיות שימושי?</h2>
          <p>
            {" "}
            מיון הבועות יעיל כאשר אנחנו מתמודדים עם מערכים קטנים או/ו כאשר אנחנו
            רוצים לסדר מערך שברובו כבר מסודר מראש.
          </p>
          <hr></hr>
          <h2>סיבוכיות מיון הבועות</h2>
          <ul>
            <li>
              זמן ריצה הגרוע ביותר שמיון הבועות יכול להגיע אליו (הוא קורה במידה
              והמערך נמצא בסדר יורד): O(N^2)
            </li>
            <li>זמן ריצה הממוצע של מיון הבועות : O(N^2)</li>
            <li>זמן ריצה הטוב ביותר שמיון הבועות יכול להגיע אליו : O(N)</li>
            <li>סיבוכיות מקום של מיון הבועות : O(1)</li>
          </ul>
          <hr></hr>
        </div>
      </div>

      <Button
        variant="contained"
        color="success"
        id="bubble"
        className="insertionBtn"
        onClick={() => {
          isStopBtn == "התחל" ? setIsStopBtn("הפסק") : setIsStopBtn("התחל");
          stop
            ? bubbleAlgo(
                arr,
                bblI,
                bblJ,
                setBblI,
                setBblJ,
                setArr,
                run,
                setStop,
                element
              )
            : setStop(true);
        }}
      >
        {" "}
        {isStopBtn}
      </Button>

      <div className="chart-father-container">
        <Box backgroundColor={colors.sort} className="chart-container">
          {arr.map((e, i) =>
            bblI == i || bblJ == i ? (
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
  );
};
