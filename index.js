    function api(){
    //     fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    // .then((res) => {
    // return res.json();
    // }
    // )
    // .then((data)=>{
    //     let crd = "";
    //     data.forEach((values)=>{
    //         crd += `
    //         <div class="apiblock">
    //         <p>name :${values.name}</p>
    //         <p>email: ${values.email}}</p>
    //         <p>body: ${values.body}</p>
    //     </div>
    //         `
    //     });
    //     document.getElementById('api').innerHTML = crd;

    // })
    // .catch( error=>{
    //     console.log(error);
    // })

    (async ()=>{
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
                const data = await res.json();
                let crd = "";
                data.forEach((values)=>{
                    crd += `
                    <div class="apiblock">
                    <p>name :${values.name}</p>
                    <p>email: ${values.email}}</p>
                    <p>body: ${values.body}</p>
                </div>
                    `
                });
                document.getElementById('api').innerHTML = crd;

        }catch(error){
            console.log(error);
        }
    })();

    // fetchdata();
}


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
            //  !details.push(detail)
             fromErr.innerHTML ="*Enter To from and Date";
             fromErr.style.color = "red"
             return;
     } else{
        fromErr.innerHTML="";
     }


     if(detail.To == "" && detail.Date== "" ){
        fromErr.innerHTML = "*enter to and date ";
        fromErr.style.color = "red"
          return;
    }else{
        fromErr.innerHTML =" "
    }

    if(detail.from == "" && detail.To== "" ){
        fromErr.innerHTML = "*enter from and To ";
        fromErr.style.color = "red"
          return;
    }else{
        fromErr.innerHTML =" "
    }

    if(detail.from=="" && detail.Date==""){
        fromErr.innerHTML ="enter from and date"
        fromErr.style.color ="red";
        return;
    }else{
        fromErr.innerHTML ="";
    }

     if(detail.Date == ""){
        fromErr.innerHTML = "*enter Date";
        fromErr.style.color = "red";
        return;
    }else{
        toErr.innerHTML =" ";
    }

    if(detail.To == ""){
        fromErr.innerHTML = "*enter To";
        fromErr.style.color = "red";
        return;
    }else{
        toErr.innerHTML =" ";
    }

    if(detail.from == ""){
        fromErr.innerHTML = "*enter from";
        fromErr.style.color = "red";
        return;
    }else{
        toErr.innerHTML =" ";
    }



       if(!details.some(existingDetails => existingDetails.from === detail.from
         &&
           existingDetails.To === detail.To &&
           existingDetails.Date === detail.Date)){
           details.push(detail);
        showCard();
       }

       api();

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


    function clr() {
    details = [];
    console.log(details);
    showCard();
    document.getElementById('form1').reset();
    document.getElementById('api').innerHTML = "";

}



//implemented in class in colsole 
class employee{

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email= email;
    }

     requestAcc(){
        console.log(this.name + "has request access to the system id: "+ this.id) 
    }

      punch(){
        console.log(this.id + "entered") 
    }

    getmail(){
        console.log(this.email)
    }

    onleave(){
        console.log(  this.id+"is on leave") 
    }
}

let mehul =  new employee("mehul",123456,"mehuldarshni42@gmail.com");
mehul.requestAcc();
console.log(mehul);

let employee2  =  new employee("vardhan", 873887, "vardhan@gmail.com")
console.log(employee2);

