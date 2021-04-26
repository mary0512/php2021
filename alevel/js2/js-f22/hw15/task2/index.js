console.log("Students2")

const studentsArr = [{
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
}

];

const minRatingPoint = 800;
const maxPaidPlace = 5;

class CreateStudent {
    constructor(id, name, surname, ratingPoint, schoolPoint, isSelfPayment){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.ratingPoint = ratingPoint;
        this.schoolPoint = schoolPoint;
        this.isSelfPayment = isSelfPayment;
    };

    getFullInfo(){
        return (`Я - ${this.name} ${this.surname},
          рейтинговый балл - ${this.ratingPoint}, форма обучения - ${this.isSelfPayment ? 'контракт' : 'бюджет'}`)
    };
};

const contract = [];
const budget = [];
const allStudents = [...contract, ...budget];
console.log (allStudents)

const setAllCreatedStudentsByConstructor = (arrOfStudents, doNotPay, payYourself) => {
    arrOfStudents.sort(
        (student1, student2) =>
         student2.ratingPoint - student1.ratingPoint || student2.schoolPoint - student1.schoolPoint
         );

    arrOfStudents.map( function(student, index) {
        let isSelfPayment = true;
        let resArr = payYourself;
        if ((index < maxPaidPlace) && (student.ratingPoint >= minRatingPoint)) {
            isSelfPayment = false;
            resArr = doNotPay;
        }
        resArr.push(new CreateStudent(
            index,
            student.name,
            student.surname,
            student.ratingPoint,
            student.schoolPoint,
            isSelfPayment)
        )
    });
}
setAllCreatedStudentsByConstructor(studentsArr, budget, contract);
console.log(contract,budget)
console.log(budget[0].getFullInfo())
console.log(contract[1].getFullInfo())
