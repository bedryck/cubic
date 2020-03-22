
<template>
  <div class="app" id="app">
    <!-- <button v-if="!isPending && isResolved" v-on:click="disaster">Розібрати</button>
    <button v-if="!isPending && !isResolved" v-on:click="unDisaster">Зібрати</button>
    <span v-if="isResolved" style="color: white;">Тип розбирання:</span>
    <select v-if="isResolved" name="Узор" v-model="disasterType">
      <option value="1">Рандомно</option>
      <option value="2">Вишиванка</option>
      <option value="3">Точечка</option>
    </select>-->
    <div class="button-wrapper">
      <div class="gtx">
        <div class="gtx-2">
          <button v-if="!isPending " v-on:click="frontRotateX()">frontRotateX</button>
          <button v-if="!isPending " v-on:click="frontRotateX(-1)">frontRotateX-</button>
        </div>

        <div class="gtx-2">
          <button v-if="!isPending " v-on:click="middleRotateX()">middleRotateX</button>
          <button v-if="!isPending " v-on:click="middleRotateX(-1)">middleRotateX-</button>
        </div>

        <div class="gtx-2">
          <button v-if="!isPending " v-on:click="backRotateX()">backRotateX</button>
          <button v-if="!isPending " v-on:click="backRotateX(-1)">backRotateX-</button>
        </div>
      </div>

      <div class="gtx">
        <div class="gtx-2">
          <button v-if="!isPending " v-on:click="frontRotateY()">frontRotateY</button>
          <button v-if="!isPending " v-on:click="frontRotateY(-1)">frontRotateY-</button>
        </div>

        <div class="gtx-2">
          <button v-if="!isPending " v-on:click="middleRotateY()">middleRotateY</button>
          <button v-if="!isPending " v-on:click="middleRotateY(-1)">middleRotateY-</button>
        </div>

        <div class="gtx-2">
          <button v-if="!isPending " v-on:click="backRotateY()">backRotateY</button>
          <button v-if="!isPending " v-on:click="backRotateY(-1)">backRotateY-</button>
        </div>
      </div>

      <div class="gtx">
        <div class="gtx-2">
          <button v-if="!isPending " v-on:click="frontRotateZ()">frontRotateZ</button>
          <button v-if="!isPending " v-on:click="frontRotateZ(-1)">frontRotateZ-</button>
        </div>

        <div class="gtx-2">
          <button v-if="!isPending " v-on:click="middleRotateZ()">middleRotateZ</button>
          <button v-if="!isPending " v-on:click="middleRotateZ(-1)">middleRotateZ-</button>
        </div>

        <div class="gtx-2">
          <button v-if="!isPending " v-on:click="backRotateZ()">backRotateZ</button>
          <button v-if="!isPending " v-on:click="backRotateZ(-1)">backRotateZ-</button>
        </div>
      </div>
    </div>
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
    frontRotateX: function(direction = 1) {
      this.isPending = true;
      mainCube.frontRotateX(direction).then(() => {
        this.isPending = false;
      });
    },
    frontRotateY: function(direction = 1) {
      this.isPending = true;
      mainCube.frontRotateY(direction).then(() => {
        this.isPending = false;
      });
    },
    frontRotateZ: function(direction = 1) {
      this.isPending = true;
      mainCube.frontRotateZ(direction).then(() => {
        this.isPending = false;
      });
    },
    middleRotateX: function(direction = 1) {
      this.isPending = true;
      mainCube.middleRotateX(direction).then(() => {
        this.isPending = false;
      });
    },
    middleRotateY: function(direction = 1) {
      this.isPending = true;
      mainCube.middleRotateY(direction).then(() => {
        this.isPending = false;
      });
    },
    middleRotateZ: function(direction = 1) {
      this.isPending = true;
      mainCube.middleRotateZ(direction).then(() => {
        this.isPending = false;
      });
    },
    backRotateX: function(direction = 1) {
      this.isPending = true;
      mainCube.backRotateX(direction).then(() => {
        this.isPending = false;
      });
    },
    backRotateY: function(direction = 1) {
      this.isPending = true;
      mainCube.backRotateY(direction).then(() => {
        this.isPending = false;
      });
    },
    backRotateZ: function(direction = 1) {
      this.isPending = true;
      mainCube.backRotateZ(direction).then(() => {
        this.isPending = false;
      });
    },
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
  width: 100%;
}
.button-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.gtx {
  display: flex;
}
.gtx-2 {
  display: flex;
  padding: 0 10px;
  flex-direction: column;
}
.gtx-2 button {
  margin: 10px 0;
}
</style>