/*const div =document.createElement("div");
div.id="demo";

//div.innerHTML="<p> hello hussam </p>";

div.className="hellp-p";
let text=document.createTextNode("new text was added")
div.appendChild(text);


let h2=document.createElement("h2");
h2.textContent="h2 was added";
div.appendChild(h2);






document.body.appendChild(div);*/



const menu= document.querySelector("#menu");

function addItemToList(number)
{

    for (let i=1;i<=number;i++)
    {
        let li=document.createElement("li");
        li.textContent=i;
        menu.appendChild(li);

    }
}


addItemToList(5)
