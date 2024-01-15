const btn = document.querySelector(".btn");
btn.addEventListener("click", changeCalculate);

const monthIn = document.querySelector(".monthIn");
const dayIn = document.querySelector(".dayIn");
const yearsIn = document.querySelector(".yearsIn");
monthIn.addEventListener("keyup", () => {
	if (monthIn.value >= 13) {
		document.querySelector(".outErrorMonth").innerHTML = "ошибка";
	}
});
dayIn.addEventListener("keyup", () => {
	if (dayIn.value > 31) {
		document.querySelector(".outErrorDay").innerHTML = "ошибка";
	}
});
yearsIn.addEventListener("keyup", () => {
	if (yearsIn.value > 2024) {
		document.querySelector(".outErrorYear").innerHTML = "ошибка";
	}
});

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
	if (yersIn === years && monthIn - 1 === month) {
		document.querySelector(".month").innerHTML = 0;
	} else if (month === monthIn - 1) {
		document.querySelector(".month").innerHTML = 12 - monthIn + month;
	} else {
		document.querySelector(".month").innerHTML = 12 + 1 - monthIn + month;
	}
}
