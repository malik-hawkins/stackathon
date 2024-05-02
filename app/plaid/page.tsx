// // pages/plaid.js

// import { useState } from 'react';
// import axios from 'axios';

// const PlaidPage = () => {
//   const [accessToken, setAccessToken] = useState('');

//   const handlePlaidButtonClick = async () => {
//     // Request a public token from your server
//     try {
//       const response = await axios.post('/api/create-public-token');
//       const publicToken = response.data.public_token;

//       // Exchange the public token for an access token
//       const exchangeResponse = await axios.post('/api/exchange-token', { publicToken });
//       const accessToken = exchangeResponse.data.access_token;

//       // Set the access token in the state
//       setAccessToken(accessToken);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//    function createPublicToken(req, res) {
//     try {
//       // Make a request to Plaid API to create a public token
//       const response = await axios.post('https://sandbox.plaid.com/sandbox/public_token/create', {
//         institution_id: 'INS_1', // Replace with the desired institution ID
//         initial_products: ['auth'], // Replace with the desired product(s)
//         options: {
//           webhook: 'https://your-webhook-url.com', // Replace with your webhook URL
//         },
//         client_id: 'YOUR_PLAID_CLIENT_ID',
//         secret: 'YOUR_PLAID_SECRET',
//       });
  
//       // Send the public token back to the client
//       res.status(200).json({ public_token: response.data.public_token });
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ error: 'An error occurred' });
//     }
//   }

//   return (
//     <div>
//       <button onClick={handlePlaidButtonClick}>Connect with Plaid</button>
//       {accessToken && <p>Access Token: {accessToken}</p>}
//     </div>
//   );
// };

// export default PlaidPage;
