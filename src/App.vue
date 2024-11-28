<script setup lang="ts">
import { reactive, computed } from 'vue'

const state = reactive({
  count: 0,
  weather: 'Погода',
  weatherData: [
    {
      city: 'Бенгалуру, Индия',
      status: 'Средний дождь',
      img: './src/assets/Moon_cloud_mid_rain.svg',
      alt: 'Луна и облако со средним дождем',
      currentTemp: 19,
      tempRange: [24, 18],
    },
    {
      city: 'Ченнай, Индия',
      status: 'Сильный ветер',
      img: './src/assets/Moon_cloud_fast_wind.svg',
      alt: 'Луна и облако с сильным ветром',
      currentTemp: 22,
      tempRange: [26, 18],
    },
    {
      city: 'Дели, Индия',
      status: 'Облачно',
      img: './src/assets/Moon_cloud_fast_wind.svg',
      alt: 'Луна и облако с сильным ветром',
      currentTemp: 29,
      tempRange: [32, 27],
    },
    {
      city: 'Мумбаи, Индия',
      status: 'Гроза',
      img: './src/assets/Cloud_3_zap.svg',
      alt: 'Иконка грозы',
      currentTemp: 29,
      tempRange: [16, 23],
    },
  ],
  inputValue: '',
})

const filteredData = computed(() => {
  if (state.inputValue.trim() === '') {
    return state.weatherData
  }
  return state.weatherData.filter((data) =>
    data.city.toLowerCase().includes(state.inputValue.trim().toLowerCase()),
  )
})

const fnPass = () => {
  console.log('Btn clicked')
}
</script>

<template>
  <div class="app">
    <div class="header" data-aos="fade-in">
      <div class="nav-content">
        <div class="nav-weather">
          <button class="nav-left-btn" @click="fnPass">
            <img src="./assets/nav/left.svg" alt="nav left" class="nav-left-img" />
          </button>
          <div class="weather-text">{{ state.weather }}</div>
        </div>
        <button class="nav-right-btn" @click="fnPass">
          <img src="./assets/nav/right.svg" alt="nav right" class="nav-right-img" />
        </button>
      </div>
      <div class="input-text">
        <input
          type="text"
          placeholder="Поиск нужного города или аэропорта"
          class="search-input"
          v-model="state.inputValue"
        />
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="search-icon"
        >
          <path
            d="M6.3833 12.8767C7.76953 12.8767 9.04785 12.4285 10.0938 11.6814L14.0283 15.616C14.2109 15.7986 14.4517 15.8899 14.709 15.8899C15.2485 15.8899 15.6304 15.4749 15.6304 14.9436C15.6304 14.6946 15.5474 14.4539 15.3647 14.2795L11.4551 10.3616C12.2769 9.28247 12.7666 7.94604 12.7666 6.49341C12.7666 2.98218 9.89453 0.110107 6.3833 0.110107C2.88037 0.110107 0 2.97388 0 6.49341C0 10.0046 2.87207 12.8767 6.3833 12.8767ZM6.3833 11.4988C3.64404 11.4988 1.37793 9.23267 1.37793 6.49341C1.37793 3.75415 3.64404 1.48804 6.3833 1.48804C9.12256 1.48804 11.3887 3.75415 11.3887 6.49341C11.3887 9.23267 9.12256 11.4988 6.3833 11.4988Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>

    <ol class="app-content">
      <li
        class="content"
        v-for="(item, idx) in filteredData"
        :key="idx"
        data-aos="fade-in"
        data-aos-offset="-1500"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <span class="content-temperature">{{ item.currentTemp }}°</span>
        <img :src="item.img" :alt="item.alt" class="content-cloud" />
        <span class="content-city">
          <span class="content-high-low">
            H:{{ item.tempRange[0] }}° L:{{ item.tempRange[1] }}° </span
          ><br />
          <span class="content-city-name">{{ item.city }}</span>
        </span>
        <span class="content-condition">
          <span class="empty-bg"> </span><br />
          <span class="content-condition">{{ item.status }}</span>
        </span>
      </li>
    </ol>

    <div
      class="not-found"
      v-if="filteredData.length === 0"
      data-aos="fade-in"
      data-aos-offset="-1500"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <div class="not-found-text">Город не найден</div>
      <button class="not-found-btn" @click="state.inputValue = ''">Сбросить</button>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'SF Pro Display';
  src: url('./fonts/SF-Pro-Display-Regular.woff2') format('woff2');
}

