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
                        @click="{}"
                    >
                        <router-link :to="subItem.link" class="mobile-menu">
                            <v-list-tile-content :to="subItem.link">
                                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </router-link>
                    </v-list-tile>
                </v-list-group>

                <v-list-tile
                    v-for="item in menuItems"
                    :key="item.title"
                    @click="{}"
                >
                    <router-link :to="item.link" class="mobile-menu">
                        <v-list-tile-content :to="item.link">
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </router-link>
                </v-list-tile>
            </v-list>
            
        </v-navigation-drawer>

        <v-toolbar app color="#ffffff">
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title to="/"><img src="@/assets/logo.png" id="navbar-logo"></v-toolbar-title>
            </router-link>

            <v-menu offset-y class="hidden-sm-and-down">
                <template v-slot:activator="{ on }">
                    <v-btn flat v-on="on" class="hidden-sm-and-down custom-btn">Activities <v-icon>mdi-chevron-down</v-icon></v-btn>
                </template>
                <v-list>
                    <v-list-tile
                    v-for="(item, index) in activitiesItems"
                    :key="index"
                    @click="{}"
                    >
                    <router-link :to="item.link" class="desktop-menu">
                        <v-list-tile-title :to="item.link">{{ item.title }}</v-list-tile-title>
                    </router-link>
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
                    @click="{}"
                    >
                    <router-link :to="item.link" class="desktop-menu">
                        <v-list-tile-title :to="item.link">{{ item.title }}</v-list-tile-title>
                    </router-link>
                    </v-list-tile>
                </v-list>
            </v-menu>

            <v-btn flat class="hidden-sm-and-down custom-btn" to="/book-now">Book Now</v-btn>
            <v-btn flat class="hidden-sm-and-down custom-btn" to="/blog">Blog</v-btn>
            <v-btn flat class="hidden-sm-and-down custom-btn" to="/contact">Contact</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn class="hidden-sm-and-down" id="login-btn" dark to="/login">Login</v-btn>
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
                        { title: 'Art Jamming With A Twist', link: '/art-jamming-with-a-twist' },
                        { title: 'Sand Art Workshop', link: '/sand-art-workshop' },
                        { title: 'Paper Quilling Workshop', link: '/paper-quilling-workshop' },
                        { title: 'Clay Workshop', link: '/clay-workshop' }
                    ]
                },
                {
                    title: 'Events',
                    items: [
                        { title: 'Corporate Team Bonding', link: '/corporate-team-bonding' },
                        { title: 'Birthday Parties', link: '/birthday-parties' },
                        { title: 'Just The Venue', link: '/just-the-venue' },
                        { title: 'Catering', link: '/catering' }
                    ]
                },
            ],
            menuItems: [
                { title: 'Book Now', link: '/book-now' },
                { title: 'Blog', link: '/blog' },
                { title: 'Contact', link: '/contact' },
                { title: 'Login', link: '/login' }
            ],
            activitiesItems: [
                { title: 'Art Jamming With A Twist', link: '/art-jamming-with-a-twist' },
                { title: 'Sand Art Workshop', link: '/sand-art-workshop' },
                { title: 'Paper Quilling Workshop', link: '/paper-quilling-workshop' },
                { title: 'Clay Workshop', link: '/clay-workshop' }
            ],
            eventsItems: [
                { title: 'Corporate Team Bonding', link: '/corporate-team-bonding' },
                { title: 'Birthday Parties', link: '/birthday-parties' },
                { title: 'Just The Venue', link: '/just-the-venue' },
                { title: 'Catering', link: '/catering' }
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

a.mobile-menu {
    color: white;
    text-decoration: none;
}

a.desktop-menu {
    color: black;
    text-decoration: none;
}
</style>