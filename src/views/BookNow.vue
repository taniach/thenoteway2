<template>
    <span>
        <group-size></group-size>
        <choose-activities></choose-activities>
        <select-options></select-options>
        <select-date></select-date>
    </span>
</template>
<script>
import GroupSize from '@/components/book_now/GroupSize';
import ChooseActivities from '@/components/book_now/ChooseActivities';
import SelectOptions from '@/components/book_now/SelectOptions';
import SelectDate from '@/components/book_now/SelectDate';

export default {
    name: 'BookNow',
    components: {
        GroupSize,
        ChooseActivities,
        SelectOptions,
        SelectDate
    }
};
</script>
<style scoped>
</style>