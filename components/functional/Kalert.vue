<template>
  <div class="fixed top-0 left-0 right-0 z-40 pt-10 w-full translate-y-20">
    <div class="w-full flex justify-center items-center">
      <transition name="bounce">
        <div class="fixed top-0 justify-center z-10 flex w-full" v-if="show">
          <!--      cannot use the dynamic types here because duration compile compiler dont know this class is going to be used -->

          <div class="" v-if="type === 'success'">
            <div class="alert alert-success shadow-lg w-full">
              <div>
                <IconSuccess />
                <span>{{ message }}</span>
              </div>
            </div>
          </div>

          <div class="" v-if="type === 'error'">
            <div class="alert alert-error shadow-lg w-full">
              <div>
                <IconError />
                <span>{{ message }}</span>
              </div>
            </div>
          </div>

          <div class="" v-if="type === 'warning'">
            <div class="alert alert-warning shadow-lg w-full">
              <div>
                <IconWarning />
                <span>{{ message }}</span>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
const alert = useStateAlert()
const {
  _showAlert: show,
  _alertType: type,
  _alertTitle: message,
} = storeToRefs(alert)
</script>

<style scoped></style>
