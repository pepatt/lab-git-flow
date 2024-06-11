const poems = [
  {
    author: "Cece",
    poem: "Roses are red \n Violets are blue \n Sunflowers are yellow \n I bet you were expecting something romantic but no -- these are just gardening facts.",
    image: "sunflower.jpeg",
  },
  {
    author: "Anvit",
    poem: "Roses are red \n Pizza sauce is too \n I ordered a large \n None of it is for you ",
    image: "pizza.jpeg",
  },
  {
    author: "Ernie",
    poem: "Roses are red \n Violets are blue \n Jerry Seinfeld is considering \n Making Bee Movie 2",
    image: "bee.jpeg",
  },  
  {
    author: "Robert Green",
    poem: "48 laws",
    image: "bee.jpeg",
  },  
  {
    author: "Ching Hang",
    poem: "Roses are red \n Violets are red \n Everything is red",
    image: "red_world.jpg",
  },
  {
    author: "Tymur", 
    poem: "In coils of green, Python slithers, nature's code.",
    image: "python.jpg"
  },
  {
    author: "Keats",
    poem: "My heart aches, and a drowsy numbness pains \n  My sense, as though of hemlock I had drunk, \n Or emptied some dull opiate to the drains \n   One minute past, and Lethe-wards had sunk:",
    image:"keats.jpeg"
  },
];

let displayPoems = (array) => {
  let html = "";
  let poemDiv = document.getElementById("poems");

  poemArray = array.forEach((poem) => {
    html += `
    <div class="poem">
        <img class="poem__image" src="./assets/${poem.image}"/>
        <div class="poem__author">
            Author: ${poem.author}
        </div>
        <div class="poem__content">
            ${poem.poem}
        </div>
    </div>
    `;
  });

  poemDiv.innerHTML = html;
};

displayPoems(poems);
