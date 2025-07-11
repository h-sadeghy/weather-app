import { useState } from "react";
import Slider from "react-slick";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";
import "dotenv";
const settings = {
  dots: true,

  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 325, // For screens smaller than 768px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 430, // For screens smaller than 768px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};
export default function Weather() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [isFetching, setIsFetching] = useState(false);
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentData, setCurrentData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  function handleChange(e) {
    setCity(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsFetching(true);
      const res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&aqi=no`
      );
      if (res.ok) {
        const data = await res.json();

        setCurrentData(data.current);
        setLocationData(data.location);
        setForecastData(data.forecast.forecastday[0].hour);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
      setCity("");
    }
  }

  return (
    <>
      <div className={`text-black   w-full       gap-4 pt-4   font-mono  flex-col flex  ${
          isLoading ? "h-screen" : "h-full"
        } `}>
        <div className="xl:w-1/3    backdrop-blur-md bg-black/10  p-2 xl:rounded-tl-4xl xl:rounded-br-4xl mx-auto space-y-5 h-45 ">
          <h3 className=" text-center text-sm  ">
            Search For Weather Anywhere in the World
          </h3>

          <div className="flex flex-col  mx-auto items-center justify-center w-full p-2   ">
            <div className="space-y-5 justify-center items-center w-full flex flex-col ">
              <div className="w-full  ">
                <form onSubmit={handleSubmit} className="w-full  ">
                  <input
                    value={city}
                    type="text"
                    required
                    onChange={handleChange}
                    placeholder="Search For A City..."
                    className="p-2  w-full outline-0 bg-black/15 h-8  "
                  />
                </form>
              </div>
              <button
                type="submit"
                className=" text-white  xl:h-12 w-full bg-black/90 hover:bg-black/10 ease-in-out transition-colors duration-500 xl:rounded-tl-4xl xl:rounded-br-4xl text-sm xl:text-xl h-8 "
              >
                {isFetching ? `Searching for ${city}` : "Search"}
              </button>
            </div>
          </div>
        </div>

        {!isLoading && (
          <>
            <div className=" flex md:flex-row flex-col   w-full justify-center ">
              <div className="w-full flex md:flex-row flex-col    ">
                <CurrentWeather
                  currentData={currentData}
                  locationData={locationData}
                  forecastData={forecastData}
                />
              </div>
            </div>

            <div className=" xl:h-62 xl:w-10/12 mx-auto w-[80%]   ">
              <Slider {...settings}>
                {forecastData &&
                  forecastData.map((hour, index) => (
                    <HourlyWeather key={index} hour={hour} />
                  ))}
              </Slider>
            </div>
            <footer className="w-full flex flex-col xl:h-40 h-45 mt-15 items-center justify-center gap-4 bg-black/20 ">
              <div className="flex flex-col w-full justify-center items-center p-2">
                Powered by
                <a href="https://www.weatherapi.com/" title="Free Weather API">
                  <span className="xl:text-xl"> WeatherAPI.com</span>
                </a>
                <a href="https://www.weatherapi.com/" title="Free Weather API">
                  <img
                    src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
                    alt="Weather data by WeatherAPI.com"
                    border="0"
                  />
                </a>
              </div>
              <span className="p-1 text-sm xl:text-md w-full flex items-center justify-center">
                <p>
                  © 2024{" "}
                  <span className=" xl:text-yellow-400 xl:tracking-[0.2rem] ">
                    UnimaDesign
                  </span>
                  .
                </p>

                <p> All rights reserved.</p>
              </span>
            </footer>
          </>
        )}
      </div>
    </>
  );
}
