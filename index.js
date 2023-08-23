let details=[];
const data1  = document.getElementById("data-to");
const data2 =  document.getElementById("data-from")
const text =  document.getElementById('msgdisplay');
const toErr =  document.getElementById('to-err');
const fromErr = document.getElementById('from-err');
const dateErr =  document.getElementById('date-err');


const addDetails = (e) =>{
    e.preventDefault();
    let detail = {
        from: document.getElementById('from').value,
        To: document.getElementById('to').value,
        Date: document.getElementById('date').value
    }
         
       if(detail.from =="" && detail.from=="" && detail.Date ==""){
             !details.push(detail)
             fromErr.innerHTML ="*Enter To from and Date";
             fromErr.style.color = "red"
     }   

       if(!details.some(existingDetails => existingDetails.from === detail.from
         &&
           existingDetails.To === detail.To &&
           existingDetails.Date === detail.Date)){
           details.push(detail);
        showCard();
       }


    // if(!details.includes(detail))
    //     details.push(detail);

    //  document.forms[0].reset();

    //  console.log({details})
    // for(var i = 0 ;i<details.length;i++){
    //     data1.innerText = details[i].from
    //     data2.innerText = details[i].To;
    //     console.log(details[i].Date);
    // }

    // console.log(detail)
    // if(detail.To != "" && detail.from != "" && detail.Date!=""){
    //     // text.innerHTML = "";
    //   showCard();
    // }
   

    if(detail.from == "" && detail.To=="" && detail.Date==""){
        fromErr.innerHTML ="*Enter To from and Date";
       fromErr.style.color = "red"
    }else{
        fromErr.innerHTML =""
    }
    
    if(detail.To == "" && detail.Date== "" ){
        fromErr.innerHTML = "*enetr to and date ";
        fromErr.style.color = "red"
    }else{
        toErr.innerHTML =" "
    }
    
    // if(detail.Date == ""){
    //     fromErr.innerHTML ="*Enter a valid Date";
    //     dateErr.style.color = "red"

    // }else{
    //     dateErr.innerHTML =" ";
    // }
  
    //  validFrom();
}
   

function prev(){
    if(details != 0){
        document.getElementById("psearch").innerText ="PREVIOUS SEARCHES";
    }else{
        document.getElementById("psearch").innerHTML ="";
    }
}
function showCard(){

    prev();

    let html = "";



    for(var i = 0 ;i<details.length;i++){
        html +=`
        <div class="Bblock">
          <p>
          <h3 id="data-to">to :${details[i].from}</h3>
           <h3 id="data-from">from: ${details[i].To}</h3>
           <h3>Date: ${details[i].Date} </h3>
           </p>
        </div>
        `
    }
       
     let datael = document.getElementById('firstOne');
    datael.innerHTML= html;
 
        console.log(details)

}

{/* <button id="next" onclick="next()"> next </button> */}

function next(){
   let  block1 = document.getElementsByClassName('firstOne');
   block1 += 3;
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


// function setError(id, error){
//      element= document.getElementById(id)
//     //  Element.innerHTML = error;
//       element.getElementsByClassName('msgdisplay').innerHTML = error

// }

// function validFrom(){
//     var fname = document.forms['myForm']['from1'].value;
//     if(fname == ""){
//         setError("fname", "enetr from detail")
//     }

//     var fTo =  document.froms['myForm']['to1'].value;
//     if(fTo == ""){
//         setError("fTo", "enter To details")
//     }

//     console.log(fTo)
// }


function clr(){
    details = [];
    console.log(details);

    showCard();
    prev();
}

