const cards = [
  { id: 1, image: './assets/Face_With_Rolling_Eyes_Emoji.png'},
  { id: 2, image: './assets/Flushed_Face_Emoji.png' },
  { id: 3, image: './assets/Hungry_Face_Emoji.png' },
  { id: 4, image: './assets/Smiling_Emoji_with_Eyes_Opened.png' },
  { id: 5, image: './assets/Sunglasses_Emoji.png' },
  { id: 6, image: './assets/Tears_of_Joy_Emoji.png' },
  { id: 7, image: './assets/Tongue_Out_Emoji_with_Winking_Eye.png' },
  { id: 8, image: './assets/Very_Angry_Emoji.png' },
  { id: 1, image: './assets/Face_With_Rolling_Eyes_Emoji.png'},
  { id: 2, image: './assets/Flushed_Face_Emoji.png' },
  { id: 3, image: './assets/Hungry_Face_Emoji.png' },
  { id: 4, image: './assets/Smiling_Emoji_with_Eyes_Opened.png' },
  { id: 5, image: './assets/Sunglasses_Emoji.png' },
  { id: 6, image: './assets/Tears_of_Joy_Emoji.png' },
  { id: 7, image: './assets/Tongue_Out_Emoji_with_Winking_Eye.png' },
  { id: 8, image: './assets/Very_Angry_Emoji.png' }
]

const startBtn = document.querySelector('.startBtn')
const greeting = document.querySelector('.greeting')
const container = document.querySelector('.container')
const finished = document.querySelector('.finished-box')
const restartBtn = document.querySelector('.restartBtn')

let audio = new Audio('./assets/whistle-stop.mp3')

let solvedCards = []
let toggledCards = []
let animating = false;

startBtn.addEventListener('click', () => {
  startGame()
  container.classList.remove('hidden')
  greeting.style.display = "none"
})

restartBtn.addEventListener('click', () => {
  container.classList.remove('hidden')
  finished.style.display = "none";
  restartGame()
})

  // Shuffle the array:
function compareRandom(a, b) {
  return Math.random() - 0.5
}


function restartGame() {
  solvedCards = []
  container.innerHTML = ''
  startGame()
}

function startGame() {

  audio.loop = true
  audio.play()

  cards.sort(compareRandom);

  // Print the cards array

  const container = document.querySelector('.container')

  function createCard(id, image){
    const card = `
    <div data-id="${id}" class="card toggle-off">
      <div class="back"><img src="${image}"></div>
      <div class="front"></div>
    </div>
    `
    container.innerHTML += card
  }

  for (let i = 0; i < cards.length; i++) {
    createCard(cards[i].id, cards[i].image)
  }
  // End Print the cards array

  // Turn one card
  const cardElements = document.querySelectorAll('.container .card')
  for (let i = 0; i < cardElements.length; i++) {
    cardElements[i].addEventListener('click', () => {

      if (!animating) {
        if(!cardElements[i].classList.contains('toggle-on')){

          cardElements[i].classList.add('toggle-on')
          toggledCards.push(cardElements[i])


          if(toggledCards.length >= 2){
            if (toggledCards[0].getAttribute('data-id') === toggledCards[1].getAttribute('data-id')) {
              console.log('match');
              solvedCards = solvedCards.concat(toggledCards)

              if (solvedCards.length === 16) {
                finished.style.display = "flex";
                audio.pause()
                audio.currentTime = 0.0
              }

              toggledCards = []
            } else {
              animating = true;
              setTimeout(() => {
                toggledCards.forEach((card) => {
                  card.classList.remove('toggle-on')
                })
                toggledCards = []
                animating = false;
              }, 1300)
            }
          }
        } else {
          console.log('This card is already active')
        }
      }
    })
  }
}
// End Turn one card
