import './App.css';
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";


function App() {
  function handleKeys() {
    console.log(document);
    // document.main.label.classList.add('remove');
    
  }

  return (
    <div className="App">
      <Header></Header>
      <Main
        handleKeys={handleKeys}
      />
      <Footer></Footer>
        {/* <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          {loggedIn && (
            <ProtectedRoute
            />
          )}

          {loggedIn && (
            <ProtectedRoute
            />
          )}

          {loggedIn && (
            <ProtectedRoute
            />
          )}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch> */}
    </div>
  );
}

export default App;
