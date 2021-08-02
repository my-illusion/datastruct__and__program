class Scheduler {
    constructor(maxNum) {
        this.maxNum = maxNum
        this.count = 0
        this.taskList = []
    }

    add(promiseCreator) {
        if(this.count >= this.maxNum) {
            // 该任务需要等待
            await new Promise((resolve) => {
                this.taskList.unshift(resolve)
            })
        }

        this.count++
        const result = await promiseCreator()
        this.count--

        if(this.taskList.length) {
            this.taskList.shift()()
        }

        return result
    }
}