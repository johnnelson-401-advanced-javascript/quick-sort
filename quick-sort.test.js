const quickSort = require('./quick-sort');

describe('quickSort sorts an array', () => {
  it('returns a sorted array', () => {
    let arr = [3, 2, 1, 4, 5, 7, 6];
    console.log(quickSort(arr, 0, arr.length - 1));
    
    expect(quickSort(arr, 0, arr.length - 1)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  
});