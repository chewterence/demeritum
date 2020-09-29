<template>
  <div class="about">
    <AboutComponent />
  </div>
</template>


<script>

export default {
    name: 'About',
    components: {
    AboutComponent: () => import('@/components/AboutComponent'),
    }
}
</script>