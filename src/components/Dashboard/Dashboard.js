import React from "react";
import { HiDownload } from "react-icons/hi";
import { BsThreeDots, BsCurrencyDollar } from "react-icons/bs";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <p className="order-heading">Orders</p>
        <div className="value-container">
          <p className="order-value">5</p>
          <p className="order-text">Total orders this Month</p>
        </div>
        <div className="value-container">
          <p className="order-value">$51</p>
          <p className="order-text">Total order value this month</p>
        </div>
        <div className="value-container">
          <p className="order-value">$10</p>
          <p className="order-text">Average order value this month</p>
        </div>
      </div>
      <div className="dashboard-details-container">
        <div className="dashboard-card-container dashboard-left">
          <div className="card-header">
            <p className="card-text">Showing orders in all locations</p>
            <HiDownload className="card-icon" />
          </div>
          <hr />
          <div className="left-button-container">
            <button className="button active">Active</button>
            <button className="button inactive">Complete</button>
          </div>
          <div className="left-list-container">
            <div className="list-item">
              <p>WF-1854</p>
              <p>Apoorva Marathe</p>
              <p>EST Test(2241 Southern)</p>
            </div>

            <div className="list-item">
              <p>WF-1854</p>
              <p>Apoorva Marathe</p>
              <p>EST Test(2241 Southern)</p>
            </div>

            <div className="list-item">
              <p>WF-1854</p>
              <p>Apoorva Marathe</p>
              <p>EST Test(2241 Southern)</p>
            </div>

            <div className="list-item">
              <p>WF-1854</p>
              <p>Apoorva Marathe</p>
              <p>EST Test(2241 Southern)</p>
            </div>

            <div className="list-item">
              <p>WF-1854</p>
              <p>Apoorva Marathe</p>
              <p>EST Test(2241 Southern)</p>
            </div>
          </div>
        </div>
        <div className="dashboard-card-container">
          <div className="card-header">
            <p className="card-heading">WF-1854</p>
            <BsThreeDots className="card-icon" />
          </div>
          <hr />
          <div className="right-details-container">
            <p className="key-details details-list-item">Key details</p>

            <ul className="details-list-container">
              <li className="details-list-item">Sales</li>
              <li className="details-list-item">Processing</li>
              <li className="details-list-item">Timeline</li>
            </ul>
          </div>
          <div className="right-list-container">
            <div className="right-card">
              <BsCurrencyDollar className="dollar-icon" />
              <div className="right-list-item">
                <p className="right-value">$12.92</p>
                <p className="right-text">Total Order Value</p>
              </div>
            </div>
            <div className="right-card">
              <BsCurrencyDollar className="dollar-icon" />
              <div className="right-list-item">
                <p className="right-value">1.00 lbs</p>
                <p className="right-text">Total Order Weight</p>
              </div>
            </div>
            <div className="right-card">
              <BsCurrencyDollar className="dollar-icon" />
              <div className="right-list-item">
                <p className="right-value">70+ hrs</p>
                <p className="right-text">Total Order Duration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
