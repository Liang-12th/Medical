import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./login.scss";
// import { FormattedMessage } from "react-intl";
import { handleLoginApi } from "../../services/userService";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ' ',
      password: ' ',
      isShowPassword: false,
      errMessage: ' ',
    }
  }


  handleOnChangeUserName = (event) => {
    this.setState({
      username: event.target.value
    })
  }



  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }



  handleLogin = async () => {
    this.setState({
      errMessage: ' ',
    })
    try {
      let data = await handleLoginApi(this.state.username, this.state.password)
      if (data && data.errCode !== 0) {
        this.setState({
          errMessage: data.message
        })
      }
      else if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user)
        console.log('login succeeds');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message,
          })
        }
      }
    }
  }


  handleShowHidenPassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword
    })
  }


  render() {
    // JSX 
    return (
      <div className="login-bg">
        <div className="center ">
          <h1>Login</h1>
          <form>
            <div className="txt_filed">
              <label>User name</label>
              <span></span>
              <input type="text" required value={this.state.username} onChange={(event) => this.handleOnChangeUserName(event)} />
            </div>
            <div className="txt_filed">
              <label>Password</label>
              <span></span>
              <input type={this.state.isShowPassword ? 'text' : 'password'}
                required onChange={(event) => this.handleOnChangePassword(event)} />
              <span
                onClick={() => { this.handleShowHidenPassword() }}
              >
                <i className={this.state.isShowPassword ? 'fa fa-eye' : ' fa fa-eye-slash'}></i>
              </span>
            </div>
            <div className="bass">
              Forgot Password ?
            </div>
            <div className='col-12' style={{ color: "red" }}>
              {this.state.errMessage}
            </div>
            <div className="press">
              <button type="button" onClick={() => { this.handleLogin() }}>Login</button>
              Not a memeber ? <a href="#">Signup</a>
            </div>
          </form>
        </div>
      </div>

    );
  }
}
// convert language
const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
