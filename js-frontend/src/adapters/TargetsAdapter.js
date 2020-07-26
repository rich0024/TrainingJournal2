class TargetsAdapter {
    constructor() {
        this.baseurl = 'http://localhost:3000/api/targets'
    }

    getTargets() {
        return fetch(this.baseurl).then(res => res.json()
        )
    }

    createTarget(value) {
        const target = {
            name: value,
          }

        return fetch('http://localhost:3000/api/targets', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({ target }),
        })
        .then(response => response.json())
    }
}
console.log('test target adapter')