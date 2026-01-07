// 実績部分のグラフ

document.addEventListener('DOMContentLoaded', () => {
  const achievementSection = document.querySelector('#achievement');
  const chartElement = achievementSection?.querySelector('.ct-chart');

  if (!chartElement) return;

  new Chartist.Bar(chartElement, {
    labels: ['2021', '2022', '2023', '2024'],
    series: [
      [12, 24, 38, 52]
    ]
  }, {
    height: 300,
    axisY: {
      onlyInteger: true,
      offset: 40
    },
    chartPadding: {
      top: 30,
      right: 20,
      bottom: 0,
      left: 10
    }
  });
});
