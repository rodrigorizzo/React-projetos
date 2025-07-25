import { useRef, useEffect } from "react";
import fundoVideo from "./assets/fundo.mp4";

function Video() {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = 0.4;
  }, []);

  return (
    <div className="bg-black fixed -z-10">
      <video
        ref={videoRef}
        className=" saturate-60 opacity-5"
        autoPlay="true"
        muted
        loop
      >
        <source src={fundoVideo} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default Video;
