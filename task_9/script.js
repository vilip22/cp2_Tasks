function add() {
    var input = document.getElementById("input_name");
    var input_name = input.value;
    var output = document.getElementById("out");
    var names = document.querySelector("select");
    var data = input_name.split(" ");
    if (data.length < 2) {
        output.innerHTML = "Missing last name: " + input_name;
        input.style.backgroundColor = "red";
        return;
    }
    for (var i = 0; i < data.length; i++) {
        if (data[i].charAt(0) == data[i].charAt(0).toLowerCase()) {
            output.innerHTML = "Credentials not capitalized: " + input_name;
            input.style.backgroundColor = "red";
            return;
        }
    }
    for (i = 0; i < names.length; ++i){
        if (names.options[i].value == input_name){
            output.innerHTML = "Name already added: " + input_name;
            input.style.backgroundColor = "red";
            return;
        }
    }
    names.innerHTML += "<option>" + input_name + "</option>";
    names.options.selectedIndex = names.options.length-1;
    output.innerHTML = "Added: " + input_name;
    input.style.backgroundColor = "lightGreen";
}

function clear_list() {
    var input = document.getElementById("input_name");
    var names = document.getElementById("names");
    var length = names.options.length;
    var output = document.getElementById("out");
    for (var i = length-1; i >= 0; i--) {
        names.options[i] = null;
    }
    names.innerHTML += "<option>Ime Priimek</option>";
    input.value = "";
    input.style.backgroundColor = "white";
    output.innerHTML = "Cleared";
}