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
fetchuser((error,users)=>{
    if (error)
    {
        console.log(error);
        return;
    }

    let user2=users[1];
    console.log(user2);
})