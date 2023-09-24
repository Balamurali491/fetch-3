
var  res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{

  
async function foo(){
  try {
   var res = await fetch("https://restcountries.com/v2/all");
   var result = await res.json();
   console.log(result);
  
  } catch (error) {
   console.log(error);
  }
 }
 
 foo();
 for (var i = 0; i < data1.length; i++) {
   var div = document.createElement("div");
   div.innerHTML=  `<div class="card" style="width: 19rem;">
    <div class="card-body">
  
    <h3 id="title"><i>${data1[i].nativeName}</i></h3>
      <h5 class="card-subtitle mb-2 text-muted">Demonym:  ${data1[i].demonym}</h5>
      <h5 class="card-subtitle mb-2 text-muted">Borders:  ${data1[i].borders}</h5>
      <h5 class="card-subtitle mb-2 text-muted">Alpha3Code:  ${data1[i].alpha3Code}</h5>
      <h5 class="card-subtitle mb-2 text-muted">Cioc:  ${data1[i].cioc}</h5>
    
    </div>
  </div> `
    document.body.append(div);
 }
});

