let map = new Map([
    [6, "six"],
    [7, "seven"],
    [11, "eleven"]
]);

for (let name of map.keys()) {
    console.log(` люч Ч ${name}, значение Ч ${map.get(name)}`);
}