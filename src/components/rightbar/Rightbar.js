import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
export const Rightbar = ({ profile }) => {
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">city:</span>
            <span className="rightbarInfoValue">delhi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">india</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">relationhip:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightvarFollowings">
          <div className="rightbarFollowing">
            <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Bipin Singh </span>
          </div>
        </div>
      </>
    );
  };
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnEtLl0-HAnBvS8GrE-NLvo7fAKCnlt9JNRnsJIj8ERIHTrPW435Jt&usqp=CAE&s"
            className="birthdayImg"
            alt=""
          />
          <span className="birthdayText">
            <b>Ram</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img
          src="https://media.istockphoto.com/id/1327364098/photo/torn-paper-with-word-are-you-covered.webp?s=612x612&w=is&k=20&c=pU2tiQmWg4yb8mkYMXFBMXbGOmr2TrRSWAKX4Aql0KE="
          className="rightbarAd"
          alt=""
        />
        <h4 className="rightbarTitle">Online Friend</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
 
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {profile? <HomeRightBar/>:<ProfileRightbar /> } 
      </div>
    </div>
  );
};
