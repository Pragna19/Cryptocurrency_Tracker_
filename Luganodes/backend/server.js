const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// MongoDB connection
const MONGODB_URI = '';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Start fetching data from API and storing it in MongoDB every minute
    setInterval(fetchDataAndStoreInDB, 60 * 1000); // 60 seconds * 1000 milliseconds
  })
  .catch((error) => console.error('MongoDB connection error:', error));

// Define the cryptocurrency schema
const cryptoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

// Create a model for the cryptocurrency collection
const Crypto = mongoose.model('Crypto', cryptoSchema);

const CRYPTO_API_URL = 'https://min-api.cryptocompare.com/data/pricemulti';
const CRYPTO_API_PARAMS = {
  fsyms: 'BTC,ETH', // Request data for BTC and ETH
  tsyms: 'USD,EUR', // Request data in USD and EUR
};

// Function to fetch data from the API and store it in MongoDB
async function fetchDataAndStoreInDB() {
  try {
    const response = await axios.get(CRYPTO_API_URL, { params: CRYPTO_API_PARAMS });

    // Log the entire API response to see its structure
    console.log('API Response:', response.data);

    const { BTC, ETH } = response.data;

    // Check if response data contains 'price' for BTC and ETH
    if (!BTC || !ETH) {
      throw new Error('Invalid response from the API. Missing price data for BTC or ETH.');
    }

    // Store BTC data in MongoDB
    await Crypto.create({ name: 'BTC', price: BTC.USD }); // Assuming the API provides USD prices for BTC

    // Store ETH data in MongoDB
    await Crypto.create({ name: 'ETH', price: ETH.USD }); // Assuming the API provides USD prices for ETH

    console.log('Data fetched and stored in MongoDB:', { BTC, ETH });
  } catch (error) {
    console.error('Failed to fetch data from the API or store in MongoDB:', error);
  }
}