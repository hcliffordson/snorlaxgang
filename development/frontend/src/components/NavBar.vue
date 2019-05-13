<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
        style="margin-left: 0"> <!-- not great but no left-adjusted burgers in bulma -->
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <!-- <a class="navbar-item" href=""> -->
        <router-link to="/home" class="navbar-item">
          <img src="../assets/otrade512.png" width="28" height="28">
        </router-link>
        <div class="navbar-item">
            <router-link to="/publish" class="button">
              <i class="material-icons">add</i>
            </router-link>
        </div>
        <div class="navbar-item">
          <router-link to="/search" class="button">
            <i class="material-icons">search</i>
          </router-link>
        </div>
      </div>
  </nav>
</template>
