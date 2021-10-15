//                  what to do?

//pull from local storage and propagate information
//~~ rows for hours in a business bay (9am-6pm)
//~~~~~ hour in a column on left, text input in center, save button on right\
//~~~~~~~~~~save button alerts user the hour's input is saved in local storage

//                   STYLING
// current hour row background color is white
//~~~if hour row is less than current hour --> background color is dark gray
//~~~if hour row > current hour ---> background color is light gray

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

//  <label for="formGroupExampleInput" class="form-label">Example label</label>
//   <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"></input>
//why doesnt this work an

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
