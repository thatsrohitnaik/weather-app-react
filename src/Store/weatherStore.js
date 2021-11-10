import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { apiURL2, apiURL } from '../settings';
import {
  TemperatureUnits as Units,
  kelvinConverter,
} from '../Util/temperature';

class WeatherStore {
  unit = Units.Celsius;
  report = [];
  loading = false;
  isError = false;
  errorMessage = 'There was an error while fetching report!';
  selectedDay = [];
  graphDataset = [];
  city = {};
  currentSildeIndex = 0;

  constructor() {
    makeAutoObservable(this);
    this.currentSildeIndex = localStorage.getItem('lastSlideIndex') || 0 ;
  }

  setUnit(unit) {
    this.unit = unit;
    this.selectedDay.length &&
      this.setSelectedDay(this.selectedDay, this.currentSildeIndex);
  }

  // on after we need to check if currently selected card is visible or not 
  // so it would be nice to know which is the current card that is selected 

  // setSlide(){

  //   const lastSlideWas = localStorage.getItem('lastSlideIndex')

  // }

  setCurrentSlideOnLocal(index){
    localStorage.setItem('lastSlideIndex', index);
  }


  setSelectedDay(value, index) {

    console.log(index, "heyy");

    this.selectedDay = value;
    this.currentSildeIndex = index;
    this.setCurrentSlideOnLocal(index);
    const label = [];
    const max = [];
    const min = [];
    value.map((e) => {
      label.push(e.hour);
      max.push(kelvinConverter(e.main.temp_max, this.unit));
      min.push(kelvinConverter(e.main.temp_min, this.unit));
    });
    this.graphDataset = {
      labels: label,
      datasets: [
        { label: 'max', data: max, backgroundColor: 'green' },
        { label: 'min', data: min, backgroundColor: 'orange' },
      ],
    };
  }
  
  disableLoading() {
    this.loading = false;
  }

  fetchWeatherReport() {
    this.loading = true;
    this.isError = false;
    this.errorMessage = '';
    axios
      .get(apiURL)
      .then((res) => {
        this.city = res.data.city;
        this.modify(res.data);
        this.disableLoading();
      })
      .catch(() => {
        this.isError = true;
        this.disableLoading();
        this.errorMessage =
          'There was a error while fetching data. Please click refresh to try again';
      });
  }

  modify(response) {
    let map = new Map();

    response.list.map((report) => {
      const { dt, main, dt_txt } = report;
      const { temp_max, temp_min } = main;
      const [key, hour] = dt_txt.split(' ');

      let currentAvgTemp = (temp_max + temp_min) / 2;

      let list = [];

      if (map.has(key)) {
        let value = map.get(key);
        list = value.data;
        currentAvgTemp = (currentAvgTemp + value.avgTemp) / 2;
      }

      report.hour = hour.substr(0, hour.lastIndexOf(':'));

      list.push(report);

      map.set(key, { avgTemp: currentAvgTemp, data: list });
    });

    this.report = Array.from(map, ([date, value]) => ({date, value}));

    // do the magic here 

    const lastSlideIndex = localStorage.getItem('lastSlideIndex') || 0 ;
    console.log(lastSlideIndex, "lastSlideIndex")

    this.currentSildeIndex = lastSlideIndex;

    this.setSelectedDay(this.report[lastSlideIndex].value.data, lastSlideIndex);
  }
}

export default WeatherStore;
