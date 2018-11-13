const handleLogin = (e) => {
  e.preventDefault();
  $("#errorMessage").fadeIn({width:'hide'},350);
  setTimeout(function() {
   $("#errorMessage").fadeOut({width:'hide'}, 350);
  }, 3000);
  if ($("#user").val() === '' || $("#pass").val() === '') {
    handleError("Username or Password is empty.");
    return false;
  }
  console.log($("input[name=csrf]").val());
  sendAjax('POST', $("#loginForm").attr("action"), $("#loginForm").serialize(), redirect);
  return false;
};

const handleSignup = (e) => {
  e.preventDefault();
  $("#errorMessage").fadeIn({width:'hide'},350);
  setTimeout(function() {
   $("#errorMessage").fadeOut({width:'hide'}, 350);
  }, 3000);
  if ($("#user").val() === '' || $("#pass").val() === '' || $("#pass2").val() === '') {
    handleError("All fields are required.");
    return false;
  }
  if ($("#pass").val() !== $("#pass2").val()) {
    handleError("Passwords do not match.");
    return false;
  }
  sendAjax('POST', $("#signupForm").attr("action"), $("#signupForm").serialize(), redirect);
  return false;
};

const ContentPage = (props) => {
  return (
    <div id="loginStart">
      <div className="taglineDiv">
        <h1> Socko's Socks! </h1>
        <h3> "Who needs friends when you have cool socks?" </h3>
      </div>
      <br/>
      <div id="topRow"> 
        <div id="scarySock">
          <a href="/search"> <img className="sockClass" src="assets/img/scarySock.jpg" alt="Scary Socks"/> </a>
          <label htmlFor="scarySock"> Scary Socks</label>
        </div>
        <div id="crazySock">
          <a href="/search"> <img className="sockClass" src="assets/img/crazySock.jpg" alt="Crazy Socks"/> </a>
          <label htmlFor="crazySock"> Crazy Socks</label>
        </div>
        <div id="funnySock">
          <a href="/search"> <img className="sockClass" src="assets/img/funnySock.jpg" alt="Funny Socks"/> </a>
          <label htmlFor="funnySock"> Funny Socks</label>
        </div>
      </div>
      <div id="bottomRow">
        <div id="coolSock">
          <a href="/search"> <img className="sockClass" src="assets/img/coolSock.jpg" alt="Cool Socks"/> </a>
          <label htmlFor="coolSock"> Cool Socks</label>
        </div>
        <div id="superSock">
          <a href="/search"> <img className="sockClass" src="assets/img/superSock.jpg" alt="Super Socks"/> </a>
          <label htmlFor="superSock"> Super Socks</label>
        </div>
        <div id="normalSock">
          <a href="/search"> <img className="sockClass" src="assets/img/normalSock.jpg" alt="Normal Socks"/> </a>
          <label htmlFor="normalSock"> Normal Socks</label>
        </div>
      </div>
    </div>
  );
};

const LoginWindow = (props) => {
  return (
    <div>
        <div className="taglineDiv">
          <h1> Socko's Socks! </h1>
          <h3> "Who needs friends when you have cool socks?" </h3>
        </div>
        <form id="loginForm" 
          name="loginForm"
          onSubmit={handleLogin}
          action="/login"
          method="POST"
          className="mainForm"
        >
        <label htmlFor="username">Username: </label>
        <input id="user" type="text" name="username" placeholder="username"/>
        <label htmlFor="pass">Password: </label>
        <input id="pass" type="password" name="pass" placeholder="password"/>
        <input type="hidden" name="_csrf" value={props.csrf} />
        <input className="formSubmit" type="submit" value="Sign In" />
      </form>
  </div>
  );  
};

const SignupWindow = (props) => {
  return (
    <div>
        <div className="taglineDiv">
          <h1> Socko's Socks! </h1>
          <h3> "Who needs friends when you have cool socks?" </h3>
        </div>
        <form id="signupForm" 
          name="signupForm"
          onSubmit={handleSignup}
          action="/signup"
          method="POST"
          className="mainForm"
        >
        <label htmlFor="username">Username: </label>
        <input id="user" type="text" name="username" placeholder="username"/>
        <label htmlFor="pass">Password: </label>
        <input id="pass" type="password" name="pass" placeholder="password"/>
        <label htmlFor="pass2">Password: </label>
        <input id="pass2" type="password" name="pass2" placeholder="retype password"/>
        <input type="hidden" name="_csrf" value={props.csrf} />
        <input className="formSubmit" type="submit" value="Sign Up" />
        </form>
    </div>
  );  
};

const createContentPage = (csrf) => {
  ReactDOM.render(
    <ContentPage csrf={csrf} />,
    document.querySelector("#content")
  );
};

const createLoginWindow = (csrf) => {
  ReactDOM.render(
    <LoginWindow csrf={csrf} />,
    document.querySelector("#content")
  );
};

const createSignupWindow = (csrf) => {
  ReactDOM.render(
    <SignupWindow csrf={csrf} />,
    document.querySelector("#content")
  );
};

const setup = (csrf) => {
  let urlString = window.location.href;
  const homeButton = document.querySelector("#homeButton");
  const loginButton = document.querySelector("#loginButton");
  const signupButton = document.querySelector("#signupButton");
  signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    createSignupWindow(csrf);
    return false;
  });
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    createLoginWindow(csrf);
    return false;
  }); 
  homeButton.addEventListener("click", (e) => {
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

const getToken = () => {
  sendAjax('GET', '/getToken', null, (result) => {
    setup(result.csrfToken);  
  });
};

$(document).ready(function() {
  getToken();
});