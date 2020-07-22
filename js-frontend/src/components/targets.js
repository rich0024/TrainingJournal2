class Targets {
    constructor() {
        this.targets = []
        this.adapter = new TargetsAdapter()
        this.fetchAndLoadTargets
    }

    fetchAndLoadTargets() {
        this.adapter
            .getTargets()
            .then(targets => {
                console.log(targets)
                //targets.forEach(target => this.targets.push(target))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const targetsContainer = document.getElementById('targets-container')
        targetsContainer.innerHTML = 'test'
    }
}