<template>
  <div>
    <div class="caption">
      <img :src="require(`@/assets/services/${img}.svg`)" alt="" />
      <span>{{ header }}</span>
    </div>
    <div class="captionFooter">
      <span>{{ footer }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
    },
    header: {
      type: String,
    },
    footer: {
      type: String,
    },
  },
};
</script>

<style>
.caption {
  align-items: center;
  display: flex;
}

.caption img {
  height: 4vw;
}

.caption span {
  font-size: 3vw;
  color: #fff;
  margin-left: 1vw;
  letter-spacing: 1px;
  text-shadow: none;
}

.captionFooter {
  display: flex;
  margin-top: 5%;
  margin-left: 1vw;
}

.captionFooter span {
  font-size: 2.5vw;
  color: #fff;
  text-shadow: none;
  white-space: break-spaces;
}
</style>
