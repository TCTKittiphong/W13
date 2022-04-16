import React from "react";
import { useState } from "react";

export const FormSearch = (props) => {
  const [term, setTerm] = useState("");
  const [entity, setEntity] = useState("musicTrack");
  const [limit, setLimit] = useState(10);

  const searchHandler = (event) => {
    event.preventDefault();
    if (term === "" || entity === "") {
      window.alert("Please enter all search data");
      return;
    }
    const params = {
      term: term,
      entity: entity,
      limit: limit,
    };
    props.searchSong(params);
  };

  return (
    <div>
      <form onSubmit={searchHandler}>
        <br />
        <input
          type="text"
          placeholder="Search term"
          className="form-control"
          onChange={(e) => setTerm(e.target.value)}
        />

        <br />

        <div className="row">
          <div className="col-10">
            <input
              type="radio"
              name="rdEntity"
              value="musicVideo"
              checked={entity === "musicVideo" && "checked"}
              onChange={(e) => setEntity(e.target.value)}
            />{" "}
            Video&nbsp;&nbsp;
            <input
              type="radio"
              name="rdEntity"
              value="musicTrack"
              checked={entity === "musicTrack" && "checked"}
              onChange={(e) => setEntity(e.target.value)}
            />{" "}
            Audio&nbsp;&nbsp;
          </div>
          <div className="col-2 d-flex justify-content-end">
            <input
              type="number"
              min={1}
              max={50}
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary mx-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
