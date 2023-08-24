import React from "react";
//styles
import fiStyles from "./FeaturedImage.module.css";
import Image from "next/image";
//image import
import myImage from "../../../../public/Assets/iceCream.svg";

export const FeaturedImage = () => {
  const title = "Featured Image";
  return (
    <React.Fragment>
      <div className="card my-4 d-flex flex-column py-4 px-3 ">
        <p className={`${fiStyles.fi1} card-title`}>{title}</p>
        <div className="card p-2 border-0">
          <div className="row g-0">
            <div className={`${fiStyles.fi4} col-md-4`}>
              <Image
                src={myImage}
                height={108}
                className="img-fluid rounded"
                alt="featured image"
              />
            </div>
            <div className="col-md-8 ">
              <div className="card-body">
                <span className={`${fiStyles.fi3} card-title`}>
                  Main image:{" "}
                  <p className={`${fiStyles.fi5} card-text`}>
                    Required image resolution 800x400, image size 10mb.
                  </p>
                </span>

                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
