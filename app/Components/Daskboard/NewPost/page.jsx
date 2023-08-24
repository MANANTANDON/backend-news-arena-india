import Image from "next/image";
import React from "react";
import myImage from "../../../../public/Assets/me.jpeg";
// styles
import npStyles from "./NewPost.module.css";
import { FeaturedImage } from "./FeaturedImage";
import { Tinyeditor } from "../../TinyEditor/Tinyeditor";
//Tiny

export const NewPost = () => {
  return (
    <React.Fragment>
      <div className={`card p-3 bg-white border-0 ${npStyles.np0} mb-4`}>
        <div className="d-flex gap-2">
          <div>
            <Image
              src={myImage}
              alt=""
              height="38"
              width="38"
              className="rounded-circle"
            />
          </div>
          <div className="d-flex flex-column">
            <div className={`${npStyles.np1}`}>Manan Tandon</div>
            <div className={`${npStyles.np2}`}>July 16, 1999</div>
          </div>
        </div>
        <div className="container-xxl">
          <div className="row row-cols-sm-1 row-cols-lg-2">
            <div className=" d-flex flex-column py-3">
              <label className={`${npStyles.np3} mb-1`}>Title</label>
              <input
                type="text"
                className={`rounded-2 ${npStyles.np4} p-2`}
                placeholder="4d616e616e become the CEO..."
              />
            </div>
            <div className=" d-flex flex-column py-3">
              <label className={`${npStyles.np3} mb-1`}>Category</label>
              <select className={`rounded-2 ${npStyles.np4} p-2 form-select`}>
                <option defaultValue>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="d-flex flex-column py-3">
              <label className={`${npStyles.np3} mb-1`}>Status</label>
              <select className={`rounded-2 ${npStyles.np4} p-2 form-select`}>
                <option defaultValue>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className=" d-flex flex-column py-3">
              <label className={`${npStyles.np3} mb-1`}>Visibility</label>
              <select className={`rounded-2 ${npStyles.np4} p-2 form-select`}>
                <option defaultValue>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className=" d-flex flex-column py-3">
              <label className={`${npStyles.np3} mb-1`}>Tags</label>
              <input
                type="text"
                className={`rounded-2 ${npStyles.np4} p-2`}
                placeholder="Article..."
              />
              <label className={`${npStyles.np5}`}>
                Separate tags with commas...
              </label>
            </div>
            <div className="d-flex flex-column py-3">
              <label className={`${npStyles.np3} mb-1`}>Location</label>
              <input
                type="text"
                className={`rounded-2 ${npStyles.np4} p-2`}
                placeholder="Chandigarh..."
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <label className={`${npStyles.np3} mb-1`}>Content</label>
            <Tinyeditor />
          </div>
          {/* Featured Image card */}
          <FeaturedImage />
          <div className="d-flex flex-column">
            <label className={`${npStyles.np3} mb-1`}>Instagram</label>
            <Tinyeditor />
          </div>
          <div className="col d-flex gap-2 my-3">
            <button className={`btn ${npStyles.np7}`}>Publish</button>
            <button className={`btn ${npStyles.np8}`}>Cancel</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
