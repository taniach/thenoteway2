<template>
    <span>
        <popular-activities></popular-activities>
        <planning-an-event></planning-an-event>
        <what-people-say></what-people-say>
        <gallery></gallery>
        <blog-preview></blog-preview>
    </span>
</template>

<script>
import PopularActivities from '@/components/PopularActivities';
import PlanningAnEvent from '@/components/PlanningAnEvent';
import WhatPeopleSay from '@/components/WhatPeopleSay';
import Gallery from '@/components/Gallery';
import BlogPreview from '@/components/BlogPreview';

export default {
    name: 'home',
    components: {
        PopularActivities,
        PlanningAnEvent,
        WhatPeopleSay,
        Gallery,
        BlogPreview
    }
};
</script>