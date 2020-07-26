class Targets {
    constructor() {
        this.targets = []
        this.adapter = new TargetsAdapter()
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadTargets()
    }

    initiBindingsAndEventListeners() {
        this.targetsDrop = document.getElementById('target-select')
        this.newTarget = document.getElementById('new-target')
        this.targetForm = document.getElementById('new-target-form')
        this.targetForm.addEventListener('submit', this.createTarget.bind(this))
        this.targetsDrop.addEventListener('change', this.getWorkouts.bind(this))
    }

    createTarget(e) {
        e.preventDefault()
        const value = this.newTarget.value

        this.adapter.createTarget(value).then(target => {
            this.targets.push(new Target(target))
            this.newTarget.value = ''
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
        console.log(`${input}`)
    }
}
console.log('test targets')