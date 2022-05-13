const destinations = document.querySelector(".destinations")
const taxiRankApp = document.querySelector(".taxiRankApp")
const saveBtn = document.getElementById('save')

let displayDestinations = taxiTemplate({
    rank: taxiRankApp.returnRankInfo()
});
const destinationInput = document.getElementById('usr')
saveBtn.addEventListener('click', () => {
    taxiRankApp.newDestination(destinationInput.value)
    let displayDestinations = taxiTemplate({
        rank: taxiRankApp.returnRankInfo()
    });
    destinations.innerHTML = displayDestinations
})
const newDestination = (destinationName) => {
    if (destinationName) {
        rank.push({
            destination: destinationName,
            queue: 0,
            departedTaxis: 0
        })
    }
    return {
        newDestination
    }
}