import express from 'express';
import { TripController } from '../controllers/tripController';

const router = express.Router();
const tripController = new TripController();

router.get('/', (req, res) => tripController.getTrips(req, res));

export default router;