console.log("yes")
const element = [
    {
        title: "senior javascript developer",
        location: "Lagos, Nigeria",
        price: 400000,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia, unde, quaerat quis nulla, odio reiciendis esse reprehenderit error incidunt amet necessitatibus adipisci minima expedita rerum praesentium architecto assumenda molestias?"
    },
    {
        title: "Juinor javascript developer",
        location: "Lagos, Nigeria",
        price: 150000,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia, unde, quaerat quis nulla, odio reiciendis esse reprehenderit error incidunt amet necessitatibus adipisci minima expedita rerum praesentium architecto assumenda molestias?"
    },
    {
        title: "senior Lavarel developer",
        location: "Lagos, Nigeria",
        price: 100000,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia, unde, quaerat quis nulla, odio reiciendis esse reprehenderit error incidunt amet necessitatibus adipisci minima expedita rerum praesentium architecto assumenda molestias?"
    },
    {
        title: "senior Ruby developer",
        location: "Lagos, Nigeria",
        price: 45000,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia, unde, quaerat quis nulla, odio reiciendis esse reprehenderit error incidunt amet necessitatibus adipisci minima expedita rerum praesentium architecto assumenda molestias?"
    },
    {
        title: "senior Python developer",
        location: "Lagos, Nigeria",
        price: 400000,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia, unde, quaerat quis nulla, odio reiciendis esse reprehenderit error incidunt amet necessitatibus adipisci minima expedita rerum praesentium architecto assumenda molestias?"
    },
    {
        title: "senior Python developer",
        location: "Lagos, Nigeria",
        price: 400000,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia, unde, quaerat quis nulla, odio reiciendis esse reprehenderit error incidunt amet necessitatibus adipisci minima expedita rerum praesentium architecto assumenda molestias?"
    },
    {
        title: "senior Python developer",
        location: "Lagos, Nigeria",
        price: 400000,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia, unde, quaerat quis nulla, odio reiciendis esse reprehenderit error incidunt amet necessitatibus adipisci minima expedita rerum praesentium architecto assumenda molestias?"
    },
    {
        title: "junior Python developer",
        location: "Lagos, Nigeria",
        price: 10000,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia, unde, quaerat quis nulla, odio reiciendis esse reprehenderit error incidunt amet necessitatibus adipisci minima expedita rerum praesentium architecto assumenda molestias?"
    },
    {
        title: "middle Python developer",
        location: "Lagos, Nigeria",
        price: 120000,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia, unde, quaerat quis nulla, odio reiciendis esse reprehenderit error incidunt amet necessitatibus adipisci minima expedita rerum praesentium architecto assumenda molestias?"
    },
]

const divElement = document.getElementById("jobs");

function pagination() {
    const chuckSize = 4
    const jobArray = []
    for(let i=0; i < element.length; i += chuckSize) {
        jobArray.push(element.slice(i, i + chuckSize))
    }
    console.log(jobArray.length)
    const arrayLength = jobArray.length
    let count = 0;
    function togglebtn(count) {

        jobArray[count].map((job) => {
            const divElement = document.createElement("div")
            divElement.classList= "cards"
            const h2Element = document.createElement("h2")
            h2Element.textContent= job.title
            const paragraphElement = document.createElement("p")
            paragraphElement.textContent= job.desc
            const priceElement = document.createElement("p")
            priceElement.textContent= job.price
            const btnElement = document.createElement("button")
            btnElement.textContent= "Apply Now"
            divElement.appendChild(h2Element)
            divElement.appendChild(paragraphElement)
            divElement.appendChild(btnElement)
            document.getElementById("jobs").appendChild(divElement)
        })
    }
togglebtn(count)
    const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
prevButton.addEventListener('click', (e) => {
    if(count < arrayLength-1) {
        count-=1
        console.log("prev", count)

    } else {
        console.log("false")
    }
})
nextButton.addEventListener('click', (e) => {
    if(count <= arrayLength-1) {
        count+=1
        
        console.log("next", count , arrayLength)

    } else {
        console.log("false", count)
        e.target.style="disabled"
    }
})
}
pagination()


