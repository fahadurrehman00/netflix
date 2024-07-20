import React, { useRef, useState, useEffect } from "react";
import MovieCard from "./movieCard/MovieCard";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

const MovieList = ({ title }) => {
  const [movies] = useState([
    {
      id: 1,
      title: "Wednesday",
      thumbnail: "/images/wednesdayThumbnail.jpg",
      video: "/video/wednesday.mp4",
      match: "98%",
      ageRating: "16+",
      episodes: "16 episodes",
      quality: "HD",
      description:
        "Wednesday is an American coming-of-age supernatural mystery television series based on the character Wednesday Addams by Charles Addams.",
      genres: ["Intimate", "Horror", "Comedy"],
    },
    {
      id: 2,
      title: "Wednesday",
      thumbnail: "/images/maxresdefault.jpg",
      video: "/video/wednesday.mp4",
      match: "68%",
      ageRating: "16+",
      episodes: "16 episodes",
      quality: "HD",
      description:
        "Wednesday is an American coming-of-age supernatural mystery television series based on the character Wednesday Addams by Charles Addams.",
      genres: ["Intimate", "Romantic", "Comedy"],
    },
    {
      id: 3,
      title: "moneyheist",
      thumbnail: "/images/moneyheist.jpg",
      video: "/video/wednesday.mp4",
      match: "68%",
      ageRating: "16+",
      episodes: "16 episodes",
      quality: "HD",
      description:
        "Wednesday is an American coming-of-age supernatural mystery television series based on the character Wednesday Addams by Charles Addams.",
      genres: ["Intimate", "Romantic", "Comedy"],
    },
    {
      id: 4,
      title: "Wednesday",
      thumbnail: "/images/you.png",
      video: "/video/extraction.crdownload",
      match: "68%",
      ageRating: "16+",
      episodes: "16 episodes",
      quality: "HD",
      description:
        "Wednesday is an American coming-of-age supernatural mystery television series based on the character Wednesday Addams by Charles Addams.",
      genres: ["Intimate", "Romantic", "Comedy"],
    },
    {
      id: 5,
      title: "Wednesday",
      thumbnail: "/images/squidgame.png",
      video: "/video/wednesday.mp4",
      match: "68%",
      ageRating: "16+",
      episodes: "16 episodes",
      quality: "HD",
      description:
        "Wednesday is an American coming-of-age supernatural mystery television series based on the character Wednesday Addams by Charles Addams.",
      genres: ["Intimate", "Romantic", "Comedy"],
    },
    {
      id: 6,
      title: "Wednesday",
      thumbnail: "/images/Mirzapur.png",
      video: "/video/wednesday.mp4",
      match: "68%",
      ageRating: "16+",
      episodes: "16 episodes",
      quality: "HD",
      description:
        "Wednesday is an American coming-of-age supernatural mystery television series based on the character Wednesday Addams by Charles Addams.",
      genres: ["Intimate", "Romantic", "Comedy"],
    },
    {
      id: 7,
      title: "Wednesday",
      thumbnail: "/images/squidgame.png",
      video: "/video/wednesday.mp4",
      match: "68%",
      ageRating: "16+",
      episodes: "16 episodes",
      quality: "HD",
      description:
        "Wednesday is an American coming-of-age supernatural mystery television series based on the character Wednesday Addams by Charles Addams.",
      genres: ["Intimate", "Romantic", "Comedy"],
    },
    {
      id: 8,
      title: "Wednesday",
      thumbnail: "/images/squidgame.png",
      video: "/video/wednesday.mp4",
      match: "68%",
      ageRating: "16+",
      episodes: "16 episodes",
      quality: "HD",
      description:
        "Wednesday is an American coming-of-age supernatural mystery television series based on the character Wednesday Addams by Charles Addams.",
      genres: ["Intimate", "Romantic", "Comedy"],
    },
    {
      id: 8,
      title: "Wednesday",
      thumbnail: "/images/squidgame.png",
      video: "/video/wednesday.mp4",
      match: "68%",
      ageRating: "16+",
      episodes: "16 episodes",
      quality: "HD",
      description:
        "Wednesday is an American coming-of-age supernatural mystery television series based on the character Wednesday Addams by Charles Addams.",
      genres: ["Intimate", "Romantic", "Comedy"],
    },
    {
      id: 8,
      title: "Wednesday",
      thumbnail: "/images/squidgame.png",
      video: "/video/wednesday.mp4",
      match: "68%",
      ageRating: "16+",
      episodes: "16 episodes",
      quality: "HD",
      description:
        "Wednesday is an American coming-of-age supernatural mystery television series based on the character Wednesday Addams by Charles Addams.",
      genres: ["Intimate", "Romantic", "Comedy"],
    },
    {
      id: 8,
      title: "Wednesday",
      thumbnail: "/images/squidgame.png",
      video: "/video/wednesday.mp4",
      match: "68%",
      ageRating: "16+",
      episodes: "16 episodes",
      quality: "HD",
      description:
        "Wednesday is an American coming-of-age supernatural mystery television series based on the character Wednesday Addams by Charles Addams.",
      genres: ["Intimate", "Romantic", "Comedy"],
    },
  ]);

  const [showSliderControls, setShowSliderControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const listRef = useRef();

  useEffect(() => {
    // Handle wrapping around when reaching the end
    if (sliderPosition >= movies.length) {
      setSliderPosition(0);
      listRef.current.style.transition = "none";
      listRef.current.style.transform = `translateX(0)`;
      setTimeout(() => {
        listRef.current.style.transition = "transform 0.3s ease-in-out";
      }, 0);
    }
    // Handle wrapping around when reaching the beginning
    if (sliderPosition < 0) {
      setSliderPosition(movies.length - 1);
      listRef.current.style.transition = "none";
      listRef.current.style.transform = `translateX(${-500 * (movies.length - 1)}px)`;
      setTimeout(() => {
        listRef.current.style.transition = "transform 0.3s ease-in-out";
      }, 0);
    }
  }, [sliderPosition, movies.length]);

  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left") {
      setSliderPosition(sliderPosition - 1);
      listRef.current.style.transform = `translateX(${640 + distance}px)`;
    }
    if (direction === "right") {
      setSliderPosition(sliderPosition + 1);
      listRef.current.style.transform = `translateX(${-500 + distance}px)`;
    }
  };

  return (
    <div
      className="relative z-10 flex flex-col py-8 gap-4"
      onMouseEnter={() => setShowSliderControls(true)}
      onMouseLeave={() => setShowSliderControls(false)}>
      <p className="text-white text-md md:text-xl lg:text-2xl font-semibold ml-12">
        {title}
      </p>
      <div className="Slider gap-4 translate-x-0 transition">
        {sliderPosition > 0 && (
          <div
            className={`absolute z-[90] h-full w-12 transition-all duration-300 left-0 top-0 cursor-pointer bg-gray-600 bg-opacity-40 ${
              !showSliderControls ? "hidden" : ""
            }`}
            onClick={() => handleDirection("left")}>
            <IoChevronBackSharp className="text-2xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
          </div>
        )}
        <div
          ref={listRef}
          className="pl-4 z-10 md:pl-12 flex gap-4 w-max transition-all duration-300">
          {movies.concat(movies).map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
        <div
          className={`absolute z-[90] h-full w-12 transition right-0 top-0 cursor-pointer bg-gray-600 bg-opacity-80 ${
            !showSliderControls ? "hidden" : ""
          }`}
          onClick={() => handleDirection("right")}>
          <IoChevronForwardSharp className="text-2xl absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2" />
        </div>
      </div>
    </div>
  );
};

export default MovieList;