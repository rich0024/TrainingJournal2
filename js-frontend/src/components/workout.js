class Workout {
    constructor(workoutJSON) {
      this.id = workoutJSON.id
      this.name = workoutJSON.name
      this.details = workoutJSON.details
      this.target_id = workoutJSON.target_id
    }
}