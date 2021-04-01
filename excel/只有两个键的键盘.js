// 最初在一个记事本上只有一个字符 'A'。你每次可以对这个记事本进行两种操作：

// Copy All (复制全部) : 你可以复制这个记事本中的所有字符(部分的复制是不允许的)。
// Paste (粘贴) : 你可以粘贴你上一次复制的字符。
// 给定一个数字 n 。你需要使用最少的操作次数，在记事本中打印出恰好 n 个 'A'。输出能够打印出 n 个 'A' 的最少操作次数。

/**
 * 
 * 打印 一个 a 需要 0 次
 * 打印 两个 a 需要 2 次
 * 打印 三个 a 需要 3 次
 * 打印 四个 a 需要 4 次
 * 打印 五个 a 需要 
 * 打印 六个 a 需要 5 次
 */

function minSteps(n) {
    const dp = new Array(n + 1).fill(0)

    dp[1] = 0
    dp[2] = 2
    for(let i = 2; i <= n ; i++) {
        if(i % 2 === 0) {
            dp[i] = dp[i / 2] + 2
        }else{
            dp[i] = i
        }
    }
    console.log(dp)
    return dp[n]
}

console.log(minSteps(5))