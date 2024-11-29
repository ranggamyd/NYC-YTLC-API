# 🚕 NYC Yellow Taxi Trip Data API

## 📝 Project Description

This is a robust Express backend API for fetching and analyzing 2014 New York City Yellow Taxi Trip Data. The API provides flexible filtering capabilities for taxi trip records.

## ✨ Features

- 🔍 Comprehensive Data Filtering
  - Time Range Filtering
  - Fare Amount Filtering
  - Trip Distance Filtering
  - Payment Type Filtering

- 🌐 Direct Integration with Socrata Open Data API
- 🛡️ TypeScript Type Safety
- 🚀 High Performance Data Retrieval
- 📦 Modular Architecture

## 🛠️ Tech Stack

- Express.js
- TypeScript
- Axios
- Socrata Open Data API

## 📦 Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/ranggamyd/nyc-ytlc-api.git
cd nyc-ytlc-api
```
### 2. Install dependencies
```bash
npm install
```
### 3. Configure Environment
- Create a .env file (optional)
- Add Socrata App Token if needed

## 🔧 Configuration
### Socrata API Configuration
Edit `src/config/constants.ts`:

```typescript
export const SOCRATA_CONFIG = {
  BASE_URL: 'https://data.cityofnewyork.us/resource/gkne-dk5s.json',
  APP_TOKEN: 'YOUR_OPTIONAL_APP_TOKEN'
};
```

## 🏃‍♂️ Running the Application
### Development Mode
```bash
npm run dev
```
### Production Mode
```bash
npm start
```

## 🌐 API Endpoints
### Get Taxi Trips
`GET /api/trips`

### Query Parameters:
- startTime: Start datetime filter
- endTime: End datetime filter
- minFare: Minimum fare amount
- maxFare: Maximum fare amount
- minDistance: Minimum trip distance
- maxDistance: Maximum trip distance
- paymentType: Specific payment type

## 📋 Example API Calls
### 1. All Trips
```http
GET http://localhost:3000/api/trips
```
### 2. Time Range Filter
```http
GET http://localhost:3000/api/trips?startTime=2014-01-01&endTime=2014-01-31
```
### 3. Fare Amount Filter
```http
GET http://localhost:3000/api/trips?minFare=10&maxFare=50
```
### 4. Distance Filter
```http
GET http://localhost:3000/api/trips?minDistance=1&maxDistance=10
```
### 5. Payment Type Filter
```http
GET http://localhost:3000/api/trips?paymentType=CSH
```

## 🧪 Testing
### Run Tests
```bash
npm test
```

## 📊 Performance Considerations
- Uses singleton service pattern
- Implements client-side filtering
- Supports caching strategies

## 🔒 Security
- CORS enabled
- Input validation
- Error handling

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 📄 License
MIT License

## 🙏 Acknowledgements
- Socrata Open Data API
- New York City Taxi & Limousine Commission
