const selectionsort = require('../src/selectionsort')
const tab10 = require('../tabs/tab10')
const tab100 = require('../tabs/tab100')
const tab5000 = require('../tabs/tab5000')
const { tab10Sorted, tab100Sorted, tab5000Sorted } = require('../tabs/tab1')

test('selection sort with 10 elements', () => {
    expect(selectionsort(tab10)).toStrictEqual(tab10Sorted)
})

test('selection sort with 100 elements', () => {
    expect(selectionsort(tab100)).toStrictEqual(tab100Sorted)
})

test('selection sort with 5000 elements', () => {
    expect(selectionsort(tab5000)).toStrictEqual(tab5000Sorted)
})
