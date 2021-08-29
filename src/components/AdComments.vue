<template>
  <div>
    <b-container class="bv-example-row mb-4">
      <div class="row">
        <b-col class="text-center" col lg="12" md="12" sm="12" xs="auto"
          ><h4 class="generalColorBrown">Comments</h4></b-col
        >
      </div>
      <div v-for="(comment, index) in adData.comments.data" :key="index">
        <b-card>
          <b-media>
            <template #aside>
              <b-img
                blank
                blank-color="#ccc"
                width="64"
                alt="placeholder"
              ></b-img>
            </template>
            <i
              class="fa fa-clock-o icon generalColorBrown"
              aria-hidden="true"
            />

            <router-link
              :to="{
                name: 'user-profile',
                params: { userId: `{{ comment.user.id }}` },
              }"
            >
              <h5 class="mt-0">{{ comment.user.name }}</h5></router-link
            >

            <p>
              <i class="fa fa-clock-o generalColorBrown" aria-hidden="true" />
              {{ comment.created_at }}
            </p>
            <p>
              {{ comment.body }}
            </p>
          </b-media>
        </b-card>
        <br />
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["adData"],
};
</script>
<style scoped>
#comment {
  background-color: #f5f5f5;
  border: 1px solid #e4e7f5;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 100px;
  width: 100%;
}

.comment-div {
  width: 100%;
}
.icon {
  position: absolute;
  left: 90%;
}
</style>
