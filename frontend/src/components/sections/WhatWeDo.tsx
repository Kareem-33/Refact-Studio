import React from "react";
import Label from "../ui/Label";

const WhatWeDo = () => {
  return (
    <div className="flex w-full p-[120px] pb-[60px] gap-[80px] justify-between items-center bg-surface">
      <div className="h-[400px] aspect-square">
        <img
          src="../images/projects/snail-store.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-[30px] flex-1">
        <Label>What We Do</Label>
        <p className="font-light tracking-wide leading-[170%]">
          We design and develop modern websites, dashboards, and web systems,
          with a strong focus on refactoring and improving existing products.
          Our work covers UI/UX design, frontend and backend development,
          performance optimization, and long-term system improvements.
        </p>
        <p className="font-light tracking-wide leading-[170%]">
          Instead of offering everything, we focus on what we can deliver well —
          and deliver it responsibly.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
