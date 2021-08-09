<template>
  <div>
    <ApolloQuery :query="(gql) => AdItem">
      <!-- TODO -->

      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo"><loading-icon /></div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">
          <loading-icon />
        </div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <div class="media mt-2 ">
            <router-link :to="{ path: `ads/${ad.id}` }">
              <img
                class="mr-3 align-self-start"
                src="https://source.unsplash.com/random/90x93"
              />
            </router-link>

            <div class="media-body">
              <h6>
                <router-link :to="{ path: `ads/${ad.id}` }">{{
                  ad.name
                }}</router-link>
              </h6>

              <b-row>
                <b-col sm="9">
                  <b-row>
                    <b-col class="col-8" sm="6">
                      <i class="fa fa-usd"> {{ ad.price }}</i>
                    </b-col>
                    <b-col class="col-4" sm="6">
                      <i class="fa fa-clock-o">
                        {{ ad.created_at }}
                      </i>
                    </b-col>
                  </b-row>
                  <br />

                  <b-row>
                    <b-col sm="6" class="col-8">
                      <i class="fa fa-user"> {{ ad.user.name }}</i>
                    </b-col>
                    <b-col sm="6" class="col-4">
                      <i class="fa fa-map-marker">
                        {{ ad.user.country.name }}
                      </i>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </div>
            <div>
              <i class="fa fa-usd"> {{ ad.price }}</i>
            </div>
          </div>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">
          <loading-icon />
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import AdItem from "../graphql/queries/ads.gql";

export default {
  props: ["ad"],
  data() {
    return {
      AdItem,
    };
  },
};
</script>
