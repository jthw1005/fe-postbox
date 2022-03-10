const mergeSort = (dataArr) => {
  if (dataArr.length === 1) {
    return dataArr;
  }
  const center = Math.floor(dataArr.length / 2);
  const left = mergeSort(dataArr.slice(0, center));
  const right = mergeSort(dataArr.slice(center));

  return myMerge(left, right);
};

const myMerge = (left, right) => {
  let leftIdx = 0;
  let rightIdx = 0;
  let result = [];
  while (leftIdx < left.length && rightIdx < right.length) {
    const [_leftName, leftSize] = left[leftIdx];
    const [_rightName, rightSize] = right[rightIdx];
    if (leftSize < rightSize) {
      result.push(left[leftIdx]);
      leftIdx += 1;
    } else {
      result.push(right[rightIdx]);
      rightIdx += 1;
    }
  }
  if (leftIdx === left.length) {
    result = [...result, ...right.slice(rightIdx)];
  } else {
    result = [...result, ...left.slice(leftIdx)];
  }

  return result;
};

export { mergeSort };
