<template>
  <!-- Search -->
  <b-col cols="12" class="my-5 text-center">
    <div>
      <div>
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
          <div><b-button class="generalBackgroundBrown">Find</b-button></div>
        </b-row>
      </div>
    </div>
  </b-col>
</template>
