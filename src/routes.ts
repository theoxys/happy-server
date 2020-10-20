
import {Router} from 'express';
import OrphanageController from './controllers/orphanagesController'
import multer from 'multer'
import uploadConfig from './config/upload'

const uploads = multer(uploadConfig);
const routes = Router();

routes.post('/orphanages',uploads.array('images'), OrphanageController.create)
routes.get('/orphanages', OrphanageController.index)
routes.get('/orphanages/:id',OrphanageController.show)


export default routes;