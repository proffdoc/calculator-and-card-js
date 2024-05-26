const container = document.createElement('div');
container.style.display = 'flex';
container.style.justifyContent = 'space-around';
container.style.marginTop = '50px';

const cardsData = [
  { name: 'Twitter',  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { name: 'Instagram',  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { name: 'YouTube',  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
];

function createCard(cardData) {
  const card = document.createElement('div');
  card.style.border = '1px solid #ccc';
  card.style.borderRadius = '10px';
  card.style.padding = '20px';
  card.style.width = '200px';
  card.style.textAlign = 'center';

  const icon = document.createElement('div');
  icon.textContent = cardData.icon;
  icon.style.fontSize = '50px';

  const name = document.createElement('h3');
  name.textContent = cardData.name;

  const content = document.createElement('p');
  content.textContent = cardData.content;

  const button = document.createElement('button');
  button.textContent = 'READ MORE';
  button.style.marginTop = '20px';

  card.appendChild(name);
  card.appendChild(content);
  card.appendChild(button);

  return card;
}

cardsData.forEach(cardData => {
  const card = createCard(cardData);
  container.appendChild(card);
});

document.body.appendChild(container);