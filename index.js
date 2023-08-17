let details=[];
const data1  = document.getElementById("data-to");
const data2 =  document.getElementById("data-from")
const text =  document.getElementById('msgdisplay');

const addDetails = (e) =>{
    e.preventDefault();
    let detail = {
        from: document.getElementById('from').value,
        To: document.getElementById('to').value,
        Date: document.getElementById('date').value
    }
    if(detail.To != "" && detail.from != "" && detail.Date!="")
        details.push(detail);
    //  document.forms[0].reset();

    //  console.log({details})
    // for(var i = 0 ;i<details.length;i++){
    //     data1.innerText = details[i].from
    //     data2.innerText = details[i].To;
    //     console.log(details[i].Date);
    // }
    if( detail.To != "" && detail.from != "" && detail.Date!=""){
      showCard();
    }else if(detail.from == ""){
       text.innerHTML ="enter your origin city";
    }else if(detail.To == ""){
        text.innerHTML = "Enter destination city";
    }else if(detail.Date == ""){
        text.innerHTML ="Enter a valid Date";
    }
    else{
        text.innerHTML = "All feilds are nessesary";
    }
   
}

function showCard(){
    let html = "";

    for(var i = 0 ;i<details.length;i++){
        html +=`
        <div class="Ffirst">
        <div class="Bblock">
          <p>
          <h3 id="data-to">to :${details[i].from}</h3>
           <h3 id="data-from">from: ${details[i].To}</h3>
           <h3>Date: ${details[i].Date} </h3>
           </p>
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

function myFunction(){
    var x =  document.getElementById("my-link");
    if (x.style.display==="none") {
        x.style.display= "block";

    }else{
        x.style.display="none";
    }
}


function validForm(){
    if (a.value == " ") {
        document.getElementById('msgdisplay').innerHTML = "please rite name";
    }
}


    var Today = new Date();  //js inbuilt function
    var day = Today.getDate();
    var month = Today.getMonth() + 1; //returns prev year thaht is why +1
    var year = Today.getFullYear();

    if(month < 10)
        month = '0' + month;
    if(day < 10)
     day = '0' + day;

    var minDate = year + '-' + month + '-' + day;
    document.getElementById('date').setAttribute('min', minDate);

    console.log(Today)