// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Handle feedback submission
document.getElementById('feedback-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nickname = document.getElementById('nickname').value;
  const comment = document.getElementById('comment').value;

  // Push the feedback to Firebase
  db.ref('comments').push({
    nickname: nickname,
    comment: comment,
    timestamp: new Date().toISOString()
  });

  // Clear the form
  document.getElementById('nickname').value = '';
  document.getElementById('comment').value = '';
});

// Retrieve and display comments
db.ref('comments').on('child_added', function (snapshot) {
  const data = snapshot.val();
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.innerHTML = `
    <strong>${data.nickname}</strong>: <p>${data.comment}</p><span>${new Date(data.timestamp).toLocaleString()}</span>
  `;
  document.getElementById('comments-container').appendChild(commentElement);
});

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
