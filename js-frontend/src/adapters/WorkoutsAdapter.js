class WorkoutsAdapter {
    constructor() {
        this.baseurl = "http://localhost:3000/api/workouts"
    }

    getWorkouts() {
        return fetch(this.baseurl).then(res => res.json()
        )
    }
}
