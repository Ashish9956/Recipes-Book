import React from "react";

function MainCard(props) {
  return (
    <a href={`/details/${props.id}`}>
      <div className="shadow rounded-3xl overflow-hidden">
        <div className="w-full h-36">
          <img
            src={props.img}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="px-4 py-3 bg-[#222] text-white">
          <h4 className="text-sm font-medium">
            {props.title.length < 28
              ? props.title
              : props.title.substring(0, 28) + "..."}
          </h4>
        </div>
      </div>
    </a>
  );
}

export default MainCard;
