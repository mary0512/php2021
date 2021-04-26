const studentArr = [{
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
},
{
    name: 'Татьяна',
    surname: 'Коваленко',
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
},
{
    name: 'Анна',
    surname: 'Кугир',
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
},
{
    name: 'Станислав',
    surname: 'Щелоков',
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
},
{
    name: 'Денис',
    surname: 'Хрущ',
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
},
{
    name: 'Татьяна',
    surname: 'Капустник',
    ratingPoint: 650,
    schoolPoint: 500,
    course: 3,
},
{
    name: 'Максим',
    surname: 'Меженский',
    ratingPoint: 990,
    schoolPoint: 1100,
    course: 1,
},
{
    name: 'Денис',
    surname: 'Марченко',
    ratingPoint: 570,
    schoolPoint: 1300,
    course: 4,
},
{
    name: 'Антон',
    surname: 'Завадский',
    ratingPoint: 1090,
    schoolPoint: 1010,
    course: 3
},
{
    name: 'Игорь',
    surname: 'Куштым',
    ratingPoint: 870,
    schoolPoint: 790,
    course: 1,
},
{
    name: 'Инна',
    surname: 'Скакунова',
    ratingPoint: 1560,
    schoolPoint: 200,
    course: 2,
},
];



Array.prototype.customForEach = function(cb) {
    for (let index in this) {
        cb(this[index], index, this);
    }
}

Array.prototype.customMap = function(cb) {
    const newArr = []
    for (let index in this) {
        newArr[index] = cb(this[index], index, this)
    }
    return newArr;
}

Array.prototype.customFilter = function(cb) {
    const newArr = []
    for (let index in this) {
        if(cb(this[index], index, this)) {
            newArr.push(this[index])
        }
    }
    return newArr;
}

Array.prototype.customFindIndex = function(cb) {
    for (let index in this) {
        if(cb(this[index], index, this)) {
            return +index;
        }
        continue;
    }
    return -1;
}

Array.prototype.customFind = function(cb) {
    for (let index in this) {
        if(cb(this[index], index, this)) {
            return this[index]
        }
        continue;
    }
    return;
}