import React, {Component} from 'react';
import Styles from './form.module.css';
class RegisterForm extends Component{
    constructor(){
        super();
        this.state = ({
            fname : '',
            lname : '',
            email: '',
            password: '',
            mobile: '',
            age : '',
            gender: '',
            profession: '',
            skills: [],
            // dateOfBirth: '',
            // favouriteColor: '',
            // bio : ''
        })
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    checkboxChangeHandler = (event) => {
        if(event.target.checked){
            this.setState({
                skills: [...this.state.skills, event.target.value]
            })
        }else{
            this.setState({
                skills: this.state.skills.filter( ele => (
                    ele !== event.target.value
                ))
            })
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render(){
        return (
            <div className = {Styles.container}>
                <h1>Register Form </h1>
                <form>
                    <div>
                        <label>First Name</label>
                        <input type = 'text' name = 'fname' value = {this.state.fname} onChange = {this.changeHandler} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type = 'text' name = 'lname' value = {this.state.lname} onChange = {this.changeHandler} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type = 'email' name = 'email' value = {this.state.email} onChange = {this.changeHandler} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type = 'password' name = 'password' value = {this.state.password} onChange = {this.changeHandler} />
                    </div>
                    <div>
                        <label>Mobile</label>
                        <input type = 'mobile' name = 'mobile' value = {this.state.mobile} onChange = {this.changeHandler} />
                    </div>
                    <div>
                        <label>Age</label>
                        <input type = 'age' name = 'age' value = {this.state.age} onChange = {this.changeHandler} />
                    </div>
                    <div className = {Styles.items}>
                        <p>Gender</p>
                        <input type = 'radio' name = 'gender' value = "Male" onChange = {this.changeHandler} />
                        <label>Male</label>
                        
                        <input type = 'radio' name = 'gender' value = "Female" onChange = {this.changeHandler} />
                        <label>Female</label>
                        
                        <input type = 'radio' name = 'gender' value = "Others" onChange = {this.changeHandler} />
                        <label>Others</label>                        
                    </div>
                    <div>
                        <p>Select Your Profession</p>
                        <select type = "select" name = "profession" value = {this.state.profession} onChange = {this.changeHandler}>
                            <option value = "">Select</option>
                            <option value = "Frontend">Frontend Developer</option>
                            <option value = "Backend">Backend Developer</option>
                            <option value = "Full-Stack">Full-Stack Developer</option>
                        </select>
                    </div>
                    <div className = {Styles.items}>
                        <p>Your Skills</p>
                        <input type = "checkbox" name = "JavaScript" value = "JavaScript" onChange = {this.checkboxChangeHandler}  />
                        <label>JavaScript</label>
                        
                        <input type = "checkbox" name = "React" value = "React" onChange = {this.checkboxChangeHandler}  />
                        <label>React</label>
                        
                        <input type = "checkbox" name = "Node Js" value = "Node Js" onChange = {this.checkboxChangeHandler}  />
                        <label>Node Js</label>
                        
                        <input type = "checkbox" name = "MongoDB" value = "MongoDB" onChange = {this.checkboxChangeHandler}  />
                        <label>MongoDB</label>
                        
                        <input type = "checkbox" name = "React Native" value = "React Native" onChange = {this.checkboxChangeHandler}  />
                        <label>React Native</label>
                    </div>
                    {/* <div>
                        <label>Date Of Birth</label>
                        <input type = "date" name = 'dateOfBirth' value = {this.state.dateOfBirth} onChange = {this.changeHandler} />
                    </div>
                    <div>
                        <label>Your Favourite Color</label>
                        <input type = "color" name = 'favouriteColor' value = {this.state.favouriteColor} onChange = {this.changeHandler} />
                    </div> */}
                    {/* <textarea type = "textarea" name = "bio" value = {this.state.bio} onChange = {this.changeHandler} rows = '5' cols = '30'>
                    </textarea> */}
                    <button onClick = {this.submitHandler} >Submit</button>
                </form>
            </div>
        )
    }
}

export default RegisterForm;