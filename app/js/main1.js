// let users = [
//     {id : 1, name: 'вася' },
//     {id : 2, name: 'петя' },
//     {id : 3, name: 'леша' }
// ]
// let user = users.find(item => item.id ==2 )
// alert(user.name)

// let users = [
//     {id : 11, name: 'вася' },
//     {id : 55, name: 'петя' },
//     {id : 77, name: 'леша' }
// ]
// let user = users.find(item => item.id == 77)
// alert(user.name)
// let names = 'вася, петя , лёша'
// let arr = names.split(',')
// for(let name of arr){
//     alert(`сообщение получат ${name}`)
// }

// let str = 'тест'
// alert(str.split(''))

// let arr = ['вася', 'петя','лёша']
// let str = arr.join(',')
// console.log(str)

// let lengths = ['bombo','lombo','lamboj'].map(item => item.length )
// alert(lengths)

// let number = [1,2,15,55,66]
// number.sort((a, b)=> a - b)
// alert(number)
// let names = 'вася, петя, леша'
// let arr = names.split(', ')
// for(let name of arr){
//     alert(`сообщения получат ${name}`)
// }
// let arr = [1,2,3,4,5]
// let sum = arr.reduce((sum, val) => sum + val )
// alert(sum)
// alert(Array.isArray({}))
// alert(Array.isArray([]))
// const numberSort = [5,4,3,2,1]
// numberSort.sort((a, b) => b - a )
// console.log(numberSort)
const abonements = [
    {
        type: 'акционное',
        name: 'Зона бикини и подмышечных впадин',
        description: 'Лазерная эпиляция бикини и подмышечных впадин',
        count: 5,
        price: 10000,
        currency: 'руб',
        priceDesc: '2500 руб — 1 процедура' 
    },
    {
        type: 'акционное',
        name: 'Комплекс «Мальвина»',
        description: 'Голени, тотальное бикини, подмышечные впадины, линия живота, пальчики ног',
        count: 5,
        price: 15990,
        currency: 'руб',
        priceDesc: '3990 руб — 1 процедура' 
    },
    {
        type: 'акционное',
        name: 'Комплекс «Лайт»',
        description: 'Ноги полностью, тотальное бикини, подмышечные впадины, линия живота, пальчики ног',
        count: 3,
        price: 12500,
        currency: 'руб',
        priceDesc: '4490 руб — 1 процедура' 
    }
]

abonements.forEach(item =>{
$('.abonements__Block_price').append(`
<div class="block__col">
<div class="first__item">
    <button class="sale_xs"><a href="#">${item.type}</a></button>
    <p class="p16_28b">
    ${item.name}
    </p>
    <p class="p14_24xs">${item.description}</p>

</div>
<div class="two__item">
    <span>${item.count} процедур</span>
</div>
<div class="three__item">
    <span>${item.price} ${item.currency}</span>
    <p class="p14_24xs">${item.priceDesc}</p>
</div>
<div class="four__item">
    <button class="button_S">
        <a href="#">записаться</a>
    </button>
</div>
</div>
`)
});

servicesJS = [
    {
       discription: 'Лазерная эпиляция',
       images: 'images/services/1.jpg'
        
    },
    {
       discription: 'Косметология',
       images: 'images/services/2.jpg'
    },
    {
       discription: 'Ногтевой сервис',
       images: 'images/services/3.jpg'
    }
]

servicesJS.forEach(item =>{
    $('.wrapper__images__abonements__block').append(`

    <div class="images__abonements__block">
    <img src="${item.images}" alt="">
    <div class="inner__images__abonements__block">
    <img src="images/services/Vector.svg" alt="" class="vector">
    <p class="p18_32"><a href="#"> ${item.discription}</a></p>
</div>
</div>

`)
});

instagrammJS = [
    {
imagesInstagram: 'images/instagram/1.jpg',
    },
    {
imagesInstagram: 'images/instagram/2.jpg',
    },
    {
imagesInstagram: 'images/instagram/3.jpg'
    }
]

instagrammJS.forEach(item =>{
    $('.gallery__instagram').append(`

    <div class="images__instagram">
    <img src="${item.imagesInstagram}" alt="">
</div>
    `)
});

