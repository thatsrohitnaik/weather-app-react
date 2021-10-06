import React, { useEffect } from 'react';
import GlobalContext from '../Context/';
import { observer } from 'mobx-react-lite';
import Loading from '../Components/Loading';
import Error from '../Components/Error';
import WeatherCard from '../Components/Weather/Card';
import Slider from '../Components/Slider';
import { kelvinConverter } from '../Util/temperature';
import { toJS } from 'mobx';
import { TemperatureUnits as Units, getUnits } from '../Util/temperature';
import RefreshIcon from '@mui/icons-material/Refresh';
import { makeStyles } from '@mui/styles';
import WeatherGraph from '../Components/Graph/';
import Unitselectore from '../Components/Unitselector/';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

const useStyles = makeStyles({
  icon: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(35%)',
  },
  iconCenter: {
    margin: 'auto',
    width: '100%',
  }
});

function Weather() {
  const { weatherStore: store } = React.useContext(GlobalContext);
  const [unit, setUnit] = React.useState(store.unit || Units.Fahrenheit);

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
    store.setUnit(event.target.value);
  };
  const classes = useStyles();

  useEffect(() => store.fetchWeatherReport(), []);

  if (store.loading) return <Loading />;

  if (store.isError) return (<><Error errorMessage={store.errorMessage} />  <RefreshIcon
    className={classes.icon+" "+classes.iconCenter}
    onClick={() => {
      store.fetchWeatherReport();
    }}
  /> </>)

  const showGraph = (value, index) => store.setSelectedDay(value.data, index);



  return (
    <>
      <Slider id="slide">
        {store.report.length > 0 &&
          toJS(store.report).map(({ date, value }, index) => (
            <WeatherCard
              key={index}
              avgTemp={kelvinConverter(value.avgTemp, store.unit)}
              date={date}
              unit={unit}
              value={value}
              city={store.city}
              index={index}
              currentSildeIndex={store.currentSildeIndex}
              showGraph={showGraph}
            />
          ))}
      </Slider>
      <Stack direction="row" spacing={2}>
        <Unitselectore
          unit={unit}
          handleUnitChange={handleUnitChange} />
        <RefreshIcon
          className={classes.icon}
          onClick={() => {
            store.fetchWeatherReport();
          }}
        />
      </Stack>
      <Container maxWidth="md">
        <WeatherGraph
          data={store.graphDataset}
          rawData={store.selectedDay}
          unit={store.unit}
        />
      </Container>
    </>
  );
}

export default observer(Weather);
