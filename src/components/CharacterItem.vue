<template>
  <article class="card">
    <img :src="this.character.image" alt="character image">
    <section class="card-details">

      <div class="card-details-header">
        <h2 class="character-name">{{ this.character.name }}</h2>
        <div class="status">
          <div class="status-decorator"></div>
          <p>{{ this.character.status }}</p>
        </div>
      </div>

      <div class="card-details-body">
        <div class="body-row">
          <h4>Species: </h4>
          <p>{{ this.character.species }}</p>
        </div>

        <div class="body-row">
          <h4>Gender: </h4>
          <p>{{ this.character.gender }}</p>
        </div>

        <div class="body-row">
          <h4>Location: </h4>
          <p>{{ this.character.location.name }}</p>
        </div>

        <div class="body-row">
          <h4>Comments: </h4>
          <p> {{ this.character.comments ? this.character.comments : 0 }}</p>
        </div>

      </div>

      <div class="card-details-footer">

        <button class="btn-details">
           view more
        </button>
      </div>


    </section>
  </article>
</template>

<script>

export default {
  props: {
    character: {
      name: String,
      image: String,
      status: String,
      species: String,
      gender: String,
      location: String,
      comments: Number
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  color: black;
  width: 100%;
  background: rgb(161, 210, 36);
  background: linear-gradient(90deg, rgba(161, 210, 36, 1) 0%, rgba(246, 236, 84, 1) 21%, rgba(4, 150, 180, 1) 100%);

  border-radius: 12px;
  min-height: 36rem;
  height: auto;
  width: 100%;
}

img {
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  height: 300px;
}

.card-details {
  padding: 1rem;
}

.card-details-header {
  display: flex;
  flex-flow: row wrap;
}

.character-name {
  font-size: 18pt;
  font-weight: 600;
  color: rgb(22, 21, 21);
  letter-spacing: 1px;
}

.status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1.5rem;
  width: 20%;
  font-size: 14pt;
}

.status-decorator {
  width: 1rem;
  height: 1rem;
  background-color: green;
  border-radius: 999px;
}

.card-details-body {
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  width: 100%;
}

.body-row {
  display: flex;
  width: 100%;
}

.body-row h4 {
  font-size: 16pt;
  font-weight: 600;
  color: rgb(0 29 52);
  letter-spacing: 1px;
}

.body-row p {
  font-size: 14pt;
  font-weight: 500;
  color: rgb(22, 22, 22);
  margin-left: 0.5rem;
  letter-spacing: 1px;
}

.card-details-footer {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: end;
}

.btn-details {
  border: none;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 14pt;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: rgb(154, 228, 42);
  border-radius: 12px;

}


@media (max-width: 400px) {
  .card {
    background: rgb(161, 210, 36);
    background: linear-gradient(180deg, rgba(161, 210, 36, 1) 0%, rgba(246, 236, 84, 1) 21%, rgba(4, 150, 180, 1) 100%);
  }
}
</style>