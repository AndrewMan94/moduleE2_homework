var arr = [6, 2, 4, 7, 0, 5, null, "A", true];

var evenNum = 0;
var oddNum = 0;
var zeros = 0;
var other = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
        if (arr[i] === 0) {
            zeros += 1;
        } else if (arr[i] % 2 === 0) {
            evenNum += 1;
        } else if (arr[i] % 2 !== 0) {
            oddNum += 1;
        }
    } else {
        other += 1;
    }
}

console.log(`���������� ������ �����: ${evenNum}`);
console.log(`���������� �������� �����: ${oddNum}`);
console.log(`���������� �����: ${zeros}`);
console.log(`���������� ���������� ���������: ${other}`);