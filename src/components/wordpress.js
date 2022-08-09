import React, { useEffect, useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";



const Wordpress = ({setTotal,setReviewSum,val,setVal,val2,setVal2,val3,setVal3,val4,setVal4}) => {
  const [textState, setTextState] = useState("On");
   const [textState2, setTextState2] = useState("On");
   const [textState3, setTextState3] = useState("On");
   const [textState4, setTextState4] = useState("Off");

   useEffect(()=>{
      if(textState==="On")
      {
        setVal(1);
      }
       if(textState==="Off")
      {
        setVal(0);
      }
       if(textState2==="On")
      {
        setVal2(1);
      }
       if(textState2==="Off")
      {
        setVal2(0);
      }
       if(textState3==="On")
      {
        setVal3(1);
      }
       if(textState3==="Off")
      {
        setVal3(0);
      }
       if(textState4==="On")
      {
        setVal4(1);
      }
     if(textState4==="Off")
      {
        setVal4(0);
      }
  },[textState,textState2,textState3,textState4])


  const toggleText = () => {
    setTextState((state) => (state === "On" ? "Off" : "On"));
  };
  const toggleText2 = () => {
    setTextState2((state) => (state === "On" ? "Off" : "On"));
  };
  const toggleText3 = () => {
    setTextState3((state) => (state === "On" ? "Off" : "On"));
  };
  const toggleText4 = () => {
    setTextState4((state) => (state === "On" ? "Off" : "On"));
  };
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
    let ReviewSum= (defaults.Pages_with_Dynamic_content*time.Time_Pages_with_Dynamic_content)+(defaults.StaticPages*time.Time_StaticPages)+(defaults.Animation*time.Time_Animation)
  +(defaults.Dynamic_Content*time.Time_Dynamic_Content)+(defaults.Blogs_listing*time.Time_Blogs_listing)+(defaults.Blogs_Detail*time.Time_Blogs_Detail)
  +(defaults.Form*time.Time_Form)+(defaults.Header*time.Time_Header)+(defaults.Footer*time.Time_Footer)+(time.Time_Mobile_Responsive_Setup*val3)+(defaults.Tablet_Responsive*val4);       
 
  let Totalsum=ReviewSum+(defaults.Website_Accessibility*time.Time_Website_Accessibility)
  +(defaults.Platform_Marketplace*time.Time_Platform_Marketplace)+(defaults.Party_Integrationg*time.Time_Party_Integrationg)+(defaults.Analytics*time.Time_Analytics)
  +(time.Time_SEO_Enable*val)+(time.Time_SEO_W3C_Validations*val)+(time.Time_Setup*val2)+(defaults.Deployment*time.Time_Deployment);

 setTotal(Totalsum)  
 setReviewSum(ReviewSum);

  const handlechangeDefault = (e) => {
    const name=e.target.name;
    const value=e.target.value;
    setDefaults({...defaults,[name]:value})
 }
  const handlechangeTime = (e) => {
    const name=e.target.name;
    const value=e.target.value;
    setTime({...time,[name]:value})
  };

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
        <span className="toggle" onClick={toggleText}>
        {textState}
      </span>
        <input
          type="number"
          value={time.Time_SEO_Enable *val}
        />
        <br />
        SEO W3C Validations{" "}
        <input
          type="number"
          value={time.Time_SEO_W3C_Validations}
          onChange={handlechangeTime}
          name="Time_SEO_W3C_Validations"
        />
       <span className="toggle" onClick={toggleText}>
        {textState}
      </span>
        <input
          type="number"
          value={time.Time_SEO_W3C_Validations *val}
        />
        <br />
        Setup
        <input
          type="number"
          value={time.Time_Setup}
          onChange={handlechangeTime}
          name="Time_Setup"
        />
       <span className="toggle" onClick={toggleText2}>
        {textState2}
      </span>
        <input type="number" value={time.Time_Setup *val2} />
        <br />
        Mobile Responsive Setup
        <input
          type="number"
          value={time.Time_Pages_with_Dynamic_content}
          onChange={handlechangeTime}
          name="Time_Pages_with_Dynamic_content"
        />
        <span className="toggle" onClick={toggleText3}>
        {textState3}
      </span>
        <input
          type="number"
          value={
            time.Time_Pages_with_Dynamic_content*
            val3
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
        <input
          type="number"
          value={time.Time_Tablet_Responsive}
          onChange={handlechangeTime}
          name="Time_Tablet_Responsive"
        />
         <span className="toggle" onClick={toggleText4}>
        {textState4}
      </span>
        <input
          type="number"
          value={time.Time_Tablet_Responsive *val4}
        />
        <br />
        <button>
          <NavLink className="" to="/calculation">
            Calculation Wordpress
          </NavLink>
        </button>
      </form>
    </div>
  );
};

export default Wordpress;
