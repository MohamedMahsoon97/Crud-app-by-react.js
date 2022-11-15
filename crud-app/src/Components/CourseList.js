import React, { Component , Fragment } from 'react'
import "../App.css";
class CourseList extends Component {
      
      state = {
            isEdit : false
      }

      renderCourse = () => {
            return (
                  <li className="item">
                        <span> {this.props.CourseName.name} </span>
                        <div>
                              <button onClick={() => this.toggleState()}> Edit </button>
                              <button onClick={() => this.props.deleteCourse(this.props.index)}> Delete </button>
                        </div>
                  </li>
            )
      }

      updateSubmitCourse = (e) => {
            e.preventDefault();
            this.props.editCourse(this.props.index , this.input.value);
            this.toggleState();
      }

      renderUpdateCourse = () => {
            return (
                  <div className="update-form">
                        <form onSubmit={this.updateSubmitCourse}>
                              <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.CourseName.name} />
                              <button>Update</button>
                        </form>
                  </div>
            )
      }

      toggleState = () => {
            let {isEdit} = this.state
            this.setState({
                  isEdit : !isEdit
            })
            console.log(isEdit);
      }
      
      render() {
            let {isEdit} = this.state;
            return (
                  <Fragment>
                        { isEdit ? this.renderUpdateCourse() : this.renderCourse() }
                  </Fragment>
            )
      }
}
export default CourseList;