const quicksort = require('../src/quicksort')
const tab10 = require('../tabs/tab10')

test('quicksort sort with 10 elements', () => {
    expect(quicksort(tab10, 0, tab10.length - 1)).toStrictEqual([2, 13, 23, 24, 59, 66, 70, 75, 85, 100])
})
