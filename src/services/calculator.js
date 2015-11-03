const ERROR_TYPES = {
	INVALID_PARAM: 'Invalid parameters',
	INFINITY: 'Résultat trop grand pour être affiché',
	DIVISION_BY_ZERO: 'Division par zéro',
	MODULO_BY_ZERO: 'Modulo par zéro'
}

function filterFloat(value) {
	if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)) {
		return Number(value);
	}
	return NaN;
}

class Calculator {
	add(op1, op2) {
		if (isNaN(filterFloat(op1)) || isNaN(filterFloat(op2))) {
			return ERROR_TYPES.INVALID_PARAM;
		}
		const a = parseFloat(op1);
		const b = parseFloat(op2);
		const res = a + b;

		return isFinite(res) ? res : ERROR_TYPES.INFINITY;
	}

	sub(op1, op2) {
		if (isNaN(filterFloat(op1)) || isNaN(filterFloat(op2))) {
			return ERROR_TYPES.INVALID_PARAM;
		}
		const a = parseFloat(op1);
		const b = parseFloat(op2);
		const res = a - b;

		return isFinite(res) ? res : ERROR_TYPES.INFINITY;
	}

	div(op1, op2) {
		if (isNaN(filterFloat(op1)) || isNaN(filterFloat(op2))) {
			return ERROR_TYPES.INVALID_PARAM;
		}
		if (b === 0) {
			return ERROR_TYPES.DIVISION_BY_ZERO;
		}
		const a = parseFloat(op1);
		const b = parseFloat(op2);
		const res = a / b;

		return isFinite(res) ? res : ERROR_TYPES.INFINITY;
	}

	mult(op1, op2) {
		if (isNaN(filterFloat(op1)) || isNaN(filterFloat(op2))) {
			return ERROR_TYPES.INVALID_PARAM;
		}
		const a = parseFloat(op1);
		const b = parseFloat(op2);
		const res = a * b;

		return isFinite(res) ? res : ERROR_TYPES.INFINITY;
	}

	mod(op1, op2) {
		if (isNaN(filterFloat(op1)) || isNaN(filterFloat(op2))) {
			return ERROR_TYPES.INVALID_PARAM;
		}
		if (b === 0) {
			return ERROR_TYPES.MODULO_BY_ZERO;
		}
		const a = parseFloat(op1);
		const b = parseFloat(op2);
		const res = a % b;

		return isFinite(res) ? res : ERROR_TYPES.INFINITY;
	}

	pow(op1, op2) {
		if (isNaN(filterFloat(op1)) || isNaN(filterFloat(op2))) {
			return ERROR_TYPES.INVALID_PARAM;
		}
		const a = parseFloat(op1);
		const b = parseFloat(op2);
		const res = Math.pow(a, b);

		return isFinite(res) ? res : ERROR_TYPES.INFINITY;
	}
}

const singleton = new Calculator();

export {
	ERROR_TYPES,
	singleton as calculator,
	Calculator
}
