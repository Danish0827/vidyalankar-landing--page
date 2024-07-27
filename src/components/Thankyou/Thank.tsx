import React from "react";
import "./thanks.css";
import thank from "../../../public/image/images.jpeg";

const Thank = () => {
  return (
    <>
      <section className="login-main-wrapper">
        <div className="main-container">
          <div className="login-process">
            <div className="login-main-container">
              <div className="thankyou-wrapper">
                <h1>
                  <img
                    className="mix-blend-multiply m-auto"
                    src={thank.src}
                    alt="thanks"
                  />
                </h1>
                <p>for contacting us, we will get in touch with you soon... </p>
                <div className="text-center mt-20">
                <a
                style={{boxShadow:" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} 
                className="rounded-lg px-4 py-2 text-red-500 hover:bg-red-600 hover:text-white" href="/">Back to home</a>
                </div>
                <div className="clr"></div>
              </div>
              <div className="clr"></div>
            </div>
          </div>
          <div className="clr"></div>
        </div>
      </section>
    </>
  );
};

export default Thank;