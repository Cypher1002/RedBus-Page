// car = unique entity which contains properties or methods 
// main oops concepts 
// abstraction -- hiding al details and showing a certain details 
// encapsulation
// inheritance 
// polymorphism
//creating a class 

console.log("hello");
//object 
// let  a= {
//     name:"mehul",
//     language:"javascript"
// }
// console.log(a);

// let p ={
//     run : ()=>{
//         alert("hello");
//     }
// }
// //cretaing a prototype that ca be used in a
// a.__proto__ = p;
// a.run();


// class railform{
//     submit(){
//         alert(this.name +":submited");
//     }

//     cancle(){
//         alert("form canclled for rollno :"  + this.rollNo);
//     }

//     giveName(personName, rollNo){
//         this.name = personName;
//         //we can give same name to variables
//         this.rollNo = rollNo;
//     }
// }

// let mehul = new railform();
// let rahul = new railform();
// mehul.giveName("mehul",12);
// mehul.submit();
// rahul.giveName("rahulll",67);
// rahul.submit();
// rahul.cancle();

class Polygon {
    constructor(nameobj) {
      this.name = nameobj;
    }
  }
  
  const poly1 =  Polygon("square");
  
  console.log(poly1);



  //inheritance
  class human{

    constructor(name, height){
        this.name = name;
        this.height = height;
    }

    start(){
        console.log(this.name + " has height "+ this.height) 
    }

    speak(){
        console.log(this.name + " is speaking") 
    }
}

//have same properties as human but add eat() method
class people extends human{
    eating(){
        console.log(this.name + " eats food");
    }
     
    //override
    speak(times){
        console.log( `${this.name}is speaking ${times} times faster`) 
    }

    eat(){
        super.eat()
    }
}

let ramesh =  new human("ramesh", 7);
ramesh.start();
// ramesh.eating();  throws error

let ram =  new people("ram", "6'1");
ram.eating();
ram.speak(3);
