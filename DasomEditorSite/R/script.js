let isControlMode;

EVENT('keydown', (e) => {
	
	if (isControlMode === true) {
		
		let key = e.getKey().toLowerCase();
		
		// 현재 탭 종료
		if (key === 'w') {
			location.href = 'about:blank';
		}
	}
	
	if (e.getKey() === 'Control') {
		isControlMode = true;
	}
});

EVENT('keyup', (e) => {
	if (e.getKey() === 'Control') {
		isControlMode = false;
	}
});