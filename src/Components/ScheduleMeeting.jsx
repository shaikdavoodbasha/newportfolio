// src/pages/ScheduleMeeting.jsx (or wherever your pages are)

import React from "react";
import { InlineWidget } from "react-calendly";

const ScheduleMeeting = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] dark:bg-[#1A1A2E] p-6 flex flex-col items-center justify-center">
      <h1 className="text-[32px] sm:text-[48px] font-bold text-center text-[#FF472F] dark:text-[#FF6B4D] mb-6">
        📅 Schedule a Meeting
      </h1>
      <p className="text-center max-w-[600px] text-[16px] sm:text-[20px] dark:text-[#E0E0E0] mb-8">
        Book a 1:1 session with me — let’s discuss your ideas, project needs, or just chat about tech!
      </p>
      <div className="w-full max-w-[800px] shadow-lg rounded-[12px] overflow-hidden border border-[#d9d9d9]">
        <InlineWidget url="https://calendly.com/shaik-davoodbasha2/30min" />
      </div>
    </div>
  );
};

export default ScheduleMeeting;
