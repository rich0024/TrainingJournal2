class WorkoutsAdapter {
    constructor() {
        this.baseurl = "http://localhost:3000/api/workouts"
    }

    getWorkouts() {
        return fetch(this.baseurl).then(res => res.json()
        )
    }

    createWorkout(value) {
        const workout = {
            name: value.name,
            details: value.details,
            target_id: value.target_id
          }

        return fetch('http://localhost:3000/api/workouts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(
                {workout: 
                    {
                        name: workout.name,
                        details: workout.details, 
                        target_id: workout.target_id
                    } 
                }),
            }).then(response => response.json())
        }
    }