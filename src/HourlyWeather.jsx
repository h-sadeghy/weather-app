export default function HourlyWeather({ hour }) {
  return (
    <div
      className=" p-2 items-center justify-center space-y-2 bg-black/10 backdrop-blur-3xl border-2
      border-black xl:w-52 flex flex-col w-30  text-sm h-72   "
    >
      <p>{hour.time.split(" ")[0]}</p>
      <p>{hour.time.split(" ")[1]}</p>
      <img
        src={hour.condition.icon}
        className="h-20 w-20 rounded-full bg-black/90 "
      />
      <p>{Math.round(hour.temp_c)}°</p>
      <p>Feels like: {Math.round(hour.feelslike_c)}°</p>
      <p>{hour.condition.text}</p>
    </div>
  );
}
