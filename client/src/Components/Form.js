import React from "react";

const Form = (props) => {
    return (
        <form>
            <label>Search Books</label>
            <input className="form-control form-control-lg" type="text" placeholder="Enter Book Title" onChange={props.value}/>

            <input className="btn btn-primary" type="submit" value="Submit" onClick={props.bookInfo}></input>
        </form>
    );
}

export default Form;