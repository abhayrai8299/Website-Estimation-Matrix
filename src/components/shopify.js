import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Shopify = ({setTotal,setReviewSum, val,setVal,val2,setVal2,
  val3,setVal3,val4,setVal4}) => {
  const [textState, setTextState] = useState("On");
   const [textState2, setTextState2] = useState("Off");
   const [textState3, setTextState3] = useState("Off");
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
    Homepage: "1",
    About_Us: "1",
    Product_Listing: "1",
    Product_Detail: "1",
    Cart_Page: "1",
    Checkout: "1",
    My_Account: "1",
    Payment_Gateway: "1",
    Product_Variation: "5",
    Static_Pages: "3",
    Animation: "1",
    Dynamic_Content: "1",
    Blog_listing: "1",
    Blog_Detail: "1",
    Form: "1",
    Header:"1",
    Footer:"1",
    Websit_Accessibility: "0",
    Platform_Marketplace : "0",
    Party_Integration: "0",
    Analytics: "0",
    SEO_Enable: "1",
    SEO_W3C_Validations: "1",
    Setup: "0",
    Mobile_Responsive_Setup: "0",
    Deployment: "0",
    Tablet_Responsive: "0",
  });  
  const [time,setTime] = useState({
    Time_Homepage: "16",
    Time_About_Us: "5",
    Time_Product_Listing: "22",
    Time_Product_Detail: "28",
    Time_Cart_Page: "15",
    Time_Checkout: "22",
    Time_My_Account: "32",
    Time_Payment_Gateway: "6",
    Time_Product_Variation: "4",
    Time_Static_Pages: "3",
    Time_Animation: "3",
    Time_Dynamic_Content: "2",
    Time_Blog_listing: "8",
    Time_Blog_Detail: "8",
    Time_Form: "8",
    Time_Header:"8",
    Time_Footer:"8",
    Time_Websit_Accessibility: "16",
    Time_Platform_Marketplace : "4",
    Time_Party_Integration: "12",
    Time_Analytics: "1",
    Time_SEO_Enable: "16",
    Time_SEO_W3C_Validations: "16",
    Time_Setup: "8",
    Time_Mobile_Responsive_Setup: "24",
    Time_Deployment: "6",
    Time_Tablet_Responsive: "13",
  });

  let ReviewSum= (defaults.Homepage*time.Time_Homepage)+(defaults.About_Us*time.Time_About_Us)+(defaults.Product_Listing*time.Time_Product_Listing)
          +(defaults.Product_Detail*time.Time_Product_Detail)+(defaults.Cart_Page*time.Time_Cart_Page)+(defaults.Checkout*time.Time_Checkout)
          +(defaults.My_Account*time.Time_My_Account)+(defaults.Payment_Gateway*time.Time_Payment_Gateway)+(defaults.Product_Variation*time.Time_Product_Variation)+(defaults.Static_Pages*time.Time_Static_Pages)+(defaults.Animation*time.Time_Animation)
          +(defaults.Dynamic_Content*time.Time_Dynamic_Content)+(defaults.Blog_listing*time.Time_Blog_listing)+(defaults.Blog_Detail*time.Time_Blog_Detail)
          +(defaults.Form*time.Time_Form)+(defaults.Header*time.Time_Header)+(defaults.Footer*time.Time_Footer)+(time.Time_Mobile_Responsive_Setup*val3)+(defaults.Tablet_Responsive*val4);
   setReviewSum(ReviewSum);

  let Totalsum=ReviewSum+(defaults.Websit_Accessibility*time.Time_Websit_Accessibility)
          +(defaults.Platform_Marketplace*time.Time_Platform_Marketplace)+(defaults.Party_Integration*time.Time_Party_Integration)+(defaults.Analytics*time.Time_Analytics)
          +(time.Time_SEO_Enable*val)+(time.Time_SEO_W3C_Validations*val)+(time.Time_Setup*val2)+(defaults.Deployment*time.Time_Deployment);
          setTotal(Totalsum)  



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
        Homepage
        <input
          type="number"
          value={time.Time_Homepage}
          onChange={handlechangeTime}
          name="Time_Homepage"
        />
        <input
          type="number"
          value={defaults.Homepage}
          onChange={handlechangeDefault}
          name="Homepage"
        />
        <input
          type="number"
          value={
            time.Time_Homepage *
            defaults.Homepage
          }
         
        />
        <br />
        About Us{" "}
        <input
          type="number"
          value={time.Time_About_Us}
          onChange={handlechangeTime}
          name="Time_About_Us"
        />
        <input
          type="number"
          value={defaults.About_Us}
          onChange={handlechangeDefault}
          name="StaticPages"
        />
        <input
          type="number"
          value={time.Time_About_Us * defaults.About_Us}
        />
        <br />
        Product Listing{" "}
        <input
          type="number"
          value={time.Time_Product_Listing}
          onChange={handlechangeTime}
          name="Time_Product_Listing"
        />
        <input
          type="number"
          value={defaults.Product_Listing}
          onChange={handlechangeDefault}
          name="Product_Listing"
        />
        <input type="number" value={time.Time_Product_Listing * defaults.Product_Listing} />
        <br />
        Product Detail{" "}
        <input
          type="number"
          value={time.Time_Product_Detail}
          onChange={handlechangeTime}
          name="Time_Product_Detail"
        />
        <input
          type="number"
          value={defaults.Product_Detail}
          onChange={handlechangeDefault}
          name="Product_Detail"
        />
        <input
          type="number"
          value={time.Time_Product_Detail * defaults.Product_Detail}
        />
        <br />
        Cart Page{" "}
        <input
          type="number"
          value={time.Time_Cart_Page}
          onChange={handlechangeTime}
          name="Time_Cart_Page"
        />
        <input
          type="number"
          value={defaults.Cart_Page}
          onChange={handlechangeDefault}
          name="Cart_Page"
        />
        <input
          type="number"
          value={time.Time_Cart_Page * defaults.Cart_Page}
        />
        <br />
        Checkout{" "}
        <input
          type="number"
          value={time.Time_Checkout}
          onChange={handlechangeTime}
          name="Time_Checkout"
        />
        <input
          type="number"
          value={defaults.Checkout}
          onChange={handlechangeDefault}
          name="Checkout"
        />
        <input
          type="number"
          value={time.Time_Checkout * defaults.Checkout}
        />
        <br />
        My Account{" "}
        <input
          type="number"
          value={time.Time_My_Account}
          onChange={handlechangeTime}
          name="Time_My_Account"
        />
        <input
          type="number"
          value={defaults.My_Account}
          onChange={handlechangeDefault}
          name="Blogs_Detail"
        />
        <input
          type="number"
          value={time.Time_My_Account * defaults.My_Account}
        />
        <br />
        Payment Gateway{" "}
        <input
          type="number"
          value={time.Time_Payment_Gateway}
          onChange={handlechangeTime}
          name="Time_Payment_Gateway"
        />
        <input
          type="number"
          value={defaults.Payment_Gateway}
          onChange={handlechangeDefault}
          name="Payment_Gateway"
        />
        <input
          type="number"
          value={time.Time_Payment_Gateway * defaults.Payment_Gateway}
        />
        <br />
        Product Variation{" "}
        <input
          type="number"
          value={time.Time_Product_Variation}
          onChange={handlechangeTime}
          name="Time_Product_Variation"
        />
        <input
          type="number"
          value={defaults.Product_Variation}
          onChange={handlechangeDefault}
          name="Product_Variation"
        />
        <input
          type="number"
          value={time.Time_Product_Variation * defaults.Product_Variation}
        />
        <br />
        Static Pages{" "}
        <input
          type="number"
          value={time.Time_Static_Pages}
          onChange={handlechangeTime}
          name="Time_Static_Pages"
        />
        <input
          type="number"
          value={defaults.Static_Pages}
          onChange={handlechangeDefault}
          name="Static_Pages"
        />
        <input
          type="number"
          value={time.Time_Static_Pages * defaults.Static_Pages}
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
        <input
          type="number"
          value={time.Time_Animation * defaults.Animation}
        />
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
          value={time.Time_Blog_listing}
          onChange={handlechangeTime}
          name="Time_Blog_listing"
        />
        <input
          type="number"
          value={defaults.Blog_listing}
          onChange={handlechangeDefault}
          name="Blog_listing"
        />
        <input
          type="number"
          value={time.Time_Blog_listing * defaults.Blog_listing}
        />
        <br />
        Blogs Detail{" "}
        <input
          type="number"
          value={time.Time_Blog_Detail}
          onChange={handlechangeTime}
          name="Time_Blog_Detail"
        />
        <input
          type="number"
          value={defaults.Blog_Detail}
          onChange={handlechangeDefault}
          name="Blog_Detail"
        />
        <input
          type="number"
          value={time.Time_Blog_Detail * defaults.Blog_Detail}
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
          value={time.Time_Websit_Accessibility}
          onChange={handlechangeTime}
          name="Time_Websit_Accessibility"
        />
        <input
          type="number"
          value={defaults.Websit_Accessibility}
          onChange={handlechangeDefault}
          name="Website_Accessibility"
        />
        <input
          type="number"
          value={
            time.Time_Websit_Accessibility * defaults.Websit_Accessibility
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
          value={time.Time_Party_Integration}
          onChange={handlechangeTime}
          name="Time_Party_Integration"
        />
        <input
          type="number"
          value={defaults.Party_Integration}
          onChange={handlechangeDefault}
          name="Party_Integration"
        />
        <input
          type="number"
          value={time.Time_Party_Integration * defaults.Party_Integration}
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
          value={time.Time_Mobile_Responsive_Setup}
          onChange={handlechangeTime}
          name="Time_Mobile_Responsive_Setup"
        />
       <span className="toggle" onClick={toggleText3}>
        {textState3}
      </span>
        <input
          type="number"
          value={
            time.Time_Mobile_Responsive_Setup*
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
            Calculation Shopify
          </NavLink>
        </button>
      </form>
    </div>
  );
};

export default Shopify;
