<template>
  <div class="pgAdmin">
   
    <!--Barras de navegação horizontal e vertical-->
    <NavBar />
    <Side-bar />
    <ChartsAdmin />


    
  </div>
</template>

<script>
// @ is an alias to /src


import NavBar from '@/components/inc/NavBar.vue'
import SideBar from '@/components/inc/SideBar.vue'
import ChartsAdmin from '@/components/Charts/PagerAdmin.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar,
    SideBar,
    ChartsAdmin

    

  }
}
</script>
