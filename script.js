const cards = [
  { name: 'Purple', color: '#77567A', image: './images/Face_With_Rolling_Eyes_Emoji.png'},
  { name: 'Green', color: '#68A357', image: './images/Flushed_Face_Emoji.png' },
  { name: 'Pink', color: '#F79AD3', image: './images/Hungry_Face_Emoji.png' },
  { name: 'Blue', color: '#2F97C1', image: './images/Smiling_Emoji_with_Eyes_Opened.png' },
  { name: 'Red', color: '#F71735', image: './images/Sunglasses_Emoji.png' },
  { name: 'Orange', color: '#FF9F1C', image: './images/Tears_of_Joy_Emoji.png' },
  { name: 'White', color: '#FDFFFC', image: './images/Tongue_Out_Emoji_with_Winking_Eye.png' },
  { name: 'Lime', color: '#DBFE87', image: './images/Very_Angry_Emoji.png' },
  { name: 'Purple', color: '#77567A', image: './images/Face_With_Rolling_Eyes_Emoji.png'},
  { name: 'Green', color: '#68A357', image: './images/Flushed_Face_Emoji.png' },
  { name: 'Pink', color: '#F79AD3', image: './images/Hungry_Face_Emoji.png' },
  { name: 'Blue', color: '#2F97C1', image: './images/Smiling_Emoji_with_Eyes_Opened.png' },
  { name: 'Red', color: '#F71735', image: './images/Sunglasses_Emoji.png' },
  { name: 'Orange', color: '#FF9F1C', image: './images/Tears_of_Joy_Emoji.png' },
  { name: 'White', color: '#FDFFFC', image: './images/Tongue_Out_Emoji_with_Winking_Eye.png' },
  { name: 'Lime', color: '#DBFE87', image: './images/Very_Angry_Emoji.png' }
]
// Shuffle the array:
function compareRandom(a, b) {
  return Math.random() - 0.5 ;
}

cards.sort(compareRandom);
// End shuffle

const container = document.querySelector('.container')

function createCard(image, color){
  const card = `
  <div class="card" data-color="${color}">
   <img src="${image}">
  </div>
  `
  container.innerHTML += card
}

cards.forEach((value) => {
  createCard(value.image, value.color,)
});


const things = document.querySelectorAll('.card')
for (let i = 0; i < things.length; i++) {
  things[i].addEventListener('click', displayCard);
}

var displayCard = function (){
   this.classList.toggle("open");
   this.classList.toggle("show");
   this.classList.toggle("disabled");
}
