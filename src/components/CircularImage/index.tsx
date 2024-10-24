import React from "react";
import Image from "next/image";

const CircularImage = () => {
  const myface = "/462534204_2403688143316562_8580643049387228668_n.jpg";

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
