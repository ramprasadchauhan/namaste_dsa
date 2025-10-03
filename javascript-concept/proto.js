let arr = ["ram", "pratik", "ravi"];
let object = {
    name: "John",
    city: "New York",
    getIntro: function () {
        console.log(this.name + " is from " + this.city)
    }
}