import Map from "./Map";

export default function CurrentWeather({ currentData, locationData }) {
  return (
    <div className="backdrop-blur-3xl bg-black/40 xl:rounded-tl-4xl xl:rounded-br-4xl  xl:w-11/12 text-black xl:m-4   items-center   flex xl:flex-row mx-auto flex-col w-screen xl:mx-auto    ">
      <div className="xl:w-[450px] w-full ">
        <div className="mx-auto  text-center  ">
          <h2 className="xl:text-xl font-serif text-black">
            Current Weather Information
          </h2>
        </div>
        <div className="flex items-center justify-center mt-2 flex-col">
          <img
            src={currentData.condition.icon}
            className="h-17 w-17 flex bg-gradient-to-l bg-black/20 rounded-full"
          />
          <p className="text-2xl">{currentData.condition.text}</p>
        </div>
        <div className="mx-auto justify-center items-center ">
          <li className="list-none flex flex-col items-center">
            <span></span>
            <span></span>
          </li>
        </div>
        <div className="p-6 rounded-lg">
          <ul className="xl:space-y-2 space-y-1  ">
            <li className=" justify-between flex  ">
              <span>Temperature: </span>
              <span>{currentData.temp_c} ℃</span>
            </li>
            <hr className="mx-auto w-2/3 text-black/70 opacity-25" />
            <li className=" justify-between flex  ">
              <span>Feels Like: </span>
              <span> {currentData.feelslike_c}℃</span>
            </li>
            <hr className="mx-auto w-2/3 text-black/70 opacity-25" />
            <li className=" justify-between flex  ">
              <span>Humidity: </span>
              <span>{currentData.humidity} %</span>
            </li>
            <hr className="mx-auto w-2/3 text-black/70 opacity-25" />
            <li className=" justify-between flex  ">
              <span>Wind: </span>
              <span> {currentData.wind_kph}/KpH</span>
            </li>
            <hr className="mx-auto w-2/3 text-black/70 opacity-25" />
            <li className=" justify-between flex  ">
              <span>Wind Direction: </span>
              <span> {currentData.wind_dir}</span>
            </li>
            <hr className="mx-auto w-2/3 text-black/70 opacity-25" />
            <li className=" justify-between flex  ">
              <span>Precipitaion: </span>
              <span> {currentData.precip_mm}mm</span>
            </li>
            <hr className="mx-auto w-2/3 text-black/70 opacity-25" />
            <li className=" justify-between flex  ">
              <span>Cloudy: </span>
              <span> {currentData.cloud} % </span>
            </li>
            <hr className="mx-auto w-2/3 text-black/70 opacity-25" />
            <li className=" justify-between flex  ">
              <span>UV: </span>
              <span> {currentData.uv} % </span>
            </li>
            <hr className="mx-auto w-2/3 text-black/70 opacity-25" />
            {/* <li className=" justify-between flex  ">
              <span>LocalTime: </span>
              <span> {locationData.localtime}</span>
            </li>
            <hr className="mx-auto w-2/3 text-black/70 opacity-25" />
            <li className=" justify-between flex  ">
              <span>Name: </span>
              <span> {locationData.name}</span>
            </li>
            <hr className="mx-auto w-2/3 text-black/70 opacity-25" />
            <li className=" justify-between flex  ">
              <span>Region: </span>
              <span>{locationData.region}</span>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="xl:w-auto h-auto xl:pl-12   mx-auto hidden xl:flex  ">
        <Map
          locationData={locationData}
          latitude={locationData.lat}
          longitude={locationData.lon}
        />
      </div>
    </div>
  );
}
