<template>
    <span>
        <popular-activities></popular-activities>
        <planning-an-event></planning-an-event>
        <what-people-say></what-people-say>
        <gallery></gallery>
    </span>
</template>

<script>
import PopularActivities from '@/components/PopularActivities';
import PlanningAnEvent from '@/components/PlanningAnEvent';
import WhatPeopleSay from '@/components/WhatPeopleSay';
import Gallery from '@/components/Gallery';

export default {
    name: 'home',
    components: {
        PopularActivities,
        PlanningAnEvent,
        WhatPeopleSay,
        Gallery
    }
};
</script>