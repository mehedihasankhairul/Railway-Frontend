import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import infoBanner from "../../assets/images/train-information.svg";
import "./TrainInformation.css";

const TrainInformation = () => {
  return (
    <>
      <Navbar />
      <div className="train-information pt-5">
        <div className="container">
          <div className="row ">
            <div className="col-md-4">
              <div className="title">
                <h4>Select Your Preferred Train</h4>
                <div className="input-area rounded">
                  <span style={{ fontSize: "12px", paddingLeft: "10px", color: "#B4B6CC" }}>TRAIN NAME</span>
                  <input className="form-control" type="text" placeholder="Search Train" />
                </div>
                <button type="submit" className="search-submit-btn mt-3">
                  SEARCH TRAIN
                </button>
              </div>
            </div>
            <div className="col-md-8 banner-area rounded">
              <img className="w-50" src={infoBanner} alt="" />
              <div className="content align-items-center">
                <p>Please select your preferred train to see the detailed information of your selected train</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainInformation;
