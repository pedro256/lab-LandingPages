const apiKey = '1be9a6884abd4c3ea143b59ca317c6b2';

if (!localStorage.getItem('mcity')) {
  console.log('Mocado')
  $.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function ({ city }) {
    
    if(city){
      $('#loc-city').text(
        city
      )
      localStorage.setItem('mcity',city)
    }

  });
}else{
  $('#loc-city').text(
    localStorage.getItem('mcity')
  )
  
}


