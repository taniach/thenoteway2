<template>
    <span>
        <popular-activities></popular-activities>
        <planning-an-event></planning-an-event>
    </span>
</template>

<script>
import PopularActivities from '@/components/PopularActivities';
import PlanningAnEvent from '@/components/PlanningAnEvent';

export default {
    name: 'home',
    components: {
        PopularActivities,
        PlanningAnEvent
    }
};
</script>