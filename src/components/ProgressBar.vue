<template>
  <div>
    <b-progress
      variant="dark"
      :value="value"
      :max="100"
      class="mb-3z"
      animated
    ></b-progress>
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>
