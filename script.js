function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');
    let years = document.querySelector('#years');
  
    //parseFloat sluzi za pretvaranej stringa u broj sa zarezom
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    years = parseFloat(years.value);
  
    //Formula za izracunavanje inflacije za prvu godinu
    let worth = money + (money * (inflationRate / 100));
  
    //formula za izracunavanje inflacije za ostale godine
    for (let i = 1; i < years; i++) {
      worth += worth * (inflationRate / 100);
    }
  
    let resultElement = document.querySelector('#result');
    resultElement.innerHTML = `Današnjih ${money}€ za ${years} godinu/a će iznositi ${worth.toFixed(2)}€.`;
  }
  
  let inflationRate = document.querySelector('#inflationRate');
  let money = document.querySelector('#money');
  let years = document.querySelector('#years');
  
  inflationRate.addEventListener('input', () => {
    inflationCalculator();
  });
  
  money.addEventListener('input', () => {
    inflationCalculator();
  });
  
  years.addEventListener('input', () => {
    inflationCalculator();
  });
  
  
  