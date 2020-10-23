<template>
  <section
    id="welcome"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/livingroom.jpg')"
          height="100vh"
        />
      </v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="6"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateY(25%)"
        />

        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="10"
            md="6"
          >
            <base-heading>The Game</base-heading>
            <base-text>
To explore the possibility of gaming the system, what is more befitting than through a game? Under the "Game" tab a player would be able to explore this possibility of gaming the demerit point system that is in place for students residing on the National University of Singapore's (NUS) campus.
<br><br>
The objective would be to navigate through a fictional semester in Tembusu College, to try and obtain the highest amount of 'Happiness' and 'Time' points as possible.
Players would be presented with different situations which could affect the outcome of the story.
The "Mechanics" tab explains certain game mechanics present, as well as the rationale behind each game mechanic.
However, one should first play the game.
            </base-text>
          </v-col>
        </v-row>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-col>
    </v-row>
  </section>
</template>