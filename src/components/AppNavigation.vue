<template>
    <span>
        <v-navigation-drawer app v-model="drawer" id="nav-drawer" dark temporary disable-resize-watcher>
            <v-list>

                <v-list-group
                    v-for="item in menuItemsWithNestedItems"
                    :key="item.title"
                    v-model="item.active"
                    no-action
                >
                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>

                    <v-list-tile
                        v-for="subItem in item.items"
                        :key="subItem.title"
                        @click=""
                    >
                        <v-list-tile-content>
                            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>

                <v-list-tile
                    v-for="item in menuItems"
                    :key="item.title"
                    @click=""
                >

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            
        </v-navigation-drawer>

        <v-toolbar app color="#ffffff">
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title><img src="@/assets/logo.png" id="navbar-logo"></v-toolbar-title>

            <v-menu offset-y class="hidden-sm-and-down">
                <template v-slot:activator="{ on }">
                    <v-btn flat v-on="on" class="hidden-sm-and-down custom-btn">Activities <v-icon>mdi-chevron-down</v-icon></v-btn>
                </template>
                <v-list>
                    <v-list-tile
                    v-for="(item, index) in activitiesItems"
                    :key="index"
                    @click=""
                    >
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>

            <v-menu offset-y class="hidden-sm-and-down">
                <template v-slot:activator="{ on }">
                    <v-btn flat v-on="on" class="hidden-sm-and-down custom-btn">Events <v-icon>mdi-chevron-down</v-icon></v-btn>
                </template>
                <v-list>
                    <v-list-tile
                    v-for="(item, index) in eventsItems"
                    :key="index"
                    @click=""
                    >
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>

            <v-btn flat class="hidden-sm-and-down custom-btn">Calendar</v-btn>
            <v-btn flat class="hidden-sm-and-down custom-btn">Blog</v-btn>
            <v-btn flat class="hidden-sm-and-down custom-btn">Contact</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn class="hidden-sm-and-down" id="login-btn" dark>Login</v-btn>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'The Noteway Art Studio',
            drawer: false,
            menuItemsWithNestedItems: [
                {
                    title: 'Activities',
                    items: [
                        { title: 'Art Jamming With A Twist' },
                        { title: 'Sand Art Workshop' },
                        { title: 'Paper Quilling Workshop' },
                        { title: 'Clay Workshop' },
                        { title: 'Kids ARTVenture Programme' }
                    ]
                },
                {
                    title: 'Events',
                    items: [
                        { title: 'Corporate Team Bonding' },
                        { title: 'Birthday Parties' },
                        { title: 'Baby Showers' },
                        { title: 'Just The Venue' },
                        { title: 'Catering' }
                    ]
                },
            ],
            menuItems: [
                { title: 'Calendar' },
                { title: 'Blog' },
                { title: 'Contact' },
                { title: 'Login' }
            ],
            activitiesItems: [
                { title: 'Art Jamming With A Twist' },
                { title: 'Sand Art Workshop' },
                { title: 'Paper Quilling Workshop' },
                { title: 'Clay Workshop' },
                { title: 'Kids ARTVenture Programme' }
            ],
            eventsItems: [
                { title: 'Corporate Team Bonding' },
                { title: 'Birthday Parties' },
                { title: 'Baby Showers' },
                { title: 'Just The Venue' },
                { title: 'Catering' }
            ]
        };
    }
};
</script>

<style scoped>
img#navbar-logo {
    max-height: 45px;
    vertical-align: middle;
}

.custom-btn::before {
    color: transparent;
}

.custom-btn:hover {
    color: #F96900;
}

#nav-drawer {
    background-color: #F96900;
}

#login-btn {
    background-color: #F96900;
}

</style>