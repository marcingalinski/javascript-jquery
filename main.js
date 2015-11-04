/*jslint browser: true*/
/*global $, jQuery, alert*/
var size = 16;

var paint = function () {
    $('td').on('mouseenter', function () {
        $(this).addClass('hovered');
    } );
};

var makeGrid = function ( rows, cols) {
    $('table').children().remove();
    for (i = 1; i <= rows; i++) {
        jQuery('table').append('<tr></tr>');
    }
    for (i = 1; i <= cols; i++) {
        jQuery('tr').append('<td></td>');
    }
    paint();
};

$(document).ready(function() {
    $('#container').append('<table></table>');
    makeGrid(size, size);
} );

$(document).ready(function() {
    $('button').on('click', function () {
        var size = prompt('size of a grid', size);
        makeGrid(size, size);
    } );
} );
