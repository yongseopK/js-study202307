
const emp = {
    empName: '뽀로로',
    age: 4,
    hireDate: '2021-01-01',
    birthDay: '2020-01-01'
};

const { empName, age, birthDay } = emp;

console.log(`내 이름은 ${empName}이고, 나이는 ${age}살입니다. 그래고 생일은 ${birthDay}입니다.`);

const { empName: en, age: a, birthDay: bd } = emp;

console.log(`제 이름은 ${en}이고, 나이는 ${a}살입니다. 그래고 생일은 ${bd}입니다.`);

const { birthDay: bDay, ...others } = emp;
console.log('=================================');
console.log(others);

// 객체 복사
console.log('=================================');
const copyEmp = {
    ...emp,
    address: '청양군',
    hobbies: ['산책', '수영'],
    age: 17
};
copyEmp.empName = '잔망루피';

console.log(copyEmp);
console.log('=================================');
console.log(emp);
