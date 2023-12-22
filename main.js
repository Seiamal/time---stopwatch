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



/* WatchTime Section */

let myhour = document.getElementById('myhour');
let myminute = document.getElementById('myminute');
let mysec = document.getElementById('mysec');

let hr5 = 0;
let min5 = 0;
let sec5 = 0;

let stopTime = true;


function startWatch() {
	if(stopTime == true){
		stopTime = false;
		timer() ;
	}
}


function pauseWatch() {
	if(stopTime ==false){
		stopTime = true;
	}
}
function timer() {
	if(stopTime == false){
		sec5++;
		
		if(sec5 == 60){
			min++;
			sec5 = 0;
		}
		
		if(min5 == 60){
			hr5++;
			min5 = 0;
		}
		
		
		let s = (sec5 < 10)? '0' + sec5 : sec5;
		let m = (min5 < 10)? '0' + min5 : min5;
		let h = (hr5 < 10)? '0' + hr5 : hr5;

		myhour.innerText = h;
		myminute.innerText = m;
		mysec.innerText = s;
		
		
		setTimeout(timer,1000);
	}
	
}
