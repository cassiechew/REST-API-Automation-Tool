import express from 'express';
import * from '../controllers/&Controller';

const router = express.Router();

const & = new *();

router.get('/',     &.getAll);
router.get('/:id',  &.getOne);
router.post('/',    &.create);
router.put('/',     &.update);
router.delete('/',  &.delete);

export default router;