advantagesJS = [
    {
        imagesAdv: 'images/advantages/1.svg',
discription:'Инновационная методика'



},
    {
        imagesAdv: 'images/advantages/2.svg',
discription:'Авторская техника удаления волос'


},
    {
        imagesAdv: 'images/advantages/3.svg',
        discription:' Врачи<br> дерматологи'

},
    {
        imagesAdv: 'images/advantages/4.svg',
        discription:'Новое оборудование (2018 года) '

},
    {
        imagesAdv: 'images/advantages/5.svg',
        discription:'Стойкий результат после 1 процедуры'

},
    {
        imagesAdv: 'images/advantages/6.svg',
        discription:'Удаление волос на любом фототипе кожи'

},
    {
        imagesAdv: 'images/advantages/7.svg',
        discription:'Обработка всего тела за рекордноe время'

},
    {
        imagesAdv: 'images/advantages/8.svg',
        discription:'Фиксированная стоимость курса'


},

]

advantagesJS.forEach(item => {
$('.wrapper__advantages_block').append(`

<div class="block__advantages">
<div class="logo__advantages">
<img src="${item.imagesAdv}" alt="">
</div>
<div class="text__advantages">
    <p class="p16_28" >
        ${item.discription}
    </p>
</div>
</div>
`)

});
instagramJS = 
[
    {
        image: 'images/staff/1.jpg',
        disctiption: 'Косметолог-эстетист',
        person:'Маргарита Руслановна'

},
    {
        image: 'images/staff/2.jpg',
        disctiption: 'Специалист лазерной эпиляции',
        person:'Юлия Константиновна'

},
    {
        image: 'images/staff/3.jpg',
        disctiption: 'Специалист лазерной эпиляции',
        person:'Оксана Радифовна'

},
    {
        image: 'images/staff/4.jpg',
        disctiption: 'Специалист лазерной эпиляции',
        person:'Надежда Яковлевна'

}
];

instagramJS.forEach(item => {
    $('.gallery__instagram_comp').append(`
    <div class="images__instagram">
    <img src=${item.image}>
    <div class="text__images">
    <p class="p12_20">${item.disctiption}</p>
    <p class="p16_28">${item.person}</p>
    </div>
</div>
    `)
});





// myEvesomeArray.some(test => {
//     if(test === 'd'){
//         return test
//     }
// })

// but we use more short version
// myEvesomeArray.some(test => test === 'd')


// myEvesomeArray.some(test =>{
//     if( test === 'd'){
//         return test
//     }
// })
// but we use more short version 
// myEvesomeArray.some(test => test === 'd')


// questionsJS = [
//     {
// text:'Как подготовиться к эпиляции'
//     },
//     {
// text:'Безопасна ли лазерная эпиляция?'
//     }
//     {
// text:'Возможны ли побочные эффекты?'
//     },
//     {
// text:'Лазерная эпиляция — больно ли это?'
//     },
//     {
// text:'Сколько нужно процедур лазерной эпиляции, чтобы избавиться от волос полностью'
//     },
//     {
// text:'Как ухаживать за кожей после эпиляции?'
//     },
//     {
// text:'Когда нужно проводить повторный сеанс лазерной эпиляции?'
//     },
//     {
// text:'Как можно удалять волосы между сеансами лазерной эпиляции?'
//     },
//     {
// text:'Почему не удается удалить все волосы за раз?'
//     }
// ]

// questionsJS.forEach(item => {
//     $('.questions').append(`
//     <p class="p16_28">
//     ${item.text}
// </p>
// <div class="image__vect_questions">
// <a href="#">
//     <img src="images/questions/Vector.svg" class="vector_questions">
// </a>
// </div>

//     `)
// })


// метод some() проверяет если хоть 1 елемент совпадает с проверяемой функцией
// myEvesomeArray.some(test => test === 'd')
// myEvesomeArray.some(test =>{
//     if(test === 'd'){
//         return test
//     }
// })

// const myEvesomeArray = ['a','b','c','d','e'];
// myEvesomeArray.some(test => test === 'd');
// myEvesomeTest.some(test =>{
//     if( test === 'd'){
//         return test
//     } 
// })
// reduce принимает аккумулятор и значение чтобы в результате вернуть только 1 значение 
// const myEvesomeArray = ['1','2','3','4','5']
// myEvesomeArray.reduce((accum, value) => accum * value)
/* метод every() этот метод проверяет удовлетворяют ли вс элементи массива заданой 
функции true если все элементы массива удовлетворяют элементам массива*/

