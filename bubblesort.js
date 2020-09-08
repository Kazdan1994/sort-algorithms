function tri_bulle(T) {
    let N = T.length

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (T[j] > T[j + 1]) {
                let tmp = T[j]
                T[j] = T[j+1]
                T[j+1] = tmp
            }
        }
    }
    return T
}

const T = [8, 2, 9, 4, 1]

const sortTab = tri_bulle(T)

console.log(sortTab)
