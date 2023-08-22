import React from "react";
//styles
import pStyles from "../../page.module.css";
import { LogoButton } from "../Extensions/LogoButton";

//icons
import facebook from "../../../public/Assets/facebook.svg";
import twitter from "../../../public/Assets/twitter.svg";
import mail from "../../../public/Assets/gmail.svg";
import github from "../../../public/Assets/github.svg";

const Login = () => {
  const imgArr = [facebook, twitter, mail, github];
  return (
    <React.Fragment>
      <div
        className={`${pStyles.l1} container-xxl d-flex justify-content-center align-items-center`}
      >
        <div className="card col-xl-4 px-4 bg-white">
          <p className={`${pStyles.l2} card-title mt-5`}>
            Welcome to News Arena India
          </p>
          <p className={`card-text ${pStyles.l3} col-9`}>
            Please sign-in to your account and start the adventure
          </p>
          <form className="mt-2">
            <label className={`col-10 ${pStyles.l4}`}>Email</label>
            <input
              type="email"
              className={`col-12 ${pStyles.inputs} p-2 rounded-2 `}
              placeholder="manan@theideazfactory.com"
            />
            <label className={`col-10 ${pStyles.l4} mt-3`}>Password</label>
            <input
              type="password"
              className={`col-12 ${pStyles.inputs} p-2 rounded-2 `}
            />
            <div className="col-12 d-flex flex-row-reverse">
              <a
                href="#"
                className={`${pStyles.l5} link-underline link-underline-opacity-0`}
              >
                Forgot Password?
              </a>
            </div>
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label
                className={`${pStyles.l3} form-check-label ms-2`}
                htmlFor="defaultCheck1"
              >
                Remember me
              </label>
            </div>
            <div className={`${pStyles.l6} btn col-12 my-3 border-0`}>
              Login
            </div>
          </form>
          <div className="card-text text-center">
            <p className={`${pStyles.l3}`}>
              New on our platform?
              <a
                href="#"
                className={`ms-2 link-underline link-underline-opacity-0 ${pStyles.l7}`}
              >
                Create an account
              </a>
            </p>
          </div>
          <div className="d-flex mt-2">
            <div className="col-5">
              <hr />
            </div>
            <div className={`col-2 text-center ${pStyles.l3}`}>or</div>
            <div className="col-5">
              <hr />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mb-3">
            {imgArr.map((item, key) => (
              <LogoButton key={key} icon={item} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
