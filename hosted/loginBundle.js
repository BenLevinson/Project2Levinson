"use strict";

var handleLogin = function handleLogin(e) {
  e.preventDefault();
  $("#errorMessage").fadeIn({ width: 'hide' }, 350);
  if ($("#user").val() === '' || $("#pass").val() === '') {
    handleError("Username or Password is empty.");
    $('#user').val = "";
    return false;
  }
  console.log($("input[name=csrf]").val());
  sendAjax('POST', $("#loginForm").attr("action"), $("#loginForm").serialize(), redirect);
  return false;
};

var handleSignup = function handleSignup(e) {
  e.preventDefault();
  $("#errorMessage").fadeIn({ width: 'hide' }, 350);
  if ($("#user").val() === '' || $("#pass").val() === '' || $("#pass2").val() === '') {
    handleError("All fields are required.");
    return false;
  }
  if ($("#pass").val() !== $("#pass2").val()) {
    handleError("Passwords do not match.");
    $("user").text = "";
    $("#pass").text = "";
    $("pass2").text = "";
    return false;
  }
  sendAjax('POST', $("#signupForm").attr("action"), $("#signupForm").serialize(), redirect);
  return false;
};

var ContentPage = function ContentPage(props) {
  return React.createElement(
    "div",
    { id: "loginStart" },
    React.createElement(
      "div",
      { className: "taglineDiv" },
      React.createElement(
        "h1",
        null,
        " Socko's Socks! "
      ),
      React.createElement(
        "h3",
        null,
        " \"Who needs friends when you have cool socks?\" "
      )
    ),
    React.createElement("br", null),
    React.createElement(
      "div",
      { id: "topRow" },
      React.createElement(
        "div",
        { id: "scarySock" },
        React.createElement(
          "a",
          { href: "/search" },
          " ",
          React.createElement("img", { className: "sockClass", src: "assets/img/scarySock.jpg", alt: "Scary Socks" }),
          " "
        ),
        React.createElement(
          "label",
          { htmlFor: "scarySock" },
          " Scary Socks"
        )
      ),
      React.createElement(
        "div",
        { id: "crazySock" },
        React.createElement(
          "a",
          { href: "/search" },
          " ",
          React.createElement("img", { className: "sockClass", src: "assets/img/crazySock.jpg", alt: "Crazy Socks" }),
          " "
        ),
        React.createElement(
          "label",
          { htmlFor: "crazySock" },
          " Crazy Socks"
        )
      ),
      React.createElement(
        "div",
        { id: "funnySock" },
        React.createElement(
          "a",
          { href: "/search" },
          " ",
          React.createElement("img", { className: "sockClass", src: "assets/img/funnySock.jpg", alt: "Funny Socks" }),
          " "
        ),
        React.createElement(
          "label",
          { htmlFor: "funnySock" },
          " Funny Socks"
        )
      )
    ),
    React.createElement(
      "div",
      { id: "bottomRow" },
      React.createElement(
        "div",
        { id: "coolSock" },
        React.createElement(
          "a",
          { href: "/search" },
          " ",
          React.createElement("img", { className: "sockClass", src: "assets/img/coolSock.jpg", alt: "Cool Socks" }),
          " "
        ),
        React.createElement(
          "label",
          { htmlFor: "coolSock" },
          " Cool Socks"
        )
      ),
      React.createElement(
        "div",
        { id: "superSock" },
        React.createElement(
          "a",
          { href: "/search" },
          " ",
          React.createElement("img", { className: "sockClass", src: "assets/img/superSock.jpg", alt: "Super Socks" }),
          " "
        ),
        React.createElement(
          "label",
          { htmlFor: "superSock" },
          " Super Socks"
        )
      ),
      React.createElement(
        "div",
        { id: "normalSock" },
        React.createElement(
          "a",
          { href: "/search" },
          " ",
          React.createElement("img", { className: "sockClass", src: "assets/img/normalSock.jpg", alt: "Normal Socks" }),
          " "
        ),
        React.createElement(
          "label",
          { htmlFor: "normalSock" },
          " Normal Socks"
        )
      )
    )
  );
};

