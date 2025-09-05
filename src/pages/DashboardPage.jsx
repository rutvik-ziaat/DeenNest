import React from "react";
import Welcome from "../components/Dashboard/Welcome";

import QuickLinks from "../components/Dashboard/QuickLinks";
import Performance from "../components/Dashboard/Performance";
import FeesCollection from "../components/Dashboard/FeesCollection";
import Calendar from "../components/Dashboard/Calendar";
import QuickLinks2 from "../components/Dashboard/QuickLinks2";
import NoticeBoard from "../components/Dashboard/NoticeBoard";
import FeesCollected from "../components/Dashboard/FeesCollected";
import Stats from "../components/Dashboard/Stats";
import Attendance from "../components/Dashboard/Attendance";


const DashboardPage = () => {
  return (
    <div className="space-y-4">
      {/* Welcome and Stats Section */}
      <div className="space-y-4">
        <Welcome name={"MR. Zaid"} />
        <Stats />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4">
          {/* QuickLinks and Attendance Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <QuickLinks />
              <Performance />
            </div>
            <div className="flex justify-center md:justify-start">
              <Attendance />
            </div>
          </div>
          
          {/* Fees Collection */}
          <FeesCollection />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1">
          <Calendar />
        </div>
      </div>

      {/* Quick Links 2 */}
      <div className=''>
        <QuickLinks2 />
      </div>

      {/* Bottom Section - Notice Board and Fees Collected */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Notice Board */}
        <div>
          <NoticeBoard />
        </div>
        
        {/* Fees Collected */}
        <div>
          <FeesCollected />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
