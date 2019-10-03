import React from 'react';


//MODAL OF THE LOGIN AND REGISTER. NEED TO BE REVIED AND CHANGED
export default class MyModal extends React.Component {
    constructor() {
      super();
      this.loginVisible = this.loginVisible.bind(this);
      this.registerVisible = this.registerVisible.bind(this);
      this.validateSecondPassword = this.validateSecondPassword.bind(this);
    }
  
    loginVisible() {
      document.getElementById("registerSection").classList.add("notVisible");
      document.getElementById("loginSection").classList.remove("notVisible");
      document.getElementById("loginBut").classList.add("lightBlueBorder");
      document.getElementById("registerBut").classList.remove("lightBlueBorder");
    }
    registerVisible() {
      document.getElementById("loginSection").classList.add("notVisible");
      document.getElementById("registerSection").classList.remove("notVisible");
      document.getElementById("loginBut").classList.remove("lightBlueBorder");
      document.getElementById("registerBut").classList.add("lightBlueBorder");
    }
    validateSecondPassword() {
      if (document.getElementById("pwd2").value != document.getElementById("pwd3").value) {
        document.getElementById("pwd3").value = "";
        document.getElementById("pwd2").value = "";
        document.getElementById("invalid-passwords").classList.remove("notVisible");
      }
      else {
        document.getElementById("invalid-passwords").classList.add("notVisible");
      }
    }
  
    render() {
      {/* // Disable form submissions if there are invalid fields */ }
      (function () {
        'use strict';
        window.addEventListener('load', function () {
          // Get the forms we want to add validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
  
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();
  
      return (
        <div >
  
          {/* <!-- The Modal --> */}
          <div className="modal fade" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
  
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  {/* <h4 className="modal-title">Modal Heading</h4> */}
                  <button type="button" id="loginBut" onClick={this.loginVisible} className="btn btn-default" >Log in</button>
                  <button type="button" id="registerBut" onClick={this.registerVisible} className="btn btn-default">Register</button>
                  <button type="button" className="close" data-dismiss="modal">×</button>
                </div>
  
                {/* <!-- Modal login body --> */}
  
                <div id="loginSection">
                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    <form action="/action_page.php" className="needs-validation" novalidate>
                      <div className="form-group">
                        <label for="uname">Username:</label>
                        <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                      <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                      <div className="form-group form-check">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                      </label>
                      </div>
                      <button type="submit" className="btn btn-primary">Log in</button>
                    </form>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                    <a href="#">Forgot yor password?</a>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
                </div>
  
                {/* <!-- Modal Register body --> */}
  
                <div id="registerSection" className="notVisible">
                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    <form action="/action_page.php " className="needs-validation" novalidate>
                      <div className="form-group ">
                        <label for="uname">Username:</label>
                        <input type="text" className="form-control" id="uname2" placeholder="Enter username" name="uname" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                      <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd2" placeholder="Enter password" name="pswd" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                      <div className="form-group">
                        <label for="pwd">Verify Password:</label>
                        <input onBlur={this.validateSecondPassword} type="password" className="form-control" id="pwd3" placeholder="Repeat password" name="pswd1" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                        <div id="invalid-passwords" className="notVisible">Both Passwords needs to be the same</div>
                      </div>
                      <div className="form-group form-check">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" name="remember" /> Remember me
  
                      </label>
                      </div >
                      <div className="form-group ">
                        <label for="name">Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                      <div className="form-group">
                        <label for="phone">Phone:</label>
                        <input type="text" className="form-control" id="phone" placeholder="Enter phone" name="phone" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                      <div className="form-group">
                        <label for="pwdemail">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                      <button onClick={this.validateSecondPassword} type="submit" className="btn btn-primary">Register</button>
  
                    </form>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  