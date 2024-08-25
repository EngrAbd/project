document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const closeModal = document.querySelector('.close');
  
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const voterNumber = document.getElementById('voterNumber').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ voterNumber, password }),
        });
        
        const data = await response.json();
        if (data.success) {
          alert(data.message);
          window.location.href = 'index.html'; // Redirect to a dashboard or another page
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  
    document.getElementById('forgotPassword').addEventListener('click', () => {
      forgotPasswordModal.style.display = 'block';
    });
  
    closeModal.addEventListener('click', () => {
      forgotPasswordModal.style.display = 'none';
    });
  
    forgotPasswordForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const dob = document.getElementById('dob').value;
      const resetVoterNumber = document.getElementById('resetVoterNumber').value;
  
      try {
        const response = await fetch('http://localhost:3001/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, dob, resetVoterNumber }),
        });
        
        const data = await response.json();
        if (data.success) {
          alert(data.message);
          forgotPasswordModal.style.display = 'none';
          window.location.href = '/reset-password.html'; // Redirect to password reset page or another page
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  });