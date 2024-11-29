<script lang="ts" setup>
import { computed } from 'vue'
import { useCityStore } from '@/stores/city'
import { locations } from './scripts/data'

const cityStore = useCityStore()

const filteredLocation = computed(() => {
  if (cityStore.cityName.trim() === '') {
    return locations
  }
  return locations.filter((data) =>
    data.city.toLowerCase().includes(cityStore.cityName.trim().toLowerCase()),
  )
})

const changeCityStore = (e: Event) => {
  cityStore.change((e.target as HTMLInputElement).value)
}
</script>

<template>
  <ol class="app-content">
    <li
      class="content"
      v-for="(item, idx) in filteredLocation"
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
      <span class="content-temperature">{{ item.temperature.currentTemp }}°</span>
      <img :src="item.img" :alt="item.alt" class="content-cloud" />
      <span class="content-city">
        <span class="content-high-low">
          H:{{ item.temperature.maxTemp }}° L:{{ item.temperature.minTemp }}° </span
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
    v-if="filteredLocation.length === 0"
    data-aos="fade-in"
    data-aos-offset="-1500"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <div class="not-found-text">Город не найден</div>
    <button class="not-found-btn" @click="changeCityStore($event)">Сбросить</button>
  </div>
</template>

<style scoped>
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
  background: url(@/assets/bg_temperature.svg) no-repeat;
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
