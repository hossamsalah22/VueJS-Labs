<template>
    <div>
      <NavbarComponent/>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
<script>
  import NavbarComponent from './components/navbarComponent.vue'

  export default {
    name: 'Main',
    components: {
        NavbarComponent
    }
  }

</script>