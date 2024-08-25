document.addEventListener('DOMContentLoaded', function() {
    // Data for the results
    const results = [
        { name: 'Candidate A', votes: 500000, percentage: 40.5 },
        { name: 'Candidate B', votes: 400000, percentage: 32.4 },
        { name: 'Candidate C', votes: 250000, percentage: 20.3 },
        { name: 'Candidate D', votes: 84567, percentage: 6.8 }
    ];

    const totalVotes = results.reduce((sum, candidate) => sum + candidate.votes, 0);
    const turnout = '85%';
    const lastUpdate = new Date().toLocaleString();

    document.getElementById('update-time').textContent = lastUpdate;
    document.getElementById('total-votes').textContent = totalVotes.toLocaleString();
    document.getElementById('turnout').textContent = turnout;

    const tbody = document.getElementById('results-table').getElementsByTagName('tbody')[0];
    results.forEach(result => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = result.name;
        row.insertCell(1).textContent = result.votes.toLocaleString();
        row.insertCell(2).textContent = result.percentage.toFixed(1) + '%';
    });

    // Navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const targetId = this.getAttribute('data-target');
            document.querySelectorAll('main section').forEach(section => {
                section.classList.add('hidden'); // Hide all sections
            });
            document.getElementById(targetId).classList.remove('hidden'); // Show the target section
        });
    });

    // Optionally, show the first section by default
    if (navLinks.length > 0) {
        navLinks[0].click();
    }
});