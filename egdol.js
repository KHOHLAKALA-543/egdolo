/*
=================================
 EKHAYA LODGE JAVASCRIPT
=================================
*/



// ==============================
// SET MINIMUM DATE FOR BOOKINGS
// ==============================


let today = new Date()
.toISOString()
.split("T")[0];


let dates = document.querySelectorAll(
"input[type='date']"
);


dates.forEach(function(date){

    date.min = today;

});





// ==============================
// ROOM PRICE CALCULATOR
// ==============================


let bookingForm =
document.querySelector("form");



let inputs =
document.querySelectorAll(
"input"
);



let checkIn =
inputs[2];


let checkOut =
inputs[3];



let guestInput =
inputs[4];




let roomPrices = {

    "Standard Room":650,

    "Deluxe Room":850,

    "Family Room":1200

};






// Add room selection to form

let roomSelect =
document.createElement("select");


roomSelect.id="room";



roomSelect.innerHTML = `

<option>
Standard Room
</option>

<option>
Deluxe Room
</option>

<option>
Family Room
</option>

`;



let label =
document.createElement("label");


label.innerHTML =
"Select Room:";



bookingForm.insertBefore(
label,
bookingForm.firstChild
);


bookingForm.insertBefore(
roomSelect,
bookingForm.children[1]
);






// Price display


let priceBox =
document.createElement("h3");


priceBox.innerHTML =
"Estimated Price: R0";



bookingForm.appendChild(
priceBox
);






function calculatePrice(){


let room =
roomSelect.value;



let price =
roomPrices[room];



let start =
new Date(checkIn.value);



let end =
new Date(checkOut.value);




if(end > start){


let difference =
end - start;



let nights =
difference /
(1000*60*60*24);



let total =
nights * price;



priceBox.innerHTML =

"Estimated Price: R"

+

total;



}


else{


priceBox.innerHTML =
"Estimated Price: R0";


}



}






checkIn.addEventListener(
"change",
calculatePrice
);


checkOut.addEventListener(
"change",
calculatePrice
);



roomSelect.addEventListener(
"change",
calculatePrice
);









// ==============================
// BOOKING SUBMISSION
// ==============================


bookingForm.addEventListener(
"submit",

function(event){


event.preventDefault();




let name =
inputs[0].value;



let email =
inputs[1].value;



if(
name=="" ||
email==""
){

alert(
"Please complete all required fields."
);


return;

}





alert(

"Thank you "

+

name

+

"!\n\nYour booking request has been received.\n\n"

+

"Ekhaya Lodge will contact you shortly."

);



bookingForm.reset();


priceBox.innerHTML =
"Estimated Price: R0";


}

);








// ==============================
// SMOOTH BUTTON SCROLL
// ==============================


let buttons =
document.querySelectorAll(
"button"
);



buttons.forEach(function(button){


button.addEventListener(
"click",
function(){

document
.querySelector("#booking")
.scrollIntoView({

behavior:"smooth"

});


});



});








// ==============================
// FADE IN ANIMATION
// ==============================


let sections =
document.querySelectorAll(
"section"
);



sections.forEach(function(section){

section.style.opacity="0";

section.style.transform=
"translateY(40px)";

section.style.transition=
"1s";

});






function showSections(){


sections.forEach(function(section){


let position =
section.getBoundingClientRect()
.top;



if(
position <
window.innerHeight - 100
){


section.style.opacity="1";


section.style.transform=
"translateY(0)";


}



});


}



window.addEventListener(
"scroll",
showSections
);


showSections();