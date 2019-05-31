<template>
    <span>
        <popular-activities></popular-activities>
    </span>
</template>

<script>
import PopularActivities from '@/components/PopularActivities';

export default {
    name: 'home',
    components: {
        PopularActivities
    }
};
</script>