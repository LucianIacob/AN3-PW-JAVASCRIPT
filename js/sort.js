/**
 * Created by Lucian on 04.11.2015.
 */
var order_col1 = "";
var order_col2 = "";
var order_col3 = "";

function sort_alphabetically(col) {
    var tbody = document.getElementById("body_table");
    var rows = tbody.rows;
    var row_len = rows.length;
    var arr = [];

    arr = load_table(row_len, rows, arr);

    if (col == "team") {
        if (order_col1 != "asc") {
            insertion_sort(row_len, arr, 0, tbody);
            order_col1 = "asc";
        }
        else {
            reverse_table(arr, row_len, tbody);
            order_col1 = "des";
        }
    }

    if (col == "city") {
        if (order_col2 != "asc") {
            insertion_sort(row_len, arr, 1, tbody);
            order_col2 = "asc";
        }
        else {
            reverse_table(arr, row_len, tbody, 1);
            order_col2 = "des";
        }
    }

    if (col == "points") {

        if (order_col3 != "asc") {
            insertion_sort_numbers(row_len, arr, tbody);
            order_col3 = "asc";
        }
        else {
            reverse_table(arr, row_len, tbody);
            order_col3 = "des";
        }
    }
}

function insertion_sort(row_len, arr, column, tbody) {
    for (var i = 0; i < row_len - 1; i++) {
        for (var j = i + 1; j < row_len; j++) {
            if (arr[i][column] > arr[j][column]) {
                arr = switch_rows(i, j, arr);
            }
        }
    }
    rewrite_table(row_len, arr, tbody);
}

function switch_rows(i, j, arr) {
    var aux = arr[i][0];
    arr[i][0] = arr[j][0];
    arr[j][0] = aux;

    aux = arr[i][1];
    arr[i][1] = arr[j][1];
    arr[j][1] = aux;

    aux = arr[i][2];
    arr[i][2] = arr[j][2];
    arr[j][2] = aux;
    return arr;
}

function insertion_sort_numbers(row_len, arr, tbody) {
    for (var i = 0; i < row_len - 1; i++) {
        for (var j = i + 1; j < row_len; j++) {
            if (parseInt(arr[i][2]) > parseInt(arr[j][2])) {
                arr = switch_rows(i, j, arr);
            }
        }
    }
    rewrite_table(row_len, arr, tbody);
}

function rewrite_table(row_len, arr, tbody) {

    for (var i = 0; i < row_len; i++) {
        for (var j = 0; j < 3; j++)
            tbody.rows[i].cells[j].innerHTML = arr[i][j];
    }
}

function load_table(row_len, rows, arr) {
    for (var i = 0; i < row_len; i++) {
        arr[i] = [];
        for (var j = 0; j < 3; j++) {
            arr[i][j] = rows[i].cells[j].innerHTML;
        }
    }
    return arr;
}

function reverse_table(arr, row_len, tbody) {
    for (var i = 0; i < row_len / 2; i++) {
        var aux = arr[i][0];
        arr[i][0] = arr[row_len - i - 1][0];
        arr[row_len - i - 1][0] = aux;

        aux = arr[i][1];
        arr[i][1] = arr[row_len - i - 1][1];
        arr[row_len - i - 1][1] = aux;

        aux = arr[i][2];
        arr[i][2] = arr[row_len - i - 1][2];
        arr[row_len - i - 1][2] = aux;
    }
    rewrite_table(row_len, arr, tbody);
}
