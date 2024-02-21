import { useState } from "react";
import AudioPlayer from "./components/Audioplayer";

function App() {
  const [track, setTrack] = useState([]);
  const [index, setIndex] = useState(0);

  const addfile = (e) => {
    if (e.target.files[0]) {
      const arr = [...track, e.target.files[0]];
      console.log(track);
      setTrack(arr);
      // localStorage.setItem("audioData", JSON.stringify(e.target.files[0]));
    }
  };

  // console.log(track.length);
  // console.log(index);

  return (
    <>
      <div className="container h-screen flex items-center justify-center mx-auto shodow-xl p-3">
        {/* for rendering all song */}
        <div
          className="h-screen flex items-center justify-center w-1/3 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
          // style={{ border: "2px solid red" }}
        >
          <input
            type="file"
            onChange={addfile}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />
        </div>
        {/* for rendering current */}
        <div
          className="flex justify-center items-center w-full h-screen flex-col p-3 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
          // style={{ border: "2px solid red" }}
        >
          <div className="w-full p-3 text-center">
            <ul>
              {track.map((item, i) => (
                <li key={i} className="m-2">
                  <AudioPlayer track={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
