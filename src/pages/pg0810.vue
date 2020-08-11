<template>
  <div>
    <div class="row justify-center">这是第1行</div>
    <div class="row">
      <div class="col-4 bg-blue-3 q-pa-md">
        <q-card dark bordered class="bg-grey-9 my-card">
          <img src="../assets/stockmarket.jpg" />
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <!-- <img
            src="https://image.cnbcfm.com/api/v1/image/106414893-1582856147970gettyimages-1201973711.jpeg?v=1597034034&w=600&h=338"
          />-->
          <q-separator dark inset></q-separator>

          <q-card-section>{{ myText }}</q-card-section>
        </q-card>
      </div>
      <div class="col-4 bg-green-2">
        <q-card flat bordered class="my-card bg-grey-1">
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6">Our Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </div>

              <div class="col-auto">
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section>Remove Card</q-item-section>
                      </q-item>
                      <q-item clickable @click="action1">
                        <div>哈哈</div>
                        <!-- <q-item-section>Send Feedback</q-item-section> -->
                      </q-item>
                      <q-item clickable>
                        <q-item-section>Share</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </div>
          </q-card-section>

          <q-card-section>{{ myText }}</q-card-section>

          <q-separator></q-separator>

          <!-- <q-card-actions align="between"> -->
          <q-card-actions align="around">
            <q-btn flat @click="action1">Action 1</q-btn>
            <q-btn flat @click="action2">Action 2</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col items-center bg-yellow-3">
        <div class="col self-center">
          <q-card dark bordered class="bg-grey-9 my-card">
            <q-video
              src="http://v.cztvcloud.com//channel_new/zjstv_zbs/vod/2020/07/31/1b078c5289ad4af388960fbb0177344a/c7f868ce593746deb0f10073f19c504e__sd_.mp4"
            />
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <!-- <img
            src="https://image.cnbcfm.com/api/v1/image/106414893-1582856147970gettyimages-1201973711.jpeg?v=1597034034&w=600&h=338"
            />-->
            <q-separator dark inset></q-separator>

            <q-card-section>{{ myText }}</q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 bg-red-3">
        <q-card flat bordered>
          <q-card-section horizontal>
            <q-img class="col-4" src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
            <q-card-section class="my-card">{{ myText }}</q-card-section>
            <q-img class="col-4" src="../assets/gold.jpeg"></q-img>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 bg-yellow-2">
        <div id="q-app">
          <div class="q-pa-md">
            <q-carousel
              v-model="slide"
              transition-prev="slide-right"
              transition-next="slide-left"
              animated
              swipeable
              arrows
              navigation
              :autoplay="autoplay"
              infinite
              padding
              control-color="primary"
              class="rounded-borders"
            >
              <q-carousel-slide name="style" class="column no-wrap flex-center">
                <q-icon name="style" color="primary" size="56px"></q-icon>
                <div class="q-mt-md text-center">{{ myText }}</div>
              </q-carousel-slide>
              <q-carousel-slide name="tv" class="column no-wrap flex-center">
                <q-icon name="live_tv" color="primary" size="56px"></q-icon>
                <div class="q-mt-md text-center">{{ myText }}</div>
              </q-carousel-slide>
              <q-carousel-slide name="layers" class="column no-wrap flex-center">
                <q-icon name="layers" color="primary" size="56px"></q-icon>
                <div class="q-mt-md text-center">{{ myText }}</div>
              </q-carousel-slide>
              <q-carousel-slide name="map" class="column no-wrap flex-center">
                <q-icon name="terrain" color="primary" size="56px"></q-icon>
                <div class="q-mt-md text-center">{{ myText }}</div>
              </q-carousel-slide>
              <template v-slot:control>
                <q-carousel-control
                  position="top-right"
                  :offset="[18, 18]"
                  class="text-white"
                  style="background: rgba(0, 0, 0, .3); padding: 4px 8px 4px 0; border-radius: 4px"
                >
                  <q-toggle dense dark color="orange" v-model="autoplay" label="Auto Play"></q-toggle>
                </q-carousel-control>
              </template>
            </q-carousel>

            <!-- <div class="row justify-center">
              <q-btn-toggle
                glossy
                v-model="slide"
                :options="[
            { label: 1, value: 'style' },
            { label: 2, value: 'tv' },
            { label: 3, value: 'layers' },
            { label: 4, value: 'map' }
          ]"
              ></q-btn-toggle>
            </div>-->
          </div>
        </div>
      </div>
      <div class="col-4 bg-blue-3 q-pa-md">
        <div class="q-gutter-md">
          <q-chip color="primary" icon="icecream" :selected.sync="desert.Icecream">Icecream</q-chip>
          <q-chip color="primary" icon="cake" :selected.sync="desert.Cupcake">Cupcake</q-chip>
          <q-chip color="primary" icon="fastfood" :selected.sync="desert.Gingerbread">Gingerbread</q-chip>
        </div>
        <q-circular-progress color="orange" size="3rem" show-value :value="progress">{{progress}}%</q-circular-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pg810',
  data: function () {
    return {
      progress: 79,
      desert: {
        Icecream: false,
        Cupcake: false,
        Gingerbread: false
      },
      slide: 'style',
      autoplay: false,
      myText: '常用的页面布局，其实就那么几个。下面我会介绍5个经典布局，只要掌握了它们，就能应对绝大多数常规页面。这几个布局都是自适应的，自动适配桌面设备和移动设备。代码实现很简单，核心代码只有一行，有很大的学习价值，内容也很实用。我会用到 CSS 的 Flex 语法和 Grid 语法，不过只用到一点点，不熟悉的朋友可以先看看教程链接，熟悉一下基本概念。每一个布局都带有 CodePen 示例，也可以到这个网页统一查看。'
    }
  },
  methods: {
    action1: function () {
      console.log('action 1')
    },
    action2: function () {
      console.log('action 2')
    }
  }
}
</script>

<style scoped>
.mycolor1 {
  background-color: aqua;
}
.my-card {
  width: 100%;
  max-width: 50ch;
}
</style>
