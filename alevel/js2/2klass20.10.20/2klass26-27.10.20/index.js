let itemsCount = 0;

class CustomPromise {
    constructor(cb){
        this.status = 'pending';
        this.value = undefined;
        this.reselveCallback = null
        this.rejectCallback = null
        cb(CustomPromise.reselve.bind(this), CustomPromise.reject.bind(this))
const addresses = ['Nauky', 'Sumskaya']
const weatherList = [
    {
        street: 'Nauky',
        weather: 'shiny'
    },
    {
        street: 'Sumskaya',
        weather: 'rainy'
    }
]

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
const users = [
    {
        name: 'Vasya', 
        addrIndex: 1
    },
    {
        name: 'Katya', 
        addrIndex: 2
    },
]

    then(cb) {
        this.reselveCallback = cb;
        return this
    }

    catch(cb) {
        this.rejectCallback = cb;
        return this
    }
const getUser = (index) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const user = users[index];
            res(user);
        }, 1000)
    })
}

const promise = new CustomPromise((res, rej) => {
    setTimeout(() => {
            if (itemsCount) {
                res(itemsCount)
                return;
const getAddress = (addrIndex) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (!addresses[addrIndex]) {
                rej('Street not found')
            }
            rej('Busy')
        }, 2000)
            res(addresses[addrIndex]);
        }, 1000)
    })
}

const getWeather = (street) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const weatherObj = weatherList.find(item => item.street === street)
            if (!weatherObj) {
                rej('Weather not found')
            }
            res(weatherObj.weather);
        }, 1000)
    })
}

// getUser().then(user => {

//     getAddress(user.addrIndex)
//         .then(addrName => {
//             user.street = addrName

//             getWeather(addrName)
//                 .then(weatherObj => {
//                     user.weather = weatherObj.weather
//                     console.log(user)
//                 })
//                 .catch(err => {
//                     user.weather = null
//                     console.log(err)
//                     console.log(user)
//                 })

//         })
//         .catch(err => {
//             console.log(err)
//             console.log(user)
//         })
//         .finally(() => {
//             console.log('Finaly works')
//         })

// })

const getUserInfo = async (indexOfUser) => {
    const user = await getUser(indexOfUser)
    const address = await getAddress(user.addrIndex)
    user.address = address;
    const weather = await getWeather(address)
    user.weather = weather;
    return user
}

const getUsersFullInfo = async () => {
    try {
        const usersFullInfoList = [];
        for (let index in users) {
            const user = await getUserInfo(index);
            usersFullInfoList.push(user)
        }
        return usersFullInfoList;
    } catch(e) {
        console.log(e)
        throw new Error(e)
    } finally {
        console.log('Done')
    }
}
document.body.innerHTML = "Loading ...."
getUsersFullInfo().then(usersList => {
    document.body.innerHTML = ""
    usersList.forEach(user => {
        document.body.innerText += user.name+' '+user.address+' '+user.weather;
    })
})

setTimeout(() => itemsCount = 5, 1000)

promise
    .then((res) => console.log(res))
    .catch(() => console.log('False')) 
