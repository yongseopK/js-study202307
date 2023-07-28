const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스']
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스']
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상']
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스']
  },
];


// 4명의 회원 중 취미가 딱 2개인 사람들만 필터링.
// 취미가 2개인 사람만 모아서 배열에 다시 담아줘

function filterByHas2Hobby() {
  const filteredArray = [];
  for (let user of userList) {
    if (user.hobbys.length === 2) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}

// 서울 사는 사람들만 필터링해서 새로운 배열에 담아달라
function filterUserLivedInSeoul() {
  const filteredArray = [];
  for (let user of userList) {
    if (user.address === '서울') {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}

// 콜백을 이용한 필터링 함수
function filter(condition) {
  const filteredArray = [];
  for (let user of userList) {
    if (condition(user)) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}

// const results1 = filter((user) => user.hobbys.length >= 3);
// console.log(results1);


const results2 = filter((user) => user.address === '서울' && user.job === '게이머');
console.log(results2);
// const hobby2 = filterByHas2Hobby();
// console.log(hobby2);

// const liveInSeoul = filterUserLivedInSeoul();
// console.log(liveInSeoul);

// 회원정보중에 회원 이름만 전부 모아서 배열에 담아줘
// 매핑
function map(callback) {
  // 이름 담을 배열
  const mappedArray = [];
  for (const user of userList) {
    mappedArray.push(callback(user));
  }
  return mappedArray;
}

console.log('===============================================');
const nameList = map(user => user.userName);
console.log(nameList);

const addressList = map(user => user.address);
console.log(addressList);