<template>
  <b-col class="my-2 reg-form" cols="12">
    <b-container class="bv-example-row mt-3">
      <progress-bar :value="100" />
      <b-card bg-variant="light" header="Terms Agreement">
        <b-card-text>
          <div>
            <div>
              <b-card no-body>
                <div class="m-5">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum. Scrambled it to make a type specimen
                  book. Scrambled it to make a type specimen book. Scrambled it
                  to make a type specimen book. Scrambled it to make a type
                  specimen book. Scrambled it to make a type specimen book.
                  Scrambled it to make a type specimen book. Scrambled it to
                  make a type specimen book.
                </div>
              </b-card>
            </div>
            <b-form-checkbox class="my-3 mr-sm-2 mb-sm-0"
              >Remember me</b-form-checkbox
            >
          </div>
        </b-card-text>
      </b-card>
    </b-container>
  </b-col>
</template>

<script>
import ProgressBar from "../ProgressBar.vue";
export default {
  components: { ProgressBar },
};
</script>
