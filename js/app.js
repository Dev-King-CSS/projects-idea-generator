import { data } from "./data.js"

const button = document.querySelector("#generate-new-idea-293085129")
const display_text = document.querySelector("#display-text-285070843")

window.addEventListener("load", generateIdea, { once: true })

button.addEventListener("click", generateIdea, { passive: true })

function generateIdea() {
  const { idea } = data[Math.floor(Math.random() * data.length)]
  display_text.textContent = idea
}
