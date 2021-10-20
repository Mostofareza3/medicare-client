import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
// import Main from './components/Services/Services';
import Navigation from './components/Navbar/Navigation';
import News from './components/News/News';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import Services from './components/Services/Services'

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>

          <Switch>
            <Route exact path="/">
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/about">
              <About />
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/services">
              <Services />
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/service/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/news">
              <News></News>
              <Footer></Footer>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
              <Footer></Footer>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
