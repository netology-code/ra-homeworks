'use strict';

const CardsView = (props) => {
  const { layout, cards } = props;

  const getLayoutClasses = layout => {
    return Object.keys(layout).map(key => `col-${key}-${layout[key]}`).join(" ");
  };

  const layoutClasses = getLayoutClasses(layout);
  const renderCards = (cards) => {
    return cards.map((card, i) => {
      return (
        <div className={layoutClasses} key={`card-${i}`}>
          {card}
        </div>
      );
    });
  };

  return (
    <div className="row">
      {renderCards(cards)}
    </div>
  );
};
