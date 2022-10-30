

export async function bubbleAlgo(arr,bblI,bblJ,setBblI,setBblJ,setArr,run,setStop)
{

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
        setBblI(arr.length-i)
        setBblJ(j)
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
             resolve("foo");
       
           }, 1);})
          
       await myPromise
        if(first) {j=bblJ;first=false} 
      
     
    
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
  bblSort(arr,bblI,bblJ)













}
