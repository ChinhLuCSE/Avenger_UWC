import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import HomeTask from './components/task/homeTask/HomeTask'
import TaskDetail from './components/task/taskDetail/TaskDetail'
import ModifyTask from './components/task/modifyTask/ModifyTask'
import Login from './components/signin/login/Login'
import ForgotPassword from './components/signin/forgot_password/ForgotPassword'
;


function App() {
  return (
    <Router>
            <div class="App">
                <Header/>
                <Navbar/>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/task" element={<HomeTask/>} />
                  <Route path="/task/detail" element={<TaskDetail/>} />
                  <Route path="/task/modify" element={<ModifyTask/>} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/login/forgotpw" element={<ForgotPassword/>} />
                </Routes>
                <Footer/>
            </div> 
    </Router> 
  );
}

export default App;
