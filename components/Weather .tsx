import React from "react";

interface WeatherProps {
  weatherData: {
    main: {
      temp: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
      deg: number;
    };
  };
}

const getWindDirection = (deg: number) => {
  const val = Math.floor(deg / 22.5 + 0.5);
  const arr = [
    "北",
    "北北東",
    "北東",
    "東北東",
    "東",
    "東南東",
    "南東",
    "南南東",
    "南",
    "南南西",
    "南西",
    "西南西",
    "西",
    "西北西",
    "北西",
    "北北西",
  ];
  return arr[val % 16];
};

const formatWindSpeed = (speed: number) => {
  return speed.toFixed(1);
};


const Weather: React.FC<WeatherProps> = ({ weatherData }) => {
  const { main, weather, wind } = weatherData;
  const windDirection = getWindDirection(wind.deg);
  const windSpeed = formatWindSpeed(wind.speed);

  return (
    <div>
      <p className="text-2xl font-bold flex flex-col justify-center items-center">
        FUKUOKA
      </p>
      <div className="flex items-center justify-center">
        <img
          className="w-16 h-16 mr-2"
          src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
          alt={weather[0].description}
        />
        <div className="flex gap-2 items-center justify-center">
          <div>
            <p className="text-2xl font-bold">{Math.round(main.temp)}°C</p>
            <p className="text-sm">{weather[0].description}</p>
          </div>
          <div>
            <p className="text-sm">風速</p>
            <p className="text-sm">
              <span className="text-2xl font-semibold text-blue-500">
                {windSpeed}
              </span>{" "}
              m/s
            </p>
            <p className="text-sm text-blue-500">{windDirection}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Weather;
