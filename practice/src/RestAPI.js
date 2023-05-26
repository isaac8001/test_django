import "./RestAPI.css";
import axios from "axios";
import React, { useState } from "react";

const RestAPI = () => {
  const [text, setText] = useState([]);
  return (
    <div>
      <h1>REST API 연습</h1>
      <div className="btn-primary">
        <button
          onClick={() => {
            axios
              .post("http://127.0.0.1:8000/review/", {
                title: "제목",
                content: "내용",
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          POST
        </button>
        <button
          onClick={() => {
            axios
              .get("http://127.0.0.1:8000/review/")
              .then((response) => {
                setText([...response.data]);
                console.log(response.data);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          GET
        </button>
      </div>
      {text.map((e) => (
        <div>
          {" "}
          <div className="list">
            <span>
              {e.id}번, {e.title}, {e.content}, {e.update_at}
            </span>
            <button
              className="btn-delete"
              onClick={() => {
                axios
                  .delete(`http://127.0.0.1:8000/review/${e.id}/`)
                  .then(() => {
                    setText(text.filter((item) => item.id !== e.id));
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestAPI;
