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
            <base-heading>Story Navigation</base-heading>
            <base-text>
The game begins as a linear story that eventually fans out as players make their choices, the story would
then merge back as the sequence ends. There are 8 main sequences in the story to explore, each with several sub-sequences that a player could
experience depending on the choices they make.
              <br><br>
The default ability to back navigate in the story has been intentionally disabled, such that the player would not be able to undo their
actions once they have selected it. Players could replay the game once it finishes, to attempt to obtain a higher score (with higher happiness and time points).
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
          :src="require('@/assets/mechanics/code2.png')"
          height="100vh"
        />
      </v-col>


    </v-row>
  </section>
</template>