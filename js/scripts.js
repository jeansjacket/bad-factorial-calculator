var factorial = function(number) {
  var result = 1;
  for (var index = 1; index < number; index +=1) {
    result *= (index + 1);
  }
  return result;
};

$(document).ready(function(){
  $('#resultdiv').hide();

  $('form#factorial').submit(function(event){
    event.preventDefault();

    var number = parseInt($('input#number').val());
    var result = factorial(number);
    

    $('#resultdiv').show();

    if (result === Infinity){
      $('#resultdiv').text("Oops, that number is huge, my Dog.");
    } else {
      $('#result').text(result);
    }
  });
});

// var leapYear = function(year){
//   if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// $(document).ready(function(){
//   // debugger;
//   $('#result').hide();
//
//   $('form#leap-year').submit(function(event){
//     event.preventDefault();
//
//     var year = parseInt($('input#year').val());
//     var result = leapYear(year);
//     // alert(result);
//
//     if (result === true) {
//       $('#result').show();
//       $('#year').text(result);
//     } else {
//       $('.not').text('not');
//       $('#result').show();
//       $('#year').text(result);
//     }
//
//
//   });
//
//   event.preventDefault();
// });
