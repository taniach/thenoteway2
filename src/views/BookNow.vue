<template>
    <span>
        <group-size></group-size>
        <choose-activities></choose-activities>
    </span>
</template>
<script>
import GroupSize from '@/components/book_now/GroupSize';
import ChooseActivities from '@/components/book_now/ChooseActivities';

export default {
    name: 'BookNow',
    components: {
        GroupSize,
        ChooseActivities
    }
};
</script>
<style scoped>
</style>