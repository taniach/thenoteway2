<template>
    <span>
        <group-size></group-size>
        <choose-activities></choose-activities>
        <select-options></select-options>
    </span>
</template>
<script>
import GroupSize from '@/components/book_now/GroupSize';
import ChooseActivities from '@/components/book_now/ChooseActivities';
import SelectOptions from '@/components/book_now/SelectOptions';

export default {
    name: 'BookNow',
    components: {
        GroupSize,
        ChooseActivities,
        SelectOptions
    }
};
</script>
<style scoped>
</style>