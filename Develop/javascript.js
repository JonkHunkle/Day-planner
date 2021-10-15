//                  MY to do

//pull from local storage and propagate information
//~~~~~~save button alerts user the hour's input is saved in local storage

//for loop going through business hours and making rows
for (var i = 9; i < 18; i++) {
  var html = $(`
  <div class='row'>
  <label class="form-label col-sm-1"> get ready for ${[i]} o'clock!</label>
  <textarea type="text" class="form-control text col-sm-10" placeholder="to-do for ${[
    i,
  ]} o'clock!"></textarea>
  <button class='saveBtn col-sm-1'></button>
  </div>
  `);
  var classNameToUse = checkHour(i);
  $(".text").addClass(classNameToUse);
  $("#timeBlock").append(html);
}

// var html = $(`
//     <div class=${classNameToUse}>
//       <h1 class='past'> Time is :${moment().format("dddd")} </h1>
//       <
//     </div>
//  `);

// function pull(){
//     //pull info from local storage and create

// }
// function saveToLocal(){

// }
// function hourRows(){

// }
// function saveBtn(){

// }

//compares current hour to schedule hour

function checkHour(hour) {
  if (hour > moment().format("HH")) {
    return "future";
  }
  if (hour === moment().format("HH")) {
    return "present";
  }
  return "past";
}

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
// //$(timeBlock).text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// console.log(timeBlock);
