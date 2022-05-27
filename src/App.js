
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Blogs from './pages/HomeComponents/Blogs';
import Business from './pages/HomeComponents/Business';
import Footer from './pages/shared/Footer';
import Parts from './pages/HomeComponents/Parts';
import Reviews from './pages/HomeComponents/Reviews';
import Navbar from './pages/shared/Navbar';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './additional/RequireAuth';
import Purchase from './pages/PartsPurchase/Purchase';
import Dashboard from './pages/Dashboard/Dashboard';
import MyPurchases from './pages/Dashboard/MyPurchases';
import AddReviews from './pages/Dashboard/AddReviews';
import MyProfile from './pages/Dashboard/MyProfile';
import Payment from './pages/Dashboard/Payment/Payment';

function App() {
  return (
    <div>
      <Navbar ></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/parts' element={<Parts></Parts>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/business' element={<Business></Business>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyPurchases></MyPurchases>}></Route>
          <Route path='addreviews' element={<AddReviews></AddReviews>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/contact' element={<Footer></Footer>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
