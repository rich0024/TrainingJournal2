class Workouts {
    constructor(input) {
        this.workouts = []
        this.workoutAdapter = new WorkoutsAdapter()
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadWorkouts(input)
    }

    initiBindingsAndEventListeners() {
        this.workoutsContainer = document.getElementById('workouts-container')
        this.journal = document.getElementById('container')
    }

    fetchAndLoadWorkouts(input) {
        this.workoutAdapter
        .getWorkouts()
            .then(workouts => {
                workouts.forEach(workout => this.workouts.push(new Workout(workout)))
        })
        .then(() => {
            this.workoutRender(input)
        })
    }

    addToJournal(e) {
        const workoutId = e.target.value
        let selected = this.filteredWorkouts.find(workout => workout.id == workoutId)
        let li = document.createElement('li')
        let button = document.createElement('button')
        li.setAttribute('id', `${selected.id}`)
        li.innerHTML = `<p>${selected.name} - ${selected.details}</p>`
        button.innerHTML = 'remove'
        button.setAttribute('id', `${selected.id}`)
        button.addEventListener("click", this.clearLog.bind(this))
        li.appendChild(button)
        this.journal.appendChild(li)
    }

    clearLog(e) {
        document.getElementById(`${e.target.id}`).remove()
    }

    workoutRender(input) {
        this.filteredWorkouts = this.workouts.filter(workout => workout.target_id == input)
        this.workoutsContainer.innerHTML = this.filteredWorkouts.map(workout => `<li>${workout.name} - ${workout.details}<button id=add value=${workout.id}>add</button></li>`).join('');
        this.initiBindingsAndEventListeners2()
    }

    initiBindingsAndEventListeners2() {
        document.querySelectorAll('#add').forEach(addButton => addButton.addEventListener('click', this.addToJournal.bind(this)))
    }

}