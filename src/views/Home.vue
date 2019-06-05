<template>
    <span>
        <popular-activities></popular-activities>
        <planning-an-event></planning-an-event>
        <what-people-say></what-people-say>
        <gallery></gallery>
        <blog-preview></blog-preview>
        <stay-in-touch></stay-in-touch>
    </span>
</template>

<script>
import PopularActivities from '@/components/PopularActivities';
import PlanningAnEvent from '@/components/PlanningAnEvent';
import WhatPeopleSay from '@/components/WhatPeopleSay';
import Gallery from '@/components/Gallery';
import BlogPreview from '@/components/BlogPreview';
import StayInTouch from '@/components/StayInTouch';

export default {
    name: 'home',
    components: {
        PopularActivities,
        PlanningAnEvent,
        WhatPeopleSay,
        Gallery,
        BlogPreview,
        StayInTouch
    }
};
</script>