.app {
  max-width: 390px;
  min-height: 101vh;
  background: linear-gradient(169.61deg, #2e3358 2.83%, #1c1b33 94.85%);
  margin: 0 auto;
  z-index: -1;
}

.nav-content {
  display: grid;
  padding-bottom: 8px;
  grid-template-columns: 50% 50%;
  justify-items: space-around;
  align-items: center;
  padding-top: 58px;
  min-height: 52px;
}

.nav-weather {
  display: flex;
  align-items: center;
}

.nav-left-btn {
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 5px;
  margin-left: 16px;
  width: 18px;
  height: 24px;
}

.weather-text {
  font-size: 1.56rem;
  font-weight: 400;
}

.nav-right-btn {
  justify-self: right;
  margin-right: 16px;
  width: 33px;
  height: 34px;
  background: none;
  border: none;
  cursor: pointer;
}

.input-text {
  display: grid;
  align-items: center;
  position: relative;
  padding-left: 16px;
  padding-right: 16px;
}

.search-input {
  border: none;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.25);
  max-width: 358px;
  max-height: 36px;
  outline: none;
  padding: 7px 8px 7px 30px;
  color: #fff;
}

.search-input::placeholder {
  font-size: 1rem;
  font-weight: 400;
}

.app-content {
  position: relative;
  margin: 25px;
}

.content-cloud {
  max-width: 160px;
  max-height: 160px;
}

.content {
  position: relative;
  display: grid;
  grid-template-columns: 50% auto;
  grid-template-rows: 100px auto;
  justify-items: center;
  align-items: center;
  max-width: 340px;
  min-height: 215px;
  background: url(./assets/bg_temperature.svg) no-repeat;
  background-clip: padding-box;
  background-size: contain;
  background-position: center;
  margin-top: 30px;
  z-index: 3;
}

.content::before {
  position: absolute;
  content: '';
  max-width: 390px;
  max-height: 300px;
  width: 110%;
  height: 110%;
  border-radius: 60%;
  background: conic-gradient(
      from 180deg at 50% 50%,
      #612fab -90.71deg,
      rgba(97, 47, 171, 0) 50.02deg,
      #612fab 129.55deg,
      rgba(97, 47, 171, 0) 226.06deg,
      #612fab 269.29deg,
      rgba(97, 47, 171, 0) 410.02deg
    )
    no-repeat;
  opacity: 0.6;
  filter: blur(30px);
  z-index: -1;
  pointer-events: none;
}

.content-temperature {
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
  padding-left: 20px;
  font-size: 4rem;
  font-weight: 400;
  margin-top: 30%;
}

.content-city {
  grid-column: 1;
  grid-row: 2;
  justify-self: start;
  padding-left: 20px;
}

.content-condition,
.content-city {
  font-size: 1rem;
  font-weight: 400;
}

.content-high-low {
  font-size: 1rem;
  font-weight: 400;
  color: rgba(235, 235, 245, 0.6);
}

.search-icon {
  position: absolute;
  width: 16px;
  height: 16px;
  padding: 10px 0;
  pointer-events: none;
  left: 24px;
  box-sizing: content-box;
  opacity: 0.6;
  transition: opacity 0.15s ease-in-out;
}

.search-input:focus ~ .search-icon {
  opacity: 0.4;
}

.not-found {
  display: flex;
  margin: 16px 48px;
  gap: 10px;
}

.not-found-btn {
  flex: 1;
  border: none;
  border-radius: 10px;
  margin: 5px 0;
  color: #1c1b33;
}

.not-found-btn:hover {
  transition: opacity 0.5s ease-in-out;
  opacity: 0.8;
}

.not-found-text {
  font-size: 1.56rem;
  font-weight: 400;
}
</style>
