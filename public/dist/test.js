'use strict'; // es6 기능: 블록 스코프 변수 선언

var sentences = [{
  subject: 'I',
  verb: 'am',
  object: 'tired'
}, {
  subject: 'I',
  verb: 'need',
  object: 'coffee'
}]; // es6 기능: 객체 분해

function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;
  // es6 기능: 템플릿 문자열
  console.log("".concat(subject, " ").concat(verb, " ").concat(object));
} // es6 기능: for .. of


for (var _i = 0, _sentences = sentences; _i < _sentences.length; _i++) {
  var s = _sentences[_i];
  say(s);
}