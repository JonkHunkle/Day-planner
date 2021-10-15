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
for (var i = 0; i < 9; i++) {
  var hourEl = $("<div>");
  hourEl.addClass("col");
  hourEl.text(moment());
  $("#timeBlock").append(hourEl);
}
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

// function checkHour(){

// }

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
// //$(timeBlock).text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// console.log(timeBlock);

// function addRow()
