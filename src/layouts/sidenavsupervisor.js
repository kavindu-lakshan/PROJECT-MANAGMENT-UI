import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../views/dashboard/student-dashboard/studenthome.css";
import auth from "../apis/modules/auth";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AuthContext from "../context/AuthContext";

export default function Sidenavsupervisor() {
  const { loggedIn } = useContext(AuthContext);

  const logout = async () => {
    await auth.logout();
    localStorage.clear();
    window.location = "/login";
  };

  const moveToChat = () => {
    window.location = "/supervisor/chat";
  };
  return (
    <>
      <div
        class="row"
        style={{ marginLeft: "0%", marginRight: "0%", marginTop: "2%" }}
      >
        <div className="col-6 col-md-2"></div>
        <div className="col-12 col-md-9">
          <div class="nav-bar" style={{ width: "auto" }}>
            <div class="horz-center nav-container">
              <div class="floated left nav-div sign-div">
                <Link to="/">
                  <img
                    style={{ width: "auto", height: "55%" }}
                    src="https://i.postimg.cc/B6N12sKm/SLIIT.pnghttps://i.postimg.cc/B6N12sKm/SLIIT.png"
                  ></img>
                </Link>
              </div>
              <ul class="floated right nav-div sign-div">
                <li class="rela-inline">
                  <IconButton>
                    <Avatar alt="Remy Sharp" src="" />
                  </IconButton>
                </li>
                <li class="rela-inline" onClick={logout}>
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar">
        <div className="sideh"></div>
        <div class="profile_info">
          <h4>Welcome</h4>
          <h5>{loggedIn.name}</h5>
        </div>
        <Link to="/supervisor/home">
          <div className="menusb">
            <i class="fas fa-blog"></i>
            <span>Topic Status</span>
          </div>
        </Link>
        <Link to="#">
          <div className="menusb" onClick={moveToChat}>
            <i class="fas fa-comment"></i>
            <span>Chat</span>
          </div>
        </Link>
        <Link to="/supervisor/documents">
          <div className="menusb">
            <i class="fas fa-edit"></i>
            <span>Documnet</span>
          </div>
        </Link>
        <Link to="/supervisor/finalThesis">
          <div className="menusb">
            <i class="fas fa-file-alt"></i>
            <span>Final Thesis</span>
          </div>
        </Link>
      </div>
    </>
  );
}
