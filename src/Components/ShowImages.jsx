import React from "react";
import { resources } from "../assets/assets";

const ShowImages = () => {
  return (
    <div className="m-[8px] sm:m-[20px] flex flex-col justify-center items-center gap-6">
      {/* First Full-width Image */}
      {resources.showimg1 && (
        <img
          src={resources.showimg1}
          alt="show1"
          className="w-full rounded-[16px] shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
        />
      )}

      {/* Group 1 */}
      <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4">
        {[resources.showimg2, resources.showimg3].map((img, idx) =>
          img ? (
            <img
              key={`${img}-${idx}`}
              src={img}
              alt={`show${idx + 2}`}
              className="w-[48%] sm:w-[600px] rounded-[16px] shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            />
          ) : null
        )}
      </div>

      {/* Group 2 */}
      <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4">
        {[resources.showimg4, resources.showimg5].map((img, idx) =>
          img ? (
            <img
              key={`${img}-${idx}`}
              src={img}
              alt={`show${idx + 4}`}
              className="w-[48%] sm:w-[600px] rounded-[16px] shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            />
          ) : null
        )}
      </div>

      {/* Group 3 */}
      <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4">
        {[resources.showimg6, resources.showimg7].map((img, idx) =>
          img ? (
            <img
              key={`${img}-${idx}`}
              src={img}
              alt={`show${idx + 6}`}
              className="w-[48%] sm:w-[600px] rounded-[16px] shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default ShowImages;
