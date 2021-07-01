/**
 * 1. 사용자 클래스에 멤버메서드 선언 및 바인딩 방법
 */

/* 회원 클래스 선언 */
	function Member(memberId, name, mileage) {
		// 멤버변수 선언 및 초기화 수행
		this.memberId = memberId;
		this.name = name;
		this.mileage = mileage;
		
		// 회원의; 전체정보를 반환하는 멤버메서드 바인딩 연결 선언
		this.toString = toString;
		
		// 회원의 마일리지 변경하는 멤버메서드 바인딩 연결 선언
		this.setMileage = setMileage;
		
		// 회원의 마일리지 반환하는 멤버메서드 바인딩 연결 선언
		this.getMileage = getMileage;
	}
	
	/* 회원 객체 생성 */
	var dto1 = new Member("user01", "홍길동", 1000);
	var dto2 = new Member("user02", "강감찬", 2000);
	
	/* 회원 객체 property(멤버변수) 출력 */
	document.write("<div>" + dto1.memberId + ", " + dto1.name + ", " + dto1.mileage + "</div>");
	document.write("<div>" + dto2.memberId + ", " + dto2.name + ", " + dto2.mileage + "</div>");
	
	/* 회원 객체 멤버메서드 이용해서 정보출력, 마일리지 변경, 마일리지 조회 */
	function toString() {
		return this.memberId + ", " + this.name + ", " + this.mileage;	
	}
	
	function setMileage(mile) {
		this.mileage = mile;		
		//return this.mileage;		
	}
	
	function getMileage() {
		return this.mileage;		
	}
	
	document.write("<div> 유저1 전체조회 : " + dto1.toString() + "</div>");
	document.write("<div> 유저1 마일리지 5000으로 변경 : " + dto1.setMileage(5000) + "</div>");
	document.write("<div> 유저1 마일리지 조회 : " + dto1.getMileage() + "</div>");
	document.write("<div> 유저1 전체조회 : " + dto1.toString() + "</div>");
	
	
	