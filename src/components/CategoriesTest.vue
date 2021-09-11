<template>
  <div>
    <b-col class="wrap" ref="wrap">
      <b-tabs v-model="tabIndex">
        <b-tab
          v-for="(haraj, index) in harajs"
          :key="haraj.id"
          :title-link-class="linkClass(index)"
          lazy
        >
          <template #title>
            <i :class="[haraj.icon, 'fa-3x', 'd-block', 'text-center']"></i>
            <h6 style="min-height: 22px;" class="text-center">
              {{ haraj.title }}
            </h6>
          </template>

          <b-tabs v-model="SubtabIndex">
            <b-tab
              v-for="(brand, i) in haraj.brands"
              :key="brand.id"
              :title-link-class="linkSubClass(i)"
              lazy
            >
              <template #title>
                <span style="min-height: 22px;"> {{ brand.title }} </span>
              </template>
            </b-tab>
          </b-tabs>
        </b-tab>
      </b-tabs>
    </b-col>
  </div>
</template>
<script>
export default {
  name: "categories-test",
  data() {
    return {
      tabIndex: 0,
      SubtabIndex: 0,
      harajs: [
        {
          title: "حراج السيارات",
          icon: "fa fa-car",
          brands: [{ title: "toytoa" }, { title: "bms" }],
        },
        { title: "حراج السيارات", icon: "fa fa-desktop" },
        { title: "حراج السيارات", icon: "fa fa-home" },
        { title: "حراج السيارات", icon: "fa fa-tree" },
        { title: "حراج السيارات", icon: "fa fa-black-tie" },
        { title: "حراج السيارات", icon: "fa fa-car" },
        { title: "حراج السيارات", icon: "fas fa-truck-pickup" },
        { title: "حراج السيارات", icon: "fa fa-home" },
        { title: "حراج السيارات", icon: "fa fa-tree" },
        { title: "حراج السيارات", icon: "fa fa-black-tie" },
      ],
    };
  },
  methods: {
    linkClass(index) {
      if (this.tabIndex === index) {
        return ["bg-info", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },
    linkSubClass(index) {
      if (this.SubtabIndex === index) {
        return ["bg-info", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },
  },
};
</script>
<style>
/*.active-category {*/
/*  color: #f05e23;*/
/*  background-color: #f05e23;*/
/*}*/

.nav-tabs {
  flex-wrap: nowrap;
  white-space: nowrap;
  max-width: 1050px;
  overflow: auto;
  overflow-y: hidden;
}
</style>
