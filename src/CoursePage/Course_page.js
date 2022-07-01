

const Course_page = ({course}) => {
    
    return(
        <div style={{border:"2px solid grey"}}>
            <h1>{course.course_name}</h1>
            <h3>{course.description}</h3>
        </div>
    )
}

export default Course_page