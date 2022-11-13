/*let s= 'hello';


function reverseString(s)
{

    var newString = "";
    for (var i = s.length - 1; i >= 0; i--) 
    { 
        newString += s[i];
    }
    return newString; 
}
reverseString(s);*/


/*function isEndValueEqual(stringvalue,target)

{
    return stringvalue[stringvalue.length-1]== target;

}
console.log(isEndValueEqual("sdfgdgrgdfgdfg","q"))*/




function factorial(num) {
    let result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
  console.log(factorial(6)) ;



