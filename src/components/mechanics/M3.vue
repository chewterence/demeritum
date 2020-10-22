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
          :src="require('@/assets/mechanics/code3.png')"
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
            <base-heading>Rules & Terms</base-heading>
            <base-text>
"Housing Agreement", "Demerit Point Structure" and "Rules & Regulations" are documents that every resident living on campus is required to read through.
In this game, these buttons have been intentionally set as the hyperlinks to the official documents provided by NUS Office of Housing Services (available online).
<br><br>
The player should click on these hyperlinks to read the rules before playing the game. However, as terms & conditions tend to be lengthy, most would likely just skim through.
Combined with the lack of ability to back navigate in this game, a player would then have to search online for the rules. Keeping the demerit points structure
tab open whilst playing the game could also be advantageous to a player.

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