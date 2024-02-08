function pNumber(Pnumber) {
  let number = +prompt(
    "Iltimos telefon raqamingizni kiriting",
    "+998911234567"
  );

  if (number > 999999999999 || number < 99999999999) {
    console.log("Telefon raqam kamida 13ta belgidan iborat bolishi kerak");
  } else {
    console.log("+" + number);
  }
}

function el(email) {
  let emailEl = prompt(
    "Iltimos elektron pochtangizni kiriting",
    "mirziyodabdumutalov@gmail.com"
  );
  if (Number(emailEl)) {
    console.log("El pochtani notogri kiritdingiz");
  } else {
    console.log(emailEl);
  }
}
let countdown = setInterval(function age(age) {
  let age_ = +prompt("Iltimos yoshingizni kiriting");
  age_--;
  if (!Number(age_)) {
    console.log("Iltimos raqam bilan kiriting");
  } else if (age_ >= 100) {
    console.log("Bu inson uchun juda katta yosh");
  } else if (age_ <= 5) {
    console.log("Siz hali juda kichiksiz");
  } else {
    console.log(age_);
  }
  if (age_ < -0) {
    clearInterval(countdown);
  }
}, 1000);

console.log(pNumber());
console.log(el());
