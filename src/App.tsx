import styles from "./App.module.css";
import Form from "./components/Form/Form";
import Spinner from "./components/Spinner/Spinner";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";
import Alert from "./components/Alert/Alert";

function App() {
  const { weather, fetchWeather, hasWeatherData, loading, notFound } = useWeather();

  return (
    <>
      <img src="/logo.png" alt="Climate Compass Logo" className={styles.logo} />

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />

        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>Ciudad No Encontrada</Alert>}
      </div>
    </>
  );
}

export default App;