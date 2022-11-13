let user ={

     fistName:"sara",
     age:32,
     skills:["html","js","css","php"],
     active:true,
     phoneNumber:
     {
        number:78799809,
        cc:962,

     },

     adress:
     {
        city:"amman",
        zipcode:8789,
     },
    job:undefined,
    study:null,

    isActive:function()
    {
        if(user.active){ return "hello user"}
        else{return "sorry you are not active"}
    },
    getAge:function()
    {
        if(user.age >=18){return "available"}
        else{return "unavailable"}

    }


}



let user2=new Object({fistName:"hussam",age:30});
console.log(user2);


let user3={
    name:"sara",
getwelcome:function()
{
    return "hello " + this.name;
}
}


let user4= Object.create(user3);
console.log(user4.name);
user4.name="ghena";
console.log(user4.name);
console.log(user4.getwelcome());



console.log(user.phoneNumber);
console.log(user.skills[2]);
console.log(user.isActive());
console.log(user.getAge());
console.log(user['getAge']());

let names=["hussam","sara","zaid",true,[1,2,3,[4,5,6]],{first:"sara"},null,undefined];

console.log(names[4][3][1]);



let names2=[];
names2.push("hussam");

names2.push("sara");
names2.push("zaid");

console.log(names2);

names2.unshift("diala");
console.log(names2);

names2.pop();

console.log(names2);

names2.shift();
console.log(names2);

names2.splice(0,1);
console.log(names2);


names2.splice(0,1,"ezz","sana");
console.log(names2);



names2.splice(1,0,"ezz","sana");
console.log(names2);










