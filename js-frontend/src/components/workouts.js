class Workouts {
    constructor(input) {
        this.workouts = []
        this.workoutAdapter = new WorkoutsAdapter()
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadWorkouts(input)
    }

    initiBindingsAndEventListeners() {
        this.workoutsContainer = document.getElementById('workouts-container')
    }

    fetchAndLoadWorkouts(input) {
        this.workoutAdapter
        .getWorkouts()
            .then(workouts => {
                workouts.forEach(workout => this.workouts.push(workout))
        })
        .then(() => {
            this.workoutRender(input)
        })
        console.log(`${input}`)
    }

    addToJournal(id) {
        console.log('word')
    }

    workoutRender(input) {
        console.log(`${this.workouts[1].name}`)
        this.filteredWorkouts = this.workouts.filter(workout => workout.target_id == input)
        this.workoutsContainer.innerHTML = this.filteredWorkouts.map(workout => `<li>${workout.name} - ${workout.details}   <button value=${workout.id}>add</button></li>`).join('')
        console.log(`${this.filteredWorkouts}`)
        console.log(`${input}`)
    }


}
console.log('test workouts')