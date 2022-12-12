import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import HomeTask from './components/task/homeTask/HomeTask'
import TaskDetail from './components/task/taskDetail/TaskDetail'

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
                </Routes>
                <Footer/>
            </div> 
    </Router> 
  );
}

export default App;
