import React from "react";
import Image from "next/image";

const CircularImage = () => {
  const myface = "/me.png";

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <Image src={myface} alt="A pic of me" width="100px" height="100px" />
    </div>
  );
};

export default CircularImage;
