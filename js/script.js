function allInputs () {
  $('#textOutput').text($('#textInput').val());
  $('#colorOutput').text($('#colorInput').val());
  $('#radioOutput').text($('#radioInput').val());
  $('#checkOutput').text($('#checkInput').val());
  $('#dateOutput').text($('#dateInput').val());  
  $('#datetimeOutput').text($('#datetimeInput').val());  
  $('#monthOutput').text($('#monthInput').val());    
  $('#emailOutput').text($('#emailInput').val());  
  $('#passwordOutput').text($('#passwordInput').val());  
  $('#numberOutput').text($('#numberInput').val());  
  $('#rangeOutput').text($('#rangeInput').val());  
  $('#telOutput').text($('#telInput').val());  
  $('#timeOutput').text($('#timeInput').val());  
  
}

$('document').ready(allInputs); 
$('form').change(allInputs); 