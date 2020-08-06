class Targets {
    constructor() {
        this.targets = []
        this.workouts = []
        this.adapter = new TargetsAdapter()
        this.workoutsAdapter = new WorkoutsAdapter()
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadTargets()
    }

    initiBindingsAndEventListeners() {
        this.targetsDrop = document.getElementById('target-select')
        this.newTarget = document.getElementById('new-target')
        this.targetForm = document.getElementById('new-target-form')
        this.newWorkoutForm = document.getElementById('new-workout-form')
        this.newWorkoutForm.addEventListener("submit", this.createWorkout.bind(this))
        this.targetForm.addEventListener('submit', this.createTarget.bind(this))
        this.targetsDrop.addEventListener('change', this.getWorkouts.bind(this))
    }

    createTarget(e) {
        e.preventDefault()
        const value = this.newTarget.value

        this.adapter.createTarget(value).then(target => {
            this.targets.push(new Target(target))
            this.newTarget.value = ''
            this.targetsDrop.innerHTML = '<option selected="selected">Select a target to see all associated workouts</option>'
            this.render()
        })
    }

    fetchAndLoadTargets() {
        this.adapter
            .getTargets()
            .then(targets => {
                targets.forEach(target => this.targets.push(target))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        this.targetsDrop.innerHTML =this.targetsDrop.innerHTML + this.targets.map(target => `<option value=${target.id}>${target.name}</option>`).join('')
    }

    getWorkouts(e) {
        let input = this.targetsDrop.value
        new Workouts(input)
        this.newWorkoutForm.style.visibility = "visible"
    }

    createWorkout(e) {
        e.preventDefault()
        const value = {
            name: e.target[0].value,
            details: e.target[1].value,
            target_id: e.target[2].value
        }
        this.workoutsAdapter.createWorkout(value).then(workout => {
            this.workouts.push(new Workout(workout))
            e.target[0].value = ''
            e.target[1].value = ''
            this.getWorkouts(value.target_id)
        })
    }
}