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
            <base-heading>The Demerit Point System</base-heading>
            <base-text>
            demerit (n.)
late 14c., "that which is censurable, wrong-doing, an offense, a crime," from Old French desmerite "blame,
 demerit" (Modern French démérite), from des- "not, opposite" (see dis-) + merite "merit" (see merit (n.)) or
  from Latin demeritum "fault," from past-participle stem of demereri "to merit, deserve," from de- in its completive sense.
<br>
              Lorem ipsum dolor sit amet, consectetur ad
              ipiscin elit. Etiam vulputate augue vel felis gra
              vida porta. Lorem ipsum dolor sit amet, cons
              ectetur adipiscing elit.
            </base-text>
            <base-btn class="mt-4">
              Learn More!
            </base-btn>
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
          :src="require('@/assets/tembusucorridor.jpg')"
          height="100vh"
        />
      </v-col>


    </v-row>
  </section>
</template>