<template>
  <LoadingView></LoadingView>
  <main class="body-wrapper constellation-view">
    <!-- section-one -->
    <div class="section-one" id="section-one">
      <h1 class="title">
        <span>C</span>
        <span>O</span>
        <span>N</span>
        <span>S</span>
        <span>T</span>
        <span>E</span>
        <span>L</span>
        <span>L</span>
        <span>A</span>
        <span>T</span>
        <span>I</span>
        <span>O</span>
        <span>N</span>
      </h1>
    </div>
    <!-- section-two -->
    <div class="section-two" id="section-two">
      <div class="slide-from-left">
        <h1>Constellation là gì?</h1>
        <h2 class="apeiron-font">Constellations</h2>
        <CenterIconView></CenterIconView>
        <div class="infomation">
          Constellation dịch sang tiếng việt là chòm sao. Đúng vậy Constellation
          là tập hợp của một vài ngôi sao. Khi bạn tập hợp đủ các ngôi sao của 1
          Constellation và tham gia vào Alliances bạn sẽ nhận được buff riêng
          biệt (Zodiac Buff) cho planet của bạn. Mỗi constellation đều có buff
          khác nhau vậy nên nếu bạn muốn planet của bạn mạnh hơn thì bạn nên
          cùng bạn bè hoặc Alliance của bạn tập hợp càng nhiều Constellation
          càng tốt.
        </div>
      </div>
    </div>
    <!-- section-three -->
    <div class="section-three" id="section-three">
      <video
        id="home-video"
        autoplay
        src="../assets/video/Constellation_one.mp4"
        loop
        type="video/mp4"
        muted="muted"
        controls
        playsinline
      ></video>
    </div>
    <!-- section-four -->
    <div class="section-four" id="section-four">
      <div class="constellation-wrapper">
        <h1>Constellations</h1>
        <h2 class="apeiron-font">Constellations</h2>
        <CenterIconView></CenterIconView>
        <div class="infomation mb-5" style="padding: unset !important">
          Constellation có rất nhiều loại. Mỗi Constellation đều có câu chuyện
          riêng của chúng giống như ngoài đời. Bạn có thể đọc các câu chuyện tại
          <span
            ><a
              href="https://blog.apeironnft.com/apeiron-lore-counting-constellations-11e2db3c25e7"
              target="_blank"
              >ĐÂY</a
            ></span
          >
          và phần 2 tại
          <span
            ><a
              href="https://blog.apeironnft.com/apeiron-lore-constellations-2-electric-boogaloo-a9cd5387fc0c"
              target="_blank"
              >ĐÂY</a
            ></span
          >. Và như đã nói ở trên, constellation có các buff riêng tùy thuộc vào
          loại của chúng. Hiện tại có 4 loại constellation được nhắc đến đó
          chính là Axis Mundi Major, Axis Mundi Minor, Wandering Major và
          Wandering Minor. Bạn có thể xem qua một vài tạo hình của con
          stellation dưới dạng 3D dưới đây.
        </div>
        <el-card
          :body-style="{
            padding: '0px',
            display: 'unset',
            position: 'relative',
          }"
        >
          <div class="card-title">
            <span class="apeiron-font">Simulation</span>
            <div class="fake-btn">
              <div class="me-1">
                <i class="mdi mdi-minus"></i>
              </div>
              <div>
                <i class="mdi mdi-close-thick"></i>
              </div>
            </div>
          </div>
          <div style="height: 600px">
            <canvas
              ref="constellationBG"
              style="width: 100%; height: -webkit-fill-available"
            ></canvas>
          </div>
        </el-card>
      </div>
    </div>
  </main>
</template>

