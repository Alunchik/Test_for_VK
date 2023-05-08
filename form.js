function generate_floor(select, string, min, max){
    for (let i = min; i <= max; i++){
        option = document.createElement('option');
        option.value=i;
        option.appendChild(document.createTextNode(i+ string));
        select.appendChild(option);
    }
}

function generate_meetingroom(select, string, min, max, floor){
    for (let i = min; i <= max; i++){
        option = document.createElement('option');
        option.value=i;
        option.appendChild(document.createTextNode(string + floor + (i<10 ? "0" : "") + i));
        select.appendChild(option);
    }
}

let floor_select = document.getElementById("floor_select");
let meetingroom_select = document.getElementById("meetingroom_select");

document.addEventListener("DOMContentLoaded",
    function ()
    {
        generate_floor(floor_select, " этаж",
            3, 27);

        generate_meetingroom(meetingroom_select, "переговорная ",
            1,10, 3);
    });

floor_select.addEventListener('change', function (){
    meetingroom_select.innerHTML=''//очищаем список
        generate_meetingroom(
            meetingroom_select, "переговорная ", 1, 10, floor_select.options[floor_select.selectedIndex].value)
}
)

function log_form_data(event){
    event.preventDefault()
    form = new FormData(event.target);
    let obj = {};
    form.forEach((value, key) => obj[key] = value);
    bDate = document.getElementById('bookingDate').value
    obj
    obj["date"]= bDate;
    obj["start_time"] = document.getElementById('start_time').value
    obj["end_time"] = document.getElementById('end_time').value
    console.log(obj);
    // event.target.reset(); если форму все же надо очистить
}

form = document.getElementById("booking_form");
form.addEventListener('submit', log_form_data)
