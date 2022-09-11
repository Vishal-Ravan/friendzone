import './register.css'

export default function Register() {
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
          <input placeholder="Username" className="loginInput"  name="" id="" />
          <input placeholder="Email" className="loginInput"  name="" id="" />

              <input placeholder="Password" className="loginInput"  name="" id="" />
              <input placeholder="Password Again" className="loginInput"  name="" id="" />
              <button className="loginButton">Sign Up</button>
<button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  </>  )
}
