async function async1() { 
    console.log('async1 start') 
    await async2() 
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function() {
    console.log('setTimeout')
}, 0) 
async1()
new Promise(function(resolve) { 
    console.log('promise1') 
    resolve()
}).then(function() {
    console.log('promise2')
})
console.log('script end')


console.log('script start')
console.log('async1 start') 
console.log('async2')
console.log('promise1') 
console.log('script end')


console.log('async1 end')
console.log('promise2')
console.log('setTimeout')


//微任务 console.log('promise2');  console.log('async1 end');  console.log('promise4');
//宏任务 console.log('setTimeout'); 

async function async1() {
    console.log('async1 start'); ----2
    await async2();
    console.log('async1 end');  ----7
}
 
async function async2() {
    new Promise(function(resolve) {
    console.log('promise1');    ----3
    resolve();
}).then(function() {
    console.log('promise2');   ---6
    });
}
 
console.log('script start');  ---1 
 
 
setTimeout(function() {
    console.log('setTimeout'); ---9
}, 0)
 
 
async1();
 
new Promise(function(resolve) {
    console.log('promise3');   ---4
    resolve();
}).then(function() {
    console.log('promise4'); ---8
});
 
console.log('script end'); ---5

// 


// 微任务 setTimeout(function() {
    console.log('setTimeout1')           console.log('promise2');
},0)

// 宏任务 console.log('setTimeout3'); console.log('setTimeout2') console.log('setTimeout1')


async function async1() {
    console.log('async1 start'); ----2
    await async2();
    setTimeout(function() {
        console.log('setTimeout1') ---8
    },0)
}
 
async function async2() {
	setTimeout(function() {
		console.log('setTimeout2') ---7
	},0)
}
 
 
console.log('script start');  ----1
 
 
setTimeout(function() {
    console.log('setTimeout3'); ---6
}, 0)
 
 
async1();  
 
 
new Promise(function(resolve) {
    console.log('promise1');  ----3
    resolve();
}).then(function() {
    console.log('promise2'); ---5
});
 
 
console.log('script end'); ---4













// 宏任务 console.log('setTimeout')  
// 微任务 console.log('promise1')  console.log('a1 end')  

async function a1 () {
    console.log('a1 start')   ----2
    await a2()
    console.log('a1 end')   ----7
}
 
 
async function a2 () {
    console.log('a2')  ----3        
}
 
 
console.log('script start')    ---- 1
 
setTimeout(() => {
    console.log('setTimeout')  ---10
}, 0)
 
 
Promise.resolve().then(() => {
    console.log('promise1')    ---6
})
 
 
a1()
 
 
let promise2 = new Promise((resolve) => {
    resolve('promise2.then')    
    console.log('promise2')  ----4    
})
 
 
promise2.then((res) => {
    console.log(res) ----8
    Promise.resolve().then(() => {
        console.log('promise3') ---9  
    })
})
 
 
console.log('script end')  ---5