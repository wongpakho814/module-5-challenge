// Add the current date to the Jumbotron
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Creates every elements inside the time block
function createTimeBlock(time, meridian) {
    let timeBlockEl = $("<div>", {id: "block-" + time + meridian, "class": "row time-block"});
    let hourEl = $("<div>", {"class": "hour col-1 m-auto"});
    // Check if the current time is 12am or 12pm
    (time === 0) ? hourEl.text("12" + meridian) : hourEl.text(time + meridian);
    let descriptionEl = $("<textarea>", {"class": "description col-10"});
    descriptionEl.addClass(descriptionColor(time, meridian)); 
    let saveBtnEl = $("<div>", {"class": "saveBtn col-1 m-auto fa fa-save"});

    timeBlockEl.append(hourEl);
    timeBlockEl.append(descriptionEl);
    timeBlockEl.append(saveBtnEl);
    $(".container-fluid").append(timeBlockEl);
}

// Check the current time and add the correct color to the description field
function descriptionColor(time, meridian) {
    let currTime = moment().hours();
    // Change am/pm to 24-hours clock
    if (meridian === "PM") {
        time += 12;
    }
    
    if (time < currTime) {
        return "past";
    }
    else if (time === currTime) {
        return "present";
    }
    else {
        return "future";
    }
}

// Initialize the webpage by rendering all time blocks
function init() {
    // For 12am to 11am
    for (let i = 0; i < 12; i++) {
        createTimeBlock(i, "AM");
    }
    // For 12pm to 11pm
    for (let i = 0; i < 12; i++) {
        createTimeBlock(i, "PM");
    }
}
init();