

// const timer = num => {
//     setTimeout(()=>arguments.callee({
//         console.log('end time')
//     }, num*1000
//     )
// }
// timer(2)

// const timer = num => {
//     const setInterval =
//     (()=>arguments.callee({
//         console.log('end time')
//     }, num*1000
//     )
// }
// timer(2)


let itemsCount = 0;

class CustomPromise {
    constructor(cb){
        this.status = 'pending';
        this.value = undefined;
        this.reselveCallback = null
        this.rejectCallback = null
        cb(CustomPromise.reselve.bind(this), CustomPromise.reject.bind(this))
    }

    static reselve = function(value){
        debugger;
        if (this.status !== 'pending') {
            return;
        }
        this.status = 'reselve'
        this.value = value
        if (this.reselveCallback) {
            this.reselveCallback(value)
        }
    }
    
    static reject = function(value){
        if (this.status !== 'pending') {
            return;
        }
        this.status = 'reject'
        this.value = value
        if (this.rejectCallback) {
            this.rejectCallback(value)
        }
    }

    then(cb) {
        this.reselveCallback = cb;
        return this
    }

    catch(cb) {
        this.rejectCallback = cb;
        return this
    }
}

const promise = new CustomPromise((res, rej) => {
    setTimeout(() => {
            if (itemsCount) {
                res(itemsCount)
                return;
            }
            rej('Busy')
        }, 2000)
})

setTimeout(() => itemsCount = 5, 1000)

promise
    .then((res) => console.log(res))
    .catch(() => console.log('False'))