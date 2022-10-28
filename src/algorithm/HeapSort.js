

export function HeapAlgo(arr,setHeapI,setHeapLarge,setArr,side){


async function Heapsort( arr)//[5,1,9,2,3]
{
    var N = arr.length;
    // Build heap (rearrange array)
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)//[9,3,5,2,1],2
        {
            console.log(side)
            const promise=new Promise((resolve, reject) => {
              setTimeout(() => {
              resolve("foo");
            
            }, 10);
                })
            await promise 
          side="build"
          console.log("N: "+N+" i: "+i)
          await heapify(arr, N, i);}

    // One by one extract an element from heap
    for (var i = N - 1; i > 0; i--) {//[3,5,2,1],N=2,i=3
        // Move current root to end
        var temp = arr[0];//3
        arr[0] = arr[i];//2
        arr[i] = temp;//[1,3,2,5,9],3
        setArr([...arr])
        console.log(side)
        const promise=new Promise((resolve, reject) => {
          setTimeout(() => {
          resolve("foo");
        
        }, 10);
            })
        await promise 
        

        // call max heapify on the reduced heap
        side="max"
        console.log(arr)
        await heapify(arr, i, 0);////[1,3,2,5,9],N=3,i=0
    }
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap        [5,1,2,3]
async function heapify(arr, N, i)

{


  setHeapI(i)
    var largest = i; // 1 -3 // Initialize largest as root  //[3,5,2,1],N=3,i=3
                                                          // [0,1,2,3,4
    var l = 2 * i + 1; // left = 2*i + 1// 3-5
    var r = 2 * i + 2; // right = 2*i + 2//2-2

// console.log("largest:" +largest+"l: "+l+"r: "+r+"N:"+N)
// console.log(arr)

    // If left child is larger than root
    if (l < N && arr[l] > arr[largest])
       { largest = l;// largest=3-5
       setHeapLarge(largest)
      }

    // If right child is larger than largest so far
    if (r < N && arr[r] > arr[largest])
       { largest = r;// largest=2-5
       setHeapLarge(largest)
      }

    // If largest is not root
    if (largest != i) {
        var swap = arr[i];//[3,1,2,5],N=3,i=1
        arr[i] = arr[largest];
        arr[largest] = swap;//[3,5,2,1],N=3,i=1
        console.log(side)
        const promise=new Promise((resolve, reject) => {
          setTimeout(() => {
          resolve("foo");
        
        }, 10);
            })
        await promise 
        
        setArr([...arr])
        side="reset"
        // Recursively heapify the affected sub-tree
        console.log("N: "+arr+" i: "+largest)
        await heapify(arr, N, largest);////[3,5,2,1],N=3,i=3
    }
}


Heapsort( arr)

}