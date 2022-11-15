import React from 'react'
import "../App.css";

const FormList = (props) => {
      return (
            <div className="form-list">
                  <form onSubmit={props.addCourse}>
                        <input type="text" placeholder="Course name" onChange={props.handleInput} value={props.empty} />
                        <button>Add Course</button>
                  </form>
            </div>
      )
}

export default FormList