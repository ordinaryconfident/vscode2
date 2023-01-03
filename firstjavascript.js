console.log('Hello World!')
// 变量： var let const
// let let可修改 const不可修改
let age=30;
console.log(age)
// string ,number , boolean, null, undefined,
const username='kevin';
let isCool=true;
const rate=5.8;
let x=null;
const y=undefined;
console.log(typeof isCool)
console.log(`my name is ${username}, and the rate is  ${rate}`)
console.log(username.length);

const string1='Macau University of Science and Technology ';
console.log(string1.toUpperCase())
const array1=new Array(1,2,3,4,5,);
const array2=['apple','oranges','pears'];
console.log(array2)
console.log(array2[2])
array2.push('strawbarray');
console.log(array2)


//对象
const person={
    firstname:'Leo',
    lastname:'Lu',
    age:25,
    property:['house','car','cash'],
    password:{
        QQ:123456,
        Wechat:234567,
        Email:45678,
    },
};
console.log(person)
person.email='1234567@gamil.com';
console.log(person.email)


//json
const movie=[
    {
        id:'01',
        text:'战狼',
        language:'Chinese',
    },
    {
        id:'02',
        text:'Avatar: The Way of Water',
        language:'English',
    },
    {
        id:'03',
        text:'Sen to Chihiro no kamikakushi ',
        language:'Japanese',
    },
];
console.log(movie)

const movieJS=JSON.stringify(movie)
console.log(movieJS)


// if 
const timenumber=10;
if (timenumber===10){
    console.log('timenumber is 10')
}
else{
    console.log('timenumber is not 10')
};
// || or , && and
// 三目运算符 
day='Friday';
const lecture=day ==='Friday' ? 'Math':'English';
console.log(lecture)


//switch
const today='Saturday';
switch(lecture){
    case 'Math':
        console.log('Math');
        break;
    case 'English':
        console.log('English');
        break;
    default:
        console.log('PE')
};

// for 
for (let i=0; i<10; i++){
    console.log(i)
}
let i=0;
while (i<10){
    console.log(i);
    i++;
}

for (let i of movie){
    console.log(i.text)
}