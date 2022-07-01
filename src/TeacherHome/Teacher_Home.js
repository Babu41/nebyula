import Teachercourselist from "../Teacher_course_list.js/Teacher_course_list"
import {Link} from 'react-router-dom'
const Teacher_Home = () => {
    return(
        <div>
            <Teachercourselist/>
            <button><Link to="/teacher/create_course"> Create New Course </Link></button>
        </div>
    )
}

export default Teacher_Home;