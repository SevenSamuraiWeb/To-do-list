const txt=document.getElementById('task');
const btn1=document.getElementById('btn');
const out=document.getElementsByClassName("output");
const tasks=document.getElementsByClassName("tasklist");
let a=0;

del=document.getElementsByClassName("tasks")

btn1.addEventListener('click',myFunction);

function myFunction(){
    out[a].textContent+=txt.value;
    a++;
    //const para=document.createElement("p");
    //para.innerHTML=txt.value;
    //document.body.appendChild("para");
    //document.li.style.backgroundColor="blue";
}