var LoginWindow = function LoginWindow(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "taglineDiv" },
      React.createElement(
        "h1",
        null,
        " Socko's Socks! "
      ),
      React.createElement(
        "h3",
        null,
        " \"Who needs friends when you have cool socks?\" "
      )
    ),
    React.createElement(
      "form",
      { id: "loginForm",
        name: "loginForm",
        onSubmit: handleLogin,
        action: "/login",
        method: "POST",
        className: "mainForm"
      },
      React.createElement(
        "label",
        { htmlFor: "username" },
        "Username: "
      ),
      React.createElement("input", { id: "user", type: "text", name: "username", placeholder: "username" }),
      React.createElement(
        "label",
        { htmlFor: "pass" },
        "Password: "
      ),
      React.createElement("input", { id: "pass", type: "password", name: "pass", placeholder: "password" }),
      React.createElement("input", { type: "hidden", name: "_csrf", value: props.csrf }),
      React.createElement("input", { className: "formSubmit", type: "submit", value: "Sign In" })
    )
  );
};

var SignupWindow = function SignupWindow(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "taglineDiv" },
      React.createElement(
        "h1",
        null,
        " Socko's Socks! "
      ),
      React.createElement(
        "h3",
        null,
        " \"Who needs friends when you have cool socks?\" "
      )
    ),
    React.createElement(
      "form",
      { id: "signupForm",
        name: "signupForm",
        onSubmit: handleSignup,
        action: "/signup",
        method: "POST",
        className: "mainForm"
      },
      React.createElement(
        "label",
        { htmlFor: "username" },
        "Username: "
      ),
      React.createElement("input", { id: "user", type: "text", name: "username", placeholder: "username" }),
      React.createElement(
        "label",
        { htmlFor: "pass" },
        "Password: "
      ),
      React.createElement("input", { id: "pass", type: "password", name: "pass", placeholder: "password" }),
      React.createElement(
        "label",
        { htmlFor: "pass2" },
        "Password: "
      ),
      React.createElement("input", { id: "pass2", type: "password", name: "pass2", placeholder: "retype password" }),
      React.createElement("input", { type: "hidden", name: "_csrf", value: props.csrf }),
      React.createElement("input", { className: "formSubmit", type: "submit", value: "Sign Up" })
    )
  );
};

var createContentPage = function createContentPage(csrf) {
  ReactDOM.render(React.createElement(ContentPage, { csrf: csrf }), document.querySelector("#content"));
};

var createLoginWindow = function createLoginWindow(csrf) {
  ReactDOM.render(React.createElement(LoginWindow, { csrf: csrf }), document.querySelector("#content"));
};

var createSignupWindow = function createSignupWindow(csrf) {
  ReactDOM.render(React.createElement(SignupWindow, { csrf: csrf }), document.querySelector("#content"));
};

var setup = function setup(csrf) {
  var urlString = window.location.href;
  var homeButton = document.querySelector("#homeButton");
  var loginButton = document.querySelector("#loginButton");
  var signupButton = document.querySelector("#signupButton");
  signupButton.addEventListener("click", function (e) {
    e.preventDefault();
    createSignupWindow(csrf);
    return false;
  });
  loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    createLoginWindow(csrf);
    return false;
  });
  homeButton.addEventListener("click", function (e) {
    e.preventDefault();
    createContentPage(csrf);
    return false;
  });

  if (urlString.includes('/login')) {
    createLoginWindow(csrf);
  } else {
    createContentPage(csrf);
  }
};

var getToken = function getToken() {
  sendAjax('GET', '/getToken', null, function (result) {
    setup(result.csrfToken);
  });
};

$(document).ready(function () {
  getToken();
});
"use strict";

var handleError = function handleError(message) {
  $("#errMessage").text(message);
  $("#errorMessage").fadeIn({ width: 'toggle' }, 350);
  console.log(message);
};

var redirect = function redirect(response) {
  $("#errorMessage").fadeIn({ width: 'hide' }, 350);
  window.location = response.redirect;
};

var sendAjax = function sendAjax(type, action, data, success) {
  $.ajax({
    cache: false,
    type: type,
    url: action,
    data: data,
    dataType: 'json',
    success: success,
    error: function error(xhr, status, _error) {
      var messageObj = JSON.parse(xhr.responseText);
      handleError(messageObj.error);
    }
  });
};
