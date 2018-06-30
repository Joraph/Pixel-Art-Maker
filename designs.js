// Select color input
let height, width;
// Select size input
let color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();
  makeGrid(height, width);


});

function makeGrid(rows, coloumns) {
  $('tr').remove();

// // Your code goes here!
      // var i=1
      // // while (<= rows;)
  for (var i=1; i <= rows; i++){
    $('#pixelCanvas').append('<tr id = table' + i + '></tr>');
      for (var j=1; j <= coloumns; j++ ){
          $('#table' +i).append('<td></td>');
      }
      i=i+1;  
  }

  // make the color appears in cell

  $('td').click(function addColor(){
      color = $('#colorPicker').val();
      if ($(this).attr('style')){
        $(this).removeAttr('style')
      }else{
        $(this).attr('style', 'background-color:' + color);
      }
  });
}
