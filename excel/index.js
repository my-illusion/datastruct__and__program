const xlsx = require("node-xlsx")
const fs = require('fs');

const sheets = xlsx.parse('/Users/songbingbing/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/8803a6d6caf57201a6c37fdc34e606e0/Message/MessageTemp/9621bc28f14ba4c35321a3f813f9d5a8/File/数据.xlsx');

sheets.forEach(function(sheet){
    // 读取每行内容
    const len = sheet.data.length
    const match = sheet.data[1]

    const comp = []
    for(let i = 3, len = match.length; i < len; i++) {
        if(typeof match[i] === 'string') {
            const prefix = /,?([^\s]*)\（/g.exec(match[i])
            if(prefix) {
                comp.push(prefix[1]) 
            }
        }
    }
    // console.log(comp)
    const data = sheet.data.slice(2).map(item => {
        // console.log(item)
        let padding = item.slice(3)
        const newArr = []
        comp.forEach( match => {
            // 在padding中寻找是否存在
            const index = padding.findIndex(s => (String(s) || '').includes(match))
            if(index !== -1){
                const find = padding[index]
                padding.splice(index, 1)
                newArr.push(find)
            }else{
                newArr.push('')
            }
        })

        padding = padding.filter((s) => Boolean(s) && s !== ',')
        if(padding.length) {
            console.log(padding, '---')
            comp.push(...padding.map(s => /,?([^\s]*)\（/g.exec(s)[1]))
        }
        newArr.push(...padding)
        newArr.unshift(...item.slice(0, 3))
        item = newArr
        return item
    })

    console.log(data)
    data.unshift(sheet.data[1])
    data.unshift(sheet.data[0])
    var buffer = xlsx.build([{
        name: 'Sheet1',
        data
    }]);

    // 写入文件
    fs.writeFile("/Users/songbingbing/Desktop/test.xls", buffer, function(err) {
        if (err) {
            console.log("Write failed: " + err);
            return;
        }

        console.log("Write completed.");
    });
});