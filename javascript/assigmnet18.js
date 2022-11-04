/*function printpatter(range)
{

    for (let i=range;i>=1;i--)
    {
        let result=" ";

        for( let x=1;x<=i;x++)
        {
            result =result + "*";

        }
        console.log(result);
    }
}

console.log(printpatter(9));*/



/*
let array=[13,23,512,12,250];
function getlargest(array)
 {
    let y=array[0];

for (let i=1;i<array.length;i++)
{
    if(y<array[i])
    { 
        y=array[i];

    }

}
return y; 
}
console.log(getlargest(array));

*/
/*
let array=[13,23,13,512,12,250,13,23,512,12,250];
function getcounter(array)
 {
    let y=array[0];
   // let count=0;
   let a=[];
for (let i=1;i<array.length;i++)
{
    if(y=array[i])
    { 
        a.push(y);

        //count++;
        array.splice(i,1);


    }

}
return a; 
}
console.log(getlargest(array))*/


/*
function uppercase(y)
{
    let z=[];
   let f= y.split(" ");
    for(let i=0;i<y.length;i++)
    {
        //z[i]=f[i].charAt(0).toUpperCase()+;
        z.push(f[i].charAt(0).toUpperCase() +f[i].slice(1));
    }
    let s= z.join(" ");
    return s;

}

console.log(uppercase("hussam start new javacript"));





*/

/*
function longstWord(y)
{
    
    let array= y.split(' ');
    let z=array[0]
    for(let i=1;i<array.length;i++)
    {
        if(z.length<array[i].length)
        z=array[i];

    }
    return z;
}

console.log(longstWord("hussam start new javacript"));

*/



/*

let array=[12,-15,-16,19,20,40,50,54,100];
function pAndN(string)
{
    let positiveArray=[];
    let negativeArray=[];
    for (let i=0;i<array.length;i++)
    {
        if(array[i]>=0){positiveArray.push(array[i]);}
         else{negativeArray.push(array[i])}
        

    }
    console.log("positiveArray "+positiveArray);
    console.log("negativeArray"+ negativeArray);

let first=positiveArray[0];
    for(let i=1;positiveArray.length;i++)
    {
        if(first>positiveArray[i])
        first=positiveArray[i];
    }
    console.log("largest positive number"+first);


let f=negativeArray[0];
    for(let i=1;negativeArray.length;i++)
    {
        if(f<negativeArray[i])
        f=negativeArray[i];
    }
    console.log("largest negative number"+f);
}

console.log(pAndN(array));



*/

/*
let string='dsf fdfgg ggk sbwg gfsgft te rgfgkbl fgb';
function uniqueChar(string)
{
    let uniq="";
    for(let i=0;i<string.length;i++)
{
    if(uniq.indexOf(string.charAt(i)==-1))
    {
        uniq=uniq+string[i];
    }
}
return uniq;

}
console.log(uniqueChar(string));

*/








