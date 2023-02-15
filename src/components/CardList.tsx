import { cards } from '../constants';
import { CardItem } from '.';

const CardList = () => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
      {cards.map(
        ({ id, stateOfPrice, description, valueOfState, icon, price }) => {
          return (
            <CardItem
              key={id}
              stateOfPrice={stateOfPrice}
              description={description}
              valueOfState={valueOfState}
              icon={icon}
              price={price}
            />
          );
        },
      )}
    </ul>
  );
};

export default CardList;
