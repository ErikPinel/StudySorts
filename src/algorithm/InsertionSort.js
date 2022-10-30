export function insertionAlgo(
  arr,
  insI,
  insJ,
  run,
  setArr,
  setStop,
  setInsI,
  setInsJ
) {
  async function insertionSort(arr, insI, insJ) {
    setStop(false);
    const element = document.getElementById("insert");
    element.addEventListener("click", () =>
      run ? (run = false) : (run = true)
    );
    let i, key, j;
    for (i = insI; i < arr.length; i++) {
      key = arr[i];
      j = i - 1;
      setInsJ(j);
      setInsI(i);
      if (run) return arr;
      /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        setInsJ(j);
        setInsI(i);
        setArr([...arr]);
        if (run) return arr;

        const myPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("foo");
          }, 1);
        });

        await myPromise;
      }
      arr[j + 1] = key;
      setArr([...arr]);
      if (run) return arr;
    }
  }
  insertionSort(arr, insI, insJ);
}







