import React from "react";
import Label from "../ui/Label";

const OurStory = () => {
  return (
    <div className="flex w-full p-[120px] pb-[60px] gap-[80px] justify-between items-center">
      <div className="flex flex-col gap-[30px] flex-1">
        <Label>Our Story</Label>
        <p className="font-light tracking-wide leading-[170%]">
          <span className="font-bold">Refact Studio</span> was founded with a
          simple idea: most websites and web systems fail not because of design,
          but because of poor structure, rushed decisions, and lack of long-term
          ownership.
        </p>
        <p className="font-light tracking-wide leading-[170%]">
          We focus on <span className="font-bold">building and improving</span>{" "}
          web systems that are clear, maintainable, and built to last. Whether {" "}
          <span className="font-bold">
            starting from scratch or refactoring an existing product
          </span>
          , our goal is always the same — deliver{" "}
          <span className="font-bold">reliable</span> solutions that support
          real business needs over time.
        </p>
        <p className="font-light tracking-wide leading-[170%]">
          We don’t chase trends or shortcuts. We believe in thoughtful design,
          clean code, and responsible engineering.
        </p>
      </div>
      <div className="h-[400px] aspect-square">
        <img src="../images/projects/snail-store.png" alt="" className="w-full h-full object-cover"/>
      </div>
    </div>
  );
};

export default OurStory;
