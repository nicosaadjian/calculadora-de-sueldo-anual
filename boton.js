const calculadora = document.querySelector("#calculadora-de-sueldo");

const salarioAnual = document.querySelector("#salario-anual");

calculadora.onclick = function () {
	let getSueldo = document.querySelector("#sueldo").value;
	salarioAnual.value = getSueldo * 12;

	return false;
};
