
<template>
  <div class="app" id="app">
    <div class="how-button" v-on:click="show = true">?</div>
    <div class="b-popup" v-if="show">
      <div class="b-popup-content">
        <div class="popup-header">
          <div class="popup-close" v-on:click="show = false">&#10005;</div>
        </div>
        <div class="popup-content">
          <ul>
            <li>Rotate the side, swapping from one corner to another</li>
            <li>Depending on the location of the swap, the adjacent side will return</li>
          </ul>
          <div class="popup-content-image">
            <img :src="image" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import mainCube from "./cubeInit";
import image from "./images/screenshot.png";

export default {
  name: "app",
  data() {
    return {
      image,
      show: false
    };
  },
  methods: {}
};
</script>

<style>
.app {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.how-button {
  position: fixed;
  right: 10px;
  top: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  font-weight: 900;
  font-size: 3rem;
}

.b-popup {
  /* display: none; */
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: fixed;
  top: 0px;
}
.b-popup .b-popup-content {
  margin: 40px auto 0px auto;
  width: 75%;
  padding: 10px;
  background-color: #c5c5c5;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #000;
}

.popup-header {
  display: flex;
  justify-content: flex-end;
}
.popup-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup-close {
  font-weight: 900;
  font-size: 2rem;
}

.popup-content-image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content-image img {
  width: 75%;
}
</style>