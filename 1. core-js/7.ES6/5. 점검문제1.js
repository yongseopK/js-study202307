const traders = [
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022,
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아 
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요 
const lastYearTrade = traders
  .filter((t) => t.year === 2022)
  .map((t) => t.trader)
console.log(lastYearTrade);

console.log('===============================================\n');

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
// const workCity = traders
//   .map(t => t.trader)
//   .forEach(a => console.log(`${a.name}의 근무 도시 : ${a.city}`));

const mappedCities = traders.map(trs => trs.trader.city);
const cities = [...new Set(mappedCities)];
console.log(cities);

console.log('===============================================\n');

// 연습 3: 대전에 근무하는 
// 모든 거래자를 찾아 거래자정보를 배열에 매핑해주세요.
traders
  .filter(t => t.trader.city === '대전')
  .map(t => t.trader)
  .forEach(trd => console.log(trd));

console.log('===============================================\n');

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
const traderName = traders
// .map(t => t.trader.name)
// .forEach(t => console.log(t));
const mappedNames = traders.map(t => t.trader.name);
const names = [...new Set(mappedNames)];
console.log(names);
console.log('===============================================\n');

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
// let total = 0;
// const SeoulInTraderValue = traders
//   .filter(t => t.trader.city === "서울")
//   .map(t => t.value)
//   .forEach(value => total += value);
// console.log(total);

const total = traders
  .filter(t => t.trader.city === "서울")
  .reduce((acc, curr) => acc + curr.value, 0);
console.log(total);

