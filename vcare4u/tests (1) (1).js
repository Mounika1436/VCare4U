function calculateAnxietyScore(event) {
    event.preventDefault();
    let score = 0;
    const values = document.querySelectorAll('#anxietyTestForm select');
    values.forEach(value => score += parseInt(value.value));
    let result;
    if (score <= 3) result = 'Mild Anxiety';
    else if (score <= 6) result = 'Moderate Anxiety';
    else result = 'Severe Anxiety';
    document.getElementById('anxietyResult').innerText = result;
}

// Similar functions for Depression, Bipolar Disorder, and Schizophrenia
function calculateDepressionScore(event) {
    event.preventDefault();
    let score = 0;
    const values = document.querySelectorAll('#depressionTestForm select');
    values.forEach(value => score += parseInt(value.value));
    let result;
    if (score <= 3) result = 'Mild Depression';
    else if (score <= 6) result = 'Moderate Depression';
    else result = 'Severe Depression';
    document.getElementById('depressionResult').innerText = result;
}

// Continue with calculateBipolarScore and calculateSchizophreniaScore functions
