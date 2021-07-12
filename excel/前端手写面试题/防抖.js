function debounce(fn, delay) {
    let timer = null
    return function() {
        var context = this
        var args = arguments
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay);
    }
}

const fn = debounce(() => console.log(1), 500)

fn()
fn()
fn()
fn()
fn()
fn()


function debounce(fn, delay) {
    var timer;
    return function () {
        var context = this;
        var args = arguments;

        if(timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn.apply(context, args);
            timer = null;
        }, delay);
    }
}
