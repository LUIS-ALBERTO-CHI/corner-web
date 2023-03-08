import React from "react";
import '../assets/css/Login.css';
import Lcorner from '../assets/img/Lcorner.png';
import {Apiurl} from '../services/api_rest'
import Home from './Home';
import axios from 'axios';

class Login extends React.Component{

    state={
        form:{
            "Email": "",
            "Password": ""
        },
        error:false,
        errorMsg:""
    }

    manejadorSubmit =e=>{
        e.preventDefault();
    }

    manejadorChange = async e=> {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    manejadorBoton=()=>{
        let url = Apiurl + "Auth";
        axios.get(url,this.state.form)
        .then(response => {
            console.log(response);
        })
    }

    render(){

        return(
        <React.Fragment>
            <div className="wrapper fadeInDown">
                <div id="formContent">

                <div className="fadeIn first">
                    <br /><br />
                <img src={Lcorner} width="150" alt="User Icon" />
                    <br /><br />
                    </div>

                        <form onSubmit={this.manejadorSubmit}>
                        <input type="text" className="fadeIn second" name="Email" placeholder="Email" onChange={this.manejadorChange}/>
                        <input type="password"  className="fadeIn third" name="Password" placeholder="Password" onChange={this.manejadorChange}/>
                        <input type="submit" className="fadeIn fourth" value="Log In"onClick={this.manejadorBoton}/>
                        </form>

                    <div id="formFooter">
                    <a className="underlineHover" href={Home}>Forgot Password?</a>
                    </div>

                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default Login