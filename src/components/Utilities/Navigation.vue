<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#" class="brandContainer">
        <img src="../../assets/MONOGRAM.svg" alt="" />
        <div>
          <span style="color: var(--mblue)">Athanasios Efthymiou</span>
          <span style="color: var(--lblue); font-weight: normal"
            >Insurance Group</span
          >
        </div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Our Company</b-nav-item>
          <b-nav-item href="#">Services</b-nav-item>
          <b-nav-item href="#">Partners</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="langContainer">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">IT</b-dropdown-item>
            <b-dropdown-item href="#">GR</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* .navbar-nav {
  margin-left: auto;
} */

.brandContainer {
  display: flex !important;
}

.brandContainer img {
  height: 60px;
}

.brandContainer div {
  display: flex;
  flex-flow: column;
  text-align: left;
  font-weight: bold;
}

.navbar-nav .nav-link {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}

.navbar-brand {
  margin-left: 10%;
  margin-right: 10% !important;
}

.nav-item {
  border-right: 1px solid var(--lblue);
}

.nav-item:last-of-type {
  border-right: none;
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
  outline: none;
  color: var(--mblue) !important;
}

.navbar-light .navbar-nav .nav-link {
  color: var(--lblue) !important;
}

.langContainer {
  margin-left: auto;
  margin-right: 5%;
}
</style>
