const ctx = document.getElementById('myChart');

const label = [];
const prices = []


let myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: label,
    datasets: [{
      label: 'Bitcoin Prices',
      data: prices,
      lineTension: 0.5,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})

async function getData(){
  const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const res = await data.json();
  prices.push(res.bpi.USD.rate_float)
  label.push(res.time.updated)
  myChart.update();
}

setInterval(getData, 5000)