<script>
import index from "../core/index.js";
import LoadingView from "../components/LoadingView.vue";
import CenterIconView from "../components/CenterIconView.vue";
import libPng from "../core/constellation_pngList";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
export default {
  mixins: [index.mixins],
  components: {
    LoadingView,
    CenterIconView,
  },
  mounted() {
    return new Promise((rex) => rex())
      .then(() => {
        this.init();
      })
      .then(() => {
        this.animate();
      });

    // this.addCircle();
    // this.addCircleTwo();
  },
  created() {
    this.scrollToTop();
  },
  data() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.roundBGOne = null;
    this.roundBGTwo = null;
    this.particalesMesh = null;
    this.control = null;
    this.mixer = null;
    this.centerCube = null;
    this.constellation = null;
    this.constellation2 = null;
    this.loader = new GLTFLoader();
    return {
      options: {
        rewind: true,
        gap: "1rem",
        autoplay: true,
        height: "15rem",
        arrows: true,
        pagination: false,
      },
    };
  },
  methods: {
    init() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );

      this.camera.position.set(15, 20, 15);
      this.camera.lookAt(0, 0, 0);

      // light
      const pointLight = new THREE.PointLight(0xffffff, 1.0);
      pointLight.position.set(0, 15, 0);
      this.scene.add(pointLight);

      // Create ambient light and add to scene.
      var light = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
      this.scene.add(light);

      this.addBackground();
      this.addCube();
      this.addBlackHole();
      this.addConstella();

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.constellationBG,
        antialias: true,
      });

      // render
      this.renderer.setSize(window.innerWidth, window.innerHeight, false);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.minDistance = 10;
      this.controls.maxDistance = 100;
    },

    addBackground() {
      const particlesCnt = 7000;
      const posArray = new Float32Array(particlesCnt * 3);
      this.particlesGeometry = new THREE.BufferGeometry();

      for (let i = 0; i < particlesCnt * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 1000;
      }
      this.particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );

      const material = new THREE.PointsMaterial({ size: 0.005 });
      this.particalesMesh = new THREE.Points(this.particlesGeometry, material);

      this.scene.add(this.particalesMesh);
    },

    addCube() {
      const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.11);
      const material = new THREE.PointsMaterial({ size: 0.005 });

      this.centerCube = new THREE.Points(geometry, material);
      this.scene.add(this.centerCube);
    },

    addBlackHole() {
      this.loader.load(
        "./src/img/star/blackhole.glb",
        (gltf) => {
          this.scene.add(gltf.scene);
          this.mixer = new THREE.AnimationMixer(gltf.scene);
          const clips = gltf.animations;
          const clip = THREE.AnimationClip.findByName(clips, "Take 001");
          const action = this.mixer.clipAction(clip);
          action.play();
        },
        undefined,
        function (err) {
          console.log(err);
        }
      );
    },

    addConstella() {
      const loader = new THREE.TextureLoader();

      // combine our image geometry and material into a mesh
      this.constellation = new THREE.Mesh(geometry, material);

      // set the position of the image mesh in the x,y,z dimensions

      for (let i = 0; i < libPng.constellationList.length; i++) {
        var material = new THREE.MeshLambertMaterial({
          map: loader.load(libPng.constellationList[i].link),
        });
        var geometry = new THREE.PlaneGeometry(6, 6 * 0.75, 128, 128);

        // combine our image geometry and material into a mesh
        this.constellation = new THREE.Mesh(geometry, material);

        if (i < 4) {
          this.constellation.position.set(
            Math.sin(i * 15) * 10,
            0,
            Math.cos(i * 15) * 10
          );
        } else if (i < 8) {
          this.constellation.position.set(
            Math.sin(i * 15) * 15,
            0,
            Math.cos(i * 15) * 15
          );
        } else {
          this.constellation.position.set(
            Math.sin(i * 15) * 20,
            0,
            Math.cos(i * 15) * 20
          );
        }

        this.constellation.rotation.x = -20.5;
        this.centerCube.add(this.constellation);
      }
    },

    animate() {
      requestAnimationFrame(this.animate);
      this.centerCube.rotation.y += 0.001;
      // this.constellation.rotation.y += Math.sin(0.001 / 2 / 3) * 0.001;
      // background
      this.particalesMesh.rotation.x -= 0.001;
      if (this.mixer) {
        this.mixer.update(0.005);
      }
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>
<style lang="scss" scoped>
.constellation-view {
  .section-one {
    background-image: url(../assets/img/major_constellation.jpg) !important;
  }

  .section-two {
    height: 800px !important;
  }

  .section-four {
    height: 1300px !important;

    .constellation-wrapper {
      padding: 0 20%;
      height: 90%;
    }

    .card-title {
      display: flex;
      position: relative;
      padding-left: 1rem;

      .fake-btn {
        margin-left: auto;
        display: flex;
      }
    }
  }
}

.splide .slide-item {
  display: block !important;
}
</style>
