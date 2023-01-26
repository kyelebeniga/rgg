import logo from './logo.svg';
import './App.css';
import './Components/css/styles.css'
import './Components/css/index.css'
import './Components/css/sidebar.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contacts from './Components/Contacts';
import Notifications from './Components/Notifications';
import Sidebar from './Components/Sidebar';

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
      <Sidebar />
      <Navbar />
      {component}
    </>
  )
}

export default App;
