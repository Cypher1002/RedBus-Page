const buttons1 = document.querySelectorAll('[data-num]');
const operation = document.querySelectorAll('[data-oprand]');
const equal = document.querySelector('[data-eq]')
const prevtxt = document.querySelector('[data-prev]')
const currtxt = document.querySelector('[data-curr]')
const allclear = document.querySelector('[data-ac]')
const del =  document.querySelector('[data-del]')


class calc{
    constructor(prevtxt, currtxt){
        this.prevtxt= prevtxt;
        this.currtxt = currtxt;
        this.clear();
    }
    clear(){
       this.curroperand =  '';
       this.prvoperand = '';
       this.operation = undefined;
    }

    delete(){
        if(this.curroperand !== '' ){
            this.curroperand = this.curroperand.toString().slice(0,-1)
        }else{
         if(this.prvoperand !== ''){
        this.prvoperand = this.prvoperand.toString().slice(0,-1)
        this.operation = undefined
         }else if(this.operation !==''){
            this.operation = undefined
         }

        }

    }

    appendnum(number){
        if(number === "." && this.curroperand.includes(".")) return;
        // if(number.length()>10){
        //     return
        // }
       this.curroperand = this.curroperand.toString() + number.toString()
      
    }

    operationhappen(operation){
        if(this.curroperand=== ''){
        if(this.prvoperand !=='' && this.operation!== undefined){
            this.operation = operation;
            this.ansDisplay();
        }
        return;
    }

        if(this.prvoperand!== ''){
            this.compte();
        }

        this.operation = operation;
        this.prvoperand = this.curroperand;
        this.curroperand = '';
        this.ansDisplay();

    }

    compte(){
         let compute ;
         const prev = parseFloat(this.prvoperand);
         const curr = parseFloat(this.curroperand);
         if(isNaN(prev)||isNaN(curr)) return;
         switch(this.operation){
            case '+':
                compute=prev+curr
                break;
            case '-':
                compute= prev-curr
                break;
            case '*':
                compute= prev*curr
                break;
            case '÷':
                 compute= prev/curr
                break;
            case '%':
                compute=(prev/100)*curr
                break;
        default:
            return;
         }

         this.curroperand = compute
         this.operation =undefined
         this.prvoperand =''
    }

    ansDisplay(){
         this.currtxt.innerHTML = this.curroperand
         if(this.operation!=null){
            this.prevtxt.innerHTML = `${this.prvoperand}  ${this.operation}`
         }else{
            this.prevtxt.innerHTML= ''
         }
        
    }
}


const calculator  = new calc(prevtxt, currtxt);
buttons1.forEach(button =>{
   button.addEventListener('click', ()=>{
    calculator.appendnum(button.innerHTML);
    calculator.ansDisplay()
   })
})


operation.forEach(button =>{
    button.addEventListener('click', ()=>{
     calculator.operationhappen(button.innerHTML);
     calculator.ansDisplay()
    })
 })

 equal.addEventListener('click', button=>{
     calculator.compte();
     calculator.ansDisplay();
 })

 allclear.addEventListener('click', button=>{
    calculator.clear();
    calculator.ansDisplay();
})

del.addEventListener('click', button=>{
    calculator.delete();
    calculator.ansDisplay();
})


const str = "hello";
const 