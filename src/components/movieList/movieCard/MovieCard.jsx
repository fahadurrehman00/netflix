import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMovie } from "../../../store/movieSlice";
import { FaPlayCircle } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const MovieCard = ({ movie, addToMyList }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlay = () => {
    dispatch(setMovie({ videoSrc: movie.video, title: movie.title }));
    navigate(
      `/playerScreen/${encodeURIComponent(movie.video)}/${encodeURIComponent(
        movie.title
      )}`
    );
  };

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setIsHovered(true);
    }, 600);
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-[16vw] h-[8vw] transition-all duration-300 parentdiv"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {isHovered && (
        <div
          className={`absolute z-50 w-[20vw] h-[18vw] top-0 left-1/2 bg-zinc-900 rounded-md cursor-pointer transition ease-in-out duration-300 childrendiv ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          } -translate-x-1/2 -translate-y-1/2`}>
          <>
            <div className="relative h-52">
              <video
                className="absolute top-0 w-full h-full object-cover rounded-t-md"
                autoPlay
                loop
                muted>
                <source src={movie.video} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col gap-2 p-2 lg:p-4 bg-zinc-800 rounded-b-md">
              <div className="flex justify-between mb-4 items-center">
                <div className="flex gap-2 items-center">
                  <button
                    className="text-3xl hover:opacity-80"
                    onClick={handlePlay}>
                    <FaPlayCircle />
                  </button>
                  <button
                    className="text-3xl hover:opacity-80"
                    onClick={() => addToMyList(movie)}>
                    <GoPlusCircle />
                  </button>
                  <button className="p-1 text-lg text-white border rounded-full">
                    <BiLike />
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => setIsVisible(!isVisible)}
                    className={`p-1 text-lg border-2 border-gray-500 text-white rounded-full transition delay-100 ${
                      isVisible ? "rotate-180" : ""
                    }`}>
                    <IoIosArrowDown />
                  </button>
                </div>
              </div>
              {isVisible && (
                <div>
                  <p
                    className={`transition-opacity duration-800 ${
                      isVisible ? "opacity-100" : "opacity-0 hidden"
                    }`}>
                    {movie.description}
                  </p>
                </div>
              )}
              <div className="flex space-x-2 mb-4 text-white items-center">
                <p className="text-green-500 text-xs">{movie.match} match</p>
                <p className="border px-2 text-xs leading-tight">
                  {movie.ageRating}
                </p>
                <p className="text-xs">{movie.episodes}</p>
                <p className="border px-2 text-[10px]">{movie.quality}</p>
              </div>
              <div className="flex space-x-2 text-white items-center text-sm">
                {movie.genres.map((genre, index) => (
                  <span key={index}>
                    {genre}
                    {index < movie.genres.length - 1 && (
                      <span className="text-sm text-gray-500"> -</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </>
        </div>
      )}
      {!isHovered && (
        <img
          className="w-full h-full rounded-md cursor-pointer transition-all duration-300"
          src={movie.thumbnail}
          alt={movie.title}
        />
      )}
    </div>
  );
};

export default MovieCard;
