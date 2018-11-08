const handleSearch = (e) => {
  e.preventDefault();
  if ($("#searchBar").val() === '') {
    handleError("Please type in a valid query!");
    return false;
  }
  sendAjax('GET', $("#searchForm").attr("action"), $("#searchForm").serialize(), function() {
    loadSocksFromServer();
  });
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
          <img className="sockClass" src="assets/img/scarySock.jpg" alt="Scary Socks"/>
          <label htmlFor="scarySock"> Scary Socks</label>
        </div>
        <div id="crazySock">
          <img className="sockClass" src="assets/img/crazySock.jpg" alt="Crazy Socks"/>
          <label htmlFor="crazySock"> Crazy Socks</label>
        </div>
        <div id="funnySock">
          <img className="sockClass" src="assets/img/funnySock.jpg" alt="Funny Socks"/>
          <label htmlFor="funnySock"> Funny Socks</label>
        </div>
      </div>
      <div id="bottomRow">
        <div id="coolSock">
          <img className="sockClass" src="assets/img/coolSock.jpg" alt="Cool Socks"/>
          <label htmlFor="coolSock"> Cool Socks</label>
        </div>
        <div id="superSock">
          <img className="sockClass" src="assets/img/superSock.jpg" alt="Super Socks"/>
          <label htmlFor="superSock"> Super Socks</label>
        </div>
        <div id="normalSock">
          <img className="sockClass" src="assets/img/normalSock.jpg" alt="Normal Socks"/>
          <label htmlFor="normalSock"> Normal Socks</label>
        </div>
      </div>
    </div>
  );
};

const AccountPage = (props) => {
  return (
    <div id="accountStart">
      <div className="taglineDiv">
        <h1> Socko's Socks! </h1>
        <h3> "Who needs friends when you have cool socks?" </h3>
      </div>
      <div id="accountInfo">
        <h1> Account Information </h1>
        <p> Username: </p>
        <p> Purchases: </p>
        <p> Funds: </p>
        <h4> Add Funds </h4>
        <h4> Change Password </h4>
      </div>
    </div>
  );    
};

const SearchPage = (props) => {
 loadSocksFromServer();
 return (
    <div id="searchStart">
      <div className="taglineDiv">
        <h1> Socko's Socks! </h1>
        <h3> "Who needs friends when you have cool socks?" </h3>
      </div>
      <div id="toggleDisplay">
        <div id="filterDiv">
            <h3> Filter </h3>
        </div>
        <input id="coolSocks" type="checkbox" name="coolSocks"/>
        <label htmlFor="coolSocks">Hide Cool Socks</label>
        <br/>
        <input id="crazySocks" type="checkbox" name="crazySocks"/>
        <label htmlFor="crazySocks">Hide Crazy Socks</label>
        <br/>
        <input id="funnySocks" type="checkbox" name="funnySocks"/>
        <label htmlFor="funnySocks">Hide Funny Socks</label>
        <br/>
        <input id="normalSocks" type="checkbox" name="normalSocks"/>
        <label htmlFor="normalSocks">Hide Normal Socks</label>
        <br/>
        <input id="scarySocks" type="checkbox" name="scarySocks"/>
        <label htmlFor="scarySocks">Hide Scary Socks</label>
        <br/>
        <input id="superSocks" type="checkbox" name="superSocks"/>
        <label htmlFor="superSocks">Hide Super Socks</label>
      </div>
      <img src="assets/img/dots.png" alt="dots" className="dots"/>
      <div id="searchInfo">
         <form id="searchForm" 
          name="searchForm"
          onSubmit={handleSearch}
          action="/search"
          method="GET"
          className="searchForm"
          >
          <input id="searchBar" type="text" name="searchBar" placeholder="Search..."/>
          <input type="hidden" name="_csrf" value={props.csrf} />
          <img src="assets/img/searchButton.png" alt="searchButton" className="searchSubmit" type="submit"/>
        </form>
      </div>
    </div>
  );    
};

const loadSocksFromServer = () => {
  sendAjax('GET', '/getSocks', null, (data) => {
    console.log(data.socks);
  });
};

const createContentPage = (csrf) => {
  ReactDOM.render(
    <ContentPage csrf={csrf} />,
    document.querySelector("#content")
  );
};

const createAccountPage = (csrf) => {
  ReactDOM.render(
    <AccountPage csrf={csrf} />,
    document.querySelector("#content")
  );
};

const createSearchPage = (csrf) => {
  ReactDOM.render(
    <SearchPage csrf={csrf} />,
    document.querySelector("#content")
  );
};

const setup = function(csrf) {
  createContentPage(csrf); // default view

  const homeButton = document.querySelector("#homeButton");
  const accountButton = document.querySelector("#accountButton");
  for(let i = 0; i < document.querySelectorAll(".sockClass").length; i++) {
    const searchButton = document.querySelectorAll(".sockClass")[i];
    searchButton.addEventListener("click", (e) => {
      e.preventDefault();
      createSearchPage(csrf);
      return false;
    });
  }
  homeButton.addEventListener("click", (e) => {
    createContentPage(csrf);
    return false;
  }); 
  accountButton.addEventListener("click", (e) => {
    e.preventDefault();
    createAccountPage(csrf);
    return false;
  });
};

const getToken = () => {
  sendAjax('GET', '/getToken', null, (result) => {
    setup(result.csrfToken);
  });
    
};

$(document).ready(function() {
  getToken();
});
