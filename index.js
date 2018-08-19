var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}

function nowServing(katzDeli, name) {
  if (katzDeli.length > 0) {
  return (`${name}`);
  }
  katzDeli.shift(`${name}`);
  else {
  return ("There is nobody waiting to be served!");
  }
}