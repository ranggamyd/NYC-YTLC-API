import express from 'express';
import cors from 'cors';
import TripRoutes from './routes/tripRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/trips', TripRoutes);

app.get('/', (req, res) => {
  res.json({ 
    message: 'New York City Yellow Taxi and Limousine Commission API is running', 
    version: '1.0.0' 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});