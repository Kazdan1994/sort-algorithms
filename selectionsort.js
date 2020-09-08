function selectionSort (tab) {
    let len = tab.length;
    let min = 0
    let tmp = null

    for (let i = 0; i < len; i++) {
        min = i;

        for (let j = i + 1; j < len; j++) {
            if (tab[min] > tab[j]) {
                min = j;
            }
        }
        if (min !== i) {
            tmp = tab[i];

            tab[i] = tab[min];
            tab[min] = tmp;
        }
    }
    return tab;
}

const T = [8, 2, 9, 4, 1]

const sortTab = selectionSort(T)

console.log(sortTab)