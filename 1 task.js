var user_input = prompt();
var user_input = +user_input;

if (typeof user_input === "number") {
    if (isNaN(user_input)) {
        console.log("���, �������, �� ��������");
    } else if (user_input % 2 === 0) {
        console.log(`${user_input} - ��� ������ �����.`);
    } else {
        console.log(`${user_input} - ��� �������� �����.`);
    }
}