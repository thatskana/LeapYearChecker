//This is a Leap Year Checker

const year= 2000

for (i = year; i >= 2000 && i <= 3000; i++ ){
    if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0){
        console.log(i, "is a Leap Year!");
    }
}