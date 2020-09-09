const selectionsort = require('../src/selectionsort')
const tab10 = require('../tabs/tab10')

test('selection sort with 10 elements', () => {
    expect(selectionsort(tab10)).toStrictEqual([2, 13, 23, 24, 59, 66, 70, 75, 85, 100])
})
