import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

const PlayerScreen = () => {
  const navigate = useNavigate();
  const { videoSrc, title } = useParams();
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <MdOutlineArrowBackIos
          className="text-white text-lg cursor-pointer hover:scale-125 transition"
          onClick={() => navigate(-1)}
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching </span>
          {decodeURIComponent(title)}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className="h-full w-full"
        src={decodeURIComponent(videoSrc)}></video>
    </div>
  );
};
export default PlayerScreen;
