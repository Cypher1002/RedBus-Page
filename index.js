let details=[];

const addDetails = (e) =>{
    e.preventDefault();
    let detail = {
        from: document.getElementById('from').value,
        To: document.getElementById('to').value,
        Date: document.getElementById('date').value
    }
    details.push(detail);
     document.forms[0].reset();

     console.log({details})
}



document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btna').addEventListener('click', addDetails)
})