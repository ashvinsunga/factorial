// THE GOAL OF THIS FUNCTION
// Enter a number as an argument and it will be divided to its preceding number
// number = 5 , action = 5*4*3*2*1

function factorial(num){
    if (num === 1) return 1;
    return num * factorial(num - 1);
}