import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import OrderReview from './Components/OrderReview/OrderReview';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import Shop from './Components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import SignUp from './Components/SignUp/SignUp';
import LogIn from './Components/LogIn/LogIn';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/orderReview' element={<OrderReview></OrderReview>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/logIn' element={<LogIn></LogIn>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
