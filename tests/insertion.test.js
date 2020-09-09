const insertionSort = require('../src/insertion')
const tab10 = require('../tabs/tab10')

test('insertion sort with 10 elements', () => {
    expect(insertionSort(tab10)).toStrictEqual([2, 13, 23, 24, 59, 66, 70, 75, 85, 100])
})

