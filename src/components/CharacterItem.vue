<template>
  <article class="card">
    <img :src="this.character.image" alt="character image">
    <section class="card-details">

      <div class="card-details-header">
        <h2 class="character-name">{{ this.character.name }}</h2>
        <div class="status">
          <div class="status-decorator" :style="{ backgroundColor: statusStyle(this.character.status) }"></div>
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
          <p>{{ this.character.location?.name }}</p>
        </div>

        <div class="body-row">
          <h4>Comments: </h4>
          <p> {{ this.character.comments ? this.character.comments : 0 }}</p>
        </div>

      </div>
    </section>
  </article>
</template>

<script>

export default {
  methods: {
    statusStyle(status) {
      switch (status) {
        case 'Alive': return 'green'
        case 'Dead': return '#cd4c4c'
        case 'Unknown': return 'purple'
      }
    }
  },
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

.card:hover {
  cursor: pointer;
  box-shadow: 0px 2px 16px rgb(85, 85, 85);
  transform: translateY(-1rem);
  transition: all 500ms;
}

.card:hover img {
  filter: hue-rotate(180deg);
  transition: all 500ms;
}

img {
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  height: 300px;
}

.card-details {
  height: 100%;
  padding: 1rem;
}

.card-details-header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.character-name {
  font-size: 18pt;
  font-weight: 600;
  color: rgb(22, 21, 21);
  letter-spacing: 1px;
}

.status {
  display: flex;
  align-items: center;
  width: 20%;

}

.status p {

  font-weight: 600;
  letter-spacing: 1px;
  color: rgb(22, 21, 21);
  font-size: 14px;

}

.status-decorator {
  width: 10px;
  height: 10px;
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
  padding-top: 4px;
}

.card-details-footer {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: end;
  margin: auto;
}


@media (max-width: 400px) {
  .card {
    background: rgb(161, 210, 36);
    background: linear-gradient(180deg, rgba(161, 210, 36, 1) 0%, rgba(246, 236, 84, 1) 21%, rgba(4, 150, 180, 1) 100%);
  }
}
</style>