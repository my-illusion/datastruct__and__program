function judgeLevel(arr) {
    const str = JSON.stringify(arr)
    console.log(str, typeof str)
    let level = 0
    let result = 0

    for(let i = 0; i < str.length; i++) {
        // if(arr[i] === '[') level++
        // if(arr[i] === ']') level--

        console.log(arr[i])
    }
}

console.log(
    judgeLevel(
        [
            1,
            [
                2, 
                3, 
                [
                    4, 
                    5, 
                    [
                        8
                    ]
                ]
            ]
        ]
    )
)