let key="7r6VuYTowQsK7puijqIfYEKonWODTo5Oric6GAdo"
let date='2024-01-01'
let root=document.getElementById("root");

let form=document.getElementById("form");
form.addEventListener("submit",search);

const history=document.getElementById("history");
console.log(history.innerHTML);
function search(e){
    e.preventDefault();
    console.log(e.target.years.value);
    let year=e.target.years.value;
    let month=e.target.months.value;
    let day=e.target.days.value;
    date=`${year}-${month}-${day}`;
    console.log(date);
    abc();
}



let i=0;
async function abc(){
let url=`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${key}`

   try{ const data=await fetch(url);
    // console.log(data.status)
    let data2=await data.json();
    if(data.status==200){
 root.innerHTML=`<div id="container">
 <h3>image of the day ${data2.date}</h3>
 <img src="${data2.hdurl}" height="200px" width="300px"/> 
 <p>${data2.explanation}</p>
 </div>`
localStorage.setItem(`${i}`,date);
i++;
console.log(localStorage);

// console.log("ab")
}
   else{
    alert("please enter valid date");
   }
   }
    catch{
        alert("there might be some backend issue");
    }
}
let prev =document.getElementById("prev");
prev.addEventListener("click",()=>{
    let arr=[]
    for(let i=0;i<localStorage.length;i++)
    {
        console.log("abc");
         arr.push(localStorage.key(i));
    }
    console.log("arr",arr)
    history.innerHTML=''
    for(let i=0;i<arr.length;i++)
    {
        let newele=document.createElement("div");
        newele.innerText=`${localStorage.getItem(arr[i])}`
        console.log("a",localStorage.getItem(arr[i]))
        history.appendChild(newele);
    }
    
})
abc();
document.getElementById("prev");
// localStorage.clear();