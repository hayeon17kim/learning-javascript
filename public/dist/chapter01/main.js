
$(document).ready(function() {
	'use strict';
	
	// Paper.js를 전역 스코프에 설치
	paper.install(window);

	// Paper.js를 캔버스에 연결하고 Paper.js가 그림을 그릴 수 있도록 준비
	paper.setup(document.getElementById('mainCanvas'));

	var tool = new Tool();

	// 텍스트의 배경으로 쓸 다른 원을 만든다.
	var c = Shape.Circle(200, 200, 80);
	c.fillColor = 'black';
	// 텍스트 객체 PointText 생성
	var text = new PointText(200, 200);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content = 'hello world';

	// onMouseDown 이벤트 핸들러 연결
// 사용자가 마우스를 클릭할 때마다 핸들러에 연결된 함수가 호출된다.
	tool.onMouseDown = function(event) {
		var c = Shape.Circle(event.point.x, event.point.y, 20);
		c.fillColor = '#B29784';
	};

	// Paper.js가 실제로 화면에 그림을 그리라는 명령
	paper.view.draw();
});

