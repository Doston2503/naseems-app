import React from "react";
import CustomerResearch from "../../sections/customer-research/CustomerResearch";
import OurValues from "../../sections/our-values/OurValues";
import OurTeam from "../../sections/our-team/OurTeam";

function About(props) {
  return (
    <div className="about-us-component">
      <CustomerResearch />
      <OurValues />
      <OurTeam />
    </div>
  );
}

export default About;
