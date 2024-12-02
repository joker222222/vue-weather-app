<script lang="ts" setup>
import { useCityStore } from '@/stores/city'

const pageTitle = 'Погода'
const pageInputPlaceholder = 'Поиск нужного города или аэропорта'
const cityStore = useCityStore()

const changeCityStore = (e: Event) => {
  cityStore.change((e.target as HTMLInputElement).value)
}

const navLeftStringPath = new URL('../assets/navCardHeader/left.svg', import.meta.url).href
const navRightStringPath = new URL('../assets/navCardHeader/right.svg', import.meta.url).href
</script>

<template>
  <div class="header" data-aos="fade-in">
    <div class="nav-content">
      <div class="nav-weather">
        <button class="nav-left-btn">
          <img :src="navLeftStringPath" alt="nav left" class="nav-left-img" />
        </button>
        <div class="weather-text">{{ pageTitle }}</div>
      </div>
      <button class="nav-right-btn">
        <img :src="navRightStringPath" alt="nav right" class="nav-right-img" />
      </button>
    </div>
    <div class="input-text">
      <input
        type="text"
        :placeholder="pageInputPlaceholder"
        class="search-input"
        @input="changeCityStore($event)"
        :value="cityStore.cityName"
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
</template>

<style scoped>
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

.nav-left-img {
  display: block;
  margin: 0 auto;
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

.search-input:focus ~ .search-icon {
  opacity: 0.4;
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
</style>
