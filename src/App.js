import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Header'
import TouristList from './Component/TouristList'
import {Container} from 'react-bootstrap/'
import {ListProvider} from './AppContext'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import TouristDetail from './Component/TouristDetail';

function App() {
  return (
    <Container>
      <ListProvider>
    <div className="App">
      <Header/>
      <Router>
        <Switch>
      <Route path='/' exact component={TouristList}></Route>
      <Route path='/detail/:id'  component={TouristDetail}></Route>
      
      </Switch>
      </Router>
    </div>
    </ListProvider>
    </Container>
    
  );
}

export default App;
