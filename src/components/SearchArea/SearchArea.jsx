import React from "react";
import "./SearchArea.css";
import train1 from "../../assets/images/train-illustration-for-train-1.jpg";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const SearchArea = () => {
  const {
    control,
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const options = [
    { value: "AC_B", label: "AC_B" },
    { value: "AC_S", label: "AC_S" },
    { value: "SNIGHDHA", label: "SNIGHDHA" },
    { value: "F_BERTH", label: "F_BERTH" },
    { value: "F_SEAT", label: "F_SEAT" },
    { value: "F_CHAIR", label: "F_CHAIR" },
    { value: "S_CHAIR", label: "S_CHAIR" },
    { value: "SHOVAN", label: "SHOVAN" },
    { value: "SHULOV", label: "SHULOV" },
    { value: "AC_CHAIR", label: "AC_CHAIR" },
  ];

  return (
    <div className="search_area container pt-5" style={{ padding: "10px" }}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>From</label>
                <input
                  type="text"
                  class="form-control"
                  {...register("fromStation")}
                  placeholder="From Station"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label>To</label>
                <input type="text" class="form-control" {...register("toStation")} placeholder="To Station" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Date of Journey</label>
                <Controller
                  control={control}
                  name="date-input"
                  {...register("date-input")}
                  label="Date of Journey"
                  render={({ field }) => (
                    <DatePicker
                      className="form-control"
                      placeholderText="Pick a date"
                      onChange={(date) => field.onChange(date)}
                      onBlur={(date) => field.onChange(date)}
                      selected={field.value}
                    />
                  )}
                />
                <img className="calenderIcon" src="https://d19qjkjk65tfln.cloudfront.net/img/calendar.png" alt="" />
              </div>
              <div className="form-group col-md-6">
                <label>Select Class</label>
                <Controller
                  name="select-class"
                  // {...register("date-input")}
                  control={control}
                  render={({ field }) => (
                    <Select
                      // defaultValue={options[0]}
                      {...field}
                      placeholder="Select a Class"
                      isSearchable={false}
                      className="react-dropdown"
                      classNamePrefix="dropdown"
                      options={options}
                    />
                  )}
                />
              </div>
            </div>
            <p>{errors.status?.message}</p>
            <button type="submit" class="search-submit-btn">
              SEARCH TRAIN
            </button>
          </form>
        </div>
        <div className="col-md-6 align-middle">
          <img className="w-100 rounded" src={train1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
