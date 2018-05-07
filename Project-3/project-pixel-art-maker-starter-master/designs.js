// Select color input
//use const instead of var, use let to reassign
const colorPicker = $('#colorPicker')
// Select size input
const row=0, col=0, colors=0;
// When size is submitted by the user, call makeGrid()
//var submit = $('input[type=submit]');
const tables = $('#pixelCanvas');

$("#sizePicker").on('submit',function(event){
    event.preventDefault();
    makeGrid();
});

//tables.mouseover(function(){
tables.on('click',function(event){
  let colors = colorPicker.val();
  $(event.target).css('background-color',colors);

  $('h2').css('color',colors);
  //tables.target
});

function makeGrid() {
  tables.empty();
  let row = $('#inputHeight').val();
  let col = $('#inputWeight').val();
  for (let rows=0; rows < row; rows++){
    const addRow = tables.append('<tr>');
  }
  for (let cols=0; cols < col; cols++){
  $('tr').each(function(){     //for each tr
      $(this).append('<td>');  //add td
    });
  }
}
