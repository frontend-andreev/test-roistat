export function getMaxDepth(obj) {
  if (obj.children.length === 0) {
      return obj.depth;
  }
  return Math.max(...obj.children.map(child => getMaxDepth(child)));
}
export function findUser(arr, currentPhone) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].phone == currentPhone) return arr[i];
    if (arr[i].children) {
      const result = findUser(arr[i].children, currentPhone);
      if (result) return result
    }
  }
return null
}
export function loadSelectOptions(arr, currentArr) {
  arr.forEach(item => {
    currentArr.push({value: item.phone, option: item.name})
    if (item.children.length > 0) {
      loadSelectOptions(item.children, currentArr)
    }
  });
}