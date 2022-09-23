import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click", (clickEvent) => {
        const itemClicked = clickEvent.target
            if (itemClicked.id.startsWith("pet")) { // "pet" specified the target
                const [, petPrimaryKey] = itemClicked.id.split("--") 
                // deconstructing method here

            let matchingPet = null
            for (const pet of pets) {
                if(parseInt(petPrimaryKey) === pet.id) {
                    matchingPet = pet
                    // petName = pet.name
                    // walkerId = pet.walkerId
                    // window.alert(`${matchingPet} is being walked by ${matchingWalker}!`)
                }
            }

            let matchingWalker = null
            for (const walker of walkers) {
                if(matchingPet.walkerId === walker.id) {
                    matchingWalker = walker
                    // petName = pet.name
                    // walkerId = pet.walkerId
                }
            }

            window.alert(`${matchingPet.name} is being walked by ${matchingWalker.name}!`)
        }
    }
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        // petHTML += `<li>${pet.name}</li>`
        petHTML += `<li id=pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}


// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8" />
//     <title>Bey's Blog</title>
//     <link rel="stylesheet" href="./styles/main.css" />
//   </head>

//   <body>
//     <header>
//       <h1>This is Bey's Blog</h1>
//     </header>

//     <main id="container">
//       <div id="content">
//         <section id="articles"></section>

//         <section id="authors"></section>

//       <section id="categories"></section>
//     </div>
//     </main>

//     <script type="module" src="./scripts/main.js"></script>
//   </body>
// </html>