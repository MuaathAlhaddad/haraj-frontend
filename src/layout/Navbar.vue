<template>
  <div>
    <b-navbar class="pl-5" toggleable="lg" type="dark" id="navbar">
      <b-navbar-brand class="pr-5" href="#">LOGO</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="pl-5">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="pl-5">
          <b-nav-item href="#"
            >My Ads
            <b-icon
              class="ml-1"
              icon="badge-ad"
              aria-label="Help"
              variant="light"
            ></b-icon
          ></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="pl-5">
          <b-nav-item href="#"
            >Favourite<b-icon
              class="ml-1"
              icon="heart-fill"
              aria-label="Help"
              variant="light"
            ></b-icon>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="pl-5">
          <b-nav-item href="#"
            >Inbox
            <b-icon
              class="ml-1"
              icon="chat-square-text"
              aria-label="Help"
              variant="light"
            ></b-icon>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="pl-5">
          <b-button class="add-post px-5" variant="info" type="submit"
            >Add Post</b-button
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
#navbar {
  background-color: #071e2f !important;
}
#nav-collapse {
  padding-right: 70px;
  padding-left: 70px;
}
.add-post {
  position: absolute;
  left: 80%;
  top: 20%;
}
</style>
