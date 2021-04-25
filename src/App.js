import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Header'
import TouristList from './Component/TouristList'
import {Container} from 'react-bootstrap/'
import {ListProvider} from './AppContext'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ErrorPage from './Component/ErrorPage';
import TouristDetail from './Component/TouristDetail';

function App() {
  return (
    <Container>
      <ListProvider>
    <div className="App">
      <Header/>
      <Router>
        <Switch>
      <Route path='/Tourism-app' exact component={TouristList}></Route>
      <Route path='/detail/:id' exact component={TouristDetail}></Route>
      <Route path='/'  component={ErrorPage}></Route>
      </Switch>
      </Router>
    </div>
    </ListProvider>
    </Container>
    
  );
}

export default App;
