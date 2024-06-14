document.getElementById('alarm-image').addEventListener('click', function() {
  const alarmInfo = document.getElementById('alarm-info');
  if (alarmInfo.style.display === 'none' || alarmInfo.style.display === '') {
      alarmInfo.style.display = 'block';
  } else {
      alarmInfo.style.display = 'none';
  }
});

window.addEventListener('click', function(event) {
  const alarmInfo = document.getElementById('alarm-info');
  const alarmImage = document.getElementById('alarm-image');
  if (event.target !== alarmInfo && event.target !== alarmImage && !alarmInfo.contains(event.target)) {
      alarmInfo.style.display = 'none';
  }
});
