let numbers = [];

while (true) {
    let inputNumber = prompt("숫자를 입력해주세요 ! ");

    if (inputNumber === "그만") {
        let sum = 0;
        numbers.forEach(f => {
            sum += f;
        });
        alert(`입력한 숫자 목록 : ${numbers}\n입력한 숫자 총합 : ${sum}`);
        break;
    }
    numbers.push(Number(inputNumber));
}
