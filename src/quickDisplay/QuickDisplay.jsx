import React, { useContext, useEffect, useState } from 'react'
import { quickAlgo } from '../algorithm/quickSort';
import "./quickSort.css"
import Prism from "prismjs"
import { tokens, ColorModeContext } from "../theme";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Box, Button } from "@mui/material";
import { useTheme } from '@emotion/react';
import gif from '../Quicksort-example.gif'

export function QuickDisplay()  {
    const[quickI,setQuickI]=useState(0);
    const[quickJ,setQuickJ]=useState(0);
    const[arr,setArr]=useState([]);
    const[mergeStart,setMergeStart]=useState(0);
    const[mergeEnd,setMergeEnd]=useState(0);
    const[first,setFirst]=useState(0);
    let side="start";
   


    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [isCopied, setIsCopied] = useState(false);
    const [isCopied2, setIsCopied2] = useState(false);
    const [isStopBtn, setIsStopBtn] = useState("התחל");



    useEffect(() => {
        var startArr=[];
        
        for(let i=0; i<180;i++)
        {
          let num=randomNum(20,500)
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
      
        Prism.highlightAll()
      }, [arr]);
      
      function randomNum(min,max)

      {
        let randomNum = Math.floor(Math.random() * (max-min+1)+min);
      return randomNum
      }




      useEffect(() => {
        Prism.highlightAll();
      }, []);
      
      const mergeCode1 = `     function partition(arr,lowIndex,highIndex,pivot)
      {
      
        let leftPointer=lowIndex//מצביע לסוף
        let rightPointer=highIndex//מצביע להתחלה
        
        
        // רצים על המערך כל עוד המצביעים לא נפגשו
        while(leftPointer<rightPointer)
        {
        

            //ריצה על המערך כך עוד לא נמצא איבר גדול מהעוגן
        while(arr[leftPointer]<=pivot&&leftPointer<rightPointer)
        {
            leftPointer++
        }
        
          //ריצה על המערך כך עוד לא נמצא איבר קטן מהעוגן
        while(arr[rightPointer]>=pivot&&leftPointer<rightPointer)
        {
            rightPointer--
           
        }
       
        
        swap(arr,leftPointer,rightPointer)//נחליף בין שני האיברים שמצאנו
       
        
        }
        //נחליף בין העוגן לאיבר במקום האחרון שהצבענו עליו
         swap(arr,leftPointer,highIndex)
         console.log(arr)
        return leftPointer//בשלב הזה העוגן נמצא במקום הנכון
      }
      
      `;
      
      const mergeCode2= `       function quickSort(arr,lowIndex,highIndex)
      {
      
       //עצירת הפונקציה במידה והטווח במערך קטן מידי
      if(lowIndex>=highIndex)
      return;
      
      let pivotIndex=randomNum(lowIndex,highIndex)//מיקום רנדומאלי בטווח שקיבלנו
      let pivot =arr[pivotIndex]// קביעת עוגן רנדומאלית משפרת במעט את הביצוע של הא
      swap(arr,pivotIndex,highIndex)//נדחוף את העוגן לקצה של הטווח שלנו
      
      //נפעיל את הפונקציה על מנת לסדר את האיבר הבא
      //נקבל את הטווח השמאלי החדש
      let leftPointer=  partition1(arr,lowIndex,highIndex,pivot)
       quickSort(arr,lowIndex,leftPointer-1)// נפעיל את הפונקיצה על החלק השמאלי
       quickSort(arr,leftPointer+1,highIndex)//נפעיל את הפונקיצה על החלק הימני
      }
`;
      



//{arr.map((e,i)=>((quickI==i||quickJ==i)? <div className='coulmns' style={{'height':`${arr[i]/2}px`,"backgroundColor":"black"}} key={i} ></div>: <div className='coulmns' style={{'height':`${arr[i]/2}px`}} key={i} ></div>))}

{/* <button id='quick' onClick={()=>{quickAlgo(arr,setQuickI,setQuickJ ,setArr);}}> quick</button> */}

//



  return (
    <div className='quickSort-container'>
   
   <div dir="rtl" className="content-container">
        <div className="header">
          <h1> מיון מהיר </h1>
          <hr></hr>
          <div>
            <h3 dir="rtl">מה זה מיון מהיר?</h3>
            <p>
            מיון מהיר כשמו, הוא האלגוריתם המהיר ביותר בפועל. הוא אלגוריתם רקורסיבי אשר עובד לפי עקרון "הפרד ומשול",<br></br>
             הוא פועל בכך שהוא קובע עוגן ולפיו הוא מפרק את המערך לחצאים כך שמימין אליו נמצאים האיברים הגדולים ממנו ומשמאלו האיברים הקטנים ממנו <br></br> (בהנחה שהמיון הוא בסדר עולה) .
             הפעולה תתבצע עד אשר כל האיברים של המערך יהיו מסודרים.
            <br></br>
         

         <div  > <img src={gif}></img> </div>
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
              setIsCopied(true);
              setTimeout(()=>{setIsCopied2(false);},1000)
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

          <h2>מתי מיון מהיר עלול להיות שימושי?</h2>
          <p>
            מיון מהיר נמצא בשימוש רחב, ונוכל להשתמש בו ברוב המקרים ובעיקר כאשר אנחנו מתמודדים עם מערכים גדולים ולא ממויינים.
          </p>
          <hr></hr>
          <h2>סיבוכיות מיון מהיר</h2>
          <ul>
            <li>
             זמן ריצה הגרוע ביותר שמיון מהיר יכול להגיע אליו : 	O(n^2) - (  במקרה שהעוגן הוא המספר הנמוך או הגבוה ביותר במערך והמערך ממויין בסדר עולה או יורד בהתאמה)
            </li>
            <li>זמן ריצה הממוצע של מיון מהיר : 	O(n*log(n))</li>
            <li>זמן ריצה הטוב ביותר שמיון מהיר יכול להגיע אליו : O(n*log(n))</li>
            <li>סיבוכיות מקום של מיון מהיר : O(n)</li>
          </ul>
          <hr></hr>
        </div>
      </div>

      {isStopBtn=="הפסק"?
      
      <Button
      variant="contained"
      color="success"
      id="quick"
      className="insertionBtn"
       disabled
      
      onClick={() => {
        isStopBtn == "התחל" ? setIsStopBtn("הפסק") : setIsStopBtn("התחל");
        if(first==0){quickAlgo(arr,setQuickI,setQuickJ ,setArr);};setFirst(first+1)}}
    >
      
      {"התחל"}
    </Button>
      
      :  <Button
      variant="contained"
      color="success"
      id="quick"
      className="insertionBtn"
     
      
      onClick={() => {
        isStopBtn == "התחל" ? setIsStopBtn("הפסק") : setIsStopBtn("התחל");
        if(first==0){quickAlgo(arr,setQuickI,setQuickJ ,setArr);};setFirst(first+1)}}
    >
      
      {"התחל"}
    </Button>}


    
      <Button id='qs'  variant="contained" className="insertionBtn"
        color="success"  onClick={()=>{isStopBtn == "התחל" ? setIsStopBtn("הפסק") : setIsStopBtn("התחל")}}> הפסק</Button>
      <div className="chart-father-container">
       
       
      <Box backgroundColor={colors.sort} className="chart-container"  >
        {arr.map((e, i) =>
        (quickI==i||quickJ==i) ? (
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
  )
}

