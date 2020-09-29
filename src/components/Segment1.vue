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
          :src="require('@/assets/tembusuroom.png')"
          height="100vh"
        />
      </v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="6"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
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
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>
