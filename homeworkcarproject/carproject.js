"use strict";
var manifacturer = document.myForm.manifacturer.value;
var model = document.myForm.model.value;
var releaseyear = document.myForm.releaseyear.value;
var myallvalue = manifacturer + model + releaseyear;

function Car(manifacturercar = "", modelcar = "", releaseyearcar = "") {
    this.manifacturercar = manifacturercar;
    this.modelcar = modelcar;
    this.releaseyearcar = releaseyearcar;
}
var myCars = new Car();
myCars.manifacturercar = manifacturer;
myCars.modelcar = model;
myCars.releaseyearcar = releaseyear;
console.log(myCars.manifacturercar);


function myFunction() {


    if (myallvalue == " ") {
        alert("Form Sona Qeder Tamamlanmayib");
        return false;
    }
    if (isNaN(manifacturer) == true) {
        alert("Reqem Daxil Edile Bilmez");
        return false;
    }
    if (isNaN(releaseyear) == true) {
        alert("Herf Daxil Edile Bilmez");
    }

   
}
function clickinformation(){
    var myfirstvalue = document.getElementById("exampleInput1").value;
    var mysecondvalue = document.getElementById("exampleInput2").value;
    var mythirdvalue = document.getElementById("exampleInput3").value;
    //    var ul = document.getElementById("myul");
    var mydiv = document.getElementById("myDiv");
    var ul = document.createElement("ul");
    ul.classList.add("list-group");
    
    var li = document.createElement("li");
    li.classList.add("list-group-item");
    let textNode = document.createTextNode(myfirstvalue + " " + mysecondvalue + " " + mythirdvalue);
    li.appendChild(textNode);
    // li.createTextNode = myfirstvalue + " " + mysecondvalue + " " + mythirdvalue;
    ul.appendChild(li);
    
    mydiv.appendChild(ul);
}

