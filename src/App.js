import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'abc123',    // assuming this password, just for example
      isAuthorized: false,         // initially false
      showLoginPage: false,        // initially false
    }

    // binding 
    this.showLogin = this.showLogin.bind(this);
    this.authorization = this.authorization.bind(this);

  }
  
  authorization(e) {
  
    // get input value
   var pass = e.target.querySelector('input[type="password"]').value;
   // check with correct password
   var  check = pass === this.state.password; 
  
   // Ac to which update state 
   this.setState({isAuthorized:check});
  
  if(check)       // if user input pass is correct then no login page
  this.setState({showLoginPage:false});
  else {            // show error msg

    const msg = 'Incorrect Password !'
    document.querySelector(".errMsg").innerHTML = msg;
        
    setTimeout(() => {
      document.querySelector(".errMsg").innerHTML = '';
    },2000);
  }
}
  showLogin(e) {
  
    this.setState({showLoginPage:true});
  }


  render() {

    var email = 'xxxx12@gmail.com';
    var mob  = 9876543210;
    var address = 'AAAA B Road' ;
    
    const contact = (

    <div className = "boundry">
      <p style={{textDecoration: "underline",fontSize:"24px",fontFamily:'monospace'}}> Contact</p>
       
       <ul>
          <li>{email} </li>
          <li>{mob} </li>
          <li>{address} </li>
        </ul>
     </div>
    );
  // for initial purpose   
  let tempContact = '';
  let x = this.state.isAuthorized;
  
  if(x)
     tempContact = contact;

     // login variable
    const login = (

      <div className="boundry" >
        <h1 className="authForm"> Authorization Form</h1>
          <p style={{opacity:0.5}}>(only Authorized users can contact us ! )</p>
          <br /> 
        <form action="#" onSubmit={this.authorization}>
        <p style={{color:'red'}} className="errMsg"> </p>
        <input className = 'input' type = "password" placeholder = 'Enter password first ' />
        <br /> <br />
        <input className='submit' type = "submit" value="Submit"/>          
        <br /> <br />

        </form>
      </div>
    );
       
    return (
      <div className="App">
       <br /> 
       <button onClick={this.showLogin}>
       <p> Contact us</p> 
       </button>
       <br /><br />
       {
         this.state.showLoginPage ? login:tempContact
         
       }
      </div>
    );
  }
}

export default App;     // for single component from same file: export default
