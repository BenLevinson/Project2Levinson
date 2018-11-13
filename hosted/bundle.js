"use strict";

var handleSearch = function handleSearch(e) {
  e.preventDefault();
  $("#errorMessage").fadeIn({ width: 'hide' }, 350);
  setTimeout(function () {
    $("#errorMessage").fadeOut({ width: 'hide' }, 350);
  }, 3000);
  if ($("#searchBar").val() === '') {
    handleError("Please type in a valid query!");
    return false;
  }
  sendAjax('GET', $("#searchForm").attr("action"), $("#searchForm").serialize(), function () {
    //loadSocksFromServer(props);
  });
  return false;
};

var handlePassChange = function handlePassChange(e) {
  e.preventDefault();
  $("#errorMessage").fadeIn({ width: 'hide' }, 350);
  setTimeout(function () {
    $("#errorMessage").fadeOut({ width: 'hide' }, 350);
  }, 3000);
  if ($("#newPass1").val() === '' || $("#newPass2").val() === '') {
    handleError("All fields are required.");
    return false;
  }
  if ($("#newPass1").val() !== $("#newPass2").val()) {
    handleError("Passwords do not match.");
    return false;
  }
  sendAjax('POST', $("#passChangeForm").attr("action"), $("#passChangeForm").serialize(), function () {
    console.log("in pass change");
  });
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
        React.createElement("img", { className: "sockClass", src: "assets/img/scarySock.jpg", alt: "Scary Socks" }),
        React.createElement(
          "label",
          { htmlFor: "scarySock" },
          " Scary Socks"
        )
      ),
      React.createElement(
        "div",
        { id: "crazySock" },
        React.createElement("img", { className: "sockClass", src: "assets/img/crazySock.jpg", alt: "Crazy Socks" }),
        React.createElement(
          "label",
          { htmlFor: "crazySock" },
          " Crazy Socks"
        )
      ),
      React.createElement(
        "div",
        { id: "funnySock" },
        React.createElement("img", { className: "sockClass", src: "assets/img/funnySock.jpg", alt: "Funny Socks" }),
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
        React.createElement("img", { className: "sockClass", src: "assets/img/coolSock.jpg", alt: "Cool Socks" }),
        React.createElement(
          "label",
          { htmlFor: "coolSock" },
          " Cool Socks"
        )
      ),
      React.createElement(
        "div",
        { id: "superSock" },
        React.createElement("img", { className: "sockClass", src: "assets/img/superSock.jpg", alt: "Super Socks" }),
        React.createElement(
          "label",
          { htmlFor: "superSock" },
          " Super Socks"
        )
      ),
      React.createElement(
        "div",
        { id: "normalSock" },
        React.createElement("img", { className: "sockClass", src: "assets/img/normalSock.jpg", alt: "Normal Socks" }),
        React.createElement(
          "label",
          { htmlFor: "normalSock" },
          " Normal Socks"
        )
      )
    )
  );
};

var AccountPage = function AccountPage(props) {
  console.log("in loading info");
  //sendAjax('GET', '/getAccInfo', null, (data) => {
  ReactDOM.render(React.createElement(
    "div",
    { id: "accountStart" },
    React.createElement(
      "div",
      { id: "accountStart" },
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
      )
    ),
    React.createElement(
      "div",
      { id: "accountInfo" },
      React.createElement(
        "h1",
        null,
        " Account Information "
      ),
      React.createElement(
        "p",
        null,
        " Username: "
      ),
      React.createElement(
        "p",
        null,
        " Purchases:  "
      ),
      React.createElement(
        "p",
        null,
        " Funds: $ "
      ),
      React.createElement(
        "form",
        { id: "passChangeForm",
          name: "passChangeForm",
          onSubmit: handlePassChange,
          action: "/passChange",
          method: "POST",
          className: "passForm"
        },
        React.createElement(
          "label",
          { htmlFor: "newPass1" },
          "Password: "
        ),
        React.createElement("input", { id: "newPass1", type: "password", name: "newPass1", placeholder: "password" }),
        React.createElement(
          "label",
          { htmlFor: "newPass2" },
          "Retype: "
        ),
        React.createElement("input", { id: "newPass2", type: "password", name: "newPass2", placeholder: "retype password" }),
        React.createElement("input", { type: "hidden", name: "_csrf", value: props.csrf }),
        React.createElement("input", { className: "passForm", type: "submit", value: "Change Password" })
      ),
      React.createElement(
        "h4",
        { id: "addFunds" },
        " Add Funds "
      )
    )
  ), document.querySelector("#content"));
  //});
};

