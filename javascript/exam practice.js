let users=[
    {  userid : 1, 

    firstname :  'Krish' , 

    lastname :  'Lee' ,

    phonenumber :  '123456' ,

    emailaddress :  'krish.lee@learningcontainer.com',
}, 

 { userid : 2, 

    firstname :  'racks' , 

    lastname : 'jacson', 

    phonenumber :  '123456', 

    emailaddress : 'racks.jacson@learningcontainer.com' 

},
    { 

    userid : 3, 

    firstname :  'denial' , 

    lastname :  'roast',  

    phonenumber :  '21312312', 

    emailaddress :  'denial.roast@learningcontainer.com'
 }, 

 { userid : 4, 

    firstname :  'devid', 

    lastname : 'neo', 

    phonenumber :  '8975343' , 

    emailaddress :  'devid.neo@learningcontainer.com'

 }, 

 { userid : 5, 

    firstname : 'jone' , 

    lastname :  'mac' , 

    phonenumber :  '3254667', 

    emailaddress : ' jone.mac@learningcontainer.com'

 } 

] ;


// write function that return the  user id by  First name  :  racks ?(2)

function returnUserIdByf(users,name)
{
    let userID=0;
    for(let i=0;i<users.length;i++)
    {
        if(name==users[i].firstname)
        {
            userID= users[i].userid;
        }
    }

    return userID;
}

console.log(returnUserIdByf(users, 'racks'));





//write function that return the  user id by Last name    :  roast ? (2)

function returnUserIdl(users,name)
{
    let userID=0;
    for(let i=0;i<users.length;i++)
    {
        if(name==users[i].lastname)
        {
            userID= users[i].userid;

        }
    }

return userID;
}

console.log(returnUserIdl(users, 'roast'));

// write function that return the  user full name by phone number:  8975343 ? (2) 


function returnUserfullName(users,phoneNumber)
{
    let f="";

    for(let i=0;i<users.length;i++)
    {
        if( users[i].phoneNumber == phoneNumber )
        {
            f= users[i].firstname + " " + users[i].lastname;
        }
        
    }

    return f;
}

console.log(returnUserfullName(users, '8975343'));

//////////////////////////////////////////////////////////////////////////////////////////////////////////


let person =[ 

      { 
    
        firstName: "Hussam", 
    
        lastName: "Bawwab", 
    
        age: 28, 
    
        address: "Irbid", 
    
        phoneNumber: "7981323312", 
    
        jobDescription: { 
    
          title: "Frontend", 
    
          salary: 132123, 
    
        }, 
    
        childreen: [ 
    
          { 
    
            firstName: "Samer", 
    
            lastName: "Bawwab", 
    
            age: 3, 
    
          }, 
    
          { 
    
            firstName: "Bilal", 
    
            lastName: "Bawwab", 
    
            age: 6, 
    
          }, 
    
          { 
    
            firstName: "Mariam", 
    
            lastName: "Bawwab", 
    
            age: 8, 
    
          }, 
    
        ], 
    
      }, 
    
      { 
    
        firstName: "Sara", 
    
        lastName: "Lobani", 
    
        age: 22, 
    
        address: "Irbid", 
    
        phoneNumber: "7213454654", 
    
        jobDescription: { 
    
          title: "Frontend", 
    
          salary: 2133, 
    
        }, 
    
        childreen: [ 
    
          { 
    
            firstName: "Ail", 
    
            lastName: "Lobani", 
    
            age: 13, 
    
          }, 
    
          { 
    
            firstName: "Lobna", 
    
            lastName: "Lobani", 
    
            age: 16, 
    
          }, 
    
          { 
    
            firstName: "Zaid", 
    
            lastName: "Lobani", 
    
            age: 1, 
    
          }, 
    
        ], 
    
      }, 
    
      { 
    
        firstName: "Ezz", 
    
        lastName: "Ashore", 
    
        age: 25, 
    
        address: "Amman", 
    
        phoneNumber: "79823216", 
    
        jobDescription: { 
    
          title: "Frontend", 
    
          salary: 2133, 
    
        }, 
    
        childreen: [ 
    
          { 
    
            firstName: "Rami", 
    
            lastName: "Lobani", 
    
            age: 20, 
    
          }, 
    
          { 
    
            firstName: "Omar", 
    
            lastName: "Lobani", 
    
            age: 9, 
    
          }, 
    
        ], 
    
      }, 
    
      { 
    
        firstName: "Mohammad", 
    
        lastName: "Damra", 
    
        age: 30, 
    
        address: "Amman", 
    
        phoneNumber: "79898798465", 
    
        jobDescription: { 
    
          title: "Frontend", 
    
          salary: 1133, 
    
        }, 
    
        childreen: [ 
    
          { 
    
            firstName: "Laith", 
    
            lastName: "Damra", 
    
            age: 1, 
    
          }, 
    
          { 
    
            firstName: "Ahmad", 
    
            lastName: "Damra", 
    
            age: 8, 
    
          }, 
    
        ], 
    
      }, 
    
    ]; 



    //Q4) write function to get all users that there age upper than or equal 25. (2) 


    function checkAgeUp25(person)

    {

        let up25=person.filter(Element=>Element.age >=25);
        return {up25: up25};

    }


    console.log(checkAgeUp25(person));


    //Q5) write function to get all users that there age less than 25. (2) 


    function checkAgeLess25(person)

    {

        let less25=person.filter(Element=>Element.age < 25);
        return {less25: less25};
    }


    console.log(checkAgeLess25(person));


//Q6 write function to calculate tax for salary and return {username : firstName + lastName, salaryAfterTax:salary * 0.7,jobTitle: title} (2) 


function calculatetax(person)
{
  let result={username: "", newSalary:"", job:""}
  let results=[];
  person.forEach(element => {
    result.username=element.firstName+ "  "+element.lastName;
    result.newSalary=Number(element.jobDescription.salary)*0.7;
    result.job=element.jobDescription.title;
    results.push(result);
    
  });
    return results;
}
console.log(calculatetax(person));

//Q7write function that take two parameters (usersArray , address) and return users by address name.

function returnUserByAdress(usersArray , address)
{
    let array=[];
    for(let i=0;i<usersArray.length;i++)
    {
        if(address==usersArray[i].address)
        {
            array.push(usersArray[i]);
        }
    }
    return array;

}
console.log(returnUserByAdress(person , "Irbid"))

//Q8write function that return all users who have more than two children. 

function returnByChildern(person)
{
    let array=[];
    for(let i=0;i<person.length;i++)
    {
        if(person[i].childreen.length==2)
        {
            array.push(person[i]);

        }
    }
    return array;

}

console.log(returnByChildern(person));


////Q9write function that add 5% to the salary of users whose salaries are less than 1500. (3) 

function checkSalary(person)
{
    let array=[];
    for(let i=0;i<person.length;i++)
    {
        if(person[i].salary<1500)
        {
            person[i].salary *=.05;
            array.push(person[i]);
        }

    }
    return array;
}

console.log(checkSalary(person));


//bonus question write in console your name . (2) 


console.log("Sara Alloubani");


















































