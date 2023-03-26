interface WeatherProps {
  weatherData: {
    main: {
      temp: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
  };
}

export default function Weather({ weatherData }: WeatherProps) {
  return (
    <div>
      <p className="text-2xl font-bold flex flex-col justify-center items-center">FUKUOKA</p>
      <div className="flex items-center justify-center">
        <img
          className="w-16 h-16 mr-2"
          src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt={weatherData.weather[0].description}
        />
        <div>
          <p className="text-2xl font-bold">
            {Math.round(weatherData.main.temp)}°C
          </p>
          <p className="text-sm">{weatherData.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
}
