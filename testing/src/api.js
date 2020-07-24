import React from 'react';
import axios from 'axios';


export default class Api extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: ''
        }

    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
    
        this.setState({
          data: value
        });
      };

    add(a){
        return(a + a)
    }

    fetch() {
        return (axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(function (response) {
         console.log(response.data);
         this.setState({data: data})
         

         })
         .catch(function (error) {
         console.log("error");
        })
        );
    }

    render(){

        return(
            <div>
                <p>{data.name}</p>
                <p>{response.data.username}</p>
                <p>{response.data.email}</p>
            </div>
        )
    }
}
console.log("hello world!");
// console.log(Api.fetch());