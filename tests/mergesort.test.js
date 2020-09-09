const mergeSort = require('../src/mergesort')
const tab10 = require('../tabs/tab10')

test('mergesort sort with 10 elements', () => {
    expect(mergeSort(tab10)).toStrictEqual([2, 13, 23, 24, 59, 66, 70, 75, 85, 100])
})