// const myEvesomeArray = ['a','b','c','d','e']
// myEvesomeArray.every(test => test === 'd')
// myEvesomeArray.every(test => {
//     if(test === 'd'){
//         return test
//     }
// })

// myEvesomeArray = ['d','d','d','d','d']
// myEvesomeArray.every(test => test === 'd')
// myEvesomeArray.every(test => {
//     if(test === 'd'){
//         return test 
//     }
// })
// метод map принмает функцию в качестве параметра ,и всегда возвращает одинаковое количество элементов
// const myEvesomeArray = [5,4,3,2,1]
// myEvesomeArray.map(item => item * item)
// myEvesomeArray.map( item => {
//     if( item * item ){
//         return item
//     }
// })
// const myEvesomeArray = [5,4,3,2,1]
// myEvesomeArray.map( x => x * x)
// myEvesomeArray.map( x => {
//     if( x * x ){
//         return x
//     }
// })
//метод flat принимает функцию сглаживания масивов в массив и делает из 2 вложеных массивов 1 массив
// const myEvesomeArray = [[1,2],[3,4],5]
// console.log(myEvesomeArray.flat())
// myEvesomeArray = [[1,2],[3,4],5]
// myEvesomeArray.flat()
// console.log(myEvesomeArray.flat())
// метод filter принимает функцию в качестве параметра и возвращает елементы массива для которого 
//были фильтрации и возвращает со значение true

// const myEvesomeArray = [
//     { id :1, name : 'John'},
//     { id:2, name: 'Ali'},
//     {id:3, name: 'Mass'},
//     {id:4, name: 'Mass'}
// ]
// myEvesomeArray.filter(item => item.name === 'Mass')
// myEvesomeArray.filter(item =>{
//     if(item === 'Mass'){
//         return item
//     }
// })
// const myEvesomeArray = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Ali'},
//     {id: 3,name: 'Mass'},
//     {id: 4, name: 'Mass'}
// ]
//  myEvesomeArray.filter(item => item.name === 'Mass')
//  myEvesomeArray.filter(item =>{
//      if(item.name === 'Mass'){
//          return item
//      }

//  })


//метод forEach это колбек функция  этот метод принимает функцию к каждому элементу массива
// const myEvesomeArray = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Ali'},
//     {id: 3,name: 'Mass'}
// ]

// myEvesomeArray.forEach(elem => console.log(elem.name))
// если удовлетворяет то напишет что это второй элемент , если не удовлетворяет то напишет -1
// myEvesomeArray.findIndex(elem => elem.id === 3)
// myEvesomeArray.findIndex(elem => elem.id === 7)

// myEvesomeArray.findIndex(elem => elem.id === 3)

// myEvesomeArray.find(elem => elem.id === 3)

//метод sort этот метод принимает функцию в качестве параметра , сортирует и возвращает их 

// const myEvesomeArray = [5, 4, 3, 2, 1]
// // myEvesomeArray.sort((a, b) => a - b)
// // console.log(myEvesomeArray.sort())
// myEvesomeArray.sort((a, b) => b - a)
// console.log(myEvesomeArray.sort())
// const myEvesomeArray = [5,4,3,2,1]
// myEvesomeArray.sort((a, b) => b - a )
// console.log(myEvesomeArray.sort())

// const myEvesomeArray = [1,2,3,4,5]
// const myEvesomeArray2 = [10,20,30,40,50]
// myEvesomeArray.concat(myEvesomeArray2)

// const myEvesomeArray = [1, 2, 3, 4, 5]
// myEvesomeArray.includes(3)
// console.log(myEvesomeArray.includes(3))


// const myEvesomeArray = ['e','d','c','b','a']
// myEvesomeArray.reverse()
// console.log(myEvesomeArray)

// метод flatmap убирает из массива [] и добавляет метод map (elem => elem * 10)
// const myEvesomeArray = [[1],[2],[3],[4],[5]]
// myEvesomeArray.flatMap(arr=> arr * 10)
// myEvesomeElem.flat().map(elem => elem * 10)
// myEvesomeArray.flat().map(elem => {
//     if(elem * 10){
//         return elem
//     }
// })