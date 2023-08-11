let details=[];
const data1  = document.getElementById("data-to");
const data2 =  document.getElementById("data-from")

const addDetails = (e) =>{
    e.preventDefault();
    let detail = {
        from: document.getElementById('from').value,
        To: document.getElementById('to').value,
        Date: document.getElementById('date').value
    }
    details.push(detail);
     document.forms[0].reset();

    //  console.log({details})
    // for(var i = 0 ;i<details.length;i++){
    //     data1.innerText = details[i].from
    //     data2.innerText = details[i].To;
    //     console.log(details[i].Date);
    // }

     showCard();
   
}

function showCard(){
    let html = "";

    for(var i = 0 ;i<details.length;i++){
        html +=`
        <div class="Ffirst">
        <div class="Bblock">
          <p>
          <h3 id="data-to">to :${details[i].from}</h3>
           <h3 id="data-from">from: ${details[i].To}</h3></p>
           <h3>Date: ${details[i].Date} </h3>
        </div>
      </div>
        `
    }
    let datael = document.getElementById('firstOne');
    datael.innerHTML= html;

}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btna').addEventListener('click', addDetails)
})

//  for(var i = 0 ;i<details.length;i++){
//         console.log(details[i].from);
//     }