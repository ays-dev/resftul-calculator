import { Router } from 'express'

const router = Router();

router.route('/')
	.get(function(req, res, next) {
		res.send({
			"addition_url": "http://" + req.get('host') + '/addition?first_operand=[A]&second_operand=[B]&format=json',
			"substraction_url": "http://" + req.get('host') + '/substraction?first_operand=[A]&second_operand=[B]&format=json',
			"multiplication_url": "http://" + req.get('host') + '/multiplication?first_operand=[A]&second_operand=[B]&format=json',
			"division_url": "http://" + req.get('host') + '/division?first_operand=[A]&second_operand=[B]&format=json',
			"modulo_url": "http://" + req.get('host') + '/modulo?first_operand=[A]&second_operand=[B]&format=json',
			"power_url": "http://" + req.get('host') + '/power?first_operand=[A]&second_operand=[B]&format=json'
		});
	});

export default router