var SearchPage = function SearchPage(props) {
  sendAjax('GET', '/getSocks', null, function (data) {
    ReactDOM.render(React.createElement(
      "div",
      { id: "searchPageDiv" },
      React.createElement(
        "div",
        { id: "searchStart" },
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
          "div",
          { id: "searchInfo" },
          React.createElement(
            "form",
            { id: "searchForm",
              name: "searchForm",
              onSubmit: handleSearch,
              action: "/search",
              method: "GET",
              className: "searchForm"
            },
            React.createElement("input", { id: "searchBar", type: "text", name: "searchBar", placeholder: "Search..." }),
            React.createElement("input", { type: "hidden", name: "_csrf", value: props.csrf }),
            React.createElement("img", { src: "assets/img/searchButton.png", alt: "searchButton", className: "searchSubmit", type: "submit" })
          )
        )
      ),
      React.createElement(
        "div",
        { id: "displayContent" },
        React.createElement(
          "div",
          { id: "topRowSocks" },
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[0].picture, alt: data.socks[0].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[0].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[1].picture, alt: data.socks[1].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[1].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[2].picture, alt: data.socks[2].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[2].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[3].picture, alt: data.socks[3].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[3].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[4].picture, alt: data.socks[4].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[4].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[5].picture, alt: data.socks[5].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[5].name,
              " "
            )
          )
        ),
        React.createElement(
          "div",
          { id: "secondRowSocks" },
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[6].picture, alt: data.socks[6].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[6].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[7].picture, alt: data.socks[7].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[7].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[8].picture, alt: data.socks[8].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[8].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[9].picture, alt: data.socks[9].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[9].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[10].picture, alt: data.socks[10].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[10].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[11].picture, alt: data.socks[11].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[11].name,
              " "
            )
          )
        ),
        React.createElement(
          "div",
          { id: "thirdRowSocks" },
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[12].picture, alt: data.socks[12].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[12].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[13].picture, alt: data.socks[13].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[13].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[14].picture, alt: data.socks[14].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[14].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[15].picture, alt: data.socks[15].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[15].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[16].picture, alt: data.socks[16].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[16].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[17].picture, alt: data.socks[17].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[17].name,
              " "
            )
          )
        ),
        React.createElement(
          "div",
          { id: "fourthRowSocks" },
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[18].picture, alt: data.socks[18].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[18].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[19].picture, alt: data.socks[19].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[19].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[20].picture, alt: data.socks[20].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[20].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[21].picture, alt: data.socks[21].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[21].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[22].picture, alt: data.socks[22].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[22].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[23].picture, alt: data.socks[23].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[23].name,
              " "
            )
          )
        ),
        React.createElement(
          "div",
          { id: "bottomRowSocks" },
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[24].picture, alt: data.socks[24].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[24].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[25].picture, alt: data.socks[25].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[25].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[26].picture, alt: data.socks[26].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[26].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[27].picture, alt: data.socks[27].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[27].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[28].picture, alt: data.socks[28].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[28].name,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "imgContentDiv" },
            React.createElement("img", { src: data.socks[29].picture, alt: data.socks[29].name }),
            React.createElement(
              "h5",
              null,
              " ",
              data.socks[29].name,
              " "
            )
          )
        )
      )
    ), document.querySelector("#content"));

    var _loop = function _loop(i) {
      var buyButton = document.querySelectorAll(".imgContentDiv")[i];
      buyButton.addEventListener("click", function (e) {
        e.preventDefault();
        BuyPage(props, data.socks[i].name, data.socks[i].price, data.socks[i].category, data.socks[i].picture);
        return false;
      });
    };

    for (var i = 0; i < 30; i++) {
      _loop(i);
    }
  });
};

