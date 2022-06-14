<template>
  <!-- <LoadingView></LoadingView> -->
  <main class="body-wrapper breed-view">
    <!-- section-one -->
    <div class="section-one">
      <h1 class="title">
        <span>B</span>
        <span>R</span>
        <span>E</span>
        <span>E</span>
        <span>D</span>
      </h1>
    </div>
    <!-- section-two -->
    <div class="section-six">
      <h1>Breed?</h1>
      <div class="center-icon">
        <img
          src="../assets/img/center-icon/small_dood_kv_lineup_left.png"
          alt=""
        />
        <img
          src="../assets/img/center-icon/treasure.png"
          alt=""
          style="width: 30px !important"
        />
        <img
          src="../assets/img/center-icon/small_dood_kv_lineup_right.png"
          alt=""
        />
      </div>
      <div class="infomation">
        <div>
          Giống như hầu hết các game có thể đẻ khác. Apeiron cũng có cơ chế nhân
          giống các hành tinh để mở rộng vũ trụ. Để có thể nhân giống bạn cần ít
          nhất hai hành tinh. Nguyên tố của hành tinh con sẽ phụ thuộc vào
          nguyên tố của cả hai hành tinh bố và mẹ.
        </div>
        <br />
        <div>
          Mỗi hành tinh chỉ nhân giống tối đa được ba lần. Sau khi nhân giống
          thì hành tinh con sẽ nở sau một tuần. Khoảng thời gian chờ sau khi
          nhân giống là hai tuần. Để nhân giống bạn sẽ phải tốn 250 APRS và 1
          Mini Black Hole NFT. Tuy nhiên vào event nhân giống lần tới có tên
          Celestial Conjunction bạn sẽ không cần đến tới APRS mà chỉ cần Mini
          Black Hole NFT để có thể nhân giống.
        </div>
        <br />
        <div>
          <table class="blackHoleNeedTable">
            <tr>
              <th v-for="headerItem in tableDataHeader" :key="headerItem">
                {{ headerItem }}
              </th>
            </tr>
            <tr v-for="tableItem in tableData" :key="tableItem">
              <td v-for="item in tableItem" :key="item">
                {{ item }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <!-- section-three -->
    <div class="section-three">
      <div class="notice">tanbod dadi contributed</div>
      <video
        id="home-video"
        autoplay
        src="../assets/video/breedingGuide.mp4"
        loop
        type="video/mp4"
        muted="muted"
        controls
        playsinline
      ></video>
    </div>
    <div class="section-six">
      <h1>Breed Simulation</h1>
      <div class="infomation" style="text-align: center">
        Đây chỉ là bản thử nghiệm nên mọi thông tin có thể sai lệch
      </div>
      <div class="half-body">
        <div class="left-side">
          <img id="planetOne" :src="planetOneLink" />
        </div>
        <div class="right-side">
          <img id="planetTwo" :src="planetTwoLink" />
        </div>
        <div class="center-side">
          <img id="planetCenter" src="../assets/img/planet/Oasis.png" />
        </div>
      </div>
      <div class="half-body">
        <div class="left-side">
          <select
            @change="valueChange($event, 'one')"
            class="select-btn"
            style="width: auto"
          >
            <option disabled value="">Chọn Planet</option>
            <option
              v-for="planet in planets"
              :key="planet.id"
              :value="planet.id"
            >
              {{ planet.title }}
            </option>
          </select>
        </div>
        <div class="right-side">
          <select
            @change="valueChange($event, 'two')"
            class="select-btn"
            style="width: auto"
          >
            <option disabled value="">Chọn Planet</option>
            <option
              v-for="planet in planets"
              :key="planet.id"
              :value="planet.id"
            >
              {{ planet.title }}
            </option>
          </select>
        </div>
      </div>
      <div class="half-body">
        <div class="left-side">
          <button
            type="button"
            class="breed-btn btn btn-success"
            @click="breed"
            :disabled="!disableBtn"
          >
            Breed
          </button>
        </div>
        <div class="right-side">
          <button
            type="button"
            class="reset-btn btn btn-secondary"
            @click="reset"
            :disabled="disableBtn"
          >
            Reset
          </button>
        </div>
      </div>
      <div class="half-body" style="margin-top: 50px">
        <div class="left-side" style="display: flex">
          <div class="left-side-child-left"></div>
          <div class="left-side-child-right">
            <div class="container">
              <div class="row pt-3">
                <div class="col-9">Primeval Legacy:</div>
                <div class="col-3">
                  <input type="checkbox" v-model="legacyShowOne" />
                </div>
              </div>
              <div class="row pt-3" style="height: 50px">
                <div class="col-6"></div>
                <div
                  class="col-6"
                  style="text-align: left"
                  v-if="legacyShowOne"
                >
                  <select
                    @change="valueChange($event, 'two')"
                    class="select-btn"
                  >
                    <option disabled value="">Chọn Legacy</option>
                    <option
                      v-for="option in legacyDatasOne"
                      :key="option.id"
                      :value="option.id"
                    >
                      {{ option.title }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="row pt-3">
                <div class="col-3">F</div>
                <div class="col-3">W</div>
                <div class="col-3">A</div>
                <div class="col-3">E</div>
              </div>
              <div class="row pt-3 pb-3">
                <div class="col-3">
                  <input
                    v-model="planetOne.fire"
                    class="text-center"
                    type="text"
                    maxlength="2"
                  />
                </div>
                <div class="col-3">
                  <input
                    v-model="planetOne.water"
                    class="text-center"
                    type="text"
                    maxlength="2"
                  />
                </div>
                <div class="col-3">
                  <input
                    v-model="planetOne.air"
                    class="text-center"
                    type="text"
                    maxlength="2"
                  />
                </div>
                <div class="col-3">
                  <input
                    v-model="planetOne.earth"
                    class="text-center"
                    type="text"
                    maxlength="2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-side" style="display: flex">
          <div class="left-side-child-left">
            <div class="container">
              <div class="row pt-3">
                <div class="col-9">Primeval Legacy:</div>
                <div class="col-3">
                  <input type="checkbox" v-model="legacyShowTwo" />
                </div>
              </div>
              <div class="row pt-3" style="height: 50px">
                <div class="col-6"></div>
                <div class="col-6" v-if="legacyShowTwo">
                  <select
                    @change="valueChange($event, 'two')"
                    class="select-btn"
                  >
                    <option disabled value="">Chọn Legacy</option>
                    <option
                      v-for="option in legacyDatasTwo"
                      :key="option.id"
                      :value="option.id"
                    >
                      {{ option.title }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="row pt-3">
                <div class="col-3">F</div>
                <div class="col-3">W</div>
                <div class="col-3">A</div>
                <div class="col-3">E</div>
              </div>
              <div class="row pt-3 pb-3">
                <div class="col-3">
                  <input
                    v-model="planetTwo.fire"
                    class="text-center"
                    type="text"
                    maxlength="2"
                  />
                </div>
                <div class="col-3">
                  <input
                    v-model="planetTwo.water"
                    class="text-center"
                    type="text"
                    maxlength="2"
                  />
                </div>
                <div class="col-3">
                  <input
                    v-model="planetTwo.air"
                    class="text-center"
                    type="text"
                    maxlength="2"
                  />
                </div>
                <div class="col-3">
                  <input
                    v-model="planetTwo.earth"
                    class="text-center"
                    type="text"
                    maxlength="2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="left-side-child-right"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import index from "../core/index.js";
// import LoadingView from "../components/LoadingView.vue";

export default {
  // mixins: [index.mixins],
  components: {
    // LoadingView,
  },
  data() {
    return {
      tableDataHeader: [
        "# Số lần nhân giống của một planet",
        "# Số Mini-Black Holes cần (mỗi planet)",
      ],
      tableData: [
        ["0", "1"],
        ["1", "3"],
        ["2+", "6"],
      ],
      planets: [
        {
          title: "Gigas",
          value: 1,
          link: "./src/assets/img/planet/Gigas.png",
          legacy: [],
          haveFire: false,
          haveWater: false,
          haveAir: false,
          haveEarth: true,
        },
        {
          title: "Leviathan",
          value: 2,
          link: "./src/assets/img/planet/Leviathan.png",
          legacy: [],
          haveFire: false,
          haveWater: true,
          haveAir: false,
          haveEarth: false,
        },
        {
          title: "Inferno",
          value: 3,
          link: "./src/assets/img/planet/Inferno.png",
          legacy: [],
          haveFire: true,
          haveWater: false,
          haveAir: false,
          haveEarth: false,
        },
        {
          title: "Tempest",
          value: 4,
          link: "./src/assets/img/planet/Tempest.png",
          legacy: [],
          haveFire: false,
          haveWater: false,
          haveAir: true,
          haveEarth: false,
        },
        {
          title: "Archipelago",
          value: 5,
          link: "./src/assets/img/planet/Archipelago.png",
          legacy: index.legacyList.Archipelago,
          haveFire: false,
          haveWater: true,
          haveAir: false,
          haveEarth: true,
        },
        {
          title: "Volcanic",
          value: 6,
          link: "./src/assets/img/planet/Volcanic.png",
          legacy: index.legacyList.Volcanic,
          haveFire: true,
          haveWater: false,
          haveAir: false,
          haveEarth: true,
        },
        {
          title: "Karsts",
          value: 7,
          link: "./src/assets/img/planet/Karst.png",
          legacy: index.legacyList.Karsts,
          haveFire: false,
          haveWater: false,
          haveAir: true,
          haveEarth: true,
        },
        {
          title: "Tundra",
          value: 8,
          link: "./src/assets/img/planet/Tundra.png",
          legacy: index.legacyList.Tundra,
          haveFire: true,
          haveWater: true,
          haveAir: false,
          haveEarth: false,
        },
        {
          title: "Delta",
          value: 9,
          link: "./src/assets/img/planet/Delta.png",
          legacy: index.legacyList.Delta,
          haveFire: false,
          haveWater: true,
          haveAir: true,
          haveEarth: false,
        },
        {
          title: "Dunes",
          value: 10,
          link: "./src/assets/img/planet/Dunes.png",
          legacy: index.legacyList.Dunes,
          haveFire: true,
          haveWater: false,
          haveAir: true,
          haveEarth: false,
        },
        {
          title: "Mountainous",
          value: 11,
          link: "./src/assets/img/planet/Mountainous.png",
          legacy: index.legacyList.Mountainous,
          haveFire: true,
          haveWater: true,
          haveAir: false,
          haveEarth: true,
        },
        {
          title: "Foresty",
          value: 12,
          link: "./src/assets/img/planet/Foresty.png",
          legacy: index.legacyList.Foresty,
          haveFire: false,
          haveWater: true,
          haveAir: false,
          haveEarth: true,
        },
        {
          title: "Wasteland",
          value: 13,
          link: "./src/assets/img/planet/Wasterland.png",
          legacy: index.legacyList.Wasterland,
          haveFire: true,
          haveWater: false,
          haveAir: true,
          haveEarth: true,
        },
        {
          title: "Oasis",
          value: 14,
          link: "./src/assets/img/planet/Oasis.png",
          legacy: index.legacyList.Oasis,
          haveFire: true,
          haveWater: true,
          haveAir: true,
          haveEarth: false,
        },
        {
          title: "Normal",
          value: 15,
          link: "./src/assets/img/planet/Normal.png",
          legacy: index.legacyList.Normal,
          haveFire: true,
          haveWater: true,
          haveAir: true,
          haveEarth: true,
        },
      ],
      planetOne: {
        fire: "",
        water: "",
        air: "",
        earth: "",
        haveFire: false,
        haveWater: false,
        haveAir: false,
        haveEarth: false,
      },
      planetTwo: {
        fire: "",
        water: "",
        air: "",
        earth: "",
        haveFire: false,
        haveWater: false,
        haveAir: false,
        haveEarth: false,
      },
      legacyDatasOne: [],
      legacyDatasTwo: [],
      planetOneLink: "./src/assets/img/planet/Gigas.png",
      planetTwoLink: "./src/assets/img/planet/Gigas.png",
      legacyShowOne: false,
      legacyShowTwo: false,
      disableBtn: true,
    };
  },
  created() {
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {},
    valueChange(e, selectOne) {
      let datas = this.options;
      datas.forEach((planetListItem) => {
        if (e.target.value == planetListItem.title) {
          if (selectOne == "one") {
            this.planetOneLink = planetListItem.link;
            this.legacyDatasOne = planetListItem.legacy;
          } else {
            this.planetTwoLink = planetListItem.link;
            this.legacyDatasTwo = planetListItem.legacy;
          }
        }
      });
    },
    breed() {
      this.breedSimulate();
      this.animationOfPlanet();
    },
    reset() {
      this.disableBtn = true;
      document.getElementById("planetOne").classList.remove("left-active");
      document.getElementById("planetTwo").classList.remove("right-active");
      document.getElementById("planetCenter").classList.remove("center-active");
    },
    animationOfPlanet() {
      document.getElementById("planetOne").classList.add("left-active");
      document.getElementById("planetTwo").classList.add("right-active");
      setTimeout(() => {
        this.disableBtn = false;
        document.getElementById("planetCenter").classList.add("center-active");
      }, "5000");
    },
    breedSimulate() {
      console.log(this.checkAndGetPlanetLink("55", "0", "45", "0"));
    },
    checkAndGetPlanetLink(fire, water, air, earth) {
      let planetLink = "";
      let haveFire = false;
      let haveWater = false;
      let haveAir = false;
      let haveEarth = false;
      if (fire != "" && fire != "0") haveFire = true;
      if (water != "" && water != "0") haveWater = true;
      if (air != "" && air != "0") haveAir = true;
      if (earth != "" && earth != "0") haveEarth = true;

      console.log("haveFire", haveFire);
      console.log("haveWater", haveWater);
      console.log("haveAir", haveAir);
      console.log("haveEarth", haveEarth);

      this.planets.forEach((planetItem) => {
        if (
          haveFire == planetItem.haveFire &&
          haveWater == planetItem.haveWater &&
          haveAir == planetItem.haveAir &&
          haveEarth == planetItem.haveEarth
        ) {
          planetLink = planetItem.link;
        }
      });

      return planetLink;
    },
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 200px) {
  .section-six {
    .half-body {
      .left-side,
      .right-side {
        width: 100%;
      }

      .center-side {
        width: 100%;
      }
    }
  }
}
@media (min-width: 400px) {
}
@media (min-width: 768px) {
  .section-six {
    .half-body {
      .left-side,
      .right-side {
        width: 50%;
        img {
          object-fit: unset;
          width: 300px;
          height: unset;
        }
      }

      .center-side {
        width: 300px;
      }
    }
  }
}
@media (min-width: 900px) {
}
@media (min-width: 1200px) {
}
@media (min-width: 1400px) {
}

.breed-view {
  .select-btn {
    border-radius: 5px;
    padding: 10px;
  }

  .section-one {
    background-image: url(../assets/img/planet.jpg) !important;
  }

  .section-six {
    background-image: url(../assets/img/background/landing-background.jpg) !important;
    .blackHoleNeedTable {
      tr {
        th,
        td {
          border: 1px solid #fff;
          padding: 0 5px;
          text-align: center;
        }
      }
    }

    .half-body {
      height: fit-content;
      align-items: center;

      .center-side {
        position: absolute;
        text-align: center;
        width: 100%;

        img {
          display: unset;
          position: relative;
          width: 0;
        }

        .center-active {
          animation: spin 1s ease-in-out alternate forwards;
        }
      }

      .left-side,
      .right-side {
        width: 100%;
        height: fit-content;
        position: relative;
        text-align: center;

        .breed-btn,
        .reset-btn {
          width: auto;
          padding: 10px 20px;
          border-radius: 5px;
          box-shadow: 0 0 30px black;
          float: left;
        }

        .breed-btn {
          float: right;
          margin-right: 10px;
        }

        .reset-btn {
          float: left;
          margin-left: 10px;
        }

        .left-side-child-left,
        .left-side-child-right {
          width: 50%;
          input {
            width: -webkit-fill-available;
          }
        }
      }

      .left-side {
        img {
          position: relative;
        }

        .left-active {
          animation: glide-left 5s ease-in-out alternate forwards;
        }

        .left-side-child-right {
          border: 1px solid black;
          background: #fff;
        }
      }

      .right-side {
        img {
          position: relative;
        }

        .right-active {
          animation: glide-right 5s ease-in-out alternate forwards;
        }

        .left-side-child-left {
          border: 1px solid black;
          background: #fff;
        }
      }
    }
    @keyframes glide-left {
      0% {
        left: 0;
        opacity: 1;
      }
      100% {
        left: 50%;
        opacity: 0;
      }
    }

    @keyframes glide-right {
      0% {
        left: 0%;
        opacity: 1;
      }
      100% {
        left: -50%;
        opacity: 0;
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(-1440deg);
        width: 0;
      }
      100% {
        width: 300px;
      }
    }
  }

  .section-three {
    position: relative;
    .notice {
      position: absolute;
      left: 0;
      top: 0;
      color: white;
    }
  }
}
</style>
