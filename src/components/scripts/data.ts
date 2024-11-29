import { reactive } from 'vue'

export const locations = reactive([
  {
    city: 'Бенгалуру, Индия',
    status: 'Средний дождь',
    img: new URL('@/assets/Moon_cloud_mid_rain.svg', import.meta.url).href,
    alt: 'Луна и облако со средним дождем',
    temperature: {
      currentTemp: 19,
      maxTemp: 24,
      minTemp: 18,
    },
  },
  {
    city: 'Ченнай, Индия',
    status: 'Сильный ветер',
    img: new URL('@/assets/Moon_cloud_fast_wind.svg', import.meta.url).href,
    alt: 'Луна и облако с сильным ветром',
    temperature: {
      currentTemp: 22,
      maxTemp: 26,
      minTemp: 18,
    },
  },
  {
    city: 'Дели, Индия',
    status: 'Облачно',
    img: new URL('@/assets/Moon_cloud_fast_wind.svg', import.meta.url).href,
    alt: 'Луна и облако с сильным ветром',
    temperature: {
      currentTemp: 29,
      maxTemp: 32,
      minTemp: 27,
    },
  },
  {
    city: 'Мумбаи, Индия',
    status: 'Гроза',
    img: new URL('@/assets/Cloud_3_zap.svg', import.meta.url).href,
    alt: 'Иконка грозы',
    temperature: {
      currentTemp: 29,
      maxTemp: 16,
      minTemp: 23,
    },
  },
])
