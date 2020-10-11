window.addEventListener('load', () => {
	const canvas = document.querySelector("#canvas");
	const ctx = canvas.getContext('2d');
	//Resizing
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	//variables
	let painting = false;
// css 텍스트에 HTML 
	// EventListener
	function startPosition(e) {
		painting = true;
		draw(e);
	}

	function finishedPosition() {
		painting = false;
		ctx.beginPath();
	}
	
	function draw(e) {
		if (!painting) return;
		ctx.lineWidth = 20;
		ctx.lineCap = 'round';
		ctx.strokeStyle = 'rgba(255, 212, 0, 0.7)';
		// 조건문: 동그라미가 그려졌으면 이벤트가 계속 실행되지 않도록..
		// 덧칠되지 않게...
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);
	}
	canvas.addEventListener('mousedown', startPosition);
	canvas.addEventListener('mouseup', finishedPosition);
	canvas.addEventListener('mousemove', draw);
	
});
