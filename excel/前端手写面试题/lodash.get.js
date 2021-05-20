// path的 形式 有两种
// 一种是 'a.b.c' 另一种是 'a.b[c]'
function get(obj, path) {
    // 第一步统一转化成 a.b.c 的格式
    if(!path) return undefined

    path = path.replace(/\[(.*?)\]/g, '.$1').split('.')

    try {
        return path.reduce((prev, next) => prev[next], obj)
    }catch(err) {
        return undefined
    }
}

console.log(
    get(
        {
            a: {
                b: {
                    c: 1
                }
            }
        },
        'a[b][c].d'
    )
)