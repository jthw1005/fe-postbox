const mergeSort = (dataArr) => {
  if (dataArr.length < 2) {
    return dataArr;
  }
  const center = Math.floor(dataArr.length / 2);
  const left = mergeSort(dataArr.slice(0, center));
  const right = mergeSort(dataArr.slice(center));

  return mergeTwoArrayInOrder(left, right);
};

const mergeTwoArrayInOrder = (left, right) => {
  let leftIdx = 0;
  let rightIdx = 0;
  const result = [];
  while (leftIdx < left.length && rightIdx < right.length) {
    const [_leftName, leftSize] = left[leftIdx];
    const [_rightName, rightSize] = right[rightIdx];
    result.push(leftSize < rightSize ? left[leftIdx++] : right[rightIdx++]);
  }
  leftIdx === left.length ? result.push(...right.slice(rightIdx)) : result.push(...left.slice(leftIdx));

  return result;
};

export { mergeSort };
