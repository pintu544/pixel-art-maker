//Javascript code used to create a table for pixel art.
$(document).ready(function () {
  $("#sizePicker").submit(function grid(grid) { // selection of DOM element "form" for "submit" event.
  $('table tr').remove();                          // IMPORTANT ! Clears previously created grid. Everytime a new value is added for grid height and grid width a new table should appear.
    $("table tr").remove();
    var ri = $("#ih").val();  // Grid height is equal to number of rows.
var cells=$('#input_width').val();                 // Grid width is equal to number of columns.
    var ci = $("#iw").val();
    for (var i = 1; i <= ri; i++) {
      $("table").append("<tr></tr>");
      for (var j = 1; j <= ci; j++) {
        $("tr:last").append("<td></td>"); //IMPORTANT ! tr: last makes sure that the cells are added only to the last created table row and not for all.
        $("td").attr("class", "cells");
      }
    }
    grid.preventDefault();//IMPORTANT ! avoids the page to be refreshed after clicking on submit button and retains the table/grid.
//Javascript code used to select and apply color to the cell of the canvas.
    $(".cells").click(function (event) {//event delegation - checks for any changes in table with id pixel_canvas and makes changes to element with class .pixel
// Toggle the grid after creating the pixel art..Take a screenshot/use snipping tool...

      var pick = $("#colorPicker").val();
      $(event.target).css("background-color", pick);
    });
  });
});
