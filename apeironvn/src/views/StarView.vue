<template>
  <LoadingView></LoadingView>
  <main class="body-wrapper star-view">
    <!-- section-one -->
    <div class="section-one" id="section-one">
      <h1 class="title">
        <span>S</span>
        <span>T</span>
        <span>A</span>
        <span>R</span>
      </h1>
    </div>
    <!-- section-two -->
    <div class="section-two" id="section-two">
      <div class="slide-from-left">
        <h1>Star là gì?</h1>
        <h2 class="apeiron-font">Planet</h2>
        <CenterIconView></CenterIconView>
        <div class="infomation">
          Star trong Apeiron giống như land trong các game NFT khác. Mỗi 1 star
          đều có đường xích đạo quay quanh nó - nơi mà bạn có thể đặt planet của
          bạn vào với mục đích để gia tăng tuổi cho Planet.Tăng tuổi càng nhanh
          thì bạn càng sớm mở được các khe Relic của Planet sớm. Lắp được càng
          nhiều các Relics vào khe Relic thì Avatar và Eden của bạn càng trở nên
          mạnh hơn.
        </div>
      </div>
    </div>
    <!-- section-three -->
    <div class="section-three" id="section-three">
      <video
        id="home-video"
        autoplay
        src="../assets/video/Star_view_raw.mp4"
        loop
        type="video/mp4"
        muted="muted"
        controls
        playsinline
      ></video>
    </div>
    <!-- section-four -->
    <div class="section-four" id="section-four">
      <div class="half-body">
        <div class="right-side">
          <div class="right-side-title mb-2">Simulation</div>
          <el-card
            :body-style="{ padding: '0px', display: 'unset' }"
            class="star-card"
          >
            <div class="float-background-stars"></div>
            <div class="float-background-stars2"></div>
            <div class="float-background-stars3"></div>
            <div class="star-wrapper">
              <div class="star-position" v-if="starSelect.link">
                <img :src="starSelect.link" alt="" v-if="starSelect.link" />
                <div class="orbital-wrapper">
                  <div class="orbital-show"></div>
                  <div class="orbital">
                    <div
                      class="orbital-of-orbital-show"
                      v-if="sunSelect.link"
                    />
                    <div class="orbital-of-orbital">
                      <img :src="planetLink" alt="" v-if="planetLink" />
                    </div>
                    <img :src="sunSelect.link" alt="" v-if="sunSelect.link" />
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </div>
        <div class="left-side">
          <div class="pt-5">
            <div class="row ps-2">
              <div>
                Bạn hãy chọn một Star và Sun để biết thêm thông tin chi tiết của
                Star và Sun
              </div>
              <div style="font-size: 12px">
                (Hình ảnh bên cạnh chỉ mang tính chất minh họa)
              </div>
            </div>
            <div class="row p-2">
              <div class="col-4">
                <el-select
                  v-model="starSelectValue"
                  placeholder="Hãy chọn star"
                  class="pt-5"
                >
                  <el-option
                    v-for="star in starList"
                    :key="star.value"
                    :label="star.name"
                    :value="star.value"
                  />
                </el-select>
              </div>
              <div class="col-4">
                <el-select
                  v-model="sunSelectValue"
                  placeholder="Hãy chọn sun"
                  class="pt-5"
                >
                  <el-option
                    v-for="sun in sunList"
                    :key="sun.value"
                    :label="sun.name"
                    :value="sun.value"
                  />
                </el-select>
              </div>
              <div class="col-4">
                <el-select
                  v-model="planetSelect"
                  placeholder="Hãy chọn planet"
                  class="pt-5"
                >
                  <el-option
                    v-for="planet in planetList"
                    :key="planet.value"
                    :label="planet.name"
                    :value="planet.value"
                  />
                </el-select>
              </div>
            </div>
            <div class="row p-2 information-wrapper" style="margin-top: 50px">
              <div class="col-12">
                <el-collapse accordion v-model="collapseAcctiveName">
                  <el-collapse-item
                    class="collapse-style"
                    title="Chi tiết về Star :"
                    name="star"
                  >
                    <div>
                      Sẽ có tổng cộng 11498 Star. Bao gồm 11 loại cấp bậc của
                      Star, cấp bậc càng thấp thì Star càng sở hữu nhiều số
                      lượng quỹ đạo và buff tuổi/ngày càng lớn. Mỗi một quỹ đạo
                      bạn có thể lắp được 1 hành tinh. Nếu bạn không sử dụng hết
                      quỹ đạo bạn sở hữu bạn có thể hoàn toàn cho thuê để kiếm
                      thêm thu nhập.
                    </div>
                    <div class="mt-4">
                      <span v-if="starSelect.name">- </span>
                      {{ starSelect.name }}
                      <span v-if="starSelect.name"> -</span>
                    </div>
                    <div>
                      <span v-if="starSelect.quantity">Số lượng : </span
                      >{{ starSelect.quantity }}
                      <span v-if="starSelect.quantity"> star</span>
                    </div>
                    <div>
                      <span v-if="starSelect.buff"
                        >Số tuổi của planet có thể buff :
                      </span>
                      {{ starSelect.buff }}
                      <span v-if="starSelect.buff"> tuổi/ngày</span>
                    </div>
                    <div>
                      <span v-if="starSelect.orbitalCounts"
                        >Số lượng quỹ đạo sở hữu :
                      </span>
                      {{ starSelect.orbitalCounts }}
                      <span v-if="starSelect.orbitalCounts"> quỹ đạo</span>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item
                    class="collapse-style"
                    title="Chi tiết về Sun :"
                    name="sun"
                  >
                    <div>
                      Mỗi một star đều có slot để gắn Sun. Sun là một
                      ASTRONOMICALS và chúng hoạt động như một mini Star. Chúng
                      cũng buff tuổi cho planet của bạn. Bạn có thể kiếm một Sun
                      bằng cách mở rương Stella Tabula Chest.
                    </div>
                    <div>
                      Bạn có thể xem thêm các loại ASTRONOMICALS tại
                      <span>
                        <el-button
                          size="small"
                          type="info"
                          @click="openAstroDialog()"
                        >
                          <span class="apeiron-font">Here</span>
                        </el-button>
                      </span>
                    </div>
                    <div class="mt-4">
                      <span v-if="sunSelect.name">- </span>
                      {{ sunSelect.name }}
                      <span v-if="sunSelect.name"> -</span>
                    </div>
                    <div>
                      <span v-if="sunSelect.buff"
                        >Số tuổi của planet có thể buff :
                      </span>
                      {{ sunSelect.buff }}
                      <span v-if="sunSelect.buff"> tuổi/ngày</span>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item
                    class="collapse-style"
                    title="Số tuổi planet của bạn có thể nhận được :"
                    name="planet"
                  >
                    <div class="mt-4">
                      Nếu bạn sở hữu Star có gắn Sun thì planet của bạn hoàn
                      toàn có thể nhận được buff từ cả Star lần Sun.
                    </div>
                    <div>Bạn sở hữu:</div>

                    <div>
                      <span v-if="starSelect.name">- </span>
                      {{ starSelect.name }}
                      <span v-if="starSelect.name"> -</span>
                    </div>
                    <div>
                      <span v-if="sunSelect.name">- </span>
                      {{ sunSelect.name }}
                      <span v-if="sunSelect.name"> -</span>
                    </div>
                    <div v-if="starSelect.buff">
                      <span>Số tuổi của planet có thể buff : </span>
                      {{ starSelect.buff }}
                      <span v-if="sunSelect.buff && starSelect.buff">
                        + {{ sunSelect.buff }} =
                        {{ starSelect.buff + sunSelect.buff }}</span
                      >
                      <span> tuổi/ngày</span>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section-five -->
    <div class="section-five" id="section-five">
      <video
        id="home-video"
        autoplay
        src="../assets/video/Star.mp4"
        loop
        type="video/mp4"
        muted="muted"
        controls
        playsinline
      ></video>
    </div>
    <!-- section-six -->
    <div class="section-six" id="section-six">
      <div class="slide-from-left">
        <h1>Bạn muốn sở hữu một Star cho riêng mình chứ?</h1>
        <h2 class="apeiron-font">Star Sale</h2>
        <CenterIconView></CenterIconView>
        <div class="infomation">
          Sự kiện Star Sale hiện đang được dự kiến sẽ mở bán vào ngày 18 tháng
          10 năm 2022. Sẽ có 3 loại rương được bán trong sự kiện đợt tới với
          tổng số lượng rương là 473 rương. Sẽ có 2 vòng 1 vòng cho whitelist sẽ
          được mở bán sớm trước 1 giờ đồng hồ. VIP whitelist có thể mua max 2
          rương, WL thường sẽ có thể mua max 1 rương. Ở vòng public, tất cả mọi
          người đều có thể mua với số lượng vô hạn. Bạn có thể xem hướng dẫn mua
          star tại
          <span
            ><el-button size="small" type="info" @click="openGGuideDialog()">
              <i class="mdi mdi-chevron-right"></i>
              Đây
              <i class="mdi mdi-chevron-left"></i></el-button
          ></span>
          <div class="row">
            <div class="col-3">
              <img
                src="../assets/img/star/chest/regularstar_box.png"
                alt=""
                style="width: 100%"
              />
              <div style="text-align: center">
                <div>0.66 WEth</div>
                <el-button
                  class="mt-3"
                  type="info"
                  size="small"
                  @click="openChest(1)"
                >
                  <span class="apeiron-font">Open Chest</span>
                </el-button>
              </div>
            </div>
            <div class="col-3">
              <img
                src="../assets/img/star/chest/image_box_celestial.png"
                alt=""
                style="width: 100%"
              />
              <div style="text-align: center">
                <div>1.8 WEth</div>
                <el-button
                  class="mt-3"
                  type="info"
                  size="small"
                  @click="openChest(2)"
                >
                  <span class="apeiron-font">Open Chest</span>
                </el-button>
              </div>
            </div>
            <div class="col-3">
              <img
                src="../assets/img/star/chest/image_box_empyrean.png"
                alt=""
                style="width: 100%"
              />
              <div style="text-align: center">
                <div>5 WEth</div>
                <el-button
                  class="mt-3"
                  type="info"
                  size="small"
                  @click="openChest(3)"
                >
                  <span class="apeiron-font">Open Chest</span>
                </el-button>
              </div>
            </div>
            <div class="col-3">
              <img
                src="../assets/img/star/chest/image_box_omega.png"
                alt=""
                style="width: 100%"
              />
              <div style="text-align: center">
                <div>Not SALE</div>
                <el-button
                  class="mt-3"
                  type="info"
                  size="small"
                  @click="openChest(4)"
                >
                  <span class="apeiron-font">Open Chest</span>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AstronomicalDialog
      :show="showAstronomical"
      @getShowValue="getShowValue()"
    ></AstronomicalDialog>
    <StarChestDialog
      :show="showChest"
      :typeOfChest="typeOfChest"
      @getShowChestDialogValue="getShowChestDialogValue()"
    ></StarChestDialog>
    <el-dialog
      v-model="showStarSaleGuideDialog"
      style="width: 80%"
      class="star-sale-guide-dialog"
      :before-close="!showStarSaleGuideDialog"
    >
      <div class="star-sale-guide-dialog-title">
        Hướng dẫn cách mua Star ở đợt Presale tới
      </div>
      <div class="star-sale-guide-dialog-body">
        <div class="half-body">
          <div class="left-side">
            <video
              id="home-video"
              autoplay
              src="../assets/video/StellaPresales.mp4"
              loop
              type="video/mp4"
              muted="muted"
              controls
              playsinline
              style="width: -webkit-fill-available"
            ></video>
          </div>
          <div class="right-side">
            <div class="mt-2">
              1. Có wallet hỗ trợ mạng polygon và chuẩn bị sẵn WETH. (Ưu tiên
              dùng Metamask)
            </div>
            <div class="mt-2">
              2. Đến trang web mint
              <a href="https://mint.apeironnft.com/"
                >https://mint.apeironnft.com</a
              >.
            </div>
            <div class="mt-2">
              3. Nhấp vào "Connect Wallet" để connect ví của bạn. (Hãy chắc chắn
              browser của bạn có Metamask và hỗ trợ Metamask).
            </div>
            <div class="mt-2">4. Chọn Account của ví bạn</div>
            <div class="mt-2">
              5. Nhấn CONNECT, sau đó bạn sẽ thấy ví của bạn hiện "Metamask is
              connected".
            </div>
            <div class="mt-2">
              6. Sau khi ví của bạn đã được connect, chọn một Stella Tabula
              Chest bạn muốn mua và click "Mint Now".
            </div>
            <div class="mt-2">
              7. Làm theo hướng dẫn của những tin nhắn hiện lên màn hình và
              confirm.
            </div>
            <div class="mt-2">
              8. Đợi cho đến khi xuất hiện tiên nhắn đã mua thành công.
            </div>
            <div class="mt-2">
              9. Connect ví của bạn vào OpenSea để mở chest lấy Star và
              Astronomicals của bạn.
            </div>
            <div class="mt-2">
              10. Với những ai Vip WL thì có thể lặp lại từ bước 6 để mua thêm
              cái chest nữa nếu bạn muốn.
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </main>
</template>

