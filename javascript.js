function calcSum() 
{
let Part = document.getElementsByName("Part")[0].value;
let num4 = document.getElementsByName("num4")[0].value;

let sum = Number(Part) + Number(num4)

document.getElementsByName("sum")[0].value = sum;
} 

function calcSubitração()
{
let Part = document.getElementsByName("Part")[0].value;
let num4 = document.getElementsByName("num4")[0].value;
    
let sum= Number(Part) - Number(num4)
    
document.getElementsByName("sum")[0].value = sum;

}

function calcMultiplicação()
{
let Part = document.getElementsByName("Part")[0].value;
let num4 = document.getElementsByName("num4")[0].value;
    
let sum= Number(Part) * Number(num4)
    
document.getElementsByName("sum")[0].value = sum;

}

function calcDivisão()
{
let Part = document.getElementsByName("Part")[0].value;
let num4 = document.getElementsByName("num4")[0].value;
    
let sum= Number(Part) / Number(num4)
    
document.getElementsByName("sum")[0].value = sum;

}