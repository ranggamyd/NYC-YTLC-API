import { Request, Response } from 'express';
import { TripService } from '../services/tripService';

export class TripController {
    private tripService: TripService;

    constructor() {
        this.tripService = TripService.getInstance();
    }

    async getTrips(req: Request, res: Response): Promise<void> {
        try {
            const {
                startTime,
                endTime,
                minFare,
                maxFare,
                minDistance,
                maxDistance,
                paymentType
            } = req.query;

            const filters = {
                startTime: startTime ? new Date(startTime as string) : undefined,
                endTime: endTime ? new Date(endTime as string) : undefined,
                minFare: minFare ? parseFloat(minFare as string) : undefined,
                maxFare: maxFare ? parseFloat(maxFare as string) : undefined,
                minDistance: minDistance ? parseFloat(minDistance as string) : undefined,
                maxDistance: maxDistance ? parseFloat(maxDistance as string) : undefined,
                paymentType: paymentType as string,
            };

            const trips = await this.tripService.fetchTrips(filters);
            res.json(trips);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}