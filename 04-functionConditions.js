function month(m){
  if (m === 1) {
    return "This month has 31 days";
  } else if (m === 2) {
    return "This month has 28 days";
  } else if (2 < m && m <= 7){
    if (m % 2 === 1){
      return "This month has 31 days";
    } else {
      return "This month has 30 days";
    }
  } else if (8 <= m && m <= 12){
    if (m % 2 === 0){
      return "This month has 31 days";
    } else {
      return "This month has 30 days";
  }
}
}

console.log(month(1));
console.log(month(2));
console.log(month(4));
console.log(month(7));
console.log(month(8));
console.log(month(10));
