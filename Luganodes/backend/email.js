// Requiring necessary modules
const sgMail = require('@sendgrid/mail'); // SendGrid module for sending emails
const axios = require('axios'); // Axios module for making HTTP requests

sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Setting the API key for SendGrid email service

const priceLimitUSD = 20000; // Set your desired price limit in USD for BTC

// Function to get BTC price from the API
async function getBTCPrice() {
    try {
        const response = await axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR'); // Fetching BTC price from the API
        return response.data; // Returning the API response data (BTC price in USD, JPY, and EUR)
    } catch (error) {
        console.error('Failed to get BTC price from API:', error); // Handling errors if the API request fails
        return null; // Return null if there is an error fetching the BTC price
    }
}

// Function to send email with BTC price and time
async function sendPriceAlert() {
    const btcPrice = await getBTCPrice(); // Fetching BTC price using the getBTCPrice function

    if (!btcPrice) {
        console.error('Cannot send email without BTC price data.'); // If BTC price data is not available, log an error and return
        return;
    }

    if (btcPrice.USD > priceLimitUSD) { // Checking if BTC price is above the set price limit
        const currentTime = new Date().toLocaleString(); // Getting the current time in a human-readable format

        // Composing the email message
        const msg = {
            to: 'studiosabby@gmail.com', // Change to your recipient's email address
            from: 'contact.abhira.ai@gmail.com', // Change to your verified sender's email address
            subject: 'Price Alert',
            text: `BTC Coin Price Alert!!\n\nCurrent BTC Price:\nUSD: ${btcPrice.USD}\nJPY: ${btcPrice.JPY}\nEUR: ${btcPrice.EUR}\n\nCurrent Time: ${currentTime}`,
        };

        // Sending the email using the SendGrid module
        sgMail.send(msg)
            .then(() => {
                console.log('Email sent'); // Log success message if the email is sent successfully
            })
            .catch((error) => {
                console.error(error); // Log error message if there's an issue sending the email
            });
    } else {
        console.log('BTC price is not above the limit. No email sent.'); // Log a message if the BTC price is below the price limit
    }
}

// Call the function to send the email
sendPriceAlert();