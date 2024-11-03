import React from "react";
import "./Integrate.css";
import microsoft_img from "../../assets/microsoft.png";
import calendar from "../../assets/google-calendar.png";
import jira from "../../assets/jira.png";
import slack from "../../assets/slack.png";
import salesforce from "../../assets/salesfore.png";
import zoom from "../../assets/zoom.png";
import tableau from "../../assets/tableau.png";
import ms_teams from "../../assets/ms-teams.png";
import hubSpot from "../../assets/hubspot.png";

const Integrate = () => {
  return (
    <div className="integrate container">
      <div className="first-container">
        <div className="text">
          <h1>Integrate apps with just a few clicks</h1>
          <p>
            Connect your existing apps and workflows with pre-made integrations
            available for 400+ popular apps. plus custom integrations for more
            advanced users.
          </p>
        </div>

        <div className="icon-box">
          <div className="icon-card">
            <img src={microsoft_img} alt="" />
            <p>Microsoft Team</p>
          </div>
          <div className="icon-card">
            <img src={calendar} alt="" />
            <p>Google Calendar</p>
          </div>{" "}
          <div className="icon-card">
            <img src={slack} alt="" />
            <p>Slack</p>
          </div>{" "}
          <div className="icon-card">
            <img src={salesforce} alt="" />
            <p>Salesforce</p>
          </div>{" "}
          <div className="icon-card">
            <img src={zoom} alt="" />
            <p>Zoom</p>
          </div>{" "}
          <div className="icon-card">
            <img src={tableau} alt="" />
            <p>Tableau</p>
          </div>{" "}
          <div className="icon-card">
            <img src={ms_teams} alt="" />
            <p>MS Teams</p>
          </div>{" "}
          <div className="icon-card">
            <img src={hubSpot} alt="" />
            <p>Hubspot</p>
          </div>{" "}
          <div className="icon-card">
            <img src={jira} alt="" />
            <p>Jira</p>
          </div>

          <div className="icon-card">
            <img src={microsoft_img} alt="" />
            <p>Microsoft Team</p>
          </div>
          <div className="icon-card">
            <img src={calendar} alt="" />
            <p>Google Calendar</p>
          </div>{" "}
          <div className="icon-card">
            <img src={slack} alt="" />
            <p>Slack</p>
          </div>{" "}
          <div className="icon-card">
            <img src={salesforce} alt="" />
            <p>Salesforce</p>
          </div>{" "}
          <div className="icon-card">
            <img src={zoom} alt="" />
            <p>Zoom</p>
          </div>{" "}
          <div className="icon-card">
            <img src={tableau} alt="" />
            <p>Tableau</p>
          </div>{" "}
          <div className="icon-card">
            <img src={ms_teams} alt="" />
            <p>MS Teams</p>
          </div>{" "}
         
        </div>

        <div className="action-box">
            <p className="one">Get Started</p>
            <p className="two">See all integrations</p>
        </div>
      </div>

      <div className="second-container">
<div className="text">
    <h1>Try our powerful work management tools</h1>
    <p>Sign up for a free two-week trial of Block today - no credit card required.</p>
</div>

<div className="btn">
    <p className="one">Enter your business email</p>
    <p className="two">Get notified for free</p>
</div>
      </div>
    </div>
  );
};

export default Integrate;
