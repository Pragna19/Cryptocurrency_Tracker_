# Cryptocurrency Tracker

This project is a Cryptocurrency Tracker application that allows users to track the prices of popular cryptocurrencies like BitCoin (BTC), Ethereum (ETH), and Tether (USDT). The application includes multiple components, each serving specific functionalities.

## Components

### 1. BTC Component
This component displays the current prices of BitCoin (BTC) in USD, JPY, and EUR. It fetches data from the CryptoCompare API using Axios and renders the prices using React Bootstrap Card components. Additionally, it includes a ChartComponentBTC to visualize the price trends over time.

### 2. ChartComponentBNB Component
This component is used to track the price of a specific cryptocurrency - BitCoin (BTC) in this case. It fetches the historical price data for BTC from the Coingecko API based on the selected number of days and renders the price trends using the react-chartjs-2 library.

### 3. Home Component
The Home component serves as the main landing page of the application. It displays cryptocurrency cards for BitCoin, Ethereum, and Tether. Clicking on a card redirects the user to the respective cryptocurrency's page.

### 4. Price Alert Script
This script is used to monitor the price of BitCoin (BTC) and send an email alert using SendGrid if the BTC price in USD goes above a specific threshold (priceLimitUSD). It fetches the current BTC price from the CryptoCompare API using Axios and sends an email using the SendGrid API.

## Dependencies

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [React Bootstrap](https://react-bootstrap.github.io/): CSS framework for React.
- [Chart.js](https://www.chartjs.org/): JavaScript library for creating charts.
- [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2): React wrapper for Chart.js.
- [Axios](https://axios-http.com/): Promise-based HTTP client for JavaScript.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start): Routing library for React applications.
- [SendGrid](https://sendgrid.com/): Email API service for sending emails.

## How to Use

1. Clone the repository using `git clone <repository-url>`.

### For React Components

2. Navigate to the `src` folder and locate the respective component file (e.g., BTC.js, ChartComponentBNB.js, Home.js).
3. Install the dependencies using `npm install`.
4. Run the application using `npm start`.
5. Open your web browser and go to `http://localhost:3000` to access the application.

### For Price Alert Script

2. Navigate to the root folder of the project and locate the `priceAlertScript.js` file.
3. Install the dependencies using `npm install`.
4. Set your SendGrid API key in the `SENDGRID_API_KEY` environment variable.
5. Set your desired price limit in USD by modifying the `priceLimitUSD` variable in the script.
6. Run the script using `node priceAlertScript.js`.

Make sure to replace the recipient and sender email addresses in the `msg` object with your own email addresses before running the script.

Feel free to use and modify this application and script according to your needs. Happy tracking!


