const handleSearch = (e) => {
  e.preventDefault();
  $("#errorMessage").fadeIn({width:'hide'},350);
  setTimeout(function() {
   $("#errorMessage").fadeOut({width:'hide'}, 350);
  }, 3000);
  if ($("#searchBar").val() === '') {
    handleError("Please type in a valid query!");
    return false;
  }
  sendAjax('GET', $("#searchForm").attr("action"), $("#searchForm").serialize(), function() {
    //loadSocksFromServer(props);
  });
  return false;
};

const handlePassChange = (e) => {
  e.preventDefault();
  $("#errorMessage").fadeIn({width:'hide'},350);
  setTimeout(function() {
   $("#errorMessage").fadeOut({width:'hide'}, 350);
  }, 3000);
  if ($("#newPass1").val() === '' || $("#newPass2").val() === '') {
    handleError("All fields are required.");
    return false;
  }
  if ($("#newPass1").val() !== $("#newPass2").val()) {
    handleError("Passwords do not match.");
    return false;
  }
  sendAjax('POST', $("#passChangeForm").attr("action"), $("#passChangeForm").serialize(), function() {
    console.log("in pass change");
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
          <p> Purchases:  </p>
          <p> Funds: $ </p>
          <form id="passChangeForm" 
            name="passChangeForm"
            onSubmit={handlePassChange}
            action="/passChange"
            method="POST"
            className="passForm"
          >
          <label htmlFor="newPass1">Password: </label>
          <input id="newPass1" type="password" name="newPass1" placeholder="password"/>
          <label htmlFor="newPass2">Retype: </label>
          <input id="newPass2" type="password" name="newPass2" placeholder="retype password"/>
          <input type="hidden" name="_csrf" value={props.csrf} />
          <input className="passForm" type="submit" value="Change Password" />
          </form>
          <h4 id="addFunds"> Add Funds </h4>
        </div>
      </div>, document.querySelector("#content")
    );
  //});
};

const SearchPage = (props) => {
  sendAjax('GET', '/getSocks', null, (data) => {
    ReactDOM.render(
      <div id="searchPageDiv">
        <div id="searchStart">
          <div className="taglineDiv">
            <h1> Socko's Socks! </h1>
            <h3> "Who needs friends when you have cool socks?" </h3>
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
            <div className="imgContentDiv">
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
    for(let i = 0; i < 30; i++) {
      const buyButton = document.querySelectorAll(".imgContentDiv")[i];
      buyButton.addEventListener("click", (e) => {
        e.preventDefault();
        BuyPage(props, data.socks[i].name, data.socks[i].price, data.socks[i].category, data.socks[i].picture);
        return false;
      });
    }
  });
};

const BuyPage = (props, name, price, category, picture) => {
  sendAjax('GET', '/getSocks', null, (data) => {
    let pic1 = "";
    let pic1Name = "";
    let pic1Price = "";
    let pic1Category = "";
    let pic2 = "";
    let pic2Name = "";
    let pic2Price = "";
    let pic2Category = "";
    let pic3 = "";
    let pic3Name = "";
    let pic3Price = "";
    let pic3Category = "";
    let count = 4;
    for(let i = 0; i < 30; i++) {
      if(data.socks[i].category === category && data.socks[i].name != name) {
        count--;
        switch(count) {
          case 3:
            pic1 = data.socks[i].picture;
            pic1Name = data.socks[i].name;
            pic1Price = data.socks[i].price;
            pic1Category = data.socks[i].category;
            break;
          case 2:
            pic2 = data.socks[i].picture;
            pic2Name = data.socks[i].name;
            pic2Price = data.socks[i].price;
            pic2Category = data.socks[i].category;
            break;
          case 1:
            pic3 = data.socks[i].picture;
            pic3Name = data.socks[i].name;
            pic3Price = data.socks[i].price;
            pic3Category = data.socks[i].category;
            break;
          default:
            console.log("no more socks needed");
        }
      }
    }
    ReactDOM.render (
      <div id="buyStart">
        <div className="taglineDiv">
          <h1> Socko's Socks! </h1>
          <h3> "Who needs friends when you have cool socks?" </h3>
        </div>
        <br/>
        <div id="buyInfo">
          <img src={picture} alt={name}/>
          <h3> Name: {name} </h3>
          <h3> Category: {category} </h3>
          <h3> Price: {price} </h3>
          <h3> Description: Coming soon!</h3>
          <h2 id="buyNow"> Buy Now! </h2>
        </div>
        <div id="similarSocks">
          <div id="sock1">
            <img src={pic1} alt={pic1Name}/>
            <h4> {pic1Name} </h4>
          </div>
          <div id="sock2">
            <img src={pic2} alt={pic2Name}/>
            <h4> {pic2Name} </h4>
          </div>
            <div id="sock3">
            <img src={pic3} alt={pic3Name}/>
            <h4> {pic3Name} </h4>
          </div>
        </div>
      </div>, document.querySelector("#content")
    );
    const bought = document.querySelector("#buyNow");
    bought.addEventListener("click", (e) => {
      console.log("bought " + name + " for " + price + " it was of the " + category + " type and looks like this " + picture);
      // only let them buy if user has enough funds
    })
    const sock1Link = document.querySelector("#sock1");
    sock1Link.addEventListener("click", (e) => {
      e.preventDefault();
      BuyPage(props, pic1Name, pic1Price, pic1Category, pic1);
      return false;
    });
    const sock2Link = document.querySelector("#sock2");
    sock2Link.addEventListener("click", (e) => {
      e.preventDefault();
      BuyPage(props, pic2Name, pic2Price, pic2Category, pic2);
      return false;
    });
    const sock3Link = document.querySelector("#sock3");
    sock3Link.addEventListener("click", (e) => {
      e.preventDefault();
      BuyPage(props, pic3Name, pic3Price, pic3Category, pic3);
      return false;
    });
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

