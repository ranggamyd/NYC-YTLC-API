export interface Trip {
    vendor_id: string;
    pickup_datetime: string;
    dropoff_datetime: string;
    passenger_count: number;
    trip_distance: number;
    pickup_longitude: number;
    pickup_latitude: number;
    dropoff_longitude: number;
    dropoff_latitude: number;
    payment_type: string;
    fare_amount: number;
    mta_tax: number;
    tip_amount: number;
    tolls_amount: number;
    total_amount: number;
    imp_surcharge: number;
    rate_code: number;
}

export interface TripFilters {
    startTime?: Date;
    endTime?: Date;
    minFare?: number;
    maxFare?: number;
    minDistance?: number;
    maxDistance?: number;
    paymentType?: string;
}