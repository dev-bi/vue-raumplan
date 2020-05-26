const biRoomPlanNavigator = Vue.component('bi-room-plan-navigator', {
    template: `
        <div>
            <p>Du siehst gerade den Raumplan von {{ getCurrentFloor(true) }}</p>
            <div>
            <div class="msg msg-danger">{{ status }}</div>
            <button @click="down">Etage niedriger</button><button @click="up">Etage höher</button>
            </div>
        </div>
    `,
    data: function () {
        return {
            floor: ['KG', 'EG', 'OG 1', 'OG2'],
            currentFloor: 0,
            location: ['Nagelsweg 10', 'Nagelsweg 14', 'Rosenallee 21'],
            currentLocation: 0,
            status: ''
        };
    },
    methods: {
            getCurrentFloor(withFullAdress = false) { 
                if (withFullAdress) {
                    return `${this.location[this.currentLocation]} - Etage: ${this.floor[this.currentFloor]}`;
                }
                return this.floor[this.currentFloor];
            },
            up() {
                if(this.currentFloor < this.floor.length - 1) {
                    console.log(this.currentFloor);
                    console.log(this.floor.length - 1);
                    this.currentFloor += 1;
                }
            },
            down() {
                if(this.currentFloor > 0) {
                    this.currentFloor -= 1;
                }
            }
        }
});

const biFloorPlan = Vue.component('bi-floor-plan', {
    template: `<div><div v-html="roomdata" @click="where" @mouseover="selRoom" @mouseout="unselRoom"></div><div><button @click="getRoomData">Hole Raumdaten</button></div></div>`,
    data: function () {
        return {
            roomdata: 'Keine Raumdaten',
        };
    },
    methods: {
        getRoomData() {
            fetch('http://localhost/vue-tuts/api/roomdata')
            .then((response) => response.text())
            .then((data) => {
                this.roomdata = data;
            });
        },
        selRoom(event) {
            if(event.currentTarget.className == 'room') {
                console.log(event.currentTarget);
            }
        },
        unselRoom(event) {
            //todo
        },
        where(event) {
            var elements = event.currentTarget.getElementsByClassName('room');
            console.log(event.target);
        }
    }
});

const app = new Vue({
    el: '#app',
    data: {
        roomdata: `Keine Raumdaten geladen`,
    },
});