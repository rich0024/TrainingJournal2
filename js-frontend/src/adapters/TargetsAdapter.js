class TargetsAdapter {
    constructor() {
        this.baseurl = "http://localhost:3000/api/targets"
    }

    getTargets() {
        return fetch(this.baseurl).then(res => res.json())
    }
}
