<template>
  <div>
    <div class="row">
      <div class="col-12">
        <q-breadcrumbs align="right">
          <template v-slot:separator>
            <q-icon size="1.5em" name="chevron_right" color="primary"></q-icon>
          </template>
          <q-breadcrumbs-el label="home" icon="home" to="/"></q-breadcrumbs-el>
          <q-breadcrumbs-el label="mypages" icon="sports_rugby" to="/mypage"></q-breadcrumbs-el>
          <q-breadcrumbs-el label="layout" icon="sports_football" to="/layout"></q-breadcrumbs-el>
        </q-breadcrumbs>
        <!-- 改一行 -->
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <q-bar class="bg-black text-white">
          <div class="cursor-pointer">File</div>
          <div class="cursor-pointer">Edit</div>
          <div class="cursor-pointer gt-xs">View</div>
          <div class="cursor-pointer gt-xs">Window</div>
          <div class="cursor-pointer">Help</div>
          <q-space></q-space>
          <q-btn dense flat icon="minimize"></q-btn>
          <q-btn dense flat icon="crop_square"></q-btn>
          <q-btn dense flat icon="close"></q-btn>
        </q-bar>
      </div>
    </div>
    <div class="row">
      <div class="col-4 bg-blue-2">
        大家好：oooo谢谢
        <a href="www.qq.com">这是qq</a>
      </div>
      <div class="col-2 bg-green-2 justify-center" style="font-size : 3rem">
        哈哈
        <q-badge color="blue" text-color="white">
          I love Newyork
          <q-icon color="red" size="3rem" name="sports_rugby"></q-icon>
        </q-badge>
      </div>
      <div class="col-auto bg-cyan-6">
        <div class="text-h6">
          一行大字
          <q-badge color="blue" text-color="white" align="top" label="haha">v.1.0.3</q-badge>
        </div>
      </div>
      <div class="col bg-red-2 justify-center">
        一些文字
        <q-btn push label="按钮" color="yellow" size="2em">
          <q-badge color="blue" text-color="white" floating outline>v.1.0.3</q-badge>
        </q-btn>
      </div>
    </div>
    <div class="row">
      <div>
        <q-banner class="bg-grey-3">
          <template v-slot:avatar>
            <q-icon name="signal_wifi_off" color="primary"></q-icon>
          </template>
          You have lost connection to the internet. This app is offline.
          <template
            v-slot:action
          >
            <q-btn flat color="primary" label="Turn on Wifi"></q-btn>
          </template>
        </q-banner>
      </div>
      <div class="col bg-yellow-2">
        this is 3 div
        <q-btn color="deep-orange" text-color="white" :label="ast" @click="myClick"></q-btn>
        <p>this is {{ast}}</p>
      </div>
      <div class="col bg-teal-4">this is 2nd iv</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mypage',
  data: function () {
    return {
      a: 0,
      ast: 'ast'
    }
  },
  methods: {
    myClick: function () {
      this.a++
      console.log(this.a)
      this.ast = 'orange ' + this.a
    }
  }

}
</script>

<style scoped>
a {
  position: relative;
  display: inline-block;
  outline: none;
  text-decoration: none;
  color: #000;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
}

a:hover::before,
a:hover::after {
  position: absolute;
}
a:hover::before {
  content: '\5B';
  left: -0.1rem;
}
a:hover::after {
  content: '\5D';
  right: -0.1rem;
}
</style>
