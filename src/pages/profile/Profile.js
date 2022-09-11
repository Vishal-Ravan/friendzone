import "./profile.css";
import { Topbar } from "../../components/topbar/Topbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Feed } from "../../components/feed/Feed";
import { Rightbar } from "../../components/rightbar/Rightbar";

export const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="https://www.whatsappimages.in/wp-content/uploads/2022/05/best-dp-for-whatsapp-for-girls.jpg" alt="" />
              <img className="profileUserImg" src="https://www.whatsappimages.in/wp-content/uploads/2022/02/girls-dp-Wallpaper-scaled.jpg" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Vishal</h4>
                <span className="profileInfoDesc">hello my friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />

            <Rightbar  profile/>
          </div>
        </div>
      </div>
    </>
  );
};
