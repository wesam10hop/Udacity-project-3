const shuffle = (cards) => {
  if (!Array.isArray(cards)) {
    return [];
  }

  let currentIndex = cards.length;
  const shuffledCards = [...cards];

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [shuffledCards[currentIndex], shuffledCards[randomIndex]] = [
      shuffledCards[randomIndex],
      shuffledCards[currentIndex],
    ];
  }

  return shuffledCards;
};

export { shuffle };
