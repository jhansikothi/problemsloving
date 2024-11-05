/*1) WAP to print numbers from -1 to -num(input) without using >= operator.*/
num=+prompt("enter a number")
for(i=-1;i!==-num;i--){
    console.log(i)
}
/* WAP to print numbers from -num(input) to -1 without using <= operator.*/
num=+prompt("enter a number")
for(i=-num;i!==0;i++){
    console.log(i)
}
/*3) WAP to print sum of even digits in a number
input: Enter a number: 1287
output: Sum is: 10*/
num=prompt("enter a no:")
sum=0
if(num>0){
for(i=1;i<num.length;i++)
    if(num[i]%2==0){
    sum=sum+Number(num[i])
}
}
console.log(sum)
/*4) WAP to print sum of odd digits in a number
input: Enter a number: 1811
output: Sum is : 3*/
num=prompt("enter a no:")
sum=0
if(num>0){
for(i=0;i<num.length;i++)
    if(!(num[i]%2)==0){
    sum=sum+Number(num[i])
}
}
console.log(sum)



