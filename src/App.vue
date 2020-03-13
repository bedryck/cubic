
<template>
  <div class="app" id="app">
    <button v-if="!isPending && isResolved" v-on:click="disaster">Розібрати</button>
    <button v-if="!isPending && !isResolved" v-on:click="unDisaster">Зібрати</button>
    <span v-if="isResolved" style="color: white;">Тип розбирання:</span>
    <select v-if="isResolved" name="Узор" v-model="disasterType">
      <option value="1">Рандомно</option>
      <option value="2">Вишиванка</option>
      <option value="3">Точечка</option>
    </select>
  </div>
</template>


<script>
import mainCube from "./cubeInit";

export default {
  name: "app",
  data() {
    return {
      isPending: false,
      isResolved: true,
      disasterType: "1"
    };
  },
  methods: {
    disaster: function() {
      this.isPending = true;
      this.isResolved = false;

      switch (this.disasterType) {
        case "1":
          mainCube
            .frontRotateZ(1)
            .then(() => mainCube.frontRotateY(1))
            .then(() => mainCube.frontRotateX(-1))
            .then(() => mainCube.middleRotateZ(1))
            .then(() => mainCube.middleRotateY(-1))
            .then(() => mainCube.middleRotateX(1))
            .then(() => mainCube.backRotateZ(-1))
            .then(() => mainCube.backRotateY(1))
            .then(() => mainCube.backRotateX(-1))
            .then(() => {
              this.isPending = false;
            });
          break;

        case "2":
          mainCube
            .frontRotateZ(1)
            .then(() => mainCube.frontRotateZ(1))
            .then(() => mainCube.backRotateZ(1))
            .then(() => mainCube.backRotateZ(1))
            .then(() => mainCube.frontRotateX(1))
            .then(() => mainCube.frontRotateX(1))
            .then(() => mainCube.backRotateX(1))
            .then(() => mainCube.backRotateX(1))
            .then(() => mainCube.frontRotateY(1))
            .then(() => mainCube.frontRotateY(1))
            .then(() => mainCube.backRotateY(1))
            .then(() => mainCube.backRotateY(1))

            .then(() => {
              this.isPending = false;
            });
          break;

        case "3":
          mainCube
            .frontRotateZ(1)
            .then(() => mainCube.backRotateZ(1))
            .then(() => mainCube.frontRotateY(1))
            .then(() => mainCube.backRotateY(1))
            .then(() => mainCube.frontRotateX(1))
            .then(() => mainCube.backRotateX(1))
            .then(() => mainCube.frontRotateZ(1))
            .then(() => mainCube.backRotateZ(1))

            .then(() => {
              this.isPending = false;
            });
          break;

        default:
          break;
      }
    },
    unDisaster: function() {
      this.isPending = true;

      switch (this.disasterType) {
        case "1":
          mainCube
            .backRotateX(1)
            .then(() => mainCube.backRotateY(-1))
            .then(() => mainCube.backRotateZ(1))
            .then(() => mainCube.middleRotateX(-1))
            .then(() => mainCube.middleRotateY(1))
            .then(() => mainCube.middleRotateZ(-1))
            .then(() => mainCube.frontRotateX(1))
            .then(() => mainCube.frontRotateY(-1))
            .then(() => mainCube.frontRotateZ(-1))
            .then(() => {
              this.isPending = false;
              this.isResolved = true;
            });
          break;
        case "2":
          mainCube
            .frontRotateZ(-1)
            .then(() => mainCube.frontRotateZ(-1))
            .then(() => mainCube.backRotateZ(-1))
            .then(() => mainCube.backRotateZ(-1))
            .then(() => mainCube.frontRotateX(-1))
            .then(() => mainCube.frontRotateX(-1))
            .then(() => mainCube.backRotateX(-1))
            .then(() => mainCube.backRotateX(-1))
            .then(() => mainCube.frontRotateY(-1))
            .then(() => mainCube.frontRotateY(-1))
            .then(() => mainCube.backRotateY(-1))
            .then(() => mainCube.backRotateY(-1))

            .then(() => {
              this.isPending = false;
              this.isResolved = true;
            });
          break;

        case "3":
          mainCube
            .backRotateZ(-1)
            .then(() => mainCube.frontRotateZ(-1))
            .then(() => mainCube.backRotateX(-1))
            .then(() => mainCube.frontRotateX(-1))
            .then(() => mainCube.backRotateY(-1))
            .then(() => mainCube.frontRotateY(-1))
            .then(() => mainCube.backRotateZ(-1))
            .then(() => mainCube.frontRotateZ(-1))

            .then(() => {
              this.isPending = false;
              this.isResolved = true;
            });
          break;
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style>
.app {
  position: fixed;
  bottom: 0;
}
</style>