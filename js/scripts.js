function romanNumerals(input) {
  const m = Math.trunc(input / 1000);
  let rm = (input % 1000);
  
}

$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    const input = parseInt($('#user').val());
    const out = romanNumerals(input);
  });
})