<script>
import index from "../core/index.js";
import LoadingView from "../components/LoadingView.vue";
import CenterIconView from "../components/CenterIconView.vue";
import AstronomicalDialog from "../components/AstronomicalDialog.vue";
import StarChestDialog from "../components/ChestDialog.vue";

export default {
  mixins: [index.mixins],
  components: {
    LoadingView,
    CenterIconView,
    AstronomicalDialog,
    StarChestDialog,
  },
  created() {
    this.scrollToTop();
  },
  data() {
    return {
      starSelectValue: "",
      sunSelectValue: "",
      starSelect: {},
      sunSelect: {},
      planetSelect: "",
      planetLink: "",
      starLink: "",
      sunLink: "",
      planetList: index.lib.planets,
      starList: index.lib.star,
      sunList: index.lib.sun,
      collapseAcctiveName: "star",
      totalAgeBuff: null,
      showAstronomical: false,
      showChest: false,
      typeOfChest: undefined,
      showStarSaleGuideDialog: false,
    };
  },
  watch: {
    planetSelect: function (val) {
      if (val == "") return "";
      this.planetList.forEach((planet) => {
        if (planet.value == val) {
          this.planetLink = planet.link;
        }
      });
    },
    starSelectValue: function (val) {
      if (val == "") return "";
      this.starList.forEach((star) => {
        if (star.value == val) {
          this.starSelect = star;
        }
      });
    },
    sunSelectValue: function (val) {
      if (val == "") return "";
      this.sunList.forEach((sun) => {
        if (sun.value == val) {
          if (sun.tierRequired >= this.starSelect.tier) {
            return (this.sunSelect = sun);
          }
          return index.helper.toast.warning(
            sun.name +
              " chỉ có thể gắn cùng Star có tier " +
              sun.tierRequired +
              " trở lên"
          );
        }
      });
    },
  },
  mounted() {},
  methods: {
    getShowValue(val) {
      this.showAstronomical = val;
    },
    openAstroDialog() {
      this.showAstronomical = true;
    },
    getShowChestDialogValue(val) {
      this.showChest = val;
    },
    openChest(type) {
      this.typeOfChest = type;
      this.$nextTick(() => (this.showChest = true));
    },
    openGGuideDialog() {
      this.showStarSaleGuideDialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 200px) {
  /* half-body */
  .half-body {
    .left-side {
      padding: 70px 0px;
    }
    .right-side {
      padding: 70px 0px;
      .star-card {
        .star-wrapper {
          .star-position {
            img {
              width: 150px;
              height: 150px;
            }
            .orbital-wrapper {
              // sun
              img {
                width: 80px;
                height: 80px;
                top: -45px !important;
                left: 70px !important;
              }

              .orbital,
              .orbital-show {
                width: 270px;
                height: 270px;
              }

              .orbital {
                .orbital-of-orbital,
                .orbital-of-orbital-show {
                  width: 80px;
                  height: 80px;
                  top: -35px;
                  left: 70px;
                }

                .orbital-of-orbital {
                  // planet
                  img {
                    width: 15px;
                    height: 15px;
                    top: -15px !important;
                    left: 45px !important;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (min-width: 400px) {
  .half-body {
    .right-side {
      .star-card {
        .star-wrapper {
          .star-position {
            img {
              width: 290px;
              height: 290px;
            }

            .orbital-wrapper {
              // sun
              img {
                width: 100px;
                height: 100px;
                top: -33px !important;
                left: 70px !important;
              }

              .orbital,
              .orbital-show {
                width: 450px;
                height: 450px;
              }

              .orbital {
                .orbital-of-orbital,
                .orbital-of-orbital-show {
                  width: 120px;
                  height: 120px;
                  top: -32px;
                  left: 60px;
                }

                .orbital-of-orbital {
                  // planet
                  img {
                    width: 25px;
                    height: 25px;
                    top: -20px !important;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (min-width: 768px) {
  /* half-body */
  .half-body {
    .left-side {
    }
    .right-side {
      padding: 70px 70px 150px 70px;
    }
  }
}
@media (min-width: 900px) {
}
@media (min-width: 1200px) {
  /* half-body */
  .half-body {
    display: flex;
    .left-side {
      width: 50%;
    }
    .right-side {
      width: 50%;
    }
  }
}
@media (min-width: 1400px) {
  /* half-body */
  .half-body {
    .left-side {
      padding: 70px 50px 70px 0px;
    }
    .right-side {
    }
  }
}

.collapse-style {
  color: #fff8dc !important;
  background-color: unset !important;
}
.star-sale-guide-dialog {
  .star-sale-guide-dialog-title {
    color: #fff8dc;
    font-size: 20px;
    padding-left: 20px;
  }
  .star-sale-guide-dialog-body {
    color: #fff8dc;
    padding-left: 20px;
  }
}

.star-view {
  .section-one {
    background-image: url(../assets/img/godiverse.png) !important;
  }
}

.section-six {
  height: 800px !important;
}

.section-four {
  padding: unset !important;
  height: unset;

  &::before {
    height: 2000px;
  }

  /* half-body */
  .half-body {
    .left-side {
      color: #fff8dc !important;
    }

    .right-side {
      height: 850px;
      overflow: hidden;

      .right-side-title {
        color: #fff8dc !important;
        font-family: Apeiron;
        text-align: center;
        font-size: 30px;
      }
      .star-card {
        background: radial-gradient(
          ellipse at bottom,
          #1b2735 0%,
          #090a0f 100%
        );
        height: -webkit-fill-available;

        .star-wrapper {
          width: 100%;
          height: -webkit-fill-available;
          position: relative;

          .star-position {
            width: 100%;
            height: -webkit-fill-available;
            position: relative;
            display: flex;
            align-items: center;

            // star
            img {
              margin-top: 10px;
              transform: translate(-50%, -50%);
              position: absolute;
              top: 50%;
              left: 50%;
            }

            // main orbital wrapper
            .orbital-wrapper {
              transform: translate(-50%, -50%);
              position: absolute;
              top: 50%;
              left: 50%;

              .orbital,
              .orbital-show {
                border-radius: 50%;
              }

              // sun
              img {
                position: absolute;
                animation: rotate-around-reverse 5s linear infinite;
                transform: unset;
              }

              .orbital {
                animation: rotate-around 15s linear infinite;

                // orbital of orbitalt
                .orbital-of-orbital,
                .orbital-of-orbital-show {
                  position: absolute;
                  border-radius: 50%;
                }

                .orbital-of-orbital-show {
                  border: 1px solid whitesmoke;
                }

                .orbital-of-orbital {
                  animation: rotate-around 2s linear infinite;
                }
              }

              .orbital-show {
                position: absolute;
                border: 1px solid whitesmoke;
              }
            }
          }
        }
      }
    }
  }
}

@keyframes rotate-around {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate-around-reverse {
  100% {
    transform: rotate(-360deg);
  }
}
</style>
