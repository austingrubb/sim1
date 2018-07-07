import React, {Component} from "react";
import axios from "axios";

export default class Form extends Component{
    constructor(){
        super()
        this.state = {
            ImageUrl: "",
            ProductName: "",
            Price: null,

        }
        
    }


    handleChange = (key, value) =>{
        console.log(value)
        this.setState({[key]:value})

    }

    createProduct = ()=> {
        axios.post('/api/shelfie', {
            ImageUrl: this.state.ImageUrl,
            ProductName: this.state.ProductName,
            Price: this.state.Price
        }).then(response => {
            this.setState({
                array: response.data
            })
        }
            
        )
    }
    
    render(){
        return(
            <div>
                
                <p>Form</p>
                    <input onChange={(e) => this.handleChange("Image URL",e.target.value)}/>
                    <input onChange={(e) => this.handleChange("Product",e.target.value)}/>
                    <input onChange={(e) => this.handleChange("Price",e.target.value)}/>
                    <button>Cancel</button> 
                    <button onClick={this.createProduct}>Add</button> 
                
            </div>
        )
    }
}