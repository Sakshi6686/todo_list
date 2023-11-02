const text=document.getElementById("text");
const newContainer=document.getElementById("lists");
const btn=document.getElementById("btn");

 

function newItem(text){
  const newItem=document.createElement("div");
  newItem.textContent=text ;

  newItem.style.height="2em";
  newItem.style.width="16em";
  newItem.style.backgroundColor="#e15f41";
  newItem.style.textAlign="center";
  newItem.style.borderRadius="1em"
  newItem.style.marginTop="2em";

   newContainer.appendChild(newItem);
   
}
const baseUrl='http://localhost:3000/'
btn.addEventListener("click", function(){
     const Text=text.value;
     if(Text){
      newItem(Text)
      fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Text }),
    });
    text.value=null;
     }
});
function fetchItems() {
  fetch(baseUrl,{
    method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
   })
      .then(response => response.json())
      .then(data => {
          data.forEach(text => {
              newItem(text);
          });
      });


 
}

fetchItems();