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
          :src="require('@/assets/mechanics/code1.png')"
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
            <base-heading>Happiness, Time & Demerit Points</base-heading>
            <base-text>
While wrongdoings are quantified by Demerit points, this game further quantifies Happiness and Time into points.
These are numerical values that the player uses in the game, with certain actions having more weight
in terms of numerical values of points.
<br><br>
Time and Happiness have been selected as the other two 'quantifiable meters', as individals might tend to take calculated risks to obtain
happiness or to save them some time. For major events in this game, the player would be notified of points they have gained and lost (illustrated by the red text in the game).
However, not every point modification would be notified to the player.
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