const data = [
    {
      "id": "1",
      "sub": [
        {
          "id": "2",
          "sub": [
            {
              "id": "3",
              "sub": null
            },
            {
              "id": "4",
              "sub": [
                {
                  "id": "6",
                  "sub": null
                }
              ]
            },
            {
              "id": "5",
              "sub": null
            }
          ]
        }
      ]
    },
    {
      "id": "7",
      "sub": [
        {
          "id": "8",
          "sub": [
            {
              "id": "9",
              "sub": null
            }
          ]
        }
      ]
    },
    {
      "id": "10",
      "sub": null
    }
  ]
//   现在给定一个id，要求实现一个函数

//   findPath(data, id) {

//   }
//   返回给定id在 data 里的路径
//   示例:

//   id = "1" => ["1"]
//   id = "9" => ["7", "8", "9"]
//   id = "100"=> []
//   PS: id 全局唯一，无序

function findPath(data, id) {
    if(!data) return []
    return helpers(data, id, [])
}

function helpers(data, id, path) {
    const find = data.find(item => item.id === id)
    if(find) {
        return path.concat(id)
    }else{
       for(let i = 0, len = data.length; i < len; i++) {
           if(data[i].sub) {
               const res = helpers(data[i].sub, id, path.concat(data[i].id))
               if(res.length) return res
           }
       }
    }
    return []
}


console.log(findPath(
    data,
    '1'
))