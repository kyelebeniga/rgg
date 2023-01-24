import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contacts from './Components/Contacts';
import Notifications from './Components/Notifications';

function App() {
  let component 
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/home":
      component = <Home />
      break
    case "/notifications":
      component = <Notifications />
      break
    case "/contacts":
      component = <Contacts />
      break
  }
  return (
    <>
      <Navbar />
      {component}
    </>
  )
}

export default App;
