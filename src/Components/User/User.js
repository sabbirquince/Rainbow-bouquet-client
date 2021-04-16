import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Book from "./Book/Book";
import Orders from "./Orders/Orders";
import "./user.css";
import UserReview from "./UserReview/UserReview";
import {
  faCartPlus,
  faClipboardList,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";

const User = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="user">
      <div className="left">
        <h3 className="user-main-head">User Dashboard</h3>
        <ul className="left-bar">
          <li className="">
            <Link className="my-cl-sec" to={`${url}/book`}>
              <FontAwesomeIcon className="mx-3" icon={faCartPlus} /> Book
            </Link>
          </li>
          <li className="">
            <Link className="my-cl-sec" to={`${url}/orders`}>
              <FontAwesomeIcon className="mx-3" icon={faClipboardList} /> Orders
            </Link>
          </li>
          <li className="">
            <Link className="my-cl-sec" to={`${url}/reviews`}>
              <FontAwesomeIcon className="mx-3" icon={faCommentAlt} /> Reviews
            </Link>
          </li>
        </ul>
      </div>

      <div className="right">
        <Switch>
          <Route exact path={path}>
            <Orders />
          </Route>

          <Route path={`${path}/book/:id`}>
            <Book />
          </Route>

          <Route path={`${path}/orders`}>
            <Orders />
          </Route>

          <Route path={`${path}/reviews`}>
            <UserReview />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default User;
