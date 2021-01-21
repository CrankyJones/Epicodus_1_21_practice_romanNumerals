function convert(number, letter) {
  let array = [];
  for (let i = 0; i < number; i++) {
    array.push(letter);
  }
  return array.join('');
}

function romanNumerals(input) {
  let sentence = [];
  const m = Math.trunc(input / 1000);
  const m1 = convert(m, 'M');
  sentence.push(m1);

  let rm = (input % 1000);
  const d = Math.trunc(rm / 500);
  const d1 = convert(d, 'D');
  sentence.push(d1);
  let rm2 = (rm % 500);

  const c = Math.trunc(rm2 / 100);
  const c1 = convert(c, 'C');
  sentence.push(c1);
  let rm3 = (rm2 % 100);

  const l = Math.trunc(rm3 / 50);
  const l1 = convert(l, 'L');
  sentence.push(l1);
  let rm4 = (rm3 % 50);

  const x = Math.trunc(rm4 / 10);
  const x1 = convert(x, 'X');
  sentence.push(x1);
  let rm5 = (rm4 % 10);

  const v = Math.trunc(rm5 / 5);
  const v1 = convert(v, 'V');

  sentence.push(v1);
  let i = (rm5 % 5);
  const i1 = convert(i, 'I');
  sentence.push(i1);

  return sentence.join('');
}

$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    const input = parseInt($('#user').val());
    const out = romanNumerals(input);
    $('.output').text(out);
  });
})