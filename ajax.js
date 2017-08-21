document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector( '#request_to_root');
  var pingButton = document.querySelector( '#ping_button');
  var countButton = document.querySelector( '#request_to_count')
  var sendButton = document.querySelector( '#send_button')
  var carButton = document.querySelector( '#request_to_car')

  console.log("DOMContentLoaded");




  button.addEventListener('click', function() {
    var request = $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'text'
    });
    request.done( function(data) {
        console.log('request succeeded');
      })
    });

  pingButton.addEventListener('click', function() {
    var pingRequest = $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'
    })
    pingRequest.done(function(data) {
      console.log(data);
      var section = document.body.querySelectorAll('section')
      var pingResponse = document.createElement( 'div' )
      pingResponse.innerHTML = data;
      section[1].append(pingResponse)
    })
    pingRequest.fail(function(jqXHR, testStatus, errorThrown) {
      console.log('REQUEST FAILED');
      var section = document.body.querySelectorAll('section')
      var failMsg = document.createElement( 'p' )
      failMsg.innerText = 'Whoops! Something went wrong...'
      section[1].append(failMsg)
    })
    pingRequest.always(function() {
      var section = document.body.querySelectorAll('section')
      var alwaysMsg = document.createElement( 'p' )
      alwaysMsg.innerText = 'Stuff happend...yay!'
      section[1].append(alwaysMsg)
    })
  })

  countButton.addEventListener('click', function() {
    var countRequest = $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text'
    })
    countRequest.done(function(data) {
      console.log(data);
      var section = document.body.querySelectorAll('section')
      var countResponse = document.createElement( 'div' )
      countResponse.innerText = data
      section[2].append(countResponse)
    })
  })

  sendButton.addEventListener('click', function() {
    var send = $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone: 'Europe/Sofia'},
      dataType: 'text'
    })
    send.done( function(data) {
      console.log(data);
      var section = document.body.querySelectorAll('section')
      var sendResponse = document.createElement( 'div' )
      sendResponse.innerText = data
      section[3].append(sendResponse)
    })
  })

  carButton.addEventListener('click', function() {
    var requestCar = $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html'
    })
    requestCar.done(function(data) {
      console.log(data);
      var section = document.body.querySelectorAll('section')
      var carResponse = document.createElement( 'ul' )
      carResponse.setAttribute("id", "car_list")
      carResponse.innerHTML = data
      section[4].append(carResponse)
    })
  })


})
