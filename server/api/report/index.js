'use strict';


import {Router} from 'express';
import * as controller from './report.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();
//
router.get('/',  auth.hasRole('admin'),controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);

// router.get('/', auth.hasRole('admin'), controller.index);
// router.get('/:id', auth.isAuthenticated(), controller.show);
// router.post('/', auth.isAuthenticated(), controller.create);
// router.post('/:id', auth.isAuthenticated(), controller.update);

module.exports = router;
