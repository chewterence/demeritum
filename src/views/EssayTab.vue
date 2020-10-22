<template>
    <div>
      <Segment1 />
      <Segment2 />
      <Segment3 />

    </div>
</template>

<script>

export default {
    name: 'Essay',
    components: {
    Segment1: () => import('@/components/Segment1'),
    Segment2: () => import('@/components/Segment2'),
    Segment3: () => import('@/components/Segment3'),
    }
}
</script>
