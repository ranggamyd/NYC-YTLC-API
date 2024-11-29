import axios from 'axios';
import { SOCRATA_CONFIG } from '../config/constants';
import { Trip, TripFilters } from '../interfaces/trip.interface';

export class TripService {
    private static instance: TripService;

    private constructor() { }

    public static getInstance(): TripService {
        if (!TripService.instance) {
            TripService.instance = new TripService();
        }
        return TripService.instance;
    }

    async fetchTrips(filters: TripFilters = {}): Promise<Trip[]> {
        try {
            // const response = await axios.get(SOCRATA_CONFIG.BASE_URL, {
            //     headers: {
            //         'X-App-Token': SOCRATA_CONFIG.APP_TOKEN || "",
            //     },
            // });
            const response = await axios.get(SOCRATA_CONFIG.BASE_URL);

            let filteredTrips = response.data as Trip[];

            // time filter
            if (filters.startTime && filters.endTime) {
                filteredTrips = filteredTrips.filter(trip => {
                    const pickupTime = new Date(trip.pickup_datetime);
                    return pickupTime >= filters.startTime! && pickupTime <= filters.endTime!;
                });
            }

            // fare amount filter
            if (filters.minFare !== undefined) {
                filteredTrips = filteredTrips.filter(trip =>
                    trip.fare_amount >= filters.minFare!
                );
            }

            if (filters.maxFare !== undefined) {
                filteredTrips = filteredTrips.filter(trip =>
                    trip.fare_amount <= filters.maxFare!
                );
            }

            // distance filter
            if (filters.minDistance !== undefined) {
                filteredTrips = filteredTrips.filter(trip =>
                    trip.trip_distance >= filters.minDistance!
                );
            }

            if (filters.maxDistance !== undefined) {
                filteredTrips = filteredTrips.filter(trip =>
                    trip.trip_distance <= filters.maxDistance!
                );
            }

            // payment type filter
            if (filters.paymentType) {
                filteredTrips = filteredTrips.filter(trip =>
                    trip.payment_type === filters.paymentType
                );
            }

            return filteredTrips;
        } catch (error) {
            console.error('Error fetching trips:', error);
            throw new Error('Failed to fetch trips');
        }
    }
}