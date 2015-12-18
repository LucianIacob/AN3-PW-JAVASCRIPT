var numbers = {};
var operation = "";

function btn_num(parameters) {
    var number = parameters.number;
    if (get_text() != "0")
        document.getElementById("display_text").value = get_text() + number;
    else
        document.getElementById("display_text").value = number;
}

function get_text() {
    return document.getElementById("display_text").value;
}

function btn_bkspace() {
    document.getElementById("display_text").value = "";
}

function comma() {
    if (get_text() == "" || get_text() == "0")
        document.getElementById("display_text").value = "0.";
    else
        document.getElementById("display_text").value = get_text() + ".";
}

function display_not_valid() {
    return isNaN(get_text()) || !get_text();
}

function btn_del_char() {
    if (display_not_valid()) {
        alert("You have inserted some wired characters");
        return;
    }
    var substring;
    substring = get_text().substring(0, get_text().length - 1);
    document.getElementById("display_text").value = substring;
}

function add() {
    if (display_not_valid()) {
        alert("First number contains some wired characters");
        return 0;
    }
    numbers.first = parseFloat(get_text());
    operation = "+";
    btn_bkspace();
}

function multiply() {
    if (display_not_valid()) {
        alert("First number contains some wired characters");
        return 0;
    }
    numbers.first = parseFloat(get_text());
    operation = "*";
    btn_bkspace();
}

function minus() {
    if (display_not_valid()) {
        alert("First number contains some wired characters or is empty");
        return 0;
    }
    numbers.first = parseFloat(get_text());
    operation = "-";
    btn_bkspace();
}

function btn_division() {
    if (display_not_valid()) {
        alert("First number contains some wired characters");
        return 0;
    }
    numbers.first = parseFloat(get_text());
    operation = "/";
    btn_bkspace();
}

function btn_mod() {
    if (display_not_valid()) {
        alert("First number contains some wired characters");
        return 0;
    }
    numbers.first = parseFloat(get_text());
    document.getElementById("display_text").value = numbers.first / 100;
}

function btn_sqrt() {
    if (display_not_valid()) {
        alert("Number contains some wired characters");
        return 0;
    }
    var nr = parseFloat(get_text());
    if (nr < 0) {
        alert("Sqrt is only for numbers > 0");
        return 0;
    }
    document.getElementById("display_text").value = Math.round(Math.sqrt(nr) * 1000) / 1000;
}

function btn_change_sign() {
    if (display_not_valid()) {
        alert("Number contains some wired characters");
        return 0;
    }
    var nr = parseFloat(get_text());
    document.getElementById("display_text").value = -nr;
}

function btn_div() {
    if (display_not_valid()) {
        alert("Number contains some wired characters");
        return 0;
    }
    var nr;
    nr = parseFloat(get_text());
    document.getElementById("display_text").value = 100 / (Math.round(nr * 100));
}

function btn_xPOWy() {
    if (display_not_valid()) {
        alert("Number contains some wired characters");
        return 0;
    }
    numbers.first = parseFloat(get_text());
    operation = "^";
    btn_bkspace();
}

function btn_show_result() {
    if (display_not_valid()) {
        alert("Second number contains some wired characters");
        return 0;
    }

    numbers.second = parseFloat(get_text());
    if (operation === "+")
        document.getElementById("display_text").value = numbers.first + numbers.second;
    if (operation === "*") {
        //noinspection JSDuplicatedDeclaration
        var result = numbers.first * numbers.second;
        document.getElementById("display_text").value = Math.round(result * 100) / 100;
    }
    if (operation == "-") {
        //noinspection JSDuplicatedDeclaration
        var result = numbers.first - numbers.second;
        document.getElementById("display_text").value = Math.round(result * 100) / 100;
    }
    if (operation == "/") {
        //noinspection JSDuplicatedDeclaration
        var result = numbers.first / numbers.second;
        document.getElementById("display_text").value = Math.round(result * 100) / 100;
    }
    if (operation == "^") {
        //noinspection JSDuplicatedDeclaration
        var result = Math.pow(numbers.first, numbers.second);
        document.getElementById("display_text").value = Math.round(result * 100) / 100;
    }
}