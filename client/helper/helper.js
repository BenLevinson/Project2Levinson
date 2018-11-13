const handleError = (message) => {
  $("#errMessage").text(message);
  $("#errorMessage").fadeIn({width:'toggle'},350);
  console.log(message);
};

const redirect = (response) => {
  $("#errorMessage").fadeIn({width:'hide'},350);
  window.location = response.redirect;
  console.log(response);
};

const sendAjax = (type, action, data, success) => {
  $.ajax({
    cache: false,
    type: type,
    url: action,
    data: data,
    dataType: 'json',
    success: success,
    error: function(xhr, status, error) {
      var messageObj = JSON.parse(xhr.responseText);
      console.log(action);
      handleError(messageObj.error);
    },
  });
};
