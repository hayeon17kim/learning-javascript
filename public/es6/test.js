'use strict';
// es6 기능: 블록 스코프 변수 선언
const sentences = [
	{ subject: 'I', verb: 'am', object: 'tired'},
	{ subject: 'I', verb: 'need', object: 'coffee'}
];

// es6 기능: 객체 분해
function say({ subject, verb, object }) {
	// es6 기능: 템플릿 문자열
	console.log(`${subject} ${verb} ${object}`);
}

// es6 기능: for .. of
for (let s of sentences) {
	say(s);
}