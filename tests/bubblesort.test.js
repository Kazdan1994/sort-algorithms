const bubbleSort = require('../src/bubblesort')
const tab10 = require('../tabs/tab10')

test('bubble sort with 10 elements', () => {
    expect(bubbleSort(tab10)).toStrictEqual([2, 13, 23, 24, 59, 66, 70, 75, 85, 100])
})

