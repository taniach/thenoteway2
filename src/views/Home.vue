<template>
    <span>
        <popular-activities></popular-activities>
        <home-hero></home-hero>
        <home-details></home-details>
        <home-plans></home-plans>
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomePlans from '@/components/HomePlans';
import PopularActivities from '@/components/PopularActivities';

export default {
    name: 'home',
    components: {
        PopularActivities,
        HomeHero,
        HomeDetails,
        HomePlans
    }
};
</script>