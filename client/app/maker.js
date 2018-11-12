const handleSearch = (e) => {
  e.preventDefault();
  $("#errorMessage").fadeIn({width:'hide'},350);
  if ($("#searchBar").val() === '') {
    handleError("Please type in a valid query!");
    return false;
  }
  sendAjax('GET', $("#searchForm").attr("action"), $("#searchForm").serialize(), function() {
    //loadSocksFromServer(props);
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
  loadAccountInfo(props);
}
const loadAccountInfo = (props) => {
  console.log("in loading info");
  //sendAjax('GET', '/getAccInfo', null, (data) => {
    ReactDOM.render(
      <div id="accountStart">
        <div id="accountStart">
          <div className="taglineDiv">
            <h1> Socko's Socks! </h1>
            <h3> "Who needs friends when you have cool socks?" </h3>
          </div>
        </div>
        <div id="accountInfo">
          <h1> Account Information </h1>
          <p> Username: </p>
          <p> Purchases: </p>
          <p> Funds: $</p>
          <h4> Add Funds </h4>
          <h4> Change Password </h4>
        </div>
      </div>, document.querySelector("#content")
    );
  //});
};

const SearchPage = (props) => {
 loadSocksFromServer(props);
};

const loadSocksFromServer = (props) => {
  sendAjax('GET', '/getSocks', null, (data) => {
    ReactDOM.render(
      <div id="searchPageDiv">
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
        <div id="displayContent">
          <div id="topRowSocks">
            <div className="imgContentDiv">
              <img src={data.socks[0].picture} alt={data.socks[0].name} />
              <h5> {data.socks[0].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[1].picture} alt={data.socks[1].name} />
              <h5> {data.socks[1].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[2].picture} alt={data.socks[2].name} />
              <h5> {data.socks[2].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[3].picture} alt={data.socks[3].name} />
              <h5> {data.socks[3].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[4].picture} alt={data.socks[4].name} />
              <h5> {data.socks[4].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[5].picture} alt={data.socks[5].name} />
              <h5> {data.socks[5].name} </h5>
            </div>
          </div>
          <div id="secondRowSocks">
            <div className="imgContentDiv">
              <img src={data.socks[6].picture} alt={data.socks[6].name} />
              <h5> {data.socks[6].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[7].picture} alt={data.socks[7].name} />
              <h5> {data.socks[7].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[8].picture} alt={data.socks[8].name} />
              <h5> {data.socks[8].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[9].picture} alt={data.socks[9].name} />
              <h5> {data.socks[9].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[10].picture} alt={data.socks[10].name} />
              <h5> {data.socks[10].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[11].picture} alt={data.socks[11].name} />
              <h5> {data.socks[11].name} </h5>
            </div>
          </div>
          <div id="thirdRowSocks">
            <div className="imgContentDiv">
              <img src={data.socks[12].picture} alt={data.socks[12].name} />
              <h5> {data.socks[12].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[13].picture} alt={data.socks[13].name} />
              <h5> {data.socks[13].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[14].picture} alt={data.socks[14].name} />
              <h5> {data.socks[14].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[15].picture} alt={data.socks[15].name} />
              <h5> {data.socks[15].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[16].picture} alt={data.socks[16].name} />
              <h5> {data.socks[16].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[17].picture} alt={data.socks[17].name} />
              <h5> {data.socks[17].name} </h5>
            </div>
          </div>
          <div id="fourthRowSocks">
            <div className="imgContentDiv">
              <img src={data.socks[18].picture} alt={data.socks[18].name} />
              <h5> {data.socks[18].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[19].picture} alt={data.socks[19].name} />
              <h5> {data.socks[19].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[20].picture} alt={data.socks[20].name} />
              <h5> {data.socks[20].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[21].picture} alt={data.socks[21].name} />
              <h5> {data.socks[21].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[22].picture} alt={data.socks[22].name} />
              <h5> {data.socks[22].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[23].picture} alt={data.socks[23].name} />
              <h5> {data.socks[23].name} </h5>
            </div>
          </div>
          <div id="bottomRowSocks">
            <div className="imgContentDiv">
              <img src={data.socks[24].picture} alt={data.socks[24].name} />
              <h5> {data.socks[24].name} </h5>
            </div>
            <div className="imgContentDiv" id="superheroSocks">
              <img src={data.socks[25].picture} alt={data.socks[25].name} />
              <h5> {data.socks[25].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[26].picture} alt={data.socks[26].name} />
              <h5> {data.socks[26].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[27].picture} alt={data.socks[27].name} />
              <h5> {data.socks[27].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[28].picture} alt={data.socks[28].name} />
              <h5> {data.socks[28].name} </h5>
            </div>
            <div className="imgContentDiv">
              <img src={data.socks[29].picture} alt={data.socks[29].name} />
              <h5> {data.socks[29].name} </h5>
            </div>
          </div>
        </div>
      </div>, document.querySelector("#content")
    );
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

