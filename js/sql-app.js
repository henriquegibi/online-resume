document.getElementById('generate-sql-btn').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value;

    fetch('http://localhost:8080/generate-sql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: userInput })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('sql-output').innerText = data.sql;
            const copyBtn = document.getElementById('copy-btn');
            copyBtn.style.display = 'inline';
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(data.sql);
                alert('SQL copiado para o clipboard!');
            });
        })
        .catch(error => {
            console.error('Erro:', error);
        });
});
