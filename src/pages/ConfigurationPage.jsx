import React from "react";
import StudentFormConfigurations from "../components/Configuration/StudentFormConfigurations";

const ConfigurationPage = () => {
  return (
    <div>
      <h2>Configuration</h2>
      <div className="grid grid-cols-3 gap-8">  
        <StudentFormConfigurations />
        <StudentFormConfigurations />
        <StudentFormConfigurations />

        <StudentFormConfigurations />
        <StudentFormConfigurations />
        <StudentFormConfigurations />
      </div>
    </div>
  );
};

export default ConfigurationPage;
