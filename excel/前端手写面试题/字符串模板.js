function render(template, data) {
    return template.replace(
        /\{\{(.*?)\}\}/g,
        (match, key) => {
            return (data[key] !== null && data[key] !== undefined) ? data[key] : ''
        }
    )
}

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let person = {
    name: '布兰',
    age: 12
}
console.log(
    render(template, person)
)