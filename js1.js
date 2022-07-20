var person;
function alert1() {
    return alert("شما نام خود را وارد نکردید، ولی خوش آمدید.");
  }
function alert2() {
    return alert(person + " عزیز، خوش آمدید.");
}
function welcome() {
    var txt;
  person = prompt("لطفاً نام و نام خانوادگی خود را وارد کنید:", "نام شما");
  if (person == null || person == "") {
    return alert1();
  } else {
    return alert2();
  }
}