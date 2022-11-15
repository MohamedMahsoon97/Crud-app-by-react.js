import { Component } from "react";
import CourseList from "./CourseList";
import FormList from "./FormList";

class Crud extends Component {
    // My state
    state = { 
        Courses : [],
        course : '',
    } 
    // Function get input value
    handleInputChange = (e) => {
        this.setState({
            course : e.target.value
        }) 
    }

    // Function add
    addCourse = (e) => {
        e.preventDefault();
        let Courses = this.state.Courses; 
        let course = this.state.course;
        Courses.push({name : course})
        this.setState({
            Courses,
            course : ''
        })
    }

    // Function delete
    deleteCourse = (index) => {
        let Courses = this.state.Courses;
        Courses.splice(index , 1);
        this.setState({
            Courses
        });
        console.log(index);
    }

    // Function Edit
    editCourse = (index , value) => {
        let Courses = this.state.Courses;
        let course = Courses[index];
        course['name'] = value;
        this.setState({
            Courses
        })
        console.log(Courses);
        console.log(course);
    }
    render() { 
        console.log("The Length : " + this.state.Courses.length);
        return (
            <div className="app">
                    <h2>Add Skill</h2>
                    <FormList handleInput = {this.handleInputChange} addCourse={this.addCourse} empty={this.state.course} />
                    <ul>
                        {
                            this.state.Courses.length > 0 ?  
                                this.state.Courses.map( (course , index ) => (
                                    <CourseList
                                        deleteCourse={this.deleteCourse} 
                                        editCourse={this.editCourse} 
                                        CourseName={course} 
                                        key={index} 
                                        index={index} 
                                    /> 
                                ))
                            : <span className="center">No skills have been added</span>
                        }
                    </ul>
                </div>
        )
    }
}

export default Crud;