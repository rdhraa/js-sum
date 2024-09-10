let sum=0
let number=prompt("please enter a value between 0 and 1 million")
console.log(number)
if(number<=0 || number>=1000000){
    alert("Invalid Number,Enter a number between 0 and 1 million")
}else{
    for(let i=0;i<=number;i++){
        sum+=i
    }
    alert("Sum of numbers upto" + number +" is " +sum)
}



    

