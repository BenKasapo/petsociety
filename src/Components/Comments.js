import React from "react";
import "./Comments.css";

const Comments = () => {
  return (
    <div className="cmt">
      <form>
        <h3 className="m-auto">New Comment</h3>
        <button
          type="submit"
          className="btn btn-normal bg-success text-white pull-right my-2"
        >
          Submit
        </button>
        <fieldset>
          <div className="row">
            <div className="col-sm-3 col-lg-2 hidden-xs">
              <img
                className="img-responsive"
                src="./assets/user-icon.png"
                alt=""
              />
            </div>
            <div className="form-group  col-xs-12 col-sm-9 col-lg-18 mb-4">
              <textarea
                className="form-control"
                id="message"
                placeholder="Your message"
                required=""
              ></textarea>
            </div>
          </div>
        </fieldset>
      </form>

      <div className="row d-flex justify-content-center mt-100 mb-100">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body text-center">
              <h4 className="card-title">Latest Comments</h4>
            </div>
            <div className="comment-widgets">
              <div className="d-flex flex-row comment-row m-t-0">
                <div className="p-2">
                  <img
                    src="https://i.imgur.com/Ur43esv.jpg"
                    alt="user"
                    width="50"
                    className="rounded-circle"
                  />
                </div>
                <div className="comment-text w-100">
                  <h6 className="font-medium">James Thomas</h6>{" "}
                  <span className="m-b-15 d-block">
                    This is awesome website. I would love to comeback again.{" "}
                  </span>
                  <div className="comment-footer">
                    {" "}
                    <span className="text-muted float-right">
                      April 14, 2019
                    </span>{" "}
                    <button type="button" className="btn btn-cyan btn-sm">
                      Edit
                    </button>{" "}
                    <button type="button" className="btn btn-success btn-sm">
                      Publish
                    </button>{" "}
                    <button type="button" className="btn btn-danger btn-sm">
                      Delete
                    </button>{" "}
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row comment-row">
                <div className="p-2">
                  <img
                    src="https://i.imgur.com/8RKXAIV.jpg"
                    alt="user"
                    width="50"
                    className="rounded-circle"
                  />
                </div>
                <div className="comment-text active w-100">
                  <h6 className="font-medium">Michael Hussey</h6>{" "}
                  <span className="m-b-15 d-block">
                    Thanks bbbootstrap.com for providing such useful snippets.{" "}
                  </span>
                  <div className="comment-footer">
                    {" "}
                    <span className="text-muted float-right">
                      May 10, 2019
                    </span>{" "}
                    <button type="button" className="btn btn-cyan btn-sm">
                      Edit
                    </button>{" "}
                    <button type="button" className="btn btn-success btn-sm">
                      Publish
                    </button>{" "}
                    <button type="button" className="btn btn-danger btn-sm">
                      Delete
                    </button>{" "}
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row comment-row">
                <div className="p-2">
                  <img
                    src="https://i.imgur.com/J6l19aF.jpg"
                    alt="user"
                    width="50"
                    className="rounded-circle"
                  />
                </div>
                <div className="comment-text w-100">
                  <h6 className="font-medium">Johnathan Doeting</h6>{" "}
                  <span className="m-b-15 d-block">
                    Great industry leaders are not the real heroes of stock
                    market.{" "}
                  </span>
                  <div className="comment-footer">
                    {" "}
                    <span className="text-muted float-right">
                      August 1, 2019
                    </span>{" "}
                    <button type="button" className="btn btn-cyan btn-sm">
                      Edit
                    </button>{" "}
                    <button type="button" class="btn btn-success btn-sm">
                      Publish
                    </button>{" "}
                    <button type="button" class="btn btn-danger btn-sm">
                      Delete
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
