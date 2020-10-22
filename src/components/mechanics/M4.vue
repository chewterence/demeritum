<template>
  <section
    id="welcome"
    class="overflow-hidden"
  >
    <v-row no-gutters>

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
            <base-heading>Escalation & <br> De-escalation</base-heading>
            <base-text>
Players would embark on a sub-story upon selecting scenarios which could possibly result in demerit points. Along each step towards getting caught (getting a demerit point), players
gain happiness/time points (along the red arrow).
<br><br>
Players would also be given the choice to 'de-escalate' (green arrow) the situation for instance, 'stopping the party early'.
This way a player could obtain happiness and time points without getting 'caught' (without the cost of demerit points).
              <br><br>
One of the core mechanics of this game, this allows players to 
            </base-text>
          </v-col>
        </v-row>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-col>


      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/mechanics/code4.png')"
          height="100vh"
        />
      </v-col>


    </v-row>
  </section>
</template>