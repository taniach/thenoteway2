<template>
    <span>
        <popular-activities></popular-activities>
        <planning-an-event></planning-an-event>
        <what-people-say></what-people-say>
    </span>
</template>

<script>
import PopularActivities from '@/components/PopularActivities';
import PlanningAnEvent from '@/components/PlanningAnEvent';
import WhatPeopleSay from '@/components/WhatPeopleSay';

export default {
    name: 'home',
    components: {
        PopularActivities,
        PlanningAnEvent,
        WhatPeopleSay
    }
};
</script>