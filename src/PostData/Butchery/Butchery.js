import React, { Component } from 'react';
import axios from 'axios';


class PostDataShops extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         responsibleUser:'',
         butcheryShops:''
      }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://meating-point.innofabrik.de/api/butcheries', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

render() {
   const {name,responsibleUser,butcheryShops} = this.state
   return (
     <div>
         <form onSubmit={this.submitHandler}>
              <div>
                <input 
                className="ml-4  inline-flex flex-wrap text-gray-600 border-0 py-2 px-6 my-2 outline outline-offset-2 outline-2 rounded-full text-lg"
                type="text" 
                name="name" 
                value={name} 
                onChange={this.changeHandler}
                 />
              </div>
              <div>
                <input
                className="ml-4  inline-flex flex-wrap text-gray-600 border-0 py-2 px-6 my-2 outline outline-offset-2 outline-2 rounded-full text-lg"
                type="text" 
                name="responsibleUser" 
                value={responsibleUser}
                onChange={this.changeHandler}
                />
              </div>
              <div>
                <input 
                className="ml-4  inline-flex flex-wrap text-gray-600 border-0 py-2 px-6 my-2 outline outline-offset-2 outline-2 rounded-full text-lg" 
                type="text" 
                name="butcheryShops" 
                value={butcheryShops}
                onChange={this.changeHandler}
                 />
              </div>
              <button 
              className="ml-4  inline-flex flex-wrap text-gray-600 border-0 py-2 px-6 my-2 outline outline-offset-2 outline-2 rounded-full text-lg"
              type="submit">
                Submit
                </button>
         </form>
     </div>
   )



}
}
export default PostDataShops


   


  
