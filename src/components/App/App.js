import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";


function App() {

  function handleKeys() {

  }

  return (
    <div className="App">
      <Header></Header>
      <Main>
        handleKeys={handleKeys}
      </Main>
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
