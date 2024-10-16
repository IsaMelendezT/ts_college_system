"use strict";
class Spacecraft {
    constructor(id, name, model, capacity) {
        this.id = id;
        this.name = name;
        this.model = model;
        this.capacity = capacity;
        this.status = SpacecraftStatus.OPERATIONAL;
    }
}
