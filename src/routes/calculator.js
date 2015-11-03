import { Router } from 'express'
import { calculator, ERROR_TYPES } from '../services/calculator'

const router = Router();

function populateFirstOperand(req, res, next) {
	if(req.query.first_operand) {
		req.firstOperand = req.query.first_operand;
	}
	next();
}

function populateSecondOperand(req, res, next) {
	if(req.query.second_operand) {
		req.secondOperand = req.query.second_operand;
	}
	next();
}

function addition(req, res) {
	const result = calculator.add(req.firstOperand, req.secondOperand);
	let status = 200;

	if (result === ERROR_TYPES.INVALID_PARAM
		|| result === ERROR_TYPES.INFINITY) {
		status = 400;
	}

	if (req.query.format === 'json') {
		res.status(status).json({ result });
	}
	else {
		res.status(status).send(result.toString());
	}
}

function substraction(req, res) {
	const result = calculator.sub(req.firstOperand, req.secondOperand);
	let status = 200;

	if (result === ERROR_TYPES.INVALID_PARAM
		|| result === ERROR_TYPES.INFINITY) {
		status = 400;
	}

	if (req.query.format === 'json') {
		res.status(status).json({ result });
	}
	else {
		res.status(status).send(result.toString());
	}
}

function multiplication(req, res) {
	const result = calculator.mult(req.firstOperand, req.secondOperand);
	let status = 200;

	if (result === ERROR_TYPES.INVALID_PARAM
		|| result === ERROR_TYPES.INFINITY) {
		status = 400;
	}

	if (req.query.format === 'json') {
		res.status(status).json({ result });
	}
	else {
		res.status(status).send(result.toString());
	}
}

function division(req, res) {
	const result = calculator.div(req.firstOperand, req.secondOperand);
	let status = 200;

	if (result === ERROR_TYPES.INVALID_PARAM
		|| result === ERROR_TYPES.INFINITY
		|| result === ERROR_TYPES.DIVISION_BY_ZERO ) {
		status = 400;
	}

	if (req.query.format === 'json') {
		res.status(status).json({ result });
	}
	else {
		res.status(status).send(result.toString());
	}
}

function modulo(req, res) {
	const result = calculator.mod(req.firstOperand, req.secondOperand);
	let status = 200;

	if (result === ERROR_TYPES.INVALID_PARAM
		|| result === ERROR_TYPES.INFINITY
		|| result === ERROR_TYPES.MODULO_BY_ZERO) {
		status = 400;
	}

	if (req.query.format === 'json') {
		res.status(status).json({ result });
	}
	else {
		res.status(status).send(result.toString());
	}
}

function power(req, res) {
	const result = calculator.pow(req.firstOperand, req.secondOperand);
	let status = 200;

	if (result === ERROR_TYPES.INVALID_PARAM
		|| result === ERROR_TYPES.INFINITY) {
		status = 400;
	}

	if (req.query.format === 'json') {
		res.status(status).json({ result });
	}
	else {
		res.status(status).send(result.toString());
	}
}

router.route('/addition')
	.all(populateFirstOperand)
	.all(populateSecondOperand)
	.get(addition);

router.route('/substraction')
	.all(populateFirstOperand)
	.all(populateSecondOperand)
	.get(substraction);

router.route('/multiplication')
	.all(populateFirstOperand)
	.all(populateSecondOperand)
	.get(multiplication);

router.route('/division')
	.all(populateFirstOperand)
	.all(populateSecondOperand)
	.get(division);

router.route('/modulo')
	.all(populateFirstOperand)
	.all(populateSecondOperand)
	.get(modulo);

router.route('/power')
	.all(populateFirstOperand)
	.all(populateSecondOperand)
	.get(power);

export default router
