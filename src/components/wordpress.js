import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const Wordpress = () => {
  const [defaults, setDefaults] = useState({
    Pages_with_Dynamic_content: "5",
    StaticPages: "3",
    Animation: "10",
    Dynamic_Content: "0",
    Blogs_listing: "1",
    Blogs_Detail: "1",
    Form: "2",
    Header: "1",
    Footer: "1",
    Website_Accessibility: "1",
    Platform_Marketplace: "0",
    Party_Integrationg: "0",
    Analytics: "2",
    SEO_Enable: "",
    SEO_W3C_Validations: "",
    Setup: "",
    Mobile_Responsive_Setup: "",
    Deployment: "2",
    Tablet_Responsive: "",
  });
  const [time, setTime] = useState({
    Time_Pages_with_Dynamic_content: "16",
    Time_StaticPages: "3",
    Time_Animation: "3",
    Time_Dynamic_Content: "2",
    Time_Blogs_listing: "8",
    Time_Blogs_Detail: "8",
    Time_Form: "8",
    Time_Header: "8",
    Time_Footer: "8",
    Time_Website_Accessibility: "16",
    Time_Platform_Marketplace: "4",
    Time_Party_Integrationg: "8",
    Time_Analytics: "1",
    Time_SEO_Enable: "16",
    Time_SEO_W3C_Validations: "16",
    Time_Setup: "16",
    Time_Mobile_Responsive_Setup: "16",
    Time_Deployment: "6",
    Time_Tablet_Responsive: "12",
  });

  const handlechangeDefault = () => {};
  const handlechangeTime = () => {};
  return (
    <div>
      <form>
        Pages with Dynamic content{" "}
        <input
          type="number"
          value={time.Time_Pages_with_Dynamic_content}
          onChange={handlechangeTime}
          name="Time_Pages_with_Dynamic_content"
        />
        <input
          type="number"
          value={defaults.Pages_with_Dynamic_content}
          onChange={handlechangeDefault}
          name="Pages_with_Dynamic_content"
        />
        <input
          type="number"
          value={
            time.Time_Pages_with_Dynamic_content *
            defaults.Pages_with_Dynamic_content
          }
        />
        <br />
        Static Pages{" "}
        <input
          type="number"
          value={time.Time_StaticPages}
          onChange={handlechangeTime}
          name="Time_StaticPages"
        />
        <input
          type="number"
          value={defaults.StaticPages}
          onChange={handlechangeDefault}
          name="StaticPages"
        />
        <input
          type="number"
          value={time.Time_StaticPages * defaults.StaticPages}
        />
        <br />
        Animation{" "}
        <input
          type="number"
          value={time.Time_Animation}
          onChange={handlechangeTime}
          name="Time_Animation"
        />
        <input
          type="number"
          value={defaults.Animation}
          onChange={handlechangeDefault}
          name="Animation"
        />
        <input type="number" value={time.Time_Animation * defaults.Animation} />
        <br />
        Dynamic Content{" "}
        <input
          type="number"
          value={time.Time_Dynamic_Content}
          onChange={handlechangeTime}
          name="Time_Dynamic_Content"
        />
        <input
          type="number"
          value={defaults.Dynamic_Content}
          onChange={handlechangeDefault}
          name="Dynamic_Content"
        />
        <input
          type="number"
          value={time.Time_Dynamic_Content * defaults.Dynamic_Content}
        />
        <br />
        Blogs listing{" "}
        <input
          type="number"
          value={time.Time_Blogs_listing}
          onChange={handlechangeTime}
          name="Time_Blogs_listing"
        />
        <input
          type="number"
          value={defaults.Blogs_listing}
          onChange={handlechangeDefault}
          name="Blogs_listing"
        />
        <input
          type="number"
          value={time.Time_Blogs_listing * defaults.Blogs_listing}
        />
        <br />
        Blogs Detail{" "}
        <input
          type="number"
          value={time.Time_Blogs_Detail}
          onChange={handlechangeTime}
          name="Time_Blogs_Detail"
        />
        <input
          type="number"
          value={defaults.Blogs_Detail}
          onChange={handlechangeDefault}
          name="Blogs_Detail"
        />
        <input
          type="number"
          value={time.Time_Blogs_Detail * defaults.Blogs_Detail}
        />
        <br />
        Form{" "}
        <input
          type="number"
          value={time.Time_Form}
          onChange={handlechangeTime}
          name="Time_Form"
        />
        <input
          type="number"
          value={defaults.Form}
          onChange={handlechangeDefault}
          name="Form"
        />
        <input type="number" value={time.Time_Form * defaults.Form} />
        <br />
        Header{" "}
        <input
          type="number"
          value={time.Time_Header}
          onChange={handlechangeTime}
          name="Time_Pages_with_Dynamic_content"
        />
        <input
          type="number"
          value={defaults.Header}
          onChange={handlechangeDefault}
          name="Header"
        />
        <input type="number" value={time.Time_Header * defaults.Header} />
        <br />
        Footer
        <input
          type="number"
          value={time.Time_Footer}
          onChange={handlechangeTime}
          name="Time_Footer"
        />
        <input
          type="number"
          value={defaults.Footer}
          onChange={handlechangeDefault}
          name="Footer"
        />
        <input type="number" value={time.Time_Footer * defaults.Footer} />
        <br />
        Websit Accessibility(Speed optimisation)
        <input
          type="number"
          value={time.Time_Website_Accessibility}
          onChange={handlechangeTime}
          name="Time_Website_Accessibility"
        />
        <input
          type="number"
          value={defaults.Website_Accessibility}
          onChange={handlechangeDefault}
          name="Website_Accessibility"
        />
        <input
          type="number"
          value={
            time.Time_Website_Accessibility * defaults.Website_Accessibility
          }
        />
        <br />
        Platform Marketplace Plugins Integration{" "}
        <input
          type="number"
          value={time.Time_Platform_Marketplace}
          onChange={handlechangeTime}
          name="Time_Platform_Marketplace"
        />
        <input
          type="number"
          value={defaults.Platform_Marketplace}
          onChange={handlechangeDefault}
          name="Platform_Marketplace"
        />
        <input
          type="number"
          value={time.Time_Platform_Marketplace * defaults.Platform_Marketplace}
        />
        <br />
        3rd Party Integration
        <input
          type="number"
          value={time.Time_Party_Integrationg}
          onChange={handlechangeTime}
          name="Time_Party_Integrationg"
        />
        <input
          type="number"
          value={defaults.Party_Integrationg}
          onChange={handlechangeDefault}
          name="Party_Integrationg"
        />
        <input
          type="number"
          value={time.Time_Party_Integrationg * defaults.Party_Integrationg}
        />
        <br />
        Analytics{" "}
        <input
          type="number"
          value={time.Time_Analytics}
          onChange={handlechangeTime}
          name="Time_Analytics"
        />
        <input
          type="number"
          value={defaults.Analytics}
          onChange={handlechangeDefault}
          name="Analytics"
        />
        <input type="number" value={time.Time_Analytics * defaults.Analytics} />
        <br />
        SEO Enable{" "}
        <input
          type="number"
          value={time.Time_SEO_Enable}
          onChange={handlechangeTime}
          name="Time_SEO_Enable"
        />
        <input
          type="number"
          value={defaults.SEO_Enable}
          onChange={handlechangeDefault}
          name="SEO_Enable"
        />
        <input
          type="number"
          value={time.Time_SEO_Enable * defaults.SEO_Enable}
        />
        <br />
        SEO W3C Validations{" "}
        <input
          type="number"
          value={time.Time_SEO_W3C_Validations}
          onChange={handlechangeTime}
          name="Time_SEO_W3C_Validations"
        />
        <input
          type="number"
          value={defaults.SEO_W3C_Validations}
          onChange={handlechangeDefault}
          name="SEO_W3C_Validations"
        />
        <input
          type="number"
          value={time.Time_SEO_W3C_Validations * defaults.SEO_W3C_Validations}
        />
        <br />
        Setup
        <input
          type="number"
          value={time.Time_Setup}
          onChange={handlechangeTime}
          name="Time_Setup"
        />
        <input
          type="number"
          value={defaults.Setup}
          onChange={handlechangeDefault}
          name="Setup"
        />
        <input type="number" value={time.Time_Setup * defaults.Setup} />
        <br />
        Mobile Responsive Setup
        <input
          type="number"
          value={time.Time_Pages_with_Dynamic_content}
          onChange={handlechangeTime}
          name="Time_Pages_with_Dynamic_content"
        />
        <input
          type="number"
          value={defaults.Mobile_Responsive_Setup}
          onChange={handlechangeDefault}
          name="Mobile_Responsive_Setup"
        />
        <input
          type="number"
          value={
            time.Time_Pages_with_Dynamic_content *
            defaults.Pages_with_Dynamic_content
          }
        />
        <br />
        Deployment{" "}
        <input
          type="number"
          value={time.Time_Deployment}
          onChange={handlechangeTime}
          name="Time_Deployment"
        />
        <input
          type="number"
          value={defaults.Deployment}
          onChange={handlechangeDefault}
          name="Deployment"
        />
        <input
          type="number"
          value={time.Time_Deployment * defaults.Deployment}
        />
        <br />
        Tablet Responsive{" "}
        <label className="switch">
          <input type="checkbox" id="togBtn" />
          <div className="slider round">
            <span className="on">ON</span>
            <span className="off">OFF</span>
          </div>
        </label>
        <br />
        <button>
          <NavLink className="" to="/calculation">
            Calculation
          </NavLink>
        </button>
      </form>
    </div>
  );
};

export default Wordpress;
