// import Header from './Components/PageComponents/Header';
import './App.css';
// import PageBody from './Components/PageComponents/Body';
import Content from './Components/PageComponents/Content';
import NavItem from './Components/Tools/NavItem';
import Icon from './Images/sound-waves.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='sidebar'>

          <Link to="/">
            <NavItem
              title={"Home"}
              icon={Icon}
              iconSrc={"Music icons created by Freepik - Flaticon"}
            />
          </Link>
          <Link to="/library">
            <NavItem
              title={"Library"}
              icon={Icon}
              iconSrc={"Music icons created by Freepik - Flaticon"}
            />
          </Link>
          <Link to="/search">
            <NavItem
              title={"Search"}
              icon={Icon}
              iconSrc={"Music icons created by Freepik - Flaticon"}
            />
          </Link>
        </div>

        <article id="body">
          <div className="page-body">
            <Switch>
              <Route exact path="/">
                <h1>Welcome to the home page</h1>
              </Route>
              <Route exact path="/search">
                <h1>something for the search page</h1>
              </Route>
              <Route exact path="/library">
                <Content />
              </Route>
            </Switch>
          </div>
        </article>
      </Router>

    </div>
  );
}

export default App;