var BuyPage = function BuyPage(props, name, price, category, picture) {
  sendAjax('GET', '/getSocks', null, function (data) {
    var pic1 = "";
    var pic1Name = "";
    var pic1Price = "";
    var pic1Category = "";
    var pic2 = "";
    var pic2Name = "";
    var pic2Price = "";
    var pic2Category = "";
    var pic3 = "";
    var pic3Name = "";
    var pic3Price = "";
    var pic3Category = "";
    var count = 4;
    for (var i = 0; i < 30; i++) {
      if (data.socks[i].category === category && data.socks[i].name != name) {
        count--;
        switch (count) {
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
    ReactDOM.render(React.createElement(
      "div",
      { id: "buyStart" },
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
        { id: "buyInfo" },
        React.createElement("img", { src: picture, alt: name }),
        React.createElement(
          "h3",
          null,
          " Name: ",
          name,
          " "
        ),
        React.createElement(
          "h3",
          null,
          " Category: ",
          category,
          " "
        ),
        React.createElement(
          "h3",
          null,
          " Price: ",
          price,
          " "
        ),
        React.createElement(
          "h3",
          null,
          " Description: Coming soon!"
        ),
        React.createElement(
          "h2",
          { id: "buyNow" },
          " Buy Now! "
        )
      ),
      React.createElement(
        "div",
        { id: "similarSocks" },
        React.createElement(
          "div",
          { id: "sock1" },
          React.createElement("img", { src: pic1, alt: pic1Name }),
          React.createElement(
            "h4",
            null,
            " ",
            pic1Name,
            " "
          )
        ),
        React.createElement(
          "div",
          { id: "sock2" },
          React.createElement("img", { src: pic2, alt: pic2Name }),
          React.createElement(
            "h4",
            null,
            " ",
            pic2Name,
            " "
          )
        ),
        React.createElement(
          "div",
          { id: "sock3" },
          React.createElement("img", { src: pic3, alt: pic3Name }),
          React.createElement(
            "h4",
            null,
            " ",
            pic3Name,
            " "
          )
        )
      )
    ), document.querySelector("#content"));
    var bought = document.querySelector("#buyNow");
    bought.addEventListener("click", function (e) {
      console.log("bought " + name + " for " + price + " it was of the " + category + " type and looks like this " + picture);
      // only let them buy if user has enough funds
    });
    var sock1Link = document.querySelector("#sock1");
    sock1Link.addEventListener("click", function (e) {
      e.preventDefault();
      BuyPage(props, pic1Name, pic1Price, pic1Category, pic1);
      return false;
    });
    var sock2Link = document.querySelector("#sock2");
    sock2Link.addEventListener("click", function (e) {
      e.preventDefault();
      BuyPage(props, pic2Name, pic2Price, pic2Category, pic2);
      return false;
    });
    var sock3Link = document.querySelector("#sock3");
    sock3Link.addEventListener("click", function (e) {
      e.preventDefault();
      BuyPage(props, pic3Name, pic3Price, pic3Category, pic3);
      return false;
    });
  });
};

var createContentPage = function createContentPage(csrf) {
  ReactDOM.render(React.createElement(ContentPage, { csrf: csrf }), document.querySelector("#content"));
};

var createAccountPage = function createAccountPage(csrf) {
  ReactDOM.render(React.createElement(AccountPage, { csrf: csrf }), document.querySelector("#content"));
};

var createSearchPage = function createSearchPage(csrf) {
  ReactDOM.render(React.createElement(SearchPage, { csrf: csrf }), document.querySelector("#content"));
};

var setup = function setup(csrf) {
  createContentPage(csrf); // default view

  var homeButton = document.querySelector("#homeButton");
  var accountButton = document.querySelector("#accountButton");
  for (var i = 0; i < document.querySelectorAll(".sockClass").length; i++) {
    var searchButton = document.querySelectorAll(".sockClass")[i];
    searchButton.addEventListener("click", function (e) {
      e.preventDefault();
      createSearchPage(csrf);
      return false;
    });
  }
  homeButton.addEventListener("click", function (e) {
    createContentPage(csrf);
    return false;
  });
  accountButton.addEventListener("click", function (e) {
    e.preventDefault();
    createAccountPage(csrf);
    return false;
  });
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
  console.log(response);
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
      console.log(action);
      handleError(messageObj.error);
    }
  });
};
