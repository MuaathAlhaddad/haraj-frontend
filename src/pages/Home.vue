<template>
  <div>
    <b-container class="bv-example-row my-5">
      <b-row>
        <b-col cols="12" class="my-5 text-center">
          <b-row class="d-flex justify-content-center find-section">
            <div>
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="[
                  { text: 'Choose...', value: null },
                  'One',
                  'Two',
                  'Three',
                ]"
                :value="null"
              ></b-form-select>
            </div>
            <!--Input-->
            <div>
              <b-form-input
                id="inline-form-input-search"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Search"
              ></b-form-input>
            </div>
            <div><b-button>Find</b-button></div>
          </b-row>
        </b-col>

        <b-col cols="12"
          ><b-card>
            <template v-slot:header>
              <b-row class="d-flex justify-content-between">
                <div class="ml-2">Browser by catergory</div>
                <div class="mr-2">
                  <b-dropdown id="dropdown-1" text="View more">
                    <b-dropdown-item>First Action</b-dropdown-item>
                    <b-dropdown-item>Second Action</b-dropdown-item>
                    <b-dropdown-item>Third Action</b-dropdown-item>
                  </b-dropdown>
                </div>
              </b-row>
            </template>
            <b-row class="text-center">
              <b-col class="">
                <b-icon icon="phone" font-scale="2.5"> </b-icon>
                <p class="catergory-label">catergory</p>
              </b-col>
              <b-col class="">
                <b-icon icon="phone" font-scale="2.5"> </b-icon>
                <p class="catergory-label">catergory</p>
              </b-col>
              <b-col class="">
                <b-icon icon="phone" font-scale="2.5"> </b-icon>
                <p class="catergory-label">catergory</p>
              </b-col>
              <b-col class="">
                <b-icon icon="phone" font-scale="2.5"> </b-icon>
                <p class="catergory-label">catergory</p>
              </b-col>
              <b-col class="">
                <b-icon icon="phone" font-scale="2.5"> </b-icon>
                <p class="catergory-label">catergory</p>
              </b-col>
              <b-col class="">
                <b-icon icon="phone" font-scale="2.5"> </b-icon>
                <p class="catergory-label">catergory</p>
              </b-col>
              <b-col class="">
                <b-icon icon="phone" font-scale="2.5"> </b-icon>
                <p class="catergory-label">catergory</p>
              </b-col>
              <b-col class="">
                <b-icon icon="phone" font-scale="2.5"> </b-icon>
                <p class="catergory-label">catergory</p>
              </b-col>
              <b-col class="">
                <b-icon icon="phone" font-scale="2.5"> </b-icon>
                <p class="catergory-label">catergory</p>
              </b-col>
              <b-col class="">
                <b-icon icon="phone" font-scale="2.5"> </b-icon>
                <p class="catergory-label">catergory</p>
              </b-col>
              <b-col class="">
                <b-icon icon="phone" font-scale="2.5"> </b-icon>
                <p class="catergory-label">catergory</p>
              </b-col>
              <b-col class="">
                <b-icon icon="phone" font-scale="2.5"> </b-icon>
                <p class="catergory-label">catergory</p>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col class="my-5">
          <b-card>
            <template v-slot:header>
              <b-row class="d-flex justify-content-between">
                <div class="ml-2">Latest ads</div>
                <div class="mr-2"><a href="">View all ads</a></div>
              </b-row>
            </template>

            <b-row>
              <AdItem />
              <AdItem />
              <AdItem />
              <AdItem />
              <AdItem />
              <AdItem />
              <AdItem />
              <AdItem />
              <AdItem />
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AdItem from "../components/AdItemHome.vue";
export default {
  components: { AdItem },
  data() {
    return {};
  },
};
</script>

<style scoped>
.catergory-label {
  color: #aaaaaa;
  font-size: 12px;
}
.more {
  height: 60px !important;
}
.find-section {
}
</style>
