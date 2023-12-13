import React from "react";
import "./style.scss";
import Image from "next/image";

const Caster = (props) => {
  const { info } = props;
  console.log(info);
  return (
    <div className="caster">
      <Image
        width={100}
        height={50}
        src={`${process.env.API_IMGURL}${info.profile_path}`}
        alt={info.id}
      />
      <p className="caster__name">{info.name}</p>
    </div>
  );
};

export default Caster;
