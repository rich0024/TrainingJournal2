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
        // this.addButton = document.querySelector('button')
        // this.addButton.addEventListener('onclick', this.addToJournal(this))
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
        console.log(`${input}`)
    }

    addToJournal(e) {
        const workoutId = e.target.value
        let selected = this.filteredWorkouts.find(workout => workout.id == workoutId)
        let div = document.createElement('div')
        div.setAttribute('id', 'journal')
        div.innerHTML = `<p>${selected.name} - ${selected.details}</p>`
        div.addEventListener("click", this.clearLog.bind(this))
        this.journal.appendChild(div)
        console.log(`${selected.name}`)
    }

    clearLog() {
        document.getElementById('journal').remove()
    }

    workoutRender(input) {
        this.filteredWorkouts = this.workouts.filter(workout => workout.target_id == input)
        this.workoutsContainer.innerHTML = this.filteredWorkouts.map(workout => `<li>${workout.name} - ${workout.details}<button id=add value=${workout.id}>add</button></li>`).join('');
        this.initiBindingsAndEventListeners2()
        // console.log(`${this.filteredWorkouts}`)
        // console.log(`${input}`)
    }

    initiBindingsAndEventListeners2() {
        // console.log('bind2')
        document.querySelectorAll('#add').forEach(addButton => addButton.addEventListener('click', this.addToJournal.bind(this)))
    }

    // removeWorkout(div) {
    //     // let div = e.target.dataset['id']
    //     this.journal.removeChild(div)
    //     // console.log(`${e.target.dataset}`)
    //     // e.target.deleteChild(div)
    // }


}
console.log('test workouts')