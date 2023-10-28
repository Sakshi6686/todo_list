const text=document.getElementById("text");
const newContainer=document.getElementById("lists");
const btn=document.getElementById("btn");
const prev=document.getElementById("three");
 

btn.addEventListener("click", function(){
    const newItem=document.createElement("div");
  newItem.textContent=text.value;

  newItem.style.height="2em";
  newItem.style.width="16em";
  newItem.style.backgroundColor="#e15f41";
  newItem.style.textAlign="center";
  newItem.style.borderRadius="1em"
  newItem.style.marginTop="2em";

   newContainer.appendChild(newItem);
   text.value=null;
});

