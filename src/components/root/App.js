import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import CartDetail from '../cart/CartDetail';
import Navi from '../navi/Navi';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import Dashboard from './Dashboard';



function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/prduct" exact component={Dashboard}/>
        <Route path="/cart"  exact component={CartDetail}/>
        <Route path="/saveproduct/:productId"  exact component={AddOrUpdateProduct}/>
   
      </Switch>
    </Container>
  );
}

export default App;
