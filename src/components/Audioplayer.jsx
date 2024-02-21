// import React from "react";

// eslint-disable-next-line react/prop-types
const AudioPlayer = ({ track }) => {
  let aud = URL.createObjectURL(track);

  return (
    <div
      className="block w-full bg-slate-200 rounded-xl"
      style={{ border: "2px solid " }}
    >
      <audio controls>
        <source src={aud} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
