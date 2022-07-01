import { useState } from "react"
import { course_list } from "../data"
import Coursepage from "../CoursePage/Course_page";
const Teacher_course_list = ({setCourse_func}) => {
    const [passCourse,setPassCourse] = useState();
    const handleClick = (course) => {
        setPassCourse(course)
    }

    return(
        <div>
            {course_list.map((course)=>{
                return(
                
                <div key={course.course_name} style={{cursor:'pointer'}}>
                    <div onClick={()=>handleClick(course)}>
                        <h3>{course.course_name}</h3>
                        <p>{course.description}</p>
                    </div>
                    
                </div>       
                )
            })}
            {passCourse?<Coursepage course={passCourse}/>:""}
        </div>
    )
}

export default Teacher_course_list