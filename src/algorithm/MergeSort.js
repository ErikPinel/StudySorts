let time = 10;
let time1;

export function startAlgo(arr, l, r, side, setArr) {
  async function merge(arr, l, m, r, side) {
    /////////////////////////////////////helper

    // console.log("merge")

    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    var L = [];
    var R = [];
    setArr([...arr]);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++) L[i] = arr[l + i];
    for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial j of first subarray
    var i = 0;

    // Initial index of second subarray

    var j = 0;
    // console.log("time"+time)

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
      const myPromise = new Promise((resolve, reject) => {
        time1 = setTimeout(() => {
          resolve("foo");
        }, time);
        const eStart = document.getElementById("merge");
        eStart.addEventListener("click", () => {
          {
            clearTimeout(time1);
            time1 = null;
            time = 20;
            console.log("time" + time);
            resolve("foo");
          }
        });
        const element = document.getElementById("s");
        element.addEventListener("click", () => {
          time = 10000000;
          console.log(time);
        });
      });

      await myPromise;
      console.log(time);

      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;

        setArr([...arr]);
      } else {
        arr[k] = R[j];
        j++;
        setArr([...arr]);
      }
      k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
      const myPromise = new Promise((resolve, reject) => {
        time1 = setTimeout(() => {
          resolve("foo");
        }, time);
        const eStart = document.getElementById("merge");
        eStart.addEventListener("click", () => {
          {
            clearTimeout(time1);
            time1 = null;
            time = 20;
            console.log("time" + time);
            resolve("foo");
          }
        });
        const element = document.getElementById("s");
        element.addEventListener("click", () => {
          time = 10000000;
          console.log(time);
        });
      });

      await myPromise;

      arr[k] = L[i];
      i++;
      k++;
      setArr([...arr]);
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
      const myPromise = new Promise((resolve, reject) => {
        time1 = setTimeout(() => {
          resolve("foo");
        }, time);
        const eStart = document.getElementById("merge");
        eStart.addEventListener("click", () => {
          {
            clearTimeout(time1);
            time1 = null;
            time = 20;
            console.log("time" + time);
            resolve("foo");
          }
        });
        const element = document.getElementById("s");
        element.addEventListener("click", () => {
          time = 10000000;
          console.log(time);
        });
      });

      await myPromise;

      arr[k] = R[j];
      j++;
      k++;
      setArr([...arr]);
    }
    // console.log("arr startEnd:  "+arr)
    setArr([...arr]);
  }

  // l is for left index and r is
  // right index of the sub-array
  // of arr to be sorted */

  async function mergeSort(arr, l, r, side) {
    ////////////////////recursion

    if (l >= r) {
      // console.log("arr stop: "+arr+"******** l: "+l+"m: "+m+"r:"+r)
      return; //returns recursively
    }
    // const element = document.getElementById("merge");
    // element.addEventListener("click", ()=>{if(time==10){setTime(1000000000)} else{setTime(10);console.log(  time)}})

    // console.log(side+"main")
    var m = l + parseInt((r - l) / 2);
    // console.log("arr: "+arr+"******** l: "+l+"m: "+m+"r:"+r)
    side = "left";
    await mergeSort(arr, l, m, side);
    side = "right";

    await mergeSort(arr, m + 1, r, side);

    await merge(arr, l, m, r);
  }

  mergeSort(arr, l, r, side);
}

/// mergeSort

// async function mergeSort(arr)
// {
//   console.log(arr)
// if(arr.length<2)
// return;
// console.log(arr.length)
// let midIndex= Math.floor(arr.length/2)
// let leftHalf=[];
// let righttHalf=[];

// for(let i=0;i<midIndex;i++)
// {
// leftHalf.push(arr[i])

// }

// for(let j=midIndex;j<arr.length;j++)
// {
// righttHalf.push(arr[j])

// }

//  await mergeSort(leftHalf)
// await mergeSort(righttHalf)
// await merge(arr,leftHalf,righttHalf)

// }

// async function merge(arr1,leftHalf,righttHalf)////////////////////////////

// {
// let temp;

// let leftSize=leftHalf.length;
// let rightSize=righttHalf.length;

// let i=0
// let j=0
// let k=0;

// while(i<leftSize&&j<rightSize)
// {

//   await new Promise(r => setTimeout(r,10))

// if(leftHalf[i]<=righttHalf[j])
// {
//   arr1[k]=leftHalf[i]

//   setMergeI(i)
//   setArr([...arr1])
//   i++

// }
// else{
//   arr1[k]=righttHalf[j];
//   let index=arr.findIndex(e=>e[1]==righttHalf[j][1])
//   setMergeJ(j)

//   setArr([...arr1])
//   j++

// }

// k++;
// }
// while(i<leftSize)
// {
//   await new Promise(r => setTimeout(r,10))
//   arr1[k]=leftHalf[i]

//   setMergeI(i)

//   setArr([...arr1])
//   i++;
//   k++;

// }

// while(j<rightSize)
// {
//   await new Promise(r => setTimeout(r,10))
//   arr1[k]=righttHalf[j]

//   setMergeJ(j)

//  setArr([...arr1])
//   j++;
//   k++;

// }
// setArr([...arr1])

// }

// function returnPromise() {
//   return new Promise(function(resolve, reject) {
//     time1= setTimeout(() => {
//       resolve("foo");

//     }, time);
//     const element = document.getElementById("merge");
//     element.addEventListener("click", ()=>{if(time==10){time=10000000} else{time=20;console.log();resolve("foo");};console.log(time)})

//   });
// }

