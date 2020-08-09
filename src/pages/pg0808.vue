<template>
  <div>
    <div class="row justify-center">这是第1行</div>
    <div class="row">
      <div class="col-2 bg-green-5">
        <p>${size}</p>
        <q-btn
          v-for="size in sizes"
          :key="`btn_size_sq_${size}`"
          color="primary"
          :size="size"
          :label="`${size}`"
        ></q-btn>
      </div>
      <div class="col-2 bg-blue-3">
        <q-btn :loading="loading4" color="secondary" @click="simulateProgress(4)" label="再一个按钮">
          <template v-slot:loading>
            <q-spinner-hourglass></q-spinner-hourglass>正在连接...
          </template>
        </q-btn>
      </div>

      <div class="col-2 bg-red-2">
        <q-btn :loading="loading3" color="secondary" @click="simulateProgress(3)">
          <q-avatar text-color="red" icon="emoji_nature" class="on-left"></q-avatar>
          <div>
            小心
            <br />蜜蜂
          </div>
        </q-btn>
      </div>
      <div class="col justify-center">
        <q-btn
          :loading="isLoading"
          :percentage="myPercentage"
          color="secondary"
          @click="cacuProgress"
          label="有进度条的按钮"
        >
          <template v-slot:loading>
            <q-spinner-hourglass></q-spinner-hourglass>正在走啊走...
          </template>
        </q-btn>
      </div>
      <div class="col-auto mycolor1">make a new line</div>
      <div
        class="col mycolor2 justify-center"
      >fills remaining available space dispite whatever inner elements' size</div>
    </div>
    <div class="row">
      <div style="order:1">this is first div</div>
      <div style="order:3">this is 3 div</div>
      <div style="order:2">this is 2nd div</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pg0808',
  data () {
    return {
      sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
      icons: [
        'navigation',
        'add_a_photo',
        'camera',
        'camera_front',
        'my_location'
      ],
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
      loading6: false,
      progress: false,
      isLoading: false,
      myPercentage: 0
    }
  },
  methods: {
    simulateProgress (number) {
      // we set loading state
      this[`loading${number}`] = true
      console.log(this[`loading${number}`])
      console.log(`loading${number}`)
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this[`loading${number}`] = false
        console.log(this[`loading${number}`])
      }, 3000)
    },

    cacuProgress () {
      this.isLoading = true
      var myfunc = setInterval(() => {
        this.myPercentage += Math.random() * 10 + 10
        if (this.myPercentage >= 100) {
          this.isLoading = false
          clearInterval(myfunc)
        }
      }, 1000)
    },
    beforeDestroy () {
      this.isLoading = false
      clearInterval(this.myfunc)
    }
  }
}
</script>

<style scoped>
.mycolor1 {
  background-color: aqua;
}
.mycolor2 {
  background-color: blueviolet;
}
.mycolor3 {
  background-color: blue;
}
.mycolor4 {
  background-color: yellowgreen;
}
</style>
