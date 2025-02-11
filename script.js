// Handle the "Listen Now" button
document.getElementById('listen-button').addEventListener('click', function () {
  window.location.href = 'path-to-your-audio-file.mov'; // Replace with the path to your MOV or MP4 file
});

// Support buttons (PayPal & Crypto)
document.querySelector('.paypal').addEventListener('click', function () {
  window.open('https://www.paypal.com/paypalme/yourpaypalusername', '_blank'); // Replace with your PayPal link
});

document.querySelector('.crypto').addEventListener('click', function () {
  alert('Donate with Bitcoin (BTC), Ethereum (ETH), or Solana (SOL).'); // Customize with your donation details
});
