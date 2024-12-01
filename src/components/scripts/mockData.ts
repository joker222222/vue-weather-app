import { reactive } from 'vue'

export const locations = reactive([
  {
    cityId: 'Бенгалуру, Индия',
    statusId: 0,
    temperature: {
      currentTemp: 19,
      maxTemp: 24,
      minTemp: 18,
    },
  },
  {
    cityId: 'Ченнай, Индия',
    statusId: 1,
    temperature: {
      currentTemp: 22,
      maxTemp: 26,
      minTemp: 18,
    },
  },
  {
    cityId: 'Дели, Индия',
    statusId: 2,
    temperature: {
      currentTemp: 29,
      maxTemp: 32,
      minTemp: 27,
    },
  },
  {
    cityId: 'Мумбаи, Индия',
    statusId: 3,
    temperature: {
      currentTemp: 29,
      maxTemp: 16,
      minTemp: 23,
    },
  },
])

export const locationStatusId = [
  {
    id: 0,
    name: 'Средний дождь',
    img: new URL('@/assets/Moon_cloud_mid_rain.svg', import.meta.url).href,
    alt: 'Луна и облако со средним дождем',
  },
  {
    id: 1,
    name: 'Сильный ветер',
    img: new URL('@/assets/Moon_cloud_fast_wind.svg', import.meta.url).href,
    alt: 'Луна и облако с сильным ветром',
  },
  {
    id: 2,
    name: 'Облачно',
    img: new URL('@/assets/Moon_cloud_fast_wind.svg', import.meta.url).href,
    alt: 'Луна и облако с сильным ветром',
  },
  {
    id: 3,
    name: 'Гроза',
    img: new URL('@/assets/Cloud_3_zap.svg', import.meta.url).href,
    alt: 'Иконка грозы',
  },
]
