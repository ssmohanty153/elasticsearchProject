
import express from 'express';
import controller from './sampleRouter';

const router = express.Router();

router.get('/ping', controller.newFolderServerCheck);

export = router;