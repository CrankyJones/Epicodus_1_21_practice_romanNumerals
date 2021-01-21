function convert(number, letter) {
  let sentence = [];
  for (let i = 0; i < number; i++) {
    sentence.push(letter);
    return sentence;
  }
}

function romanNumerals(input) {
  let sentence = [];
  const m = Math.trunc(input / 1000);
  for (let i = 0; i < m; i++) {
    sentence.push('M');
  }
  let rm = (input % 1000);
  const d = Math.trunc(rm / 500);
  for (let i = 0; i < d; i++) {
    sentence.push('D');
  }
  let rm2 = (rm % 500);
  const c = Math.trunc(rm2 / 100);
  for (let i = 0; i < c; i++) {
    sentence.push('C');
  }
  let rm3 = (c % 100);
  const l = Math.trunc(rm3 / 50);
  for (let i = 0; i < l; i++) {
    sentence.push('L');
  }
  let rm4 = (rm3 % 50);
  const x = Math.trunc(rm4 / 10);

  let rm5 = (rm4 % 10);
  const v = Math.trunc(rm5 / 5);
  let i = (rm5 % 5);



  return sentence.join('');
}

$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    const input = parseInt($('#user').val());
    const out = romanNumerals(input);
  });
})