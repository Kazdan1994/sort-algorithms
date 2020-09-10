const quicksort = require('../../corrections/quicksort')
const tab10 = require('../../tabs/tab10')
const tab100 = require('../../tabs/tab100')
const tab5000 = require('../../tabs/tab5000')
const { tab10Sorted, tab100Sorted, tab5000Sorted } = require('../../tabs/tab1')

test('quicksort sort with 10 elements', () => {
    expect(quicksort(tab10, 0, tab10.length - 1)).toStrictEqual(tab10Sorted)
})

test('quicksort sort with 100 elements', () => {
    expect(quicksort(tab100, 0, tab100.length - 1)).toStrictEqual(tab100Sorted)
})

test('quicksort sort with 5000 elements', () => {
    expect(quicksort(tab5000, 0, tab5000.length - 1)).toStrictEqual(tab5000Sorted)
})
