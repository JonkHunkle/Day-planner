//pull from local storage and propagate information

//for loop going through business hours and making rows

for (var i = 9; i < 17; i++) {
  var classNameToUse = checkHour(i);
  var html = $(`
  <div id = 'box${[i]}' class='row'>
  <label class="form-label col-sm-1 title"> get ready for ${[i]}:00!</label>
  <textarea id='text-${[
    i,
  ]}' type="text" ' class="form-control text col-sm-10 ${classNameToUse}" placeholder="to-do for ${[
    i,
  ]}:00!"></textarea>
  <button id='button${[i]}'class= 'saveBtn col-sm-1'></button>
  </div>
  `);

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

//rendering local storage for each row iteration (having issues printing to screen)
function renderLocal() {
  for (let i = 9; i < 17; i++) {
    var guts = localStorage.getItem("text " + i);
    $("#text-" + i).text(guts);
  }
}

renderLocal();
