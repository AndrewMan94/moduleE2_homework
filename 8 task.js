let map = new Map([
    [6, "six"],
    [7, "seven"],
    [11, "eleven"]
]);

for (let name of map.keys()) {
    console.log(`���� � ${name}, �������� � ${map.get(name)}`);
}