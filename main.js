/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function() {
    $('#container').append('<table></table>');
    var makeGrid = function ( rows, cols) {
        for (i = 1; i <= rows; i++) {
            jQuery('table').append('<tr></tr>');
        }
        for (i = 1; i <= cols; i++) {
            jQuery('tr').append('<td></td>');
        }
    };
    makeGrid(16, 16);
} );