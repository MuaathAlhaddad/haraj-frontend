<template>
  <div>
    <b-navbar id="navbar" toggleable="md" type="light">
      <b-navbar-brand class="d-md-none">
        <h5 class="text-light">Logo</h5>
      </b-navbar-brand>
      <b-navbar-toggle target="collapse-area"></b-navbar-toggle>
      <b-collapse id="collapse-area" is-nav>
        <b-navbar-nav class="pl-5">
          <b-nav-item>
            <router-link :to="{ path: `/` }">
              <h5 class="text-light">Logo</h5>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="!userId">
          <b-nav-item>
            <router-link :to="{ path: `/login` }">
              <h5 class="text-light">login</h5>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav  class="d-md-block mx-auto" v-if="userId">
          <b-nav-text variant="light">
            <b-nav-item-dropdown no-caret>
              <template #button-content>
                <b-button variant="light" class="mr-3">
                  Amer
                  <b-icon icon="person-circle" aria-hidden="true"></b-icon>
                </b-button>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#" @click="logout()">logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-nav-text>

          <b-nav-text>
            <b-button variant="light" class="mr-3">
              Ads
              <b-icon
                icon="archive-fill
"
                aria-hidden="true"
              >
              </b-icon>
            </b-button>
            <b-button variant="light" class="mr-3">
              Favorite
              <b-icon icon="heart-fill" aria-hidden="true"></b-icon>
            </b-button>
            <b-button variant="light" class="mr-3">
              inboxes
              <b-icon icon="inboxes-fill" aria-hidden="true"></b-icon>
            </b-button>
          </b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav v-if="userId">
          <router-link :to="{ path: `/create-ad` }">
            <b-button class="add-post mr-5" variant="info" type="submit">
              Add Post
            </b-button>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: true
    }
  }
}
</script>
<style scoped>
#navbar {
  background-color: #264555 !important;
}
.add-post {
  width: 130px !important;
}
</style>
