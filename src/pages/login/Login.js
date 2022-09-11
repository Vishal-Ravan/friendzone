import "./login.css";

export default function Login() {
  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">FriendZone</h3>
            <span className="loginDesc">
              Connect with friend and the world around you on Lamasocial.
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" className="loginInput"  name="" id="" />
                <input placeholder="Password" className="loginInput"  name="" id="" />
                <button className="loginButton">LogIn</button>

<span className="loginForgot">Forgot Password</span>
<button className="loginRegisterButton">Create a New Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
