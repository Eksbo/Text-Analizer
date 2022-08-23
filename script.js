'use scripr' ; 
// Дан textarea. Пусть в него вводится текст. Сделайте так,
//  чтобы по потери фокуса под текстареа вывелось сообщение о том, сколько в этом тексте слов. 


// Модифицируйте предыдущую задачу так,
//  чтобы также вывелось сообщение о том, сколько в тексте символов. 
// tab1.addEventListener('blur' , function(){
//     pb1.textContent= ''
//     let arr = tab1.value.split(' ')
//     let arr2 =tab1.value.split('');
//     console.log(arr2.length);
//     pb1.textContent='слов в тексте:'+ arr.length + ' , ' + "cимволов в тексте:" + arr2.length;


// }) ;

// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение
//  о том, сколько в тексте символов за вычетом пробелов. 
// tab1.addEventListener('blur' , function(){
//     pb1.textContent= ''
//     let arr = tab1.value.split(' ')
//     let arr2 =tab1.value.split('');
//     console.log(arr2.length);
   
// let sum = 0;
// for ( let i of arr2)
// {
//    if (i == 0 )
//    {
//    sum += 0
//    }else{sum ++}

// }
// pb1.textContent='слов в тексте: '+ arr.length + ' , ' + "cимволов в тексте: " + arr2.length + " , ";
// pb1.textContent += "символов за вычетом пробелов. " +sum ;
// }) ;

// Модифицируйте предыдущую задачу так, чтобы также вывелось 
// сообщение о процентном содержании каждого символа в тексте. 
// let arr2 =tab1.value.split('');
// tab1.addEventListener('blur' , function(event){
//     event.preventDefault()
//     pb1.textContent= ''
//     let arr = tab1.value.split(' ')
// let sum = 0;
// for ( let i of arr2)
// {
//    if (i == 0 )
//    {
//    sum += 0
//    }else{sum ++}
// }
// pb1.textContent='слов в тексте: '+ arr.length + ' , ' + "cимволов в тексте: " + arr2.length + " , ";
// pb1.innerHTML += "символов за вычетом пробелов. " +sum + '<br>';
// result ()
// }) ;
// function result ()
// {

//     let obj = {} ;
//     let k = arr2.length /100
//     for(let i = 0 ; i < arr2.length ; i++)
//     {   let sum = 0
//         for(let j of arr2)
//         {
// if (arr2[i] == j)
// {
// sum +=1
// obj[j]=Math.round(sum /k);
// }};
// sum =0 };
// for(let h in obj)
// {
//     pb1.innerHTML += `${h}  = ${obj[h]} % </br>`
// }
// };


//  В предыдущих задачах мы сделали так, что для нашего текста выводятся 4 параметра.
//  Сделайте 4 чекбокса,
//  которые будут регулировать, какие именно параметры показывать. 

let tab1 = document.querySelector('#taB1') ;
let pb1 = document.querySelector('#pB1') ;
let arr = tab1.value.split(' ')
let arr2 =tab1.value.split('');


let chek1 = document.querySelector("#in1");
let chek2 = document.querySelector("#in2");
let chek3 = document.querySelector("#in3");
let chek4 = document.querySelector("#in4");

function ch1 ()
    {
       
        pb1.innerHTML +='слов в тексте: '+ arr.length +'<br>';
    };
function ch2 (event)
{

    pb1.innerHTML +='cимволов в тексте: '+ arr2.length +'<br>';
};
function ch3()
{

    let sum = 0;
    for ( let i of arr2)
    {
       if (i == 0 )
       { sum += 0 }
       else
       { sum ++ };
    }
    pb1.innerHTML += "символов за вычетом пробелов. " + sum + '<br>';
};
function ch4 ()
{
    let obj = {} ;
    let k = arr2.length /100
    for(let i = 0 ; i < arr2.length ; i++)
    {   let sum = 0
        for(let j of arr2)
        {
    if (arr2[i] == j)
{
    sum +=1
    obj[j]=Math.round(sum /k);
}};
    sum =0 };
    for(let h in obj)
{
    pb1.innerHTML += `${h}  = ${obj[h]} % </br>`
}
};
tab1.addEventListener('blur' , function (event) {
    event.preventDefault();
    pb1.innerHTML = ''
 if(chek1.checked)
 {
    ch1()
 };
 if(chek2.checked)
 {
    ch2()
 };
 if(chek3.checked)
 {
    ch3()
 };
 if(chek4.checked)
 {
    ch4()
 };
});