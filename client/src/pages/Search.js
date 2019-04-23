import React, { Component } from "react";
import Form from "../Components/Form";
import axios from "axios";
import Card from "../Components/Card";



class Search extends Component {
    state = {
        books: [],
        title: ""
    }
    
    handleInputValueChange = (event) => {
        this.setState({title: event.target.value});
    }

    handleGettingBookInfo = (event) => {
        event.preventDefault();
        axios({
            method: "GET",
            url: "https://www.googleapis.com/books/v1/volumes?q=" + this.state.title
        }).then(response => {
            console.log(response.data.items);
            this.setState({
                books: response.data.items,
                title: ""
            });
        });

        // this.setState({value: ""});
    }

    handleSavingBooks = () => {
        axios({
            method: "POST",
            url: "/api/books"
        }).then(response => {
            console.log(response.data);
        });
    }

    render(){
        return (
            <div>
                <Form 
                    value={this.handleInputValueChange}
                    bookInfo={this.handleGettingBookInfo}
                />
                {this.state.books.map(bookInfo => (
                    <Card
                        key={bookInfo.id} 
                        title={bookInfo.volumeInfo.title}
                        authors={bookInfo.volumeInfo.authors}
                        description={bookInfo.volumeInfo.description}
                        image={bookInfo.volumeInfo.imageLinks.thumbnail}
                        link={bookInfo.volumeInfo.infoLink}
                        post={this.handleSavingBooks}
                    />
                ))}
                
            </div>
            
        );
    }
    
}

export default Search;