const merge = (tab1, tab2) => {
    let sorted = [];

    while (tab1.length && tab2.length) {
        if (tab1[0] < tab2[0]) sorted.push(tab1.shift());
        else sorted.push(tab2.shift());
    }

    return sorted.concat(tab1.slice().concat(tab2.slice()));
};

const mergeSort = tab => {
    if (tab.length <= 1) return tab;
    let middle = Math.floor(tab.length / 2)
    let left = mergeSort(tab.slice(0, middle))
    let right = mergeSort(tab.slice(middle))

    return merge(left, right);
};

const T = [8, 2, 9, 4, 1]

const sortTab = mergeSort(T)

console.log(sortTab)