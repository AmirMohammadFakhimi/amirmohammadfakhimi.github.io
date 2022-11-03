function alert1() {
    return alert("نظر شما ثبت شد.\nبا تشکّر از شما");
}

function alert2() {
    return alert("ثبت نهایی لغو شد.");
}

function function2() {
    if (confirm("آیا مایل به ثبت نهایی هستید؟")) {
        alert1();
    } else {
        alert2();
    }
}