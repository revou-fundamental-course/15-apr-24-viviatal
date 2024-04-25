document.addEventListener('DOMContentLoaded', function() {
    let celciusInput = document.querySelector('#celcius > input');
    let fahrenheitInput = document.querySelector('#fahrenheit > input');
    let kelvinInput = document.querySelector('#kelvin > input');
    let convertBtn = document.querySelector('.button button');
    let resultExplanation = document.querySelector('.explanation');

    function roundNumber(number){
        return Math.round(number*100)/100
    }

    function displayResults(celsius, fahrenheit, kelvin) {
        resultExplanation.innerHTML = ""; // Bersihkan penjelasan sebelum menambahkan yang baru

        if (!isNaN(celsius)) {
            let fTemp = (celsius * 9/5) + 32;
            let kTemp = celsius + 273.15;
            resultExplanation.innerHTML += `<p>Celcius to Fahrenheit: (${celsius}°C × 9/5) + 32 = ${fTemp.toFixed(2)}°F</p>`;
            resultExplanation.innerHTML += `<p>Celcius to Kelvin: ${celsius}°C + 273.15 = ${kTemp.toFixed(2)}K</p>`;
        }
        if (!isNaN(fahrenheit)) {
            let cTemp = (fahrenheit - 32) * 5/9;
            let kTemp = (fahrenheit - 32) * 5/9 + 273.15;
            resultExplanation.innerHTML += `<p>Fahrenheit to Celcius: (${fahrenheit}°F - 32) × 5/9 = ${cTemp.toFixed(2)}°C</p>`;
            resultExplanation.innerHTML += `<p>Fahrenheit to Kelvin: (${fahrenheit}°F - 32) × 5/9 + 273.15 = ${kTemp.toFixed(2)}K</p>`;
        }
        if (!isNaN(kelvin)) {
            let cTemp = kelvin - 273.15;
            let fTemp = (kelvin - 273.15) * 9/5 + 32;
            resultExplanation.innerHTML += `<p>Kelvin to Celcius: ${kelvin}K - 273.15 = ${cTemp.toFixed(2)}°C</p>`;
            resultExplanation.innerHTML += `<p>Kelvin to Fahrenheit: (${kelvin}K - 273.15) × 9/5 + 32 = ${fTemp.toFixed(2)}°F</p>`;
        }
    }

    // C to F & K
    celciusInput.addEventListener('input', function(){
        let cTemp = parseFloat(celciusInput.value)
        let fTemp = (cTemp*(9/5) + 32)
        let kTemp = cTemp + 273.15

        fahrenheitInput.value = roundNumber (fTemp)
        kelvinInput.value = roundNumber (kTemp)

        displayResults(cTemp, fTemp, kTemp);
    })

    // F to C & K
    fahrenheitInput.addEventListener('input', function(){
        let fTemp = parseFloat(fahrenheitInput.value)
        let cTemp = (fTemp - 32) * (5/9)
        let kTemp = (fTemp - 32) * (5/9) + 273.15

        celciusInput.value = roundNumber (cTemp)
        kelvinInput.value = roundNumber (kTemp)

        displayResults(cTemp, fTemp, kTemp);
    })

    // K to C & F
    kelvinInput.addEventListener('input', function(){
        let kTemp = parseFloat(kelvinInput.value)
        let cTemp = kTemp - 273.15
        let fTemp = (kTemp - 273.15) * (9/5) + 32

        celciusInput.value = roundNumber (cTemp)
        fahrenheitInput.value = roundNumber (fTemp)

        displayResults(cTemp, fTemp, kTemp);
    })

    convertBtn.addEventListener('click', function(){
        celciusInput.value = ""
        fahrenheitInput.value = ""
        kelvinInput.value = ""
        resultExplanation.innerHTML = ""; // Reset penjelasan juga saat tombol reset diklik
    })
});
