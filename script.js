let key="7r6VuYTowQsK7puijqIfYEKonWODTo5Oric6GAdo"
let date='2024-01-01'
let root=document.getElementById("root");

let form=document.getElementById("form");
form.addEventListener("submit",search);


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
abc();