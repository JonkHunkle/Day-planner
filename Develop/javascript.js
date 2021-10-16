//pull from local storage and propagate information

//for loop going through business hours and making rows

for (var i = 9; i < 17; i++) {
  var classNameToUse = checkHour(i);
  var html = $(`
  <div id = 'box${[i]}' class='row'>
  <label class="form-label col-sm-1"> get ready for ${[i]}:00!</label>
  <textarea id='text ${[
    i,
  ]}' type="text" ' class="form-control text col-sm-10 ${classNameToUse}" placeholder="to-do for ${[
    i,
  ]}:00!"></textarea>
  <button id='button${[i]}'class= 'saveBtn col-sm-1'></button>
  </div>
  `);
  pullLocal(i);
  $("#timeBlock").append(html);
}

//grabs value of textbox and saves to local storage
$(document).on("click", ".saveBtn", function () {
  console.log("clicking");
  localStorage.setItem(
    $(this).siblings(".text").attr("id"),
    $(this).siblings(".text").val()
  );
  console.log($(this).siblings(".text").val());
});

//checks current hour to schedule hour
function checkHour(hour) {
  if (hour < moment().format("kk")) {
    return "past";
  } else if (hour > moment().format("kk")) {
    return "future";
  } else {
    return "present";
  }
}

//pulling local storage for each row iteration (having issues printing to screen)
function pullLocal(block) {
  var guts = localStorage.getItem("text " + block);
  document.getElementsByClassName("row").innerHTML = "hello";
  console.log(guts);
}
