let url="https://jsonplaceholder.typicode.com/users";

function fetchuser(callback)
{
    fetch(url)
    .then((result)=>{
        return result.json();
    })
    .then((json)=>{
        console.log(json);
        callback(null,json);

    })
    .catch((error)=>{
        callback(error,null);
    });


}





let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    fetchuser((error,users)=>{
        if (error)
        {
            console.log(error);
            return;
        }
    
        console.log(users);
    })
});

