import './App.css';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Home from './Main/Home'
import Studentmain from './Students/Student_main';
import Teachermain from './Teacher/Teacher_main';
import Createcourse from './CreateCourse/Create_course';
import Coursepage from './CoursePage/Course_page';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/student" element={<Studentmain/>}/>
      <Route path="/teacher" element={<Teachermain/>}/>
      <Route path="teacher/create_course" element={<Createcourse/>}/>
      <Route path="/course_page" element={Coursepage} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
