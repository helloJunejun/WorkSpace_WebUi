/**
 * 공통 자바스크립트 파일 : js/common.js
 */

/*alert("common.js load");
*/

/* 현재 날짜 년도4자리-월2자리-일2자리 기본형시그이 날짜 반환 함수 */
today = new Date(); // Date 객체 소환


// day = today.getDay();  




function getCurrentDate() {
	var year = today.getFullYear(); 
	var month = today.getMonth() + 1;
	if(month <= 9) {
		month = "0" + month;
	}
	var date = today.getDate();
	if(date <= 9) {
		month = "0" + month;
	}
	
	document.write(year + "-" + month + "-" + date);
}

function getCurrentDate2() {
	var today = new Date();
	var year = today.getFullYear(); 
	var month = today.getMonth() + 1;
	if(month <= 9) {
		month = "0" + month;
	}
	var date = today.getDate();
	if(date <= 9) {
		month = "0" + month;
	}
	
	today = year + "-" + month + "-" + date;
	
	return today;
}

function getCurrentTime() {
	var hours = today.getHours(); 
	var minutes = today.getMinutes();  
	var seconds = today.getSeconds();  
	
	document.write(hours + ':' + minutes + ':' + seconds);
}

function getCurrentTime2() {
	var hours = ("0" + today.getHours()).slice(-2); 
	var minutes = ("0" + today.getMinutes()).slice(-2); 
	var seconds = ("0" + today.getSeconds()).slice(-2); 
	
	return hours + ':' + minutes + ':' + seconds;
}

/* 현재 요일 반환 함수
	-- 일요일 월요일 화요일...토요일
	-- 배열 응용
*/
function getCurrentDay() {
	var days = ['일', '월', '화', '수', '목', '금', '토'];
	var day = today.getDay();
	
	var currentDate = days[day];
//	return days[day];
	console.log(currentDate);	
}












