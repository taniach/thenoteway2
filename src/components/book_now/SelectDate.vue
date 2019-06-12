<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 text-xs-center display-1 font-weight-black my-5>
                Select Date &amp; Time
            </v-flex>
        </v-layout>
        
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex xs12 sm12 md6>
                    <div id="datepicker">
                        <v-date-picker
                        v-model="date"
                        width="290"
                        class="mt-3"
                        ></v-date-picker>
                    </div>
                </v-flex>
                <v-flex xs12 sm12 md6>
                    <div id="timepicker">
                        <v-data-table
                            v-model="selected"
                            :headers="headers"
                            :items="timeslots"
                            item-key="name"
                            select-all
                            class="elevation-1"
                        >
                            <template v-slot:items="props">
                                <td>
                                    <v-checkbox
                                    v-model="props.selected"
                                    primary
                                    hide-details
                                    ></v-checkbox>
                                </td>
                                <td>{{ props.item.name }}</td>
                                <td v-if="props.item.availability === 50">
                                    <span class="green-font">
                                        {{ props.item.availability }} Seats Available
                                    </span>
                                </td>
                                <td v-else-if="props.item.availability === 0">
                                    <span class="red-font">
                                        {{ props.item.availability }} Seats Available
                                    </span>
                                </td>
                                <td v-else>
                                    <span class="orange-font">
                                        {{ props.item.availability }} Seats Available
                                    </span>
                                </td>
                            </template>
                        </v-data-table>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      selected: [],
        headers: [
          {
            text: 'Time',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { 
              text: 'Availability', 
              align: 'center',
            sortable: false,
              value: 'availability' 
            }
        ],
        timeslots: [
          {
            id: 900,
            name: '9.00am - 9.30am',
            availability: 50
          },
          {
            id: 930,
            name: '9.30am - 10.00am',
            availability: 50
          },
          {
            id: 1000,
            name: '10.00am - 10.30am',
            availability: 50
          },
          {
            id: 1030,
            name: '10.30am - 11.00am',
            availability: 50
          },
          {
            id: 1100,
            name: '11.00am - 11.30am',
            availability: 40
          },
          {
            id: 1130,
            name: '11.30am - 12.00pm',
            availability: 40
          },
          {
            id: 1200,
            name: '12.00pm - 12.30pm',
            availability: 35
          },
          {
            id: 1230,
            name: '12.30pm - 1.00pm',
            availability: 35
          },
          {
            id: 1300,
            name: '1.00pm - 1.30pm',
            availability: 45
          },
          {
            id: 1330,
            name: '1.30pm - 2.00pm',
            availability: 45
          },
          {
            id: 1400,
            name: '2.00pm - 2.30pm',
            availability: 0
          },
          {
            id: 1430,
            name: '2.30pm - 3.00pm',
            availability: 0
          },
          {
            id: 1500,
            name: '3.00pm - 3.30pm',
            availability: 0
          },
          {
            id: 1530,
            name: '3.30pm - 4.00pm',
            availability: 0
          },
          {
            id: 1600,
            name: '4.00pm - 4.30pm',
            availability: 20
          },
          {
            id: 1630,
            name: '4.30pm - 5.00pm',
            availability: 20
          },
          {
            id: 1700,
            name: '5.00pm - 5.30pm',
            availability: 20
          },
          {
            id: 1730,
            name: '5.30pm - 6.00pm',
            availability: 20
          },
          {
            id: 1800,
            name: '6.00pm - 6.30pm',
            availability: 25
          },
          {
            id: 1830,
            name: '6.30pm - 7.00pm',
            availability: 25
          },
          {
            id: 1900,
            name: '7.00pm - 7.30pm',
            availability: 15
          },
          {
            id: 1930,
            name: '7.30pm - 8.00pm',
            availability: 15
          },
          {
            id: 2000,
            name: '8.00pm - 8.30pm',
            availability: 33
          },
          {
            id: 2030,
            name: '8.30pm - 9.00pm',
            availability: 33
          },
          {
            id: 2100,
            name: '9.00pm - 9.30pm',
            availability: 33
          }
        ]
    })
  }
</script>

<style scoped>
#datetimepicker {
    margin: auto;
}

#timepicker {
    margin-top: 20px;
}

.green-font {
    color: green;
}

.red-font {
    color: maroon;
}

.orange-font {
    color: darkorange;
}
</style>
