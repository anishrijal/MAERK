'use strict';


import {Router} from 'express';
import * as controller from './employee.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', auth.hasRole('admin'), controller.index);
// router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/:id', auth.isAuthenticated(), controller.update);

module.exports = router;
