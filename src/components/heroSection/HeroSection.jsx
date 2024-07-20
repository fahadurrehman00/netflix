import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMovie } from "../../store/movieSlice";
import { FiInfo } from "react-icons/fi";
import PlayButton from "../commanComponent/playButton/PlayButton";

const videos = [
  {
    thumbnail: "/images/wednesdayThumbnail.jpg",
    videoSrc: "/video/wednesday.mp4",
    title: "Wednesday",
    description:
      "A sleuthing, supernaturally infused mystery charting Wednesday Addams' years as a student at Nevermore Academy. Wednesday's attempts to master her emerging psychic ability - all while navigating her new and very tangled relationships at Nevermore.",
  },
  {
    thumbnail: "/images/moneyheist.jpg",
    videoSrc: "/video/videoplayback.mp4",
    title: "Extraction",
    description:
      "Years as a student at Nevermore Academy. Wednesday's attempts to master her emerging psychic ability - all while navigating her new and very tangled relationships at Nevermore.",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isMouseMove, setIsMouseMove] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setCurrentVideo(videos[randomIndex]);
  }, []);

  useEffect(() => {
    let timer;
    if (isMouseMove) {
      timer = setTimeout(() => {
        setIsVideoPlaying(true);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isMouseMove]);

  const handlePlay = () => {
    if (currentVideo) {
      dispatch(
        setMovie({ videoSrc: currentVideo.videoSrc, title: currentVideo.title })
      );
      navigate(
        `/playerScreen/${encodeURIComponent(
          currentVideo.videoSrc
        )}/${encodeURIComponent(currentVideo.title)}`
      );
    }
  };

  if (!currentVideo) {
    return null; // Render nothing or a loading spinner while the video is being set
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div onMouseMove={() => setIsMouseMove(true)}>
        {isVideoPlaying ? (
          <video
            className="w-full h-full object-cover brightness-[80%]"
            autoPlay
            loop
            muted>
            <source src={currentVideo.videoSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            src={currentVideo.thumbnail}
            alt={currentVideo.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <div className="transition duration-300 scale-100">
          <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
            {currentVideo.title}
          </p>
          <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
            {currentVideo.description}
          </p>
        </div>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton onClick={handlePlay} title="Play" />
          <button className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-[10px] px-2 md:px-4 w-auto text-xs lg:text-xl font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
            <FiInfo className="text-4xl mr-3" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
