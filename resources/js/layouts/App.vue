<template>

 <div id="layout-wrapper">
    <top-bar></top-bar>
    <aside-menu></aside-menu>
    <div class="main-content">
      <slot/>
      <footer-bar></footer-bar>
    </div>
</div>
</template>

<script>
import FooterBar from '../layouts/FooterBar';
import AsideMenu from '../layouts/AsideMenu';
import TopBar from '../layouts/TopBar';

export default {
  components: {
    FooterBar,
    AsideMenu,
    TopBar,
  },
  data() {
    return {
    //   user: null,
    };
  },
  created() {
    // Simulate fetching user data.
    // setTimeout(() => {
    //   this.user = { name: `John Doe` };
    // }, 2000);
  },
};
</script>



