import Image from "next/image";
import React from "react";
import myImage from "../../../../public/Assets/me.jpeg";
// styles
import npStyles from "./NewPost.module.css";

export const NewPost = () => {
  return (
    <React.Fragment>
      <div className={`card py-3 px-2 bg-white border-0 ${npStyles.np0}`}>
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
              <input type="text" className={`rounded-2 ${npStyles.np4} p-2`} />
            </div>
            <div className=" d-flex flex-column py-3">
              <label className={`${npStyles.np3} mb-1`}>Title</label>
              <input type="text" className={`rounded-2 ${npStyles.np4} p-2`} />
            </div>
            <div className="d-flex flex-column py-3">
              <label className={`${npStyles.np3} mb-1`}>Title</label>
              <input type="text" className={`rounded-2 ${npStyles.np4} p-2`} />
            </div>
            <div className=" d-flex flex-column py-3">
              <label className={`${npStyles.np3} mb-1`}>Title</label>
              <input type="text" className={`rounded-2 ${npStyles.np4} p-2`} />
            </div>
            <div className=" d-flex flex-column py-3">
              <label className={`${npStyles.np3} mb-1`}>Title</label>
              <input type="text" className={`rounded-2 ${npStyles.np4} p-2`} />
            </div>
            <div className="d-flex flex-column py-3">
              <label className={`${npStyles.np3} mb-1`}>Title</label>
              <input type="text" className={`rounded-2 ${npStyles.np4} p-2`} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
