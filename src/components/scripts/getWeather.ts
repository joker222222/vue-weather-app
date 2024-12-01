import { locations } from './mockData'

const API_KEY = '74cb8d52cbd44813833222527240112'
const CITY = [
  'Москва',
  'Санкт-Петербург',
  'Новосибирск',
  'Екатеринбург',
  'Казань',
  'Нижний Новгород',
  'Челябинск',
  'Самара',
  'Омск',
  'Ростов-на-Дону',
  'Уфа',
  'Красноярск',
  'Пермь',
  'Воронеж',
  'Волгоград',
]

export const getWeatherCity = async () => {
  for (const el of CITY) {
    const urlForecast = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${el}&days=1`
    const urlCurrent = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${el}`

    try {
      const responseForecast = await fetch(urlForecast)
      const responseCurrent = await fetch(urlCurrent)
      const dataForecast = await responseForecast.json()
      const dataCurrent = await responseCurrent.json()
      const forecast = dataForecast.forecast.forecastday[0].day
      console.log(dataCurrent.current.condition.text)
      locations.push({
        city: el,
        statusId: dataCurrent.current.condition.text,
        temperature: {
          currentTemp: dataCurrent.current.temp_c,
          maxTemp: forecast.maxtemp_c,
          minTemp: forecast.mintemp_c,
        },
      })
    } catch (error) {
      console.error('Ошибка при получении данных:', error)
    }
  }
}
