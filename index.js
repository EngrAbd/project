document.addEventListener('DOMContentLoaded', () => {
    // Set the countdown timer
    const countdownTime = 60 * 60 * 1000; // 5 minutes
    const timerElement = document.getElementById('timer');
    let endTime = Date.now() + countdownTime;

    function updateTimer() {
        const now = Date.now();
        const remainingTime = endTime - now;
        if (remainingTime <= 0) {
            timerElement.textContent = '00:00';
            clearInterval(timerInterval);
            alert('Time is up!'); // Notify user that time is up
        } else {
            const minutes = Math.floor(remainingTime / 60000);
            const seconds = Math.floor((remainingTime % 60000) / 1000);
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();

    // Handle voting with encryption
    window.vote = function(candidateName) {
        // Define a secret key for encryption (this should be securely managed in a real application)
        const secretKey = 'mySecretKey123'; 

        // Encrypt the vote
        const encryptedVote = CryptoJS.AES.encrypt(candidateName, secretKey).toString();

        // For demonstration, log the encrypted vote to the console
        console.log('Encrypted Vote:', encryptedVote);

        
         fetch('/submit-vote', {
            method: 'POST',
        headers: {
                'Content-Type': 'application/json'
           },
             body: JSON.stringify({ vote: encryptedVote })
         }).then(response => response.json())
         .then(data => console.log(data));

        alert(`You voted for ${candidateName}! (Encrypted)`);
    };
});