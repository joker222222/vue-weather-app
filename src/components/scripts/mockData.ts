import { reactive } from 'vue'

// export const locations = reactive([
// {
//   city: 'Бенгалуру, Индия',
//   statusId: 0,
//   temperature: {
//     currentTemp: 19,
//     maxTemp: 24,
//     minTemp: 18,
//   },
// },
//   {
//     city: 'Ченнай, Индия',
//     statusId: 1,
//     temperature: {
//       currentTemp: 22,
//       maxTemp: 26,
//       minTemp: 18,
//     },
//   },
//   {
//     city: 'Дели, Индия',
//     statusId: 2,
//     temperature: {
//       currentTemp: 29,
//       maxTemp: 32,
//       minTemp: 27,
//     },
//   },
//   {
//     city: 'Мумбаи, Индия',
//     statusId: 3,
//     temperature: {
//       currentTemp: 29,
//       maxTemp: 16,
//       minTemp: 23,
//     },
//   },
// ])

interface Temperature {
  currentTemp: number
  maxTemp: number
  minTemp: number
}

interface Location {
  city: string
  statusId: string
  temperature: Temperature
}

interface LocationStatusId {
  id: string
  name: string
  img: string
  alt: string
}
export const locations: Location[] = reactive([])
export const locationStatusId: LocationStatusId[] = [
  {
    id: 'Overcast',
    name: 'Облачно',
    img: new URL('@/assets/Moon_cloud_fast_wind.svg', import.meta.url).href,
    alt: 'Луна и облако с сильным ветром',
  },
  {
    id: 'Patchy light snow',
    name: 'Легкий снег',
    img: new URL('@/assets/Moon_cloud_fast_wind.svg', import.meta.url).href,
    alt: 'Луна и облако с сильным ветром',
  },
  {
    id: 'Partly cloudy',
    name: 'Переменная облачность',
    img: new URL('@/assets/Moon_cloud_fast_wind.svg', import.meta.url).href,
    alt: 'Луна и облако с переменной облачностью',
  },
  {
    id: 'Light sleet',
    name: 'Легкий дождь с дождем',
    img: new URL('@/assets/Moon_cloud_mid_rain.svg', import.meta.url).href,
    alt: 'Луна и облако со средним дождем',
  },
  {
    id: 'Light rain',
    name: 'Легкий дождь',
    img: new URL('@/assets/Moon_cloud_mid_rain.svg', import.meta.url).href,
    alt: 'Луна и облако со средним дождем',
  },
  {
    id: 'Light snow',
    name: 'Легкий снег',
    img: new URL('@/assets/Moon_cloud_mid_rain.svg', import.meta.url).href,
    alt: 'Луна и облако со средним дождем',
  },
  {
    id: 'Freezing fog',
    name: 'Морозный туман',
    img: new URL('@/assets/Moon_cloud_fast_wind.svg', import.meta.url).href,
    alt: 'Луна и облако с морозным туманом',
  },
  {
    id: 'Clear',
    name: 'Ясно',
    img: new URL('@/assets/Cloud_3_zap.svg', import.meta.url).href,
    alt: 'Иконка ясной погоды',
  },
  {
    id: 'Heavy snow',
    name: 'Сильный снегопад',
    img: new URL('@/assets/Moon_cloud_fast_wind.svg', import.meta.url).href,
    alt: 'Луна и облако с сильным снегопадом',
  },
  {
    id: 'Light freezing rain',
    name: 'Легкий ледяной дождь',
    img: new URL('@/assets/Moon_cloud_mid_rain.svg', import.meta.url).href,
    alt: 'Луна и облако с легким ледяным дождем',
  },
]
