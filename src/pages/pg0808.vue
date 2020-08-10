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
      <div id="q-app">
        <form @submit.prevent="simulateSubmit" class="q-pa-md">
          <!-- a simple text field watching for the enter key release -->
          <q-input
            filled
            color="teal"
            hint="Type then hit Enter key above"
            v-model="submittingValue"
          ></q-input>

          <q-input
            filled
            color="yellow"
            hint="Type then hit Enter key above"
            lazy-rules
            :rules="[
               val => val>0 && val <100
            ]"
            v-model="submittingValue2"
          ></q-input>
          <!--
        A button with v-model set to submit.
        v-model scope variable must be a strict Boolean
          -->
          <div class="row justify-end">
            <q-btn type="submit" :loading="submitting" label="Save" class="q-mt-md" color="teal">
              <template v-slot:loading>
                <q-spinner-facebook></q-spinner-facebook>
              </template>
            </q-btn>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-4 bg-blue-3">
        <div class="q-pa-md">
          <q-btn-dropdown class="glossy" color="purple" label="Account Settings">
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Settings</div>
                <q-toggle v-model="mobileData" label="Use Mobile Data"></q-toggle>
                <q-toggle v-model="bluetooth" label="Bluetooth"></q-toggle>
              </div>

              <q-separator vertical inset class="q-mx-lg"></q-separator>

              <div class="column">
                <q-avatar size="72px">
                  <img src="../assets/boy-avatar.png" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                <q-btn color="primary" label="Logout" push size="sm" v-close-popup></q-btn>
              </div>
            </div>
          </q-btn-dropdown>
        </div>
      </div>
      <div class="col-4 bg-yellow-3">this is 3 div</div>
      <div class="col-4 bg-green-3">this is 2nd div</div>
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
      myPercentage: 0,
      submitting: false,
      submittingValue: '',
      submittingValue2: '',
      mobileData: false,
      bluetooth: true
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
    },
    simulateSubmit () {
      if ((this.submittingValue === '') || (this.submittingValue2 === '')) {
        this.submittingValue2 = '你需要填一点东西'
        return
      }
      this.submitting = true
      console.log(this.submitting)
      setTimeout(() => {
        this.submitting = false
        console.log(this.submitting)
      }, 3000)
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
