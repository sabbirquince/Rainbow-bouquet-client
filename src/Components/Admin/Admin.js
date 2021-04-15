import React from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import AddService from "./AddService/AddService";
import "./admin.css";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import OrderLists from "./OrderLists/OrderLists";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faUserShield,
  faClipboardList,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import ManageServices from "./ManageServices/ManageServices";

const Admin = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="admin">
      <div className="left">
        <h3 className="admin-main-head">Admin</h3>
        <ul className="left-bar">
          <li className="">
            <Link className="my-cl-sec" to={`${url}/addService`}>
              <FontAwesomeIcon className="mx-3" icon={faPlus} /> Add service
            </Link>
          </li>
          <li className="">
            <Link className="my-cl-sec" to={`${url}/orderLists`}>
              <FontAwesomeIcon className="mx-3" icon={faClipboardList} /> Order
              Lists
            </Link>
          </li>
          <li className="">
            <Link className="my-cl-sec" to={`${url}/makeAdmin`}>
              <FontAwesomeIcon className="mx-3" icon={faUserShield} /> Make
              Admin
            </Link>
          </li>
          <li className="">
            <Link className="my-cl-sec" to={`${url}/manageServices`}>
              <FontAwesomeIcon className="mx-3" icon={faTags} /> Manage Services
            </Link>
          </li>
        </ul>
      </div>

      <div className="right">
        <Switch>
          <Route exact path={path}>
            <ManageServices />
          </Route>

          <Route path={`${path}/addService`}>
            <AddService />
          </Route>

          <Route path={`${path}/orderLists`}>
            <OrderLists />
          </Route>

          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </Route>

          <Route path={`${path}/manageServices`}>
            <ManageServices />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
