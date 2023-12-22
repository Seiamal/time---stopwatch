function timeZone() {
	let hour = document.querySelector('.hour');
	
	let minute = document.querySelector('.minute');

	let second = document.querySelector('.second');

	let session = document.querySelector('.session');
	
	
	
	const d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	let s = d.getSeconds();
	
	
	if (h > 12) {
		h = h -12;
		session.innerText = 'PM';
	}
	if(h == 0){
		h = 12;
	}
	
h =	(h < 10) ? '0' + h : h;
m =	(m < 10) ? '0' + m : m;
s =	(s < 10) ? '0' + s : s;
	
	hour.innerHTML = h;
	minute.innerHTML = m;
	second.innerHTML = s;
	
}

timeZone();

setInterval(timeZone,1000);