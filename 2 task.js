var x;

switch (typeof x) {
    case "number":
        console.log("x Ч числовой тип");
        break;
    case "string":
        console.log("x Ч строковый тип");
        break;
    case "boolean":
        console.log("x Ч логический тип");
        break;
    default:
        console.log("“ип x не определЄн");
}