<template>
    <div>
      <M1 />
      <M2 />
      <M3 />
      <M4 />
    </div>
</template>

<script>

export default {
    name: 'Mechanics',
    components: {
    M1: () => import('@/components/mechanics/M1'),
    M2: () => import('@/components/mechanics/M2'),
    M3: () => import('@/components/mechanics/M3'),
    M4: () => import('@/components/mechanics/M4'),
    }
}
</script>
