/**
 * 1. 사용자 클래스에 멤버메서드 선언 및 prototype 사용 방법
 */

 /* 회원 클래스 선언 */
	function Member(memberId, name, mileage) {
		// 멤버변수 선언 및 초기화 수행
		this.memberId = memberId;
		this.name = name;
		this.mileage = mileage;
	}

	/* prototype  속성을 사용한 멤버메서드 선언 및 바인딩 : 클래스에 별도의 바인딩 필요하지 않음 */

Member.prototype.toString = function() {
	return this.memberId + ", " + this.name + ", " + this.mileage;	
	}
	
Member.prototype.setMileage = function(mile) {
	this.mileage = mile;	
	}
	
Member.prototype.getMileage = function() {
	return this.mileage;
	}