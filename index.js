function age() {
  const d1 = document.getElementById("date").value;
  const m1 = document.getElementById("month").value;
  const y1 = document.getElementById("year").value;
  const age = document.getElementById("age");

  const date = new Date();
  let d2 = date.getDate();
  let m2 = date.getMonth() + 1;
  let y2 = date.getFullYear();
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;

  age.innerHTML = `Your age is ${y} Year ${m} Month and ${d} Days`;
}
