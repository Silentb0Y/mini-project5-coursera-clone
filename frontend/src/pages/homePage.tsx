import "bootstrap/dist/css/bootstrap.min.css"

export function HomePage() {
    const CourseData = [{id: 1, name:'machine Learining', desc:"this is description of ml", link:"AddLinkHere"},
                        {id: 2, name:'dsa', desc:"this is description of dsa", link:"AddLinkHere"},
                        {id: 3, name:'cns', desc:"this is description of cns", link:"AddLinkHere"},
                        {id: 4, name:'system design', desc:"this is description of sys", link:"AddLinkHere"}]

    function SelectThisCourse(Id :number){

    }
    const listCourses = CourseData.map(course =>
        <div key={course.id} onClick={() => SelectThisCourse(course.id)} className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">{course.desc}</p>
                <a href={course.link} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )

    return(
        <div className="container p-4 ">
            {listCourses}
        </div>
    )
}