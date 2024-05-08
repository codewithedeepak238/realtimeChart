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
  label.push(res.bpi.USD.symbol)
  myChart.update();
  console.log(mydate)
  // console.log(label)
}

setInterval(getData, 5000)