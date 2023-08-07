
// 화살표함수와 this
const dog = {
	name: '뽀삐',
	regularFn: function () {
		console.log('regular : ', this);	// 자기자신 객체
	},
	arrowFn: () => {
		console.log('arrow : ', this);	// window객체
	},
};

dog.regularFn();
dog.arrowFn();

console.log('===================');

const cat = {
	name: '나비',
	introduce: function () {
		console.log(`intro this : `, this);
		setTimeout(() => {
			console.log(`setTime : `, this);
			console.log(`안녕 제 이름은 ${this.name}에요`);
		}, 3000);
	}
};
cat.introduce();

