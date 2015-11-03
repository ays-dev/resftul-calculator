'use strict';

require('babel/register')({
	stage: 0,
	only: ['./src/']
});
require('./src/init/index');
