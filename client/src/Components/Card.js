import React from "react";

const BookCard = (props) => {
    return (
        <div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.image} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <p className="card-text"><small className="text-muted">{props.link}</small></p>
                        </div>

                    </div>
                </div>
                <button type="button" className="btn btn-success" onClick={props.post}>Save</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
}

export default BookCard;