/* eslint-disable react/jsx-key */
import Image from "next/image";
import React from "react";
//IMAGES
import logo from "../../../public/Assets/logo.svg";
import myImage from "../../../public/Assets/me.jpeg";
//css
import dbStyles from "./pages.module.css";
//extension import
import { Button } from "../Extensions/Button";
import { NewPost } from "./NewPost/page";
import { Footer } from "../Footer/Footer";

const Dashboard = () => {
  const menuItems = [
    <div className="d-flex gap-2">
      <span className="material-icons-round">home</span>
      <div className={` ${dbStyles.db2}`}>Dashboards</div>
    </div>,
    <div className="d-flex gap-2">
      <span className="material-icons-round">star_border</span>
      <div className={` ${dbStyles.db2}`}>Add Post</div>
    </div>,
    <div className="d-flex gap-4">
      <span className="material-icons-round ms-3">post_add</span>
      <div className={` ${dbStyles.db2}`}>New Post</div>
    </div>,
    <div className="d-flex gap-4">
      <span className="material-icons-round ms-3">category</span>
      <div className={` ${dbStyles.db2}`}>Categories</div>
    </div>,
    <div className="d-flex gap-4">
      <span className="material-icons-outlined ms-3">sell</span>
      <div className={` ${dbStyles.db2}`}>Tags</div>
    </div>,
    <div className="d-flex gap-4">
      <span className="material-icons-outlined ms-3">place</span>
      <div className={` ${dbStyles.db2}`}>Location</div>
    </div>,
    <div className="d-flex gap-4">
      <span className="material-icons-outlined ms-3">videocam</span>
      <div className={` ${dbStyles.db2}`}>Videos</div>
    </div>,
    <div className="d-flex gap-4">
      <span className="material-icons-outlined ms-3">feed</span>
      <div className={` ${dbStyles.db2}`}>Newsfeed</div>
    </div>,
  ];

  const userItems = [
    <div className="d-flex gap-2">
      <span className="material-icons-round">person_outline</span>
      <div className={`${dbStyles.db2}`}>User</div>
    </div>,
    <div className="d-flex gap-2">
      <span className="material-icons-round">event</span>
      <div className={` ${dbStyles.db2}`}>Calender</div>
    </div>,
    <div className="d-flex gap-2">
      <span className="material-icons-round">newspaper</span>
      <div className={` ${dbStyles.db2}`}>Newsletter</div>
    </div>,
  ];
  return (
    <React.Fragment>
      <div className="container-xxl">
        <div className="row">
          {/*Left Cont: Menu bar */}
          <div className="card col-md-3 border-0 bg-transparent">
            <div className="img-fluid mt-3 col-7">
              <Image
                className="card-img-top ms-2 img-fluid rounded-0"
                src={logo}
                alt=""
                priority={true}
              />
            </div>
            <span className="my-3">
              {menuItems.map((item, key) => (
                <Button key={key} items={item} />
              ))}
            </span>
            <div className={`card-text ${dbStyles.db5}`}>ALL</div>
            {userItems.map((item, key) => (
              <Button key={key} items={item} />
            ))}
          </div>
          {/* Right Cont: Nav Bar */}
          <div className="col-md-9">
            <div
              className={`${dbStyles.db3} my-3 rounded p-2 d-flex flex-row-reverse gap-3`}
            >
              <div className="">
                <Image
                  src={myImage}
                  alt=""
                  height="38"
                  width="38"
                  className="rounded-circle"
                />
              </div>
              <div className={`${dbStyles.db4}`}>
                <div>Manan Tandon</div> {/*logged in user */}
                <div className={`${dbStyles.db5} text-end`}>Admin</div>
              </div>
              <a href="#" className={`${dbStyles.db4} pt-1`}>
                <span className="material-icons-round">notifications</span>
              </a>
              <a href="#" className={`${dbStyles.db4} pt-1`}>
                <span
                  className="material-icons-round"
                  onClick={() => console.log("click")}
                >
                  search
                </span>
              </a>
            </div>
            {/* ADD POST DESIGN */}
            <div className={`my-3 fs-4 ${dbStyles.db7}`}>Add Post</div>
            <NewPost />
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
