import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Login from '../components/Login';
// import { logout, loginUser } from '../actions/authentication';
import { loginUser } from '../actions/authentication';
import logo from '../assets/YourScore-vertical-01.png';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    // this.props.dispatch(logout());

    this.state = {
      username: '',
      password: '',
      submitted: false,
      show: false,
      validated: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLogin(event) {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ validated: false });
    } else {
      event.preventDefault();
      this.setState({ submitted: true, validated: true, show: false });

      const user = {
        username: this.state.username,
        password: this.state.password,
      };
      this.props.dispatch(loginUser(user));
    }
  }

  render() {
    return (
      <main className="landing-page" role="main">
        <div className="hero-image">
          <img src={logo} alt="YourScore" className="logo" />
          <div className="hero-text">
            <h1>The simple way to track your music library</h1>
            <Button
              className="px-5"
              variant="secondary"
              size="lg"
              type="button"
              onClick={this.handleShow}
            >
              Login
            </Button>
          </div>
        </div>
        <Login
          show={this.handleShow}
          hide={this.handleClose}
          handleLogin={this.handleLogin}
          handleChange={this.handleChange}
          {...this.state}
        />
      </main>
    );
  }
}

function mapStateToProps(state) {
  const { loginInProcess } = state.authentication;
  return {
    loginInProcess,
  };
}

export default connect(mapStateToProps)(HomePage);
