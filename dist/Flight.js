"use strict";
class Flight {
    constructor(id, type, date, spacecraft, capacity, duration) {
        this.crew = [];
        this.id = id;
        this.type = type;
        this.date = date;
        this.spacecraft = spacecraft;
        this.capacity = capacity;
        this.duration = duration;
    }
}
