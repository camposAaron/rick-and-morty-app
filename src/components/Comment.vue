<template>
  <article class="commentItem">
    <p>
      {{ comment.comment }}
    </p>
  </article>
</template>

<script>
export default {
  props: {
    comment: {
      id: Number,
      comment: String
    }
  }
}

</script>

<style scoped>
.commentItem {
  display: flex;
  width: 98%;
  background-color: #000;
  border: 1px solid rgb(97, 222, 253);
  color: rgb(97, 222, 253);
  margin-bottom: 5px;
  margin-left: 5px;
  padding-left: 1rem;
}
</style>
