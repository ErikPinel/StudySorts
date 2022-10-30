let time = 10;
let time1;
export function quickAlgo(arr,setQuickI,setQuickJ ,setArr)
{
    function randomNum(min,max)

    {
      let randomNum = Math.floor(Math.random() * (max-min+1)+min);
    return randomNum
    }


async function swap(arr,index1,index2)
      {
      let temp=arr[index1]
      arr[index1]=arr[index2]
      arr[index2]=temp
      
      const myPromise = new Promise((resolve, reject) => {
        time1 = setTimeout(() => {
          resolve("foo");
        }, time);
        const eStart = document.getElementById("quick");
        eStart.addEventListener("click", () => {
          {
            clearTimeout(time1);
            time1 = null;
            time = 20;
            console.log("time" + time);
            resolve("foo");
          }
        });
        const element = document.getElementById("qs");
        element.addEventListener("click", () => {
          time = 10000000;
          console.log(time);
        });
      });

      await myPromise;
      
      setArr([...arr])
      }
      
      
      
      async function partition(arr,lowIndex,highIndex,pivot)
      {
      
        let leftPointer=lowIndex
        let rightPointer=highIndex
        
        
        while(leftPointer<rightPointer)
        {
        
        while(arr[leftPointer]<=pivot&&leftPointer<rightPointer)
        {
            leftPointer++
            setQuickI(leftPointer)
        
            const myPromise = new Promise((resolve, reject) => {
                time1 = setTimeout(() => {
                  resolve("foo");
                }, time);
                const eStart = document.getElementById("quick");
                eStart.addEventListener("click", () => {
                  {
                    clearTimeout(time1);
                    time1 = null;
                    time = 20;
                    console.log("time" + time);
                    resolve("foo");
                  }
                });
                const element = document.getElementById("qs");
                element.addEventListener("click", () => {
                  time = 10000000;
                  console.log(time);
                });
              });
        
              await myPromise;
        }
        
        
        while(arr[rightPointer]>=pivot&&leftPointer<rightPointer)
        {
            rightPointer--
            setQuickJ(rightPointer)
            const myPromise = new Promise((resolve, reject) => {
                time1 = setTimeout(() => {
                  resolve("foo");
                }, time);
                const eStart = document.getElementById("quick");
                eStart.addEventListener("click", () => {
                  {
                    clearTimeout(time1);
                    time1 = null;
                    time = 20;
                    console.log("time" + time);
                    resolve("foo");
                  }
                });
                const element = document.getElementById("qs");
                element.addEventListener("click", () => {
                  time = 10000000;
                  console.log(time);
                });
              });
        
              await myPromise;
      
           
        }


        
       
        
        swap(arr,leftPointer,rightPointer)
        setArr([...arr])
        
        }
        await swap(arr,leftPointer,highIndex)
        return leftPointer
      }
      
      
      
      async function quickSort(arr,lowIndex,highIndex)
      {
      
       
      if(lowIndex>=highIndex)
      return;
      
      let pivotIndex=randomNum(lowIndex,highIndex)
      let pivot =arr[pivotIndex]
      swap(arr,pivotIndex,highIndex)
      
      
      let leftPointer= await partition(arr,lowIndex,highIndex,pivot)
      await quickSort(arr,lowIndex,leftPointer-1)
      await quickSort(arr,leftPointer+1,highIndex)
      }


     
      quickSort(arr, 0, arr.length-1);
    }












    
//     function randomNum(min,max)//מציאת איבר רנדומאלי בטווח
//     {
//       let randomNum = Math.floor(Math.random() * (max-min+1)+min);
//       return randomNum
//     }


//  function swap(arr,index1,index2)//חילוף בין שני איברים
//       {
//       let temp=arr[index1]
//       arr[index1]=arr[index2]
//       arr[index2]=temp
//       }
      
      
      
      
    
