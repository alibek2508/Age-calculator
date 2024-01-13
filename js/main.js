const btn = document.querySelector(".btn");
btn.addEventListener("click", changeCalculate);
function changeCalculate() {
	let newDate = new Date();
	let years = newDate.getFullYear();
	let day = newDate.getDate();
	let month = newDate.getMonth();
	let dayIn = document.querySelector(".dayIn").value;
	let monthIn = document.querySelector(".monthIn").value;
	let yersIn = document.querySelector(".yearsIn").value;
	if (month === monthIn - 1 && day < dayIn) {
		document.querySelector(".yers").innerHTML = years - yersIn - 1;
	} else if (month === monthIn - 1) {
		document.querySelector(".yers").innerHTML = years - yersIn;
	} else if (month !== monthIn - 1) {
		document.querySelector(".yers").innerHTML = years - yersIn - 1;
	}
	if (month === monthIn - 1) {
		document.querySelector(".day").innerHTML = Math.abs(day - dayIn);
	} else if (month !== monthIn - 1) {
		document.querySelector(".day").innerHTML = dayIn;
	}
	if (month === monthIn - 1) {
		document.querySelector(".month").innerHTML = 12 + 1 - monthIn + month;
	} else {
		document.querySelector(".month").innerHTML = 12 + 1 - monthIn + month;
	}
}
