<template>
  <LoadingView></LoadingView>
  <main class="body-wrapper apostle-view">
    <!-- section-one -->
    <div class="section-one" id="section-one">
      <h1 class="title">
        <span>A</span>
        <span>P</span>
        <span>O</span>
        <span>S</span>
        <span>T</span>
        <span>L</span>
        <span>E</span>
      </h1>
    </div>
    <!-- section-two -->
    <div class="section-two" id="section-two">
      <div class="slide-from-left">
        <h1>Apostle là gì?</h1>
        <h2 class="apeiron-font">Apostle</h2>
        <CenterIconView></CenterIconView>
        <div class="infomation">
          Apostle không khác gì những con pet của bạn trong game. Chúng sẽ hỗ
          trợ bạn chiến đấu trong phó bản hay PvP. Đến thời điểm hiện tại có
          tổng cộng 12 loại Apostles. Mỗi Apostle đều có bộ kỹ năng khác nhau và
          đảm nhiệm vị trí khác nhau trong đội hình. Có tổng cộng 0.3 tỷ cách
          kết hợp các Apostle. Vậy nên để có thể thử hết các đội hình thì bạn
          tốn khá nhiều thời gian đó. Apostle có thể tuyển mộ từ việc khám phá
          các Dungeon đặc biệt. Tuy nhiên những Apostle hiện đang được bán trên
          <span
            ><a
              href="https://opensea.io/collection/apeironoriginscollection"
              target="_blank"
              >OpenSea</a
            ></span
          >
          sẽ có sức mạnh nhỉnh hơn chút để bạn có thể dễ dàng hơn khi mới tham
          gia game.
        </div>
      </div>
    </div>
    <!-- section-three -->
    <div class="section-three" id="section-three">
      <video
        id="home-video"
        autoplay
        src="../assets/video/Apostle.mp4"
        loop
        type="video/mp4"
        muted="muted"
        controls
        playsinline
      ></video>
    </div>
    <!-- section-four -->
    <div class="section-four" id="section-four">
      <div class="infomation">
        <div class="row" style="justify-content: center">
          <div style="text-align: center">
            Chọn 1 Apostle để xem thông tin chi tiết
          </div>
          <div
            class="col-size-for-apostle-profile m-1 apostle-profile-wrapper"
            v-for="apostle in apostleList"
            :key="apostle.value"
            @click="viewApostleDetail(apostle)"
          >
            <div class="apostle-profile-img">
              <img :src="apostle.link" alt="" />
            </div>
            <div class="apostle-name apeiron-font">{{ apostle.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- section-five -->
    <div class="section-five" id="section-five">
      <img class="bgr-img" src="../assets/img/apostle-opensea.jpeg" alt="" />
    </div>
    <!-- section-six -->
    <div class="section-six" id="section-six">
      <div class="slide-from-left">
        <h1>Benefit</h1>
        <h2 class="apeiron-font">Benefit</h2>
        <CenterIconView></CenterIconView>
        <div class="infomation">
          Tùy thuộc vào số lượng Origin Apostle mà bạn sở hữu. Bạn sẽ có cơ hội
          nhận được cực kỳ nhiều phần thưởng giá trị. Bạn có thể mua Origin
          Apostle tại
          <span
            ><a
              href="https://opensea.io/collection/apeironoriginscollection"
              target="_blank"
              >OpenSea</a
            ></span
          >
          <br />
          <br />
          <div>
            Dưới đây là danh sách phần thưởng tùy theo số lượng Apostle bạn sở
            hữu:
          </div>
          <br />
          <div>
            <div>
              <h6>- 4 Unique Apostle -</h6>
              <div>Dood Plushie Rafle</div>
            </div>
            <div style="padding-top: 10px">
              <h6>- 6 Unique Apostle -</h6>
              <div>Planet NFT Whitelist [Completed]</div>
            </div>
            <div style="padding-top: 10px">
              <h6>- 7 Unique Apostle -</h6>
              <div>APRS TGE Whitelist</div>
            </div>
            <div style="padding-top: 10px">
              <h6>- 8 Unique Apostle -</h6>
              <div>Star NFT Whitelist</div>
            </div>
            <div style="padding-top: 10px">
              <h6>- 9 Unique Apostle -</h6>
              <div>
                Planet VIP Whitelist [Completed], Free Planet NFT Raffle
              </div>
            </div>
            <div style="padding-top: 10px">
              <h6>- 10 Unique Apostle -</h6>
              <div>
                APRS TGE Whitelist , Increased APRS Staking Rewards , Free APRS
                Raffle , Discord OG Role
              </div>
            </div>
            <div style="padding-top: 10px">
              <h6>- 11 Unique Apostle -</h6>
              <div>Star NFT VIP Whitelist, Free Star NFT Raffle</div>
            </div>
            <div style="padding-top: 10px">
              <h6>- 12 Unique Apostle -</h6>
              <div>CLASSIFIED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section-five -->
    <div class="section-five" id="section-seven">
      <img class="bgr-img" src="../assets/img/team.png" alt="" />
      <div class="info-wrapper"></div>
    </div>
    <el-dialog
      v-model="showDialog"
      :before-close="handleClose"
      style="width: 80%"
      class="apostle-dialog"
    >
      <!-- <div class="dialog-title-img">
        <img :src="apostleDetail.link" alt="" />
      </div> -->
      <div class="apostle-dialog-title">
        <div class="apostle-name">
          {{ apostleDetail.name }}
        </div>
      </div>
      <div class="apostle-dialog-body mt-3">
        <el-tabs v-model="activeApostleTab" type="card">
          <el-tab-pane label="About" name="about">
            <div class="about-wrapper row">
              <div class="col-8 left-side mt-3">
                <div class="mt-3">
                  - Thông tin sơ lược -
                  <div class="mt-2">{{ apostleDetail.detail }}</div>
                </div>
                <hr />
                <div class="mt-3">
                  - Loại tướng -
                  <div class="mt-2">{{ apostleDetail.type }}</div>
                </div>
                <hr />
                <div class="mt-3">
                  - Tầm đánh -
                  <div class="mt-2">{{ apostleDetail.range }}</div>
                </div>
                <hr />
                <div class="mt-3">
                  - Link bán NFT trên OpenSea -
                  <div class="mt-2">
                    <a :href="apostleDetail.linkOS" target="_blank"
                      >Apeiron Origins Collection</a
                    >
                  </div>
                </div>
                <hr />
              </div>
              <div class="col-4">
                <img
                  :src="apostleDetail.link"
                  alt=""
                  style="width: -webkit-fill-available"
                />
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Skill" name="skill">
            <div class="skill-body-wrapper">
              <div class="left-side">
                <el-collapse
                  v-model="skillSelected"
                  accordion
                  v-for="skill in apostleDetail.skill"
                  :key="skill.value"
                  @change="handleChangeSkill"
                >
                  <el-collapse-item :title="skill.name" :name="skill.value">
                    <div class="skill-detail-wrapper">
                      <div class="skill-img">
                        <img v-if="skill.link != ''" :src="skill.link" />
                        <el-empty v-else description="Chưa có ảnh" />
                      </div>
                      <div class="skill-detail">
                        <div>
                          - Chi tiết -
                          <div>{{ skill.detail }}</div>
                        </div>
                        <div class="mt-1">
                          - Loại skill -
                          <div>{{ skill.type }}</div>
                        </div>
                        <div class="mt-1">
                          - Loại sát thương -
                          <div>{{ skill.damageType }}</div>
                        </div>
                        <div class="mt-1">
                          - Mục tiêu -
                          <div>{{ skill.target }}</div>
                        </div>
                      </div>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
              <div class="right-side px-3">
                <div class="apeiron-font" style="color: #fff8dc">VIDEO</div>
                <el-card
                  :body-style="{
                    padding: '0px',
                    display: 'unset',
                    position: 'relative',
                    background: '#73767a',
                  }"
                >
                  <video
                    v-if="linkvideo != ''"
                    class="skill-video"
                    autoplay
                    :src="linkvideo"
                    loop
                    type="video/mp4"
                    muted="muted"
                    playsinline
                    style="width: -webkit-fill-available"
                  ></video>
                  <el-empty v-else description="Chưa có video" />
                </el-card>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-dialog>
  </main>
</template>

<script>
import LoadingView from "../components/LoadingView.vue";
import index from "../core/index.js";
import CenterIconView from "../components/CenterIconView.vue";
import lib from "../core/apostleLib.js";

export default {
  components: {
    LoadingView,
    CenterIconView,
  },
  mixins: [index.mixins],
  data() {
    return {
      apostleList: lib.apostleList,
      options: {
        rewind: true,
        gap: "1rem",
        autoplay: true,
        height: "15rem",
        arrows: true,
        pagination: false,
      },
      showDialog: false,
      apostleDetail: {},
      activeApostleTab: "about",
      skillSelected: 0,
      linkvideo: "",
    };
  },
  created() {
    this.scrollToTop();
  },
  methods: {
    toApostleShop() {
      window.open("https://opensea.io/collection/apeironoriginscollection");
    },
    viewApostleDetail(apostle) {
      return new Promise((rex) => rex())
        .then(() => {
          this.apostleDetail = apostle;
          this.activeApostleTab = "about";
        })
        .then(() => {
          this.skillSelected = this.apostleDetail.skill[0].value;
          this.$nextTick(() => {
            this.showDialog = true;
          });
        });
    },
    handleClose() {
      this.linkvideo = "";
      this.apostleDetail = {};
      this.$nextTick(() => (this.showDialog = false));
    },
    handleChangeSkill(value) {
      if (value) {
        this.linkvideo = this.apostleDetail.skill[value].linkvideo;
      } else {
        this.linkvideo = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* apostle-view */
@media (min-width: 200px) {
  .section-four {
    .infomation {
      padding: 10%;

      .col-size-for-apostle-profile {
        width: 30.3333%;
      }
    }
  }

  .skill-body-wrapper {
    display: block;

    .left-side {
      width: 100%;
    }

    .right-side {
      display: none;
    }

    .skill-detail-wrapper {
      display: block;

      .skill-img {
        width: 100%;
      }
    }
  }
}
@media (min-width: 400px) {
  .section-four {
    .infomation {
      padding: 0 10%;

      .col-size-for-apostle-profile {
        width: 24%;
      }
    }
  }
}
@media (min-width: 700px) {
  .section-four {
    .infomation {
      padding: 0 10%;

      .col-size-for-apostle-profile {
        width: 16%;
      }
    }
  }
  .skill-body-wrapper {
    .skill-detail-wrapper {
      display: flex;
      .skill-img {
        width: 30%;
      }

      .skill-detail {
        padding: 0 30px;
      }
    }
  }
}
@media (min-width: 900px) {
  .skill-body-wrapper {
    display: flex;

    .left-side {
      width: 65%;
    }

    .right-side {
      width: 35%;
      display: unset;
    }
  }
}
@media (min-width: 1200px) {
  .section-four {
    .infomation {
      padding: 0 10%;
      .col-size-for-apostle-profile {
        width: 16%;
      }
    }
  }
}
@media (min-width: 1400px) {
}
.apostle-view {
  .section-one {
    background-image: url(../assets/img/apostles.png) !important;
  }

  .section-two {
    height: 800px !important;
    &::before {
      background-image: url(../assets/img/background/background-apostle.jpg);
    }
  }

  .section-four {
    margin: 0%;

    &::before {
      background-image: url(../assets/img/background/landing-background.jpg);
    }

    .infomation {
      color: #fff8dc;
      width: -webkit-fill-available;
      font-weight: 300;
      .apostle-profile-wrapper {
        background: #fff8dc;
        padding: 0.1rem;

        .apostle-profile-img {
          img {
            margin: auto;
            width: 100%;
          }
        }

        .apostle-name {
          color: black;
          text-align: center;
        }

        &:hover {
          transform: scale(1.2);
          background: black;
        }
        &:hover .apostle-name {
          color: #fff8dc;
          font-family: roboto;
        }
      }
    }
  }

  .section-five {
    .info-wrapper {
      text-align: center;
      img {
        transition: 0.7s;
        border-radius: 50%;

        &:hover {
          box-shadow: 0 0 30px black;
        }
      }
    }
  }

  .section-six {
    height: 1100px !important;

    &::before {
      background-image: url(../assets/img/background/background-apostle2.jpg);
    }
  }

  .apostle-dialog {
    position: relative;

    .dialog-title-img {
      width: -webkit-fill-available;
      position: absolute;
      top: 0;

      img {
        width: -webkit-fill-available;
      }
    }

    .apostle-dialog-title {
      color: #fff8dc;
      font-size: 30px;
      padding: 0 2rem;
      text-shadow: 0 0 25px #4dedfb, 0 0 20px #4dedfb, 0 0 10px #4dedfb;

      .apostle-name {
        position: relative;
        z-index: 1;
      }
    }

    .apostle-dialog-body {
      padding: 20px 2rem;

      .about-wrapper {
        .left-side {
          color: #fff8dc;
        }

        .right-side {
        }
      }

      .skill-body-wrapper {
        width: 100%;

        .skill-detail-wrapper {
          width: 100%;

          .skill-img {
            img {
              width: -webkit-fill-available;
            }
          }
        }
      }
    }
  }
}
</style>
