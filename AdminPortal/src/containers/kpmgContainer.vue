<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <a class="navbar-brand" href="#">
        <img class="navbar-brand-full" src="img/logonew.png" width="110" height="65" alt="KPMG Logo">
        <img class="navbar-brand-minimized" src="img/logonew.png" width="70" height="60" alt="KPMG Logo">
      </a>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-navbar-nav class=" ml-auto">
        <DefaultHeaderDropdownAccnt/>
      </b-navbar-nav>
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
    </div>
    <TheFooter>
      <!--footer-->
      <div class="ml-auto">
        <!-- <a href="#"><img src="img/sage.jpeg" width="60" height="25" alt="SAGE42 Logo" class="footer-logo"/> </a>
        <span class="ml-1">&copy; 2019 Sage42 </span> -->
      </div>
    </TheFooter>
  </div>
</template>

<script>
import nav from '@/nav/kpmgNav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultAside from './DefaultAside'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'

export default {
  name: 'DefaultContainer',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/variables";

  .navbar-brand{
    img{
      width: 100px;
      object-fit: contain;
    }
  }

  .text-grey{
    color: $grey;
  }

  .kpmg-table{
    td{
      vertical-align: middle;
    }

    .table-social{

      span{
        border-radius: 6px;
        margin-right: 5px;
        font-size: 1.875rem;
        cursor: pointer;
      }
    }

    .table-action{
      color: $grey;

      span{
        //padding: 8px 12px;
        //border: 1px solid $grey;
        border-radius: 6px;
        margin-right: 5px;
        font-size: 1.875rem;
        color: $kpmgblue;
        cursor: pointer;
      }

      span:hover{
        color: $kpmghoverblue;
        border-color: $kpmghoverblue;
      }
    }
  }
/*
  .spinner-container{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: steelblue;
    opacity: .9;
    z-index: 999;
  }

  .spinner{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  */

  .swal2-container {
    z-index: 9999;
  }

  .card-button{
    cursor: pointer;
    transition: all .2s ease-in-out;

    .card-button-icon{
      text-align: center;
      font-size: 50px;
      color: $kpmgblue;
    }

    .card-button-icon:hover{
      color: $kpmghoverblue;
    }
  }

  .card-button:hover {
    border: 3px solid $kpmghoverblue;
    transform: scale(1.05);
    transition: all .2s ease-in-out;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .s-link{
    background-color: whitesmoke;
    position: absolute;
    z-index: 999;
    height: 100%;
    width: 100%;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;

    button{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
      opacity: 1;
    }
  }
.table-action{
  .fa-star{
    color: gold;
    cursor: pointer;
    font-size: 20px;
    vertical-align: middle;
  }

  .fa-star:hover{
    color: darkgoldenrod;
  }

  .fa-edit{
    color: $kpmgblue;
    cursor: pointer;
    font-size: 20px;
    vertical-align: middle;
  }

  .fa-edit:hover{
    color: $kpmghoverblue;
  }

  .fa-trash{
    color: red;
    cursor: pointer;
    font-size: 20px;
    vertical-align: middle;
  }

  .fa-trash:hover{
    color: darkred;
  }

  .fa-clipboard{
    color: $kpmgblue;
    cursor: pointer;
    font-size: 20px;
    vertical-align: middle;
  }

  .fa-clipboard:hover{
    color: $kpmghoverblue;
  }

  span{
    padding-right: 5px;
  }
}

  select{
    cursor: pointer;
  }

  table#table-transition-example .flip-list-move {
    transition: transform 1s;
  }
</style>
