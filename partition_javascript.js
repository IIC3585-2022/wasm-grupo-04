function isSubsetSum(arr,n,sum) {
    if (sum == 0) return true;
    if (n == 0 && sum != 0) return false;

    if (arr[n - 1] > sum) 
      return isSubsetSum(arr, n - 1, sum);

    return isSubsetSum(arr, n - 1, sum) || isSubsetSum(arr, n - 1, sum - arr[n - 1]);
    }

function partitionJavascript(arr) {
  const n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++)
    sum += arr[i];

  if (sum % 2 != 0)
    return false;

  return isSubsetSum(arr, n, Math.floor(sum / 2));
}

function processPartitionJavascript() {
  const testArray = document.getElementById("partition-input").value.split(',').map((x) => parseInt(x));
  const startTime = performance.now();

  const result = partitionJavascript(testArray);
      
  const endTime = performance.now();

  const time = endTime - startTime;

  document.getElementById("result").innerHTML = `Result: ${result} Time: ${time}`
}