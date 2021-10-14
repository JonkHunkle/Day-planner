var timeBlock = $("#timeBlock");

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));

$(timeBlock).text(moment().format("MMMM Do YYYY, h:mm:ss a"));

console.log(timeBlock);

//                  what to do?

//~~add button to open planner and take moment in HH (2 digit hour format)
//~~~~~~button propagates rows for hours in a business bay (9am-6pm)
//~~~~~~~~~ hour in a column on left, text input in center, check off button on right

//                   STYLING
// current hour row background color is white
//~~~if hour row is less than current hour --> background color is dark gray
//~~~if hour row > current hour ---> background color is light gray
//~~~ if check off button is clicked---> background is green
