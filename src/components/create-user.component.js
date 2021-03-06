import React,{Component} from "react";
import axios from 'axios';

export default class CreateUsers extends Component{
    constructor(props){
        super(props);
       this.onChangeUsername=this.onChangeUsername.bind(this);
       this.onSubmit=this.onSubmit.bind(this);
       
       this.state={
           username:'',
        } 
    }
    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
        }
    onSubmit(e)
    {
        e.preventDefault();

        const user={
            username:this.state.username,
        };
        console.log(user);
        //Sending HTTP POST request to backend
        axios.post('http://localhost:5000/users/add/',user)
        .then(res=>console.log(res.data));
        //keeping on the same page to add multiple user
        this.setState({
            username:'',
        });
    }
    render(){
        return(
            <div>
                <h3>Create New Fat/Fit User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User"className="btn btn-primary"/>
                    </div>
                </form>   
            </div>     
        )
    }
}