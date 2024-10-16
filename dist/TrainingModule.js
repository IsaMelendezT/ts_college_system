"use strict";
class TrainingModule {
    constructor(id, name, description, duration) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.status = new TrainingStatus();
    }
}
