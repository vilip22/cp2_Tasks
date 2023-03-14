
var myTable = document.getElementById("tgrad");

function genRows() {
    var rows = "";
    for (var i = 0; i < 256; i++) {
        rows += "<tr id=\"" + i + "\" onclick=\"displayRGB("+ i +")\" "
        rows += "style=\"background-color:rgb(255," + (255-i) + "," + i + ");\">";
        rows += "<td></td></tr>";
    }
    return rows;
}

function displayRGB(i) {
    window.alert("red:255   green:" + (255-i) + "   blue:" + i);
}

myTable.innerHTML = genRows();