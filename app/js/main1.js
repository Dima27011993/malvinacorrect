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
})





