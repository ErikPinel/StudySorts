export function selectionAlgo(arr, setI, I, setMin, setArr, setStop, run) {
  async function selectionSort(inputArr, I) {
    let n = inputArr.length;
    setStop(false);
    console.log("****" + I);
    const element = document.getElementById("stop");
    element.addEventListener("click", () =>
      run ? (run = false) : (run = true)
    );

    for (let i = I; i < n; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("foo");
        }, 50);
      });

      await myPromise;
      setArr([...inputArr]);

      for (let j = i + 1; j < n; j++) {
        console.log("meow");

        if (inputArr[j] < inputArr[min]) {
          min = j;
          setI(i);
          setMin(min);
          if (run) return inputArr;
        }
        setMin(min);
        setI(i);
      }

      if (min != i) {
        // Swapping the elements

        let tmp = inputArr[i];
        inputArr[i] = inputArr[min];
        inputArr[min] = tmp;
        setI(i);
        setMin(min);
        setArr([...inputArr]);
      }
      if (run) return inputArr;
    }
  }
  selectionSort(arr, I);
}


