var user_input = prompt();
var user_input = +user_input;

if (typeof user_input === "number") {
    if (isNaN(user_input)) {
        console.log("”пс, кажетс€, вы ошиблись");
    } else if (user_input % 2 === 0) {
        console.log(`${user_input} - это чЄтное число.`);
    } else {
        console.log(`${user_input} - это нечЄтное число.`);
    }
}