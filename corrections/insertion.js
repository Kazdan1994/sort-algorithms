function insertion(T) {
    let N = T.length

    for (let i = 1; i < N; i++) {
        let x = T[i]
        let j = i - 1;

        while (j >= 0 && T[j] > x) {
            T[j + 1] = T[j]
            j--
        }
        T[j + 1] = x
    }
    return T
}

module.exports = insertion
