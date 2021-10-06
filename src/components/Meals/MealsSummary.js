import classes from './MealsSummary.module.css';

import sceneImage from '../../assets/scene.svg'

const MealsSummary = () => {
  return (
    <div className={classes.mealssummary}>
      <img src={sceneImage} alt='Scene of Order' />
      <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time and
          of course by experienced chefs!
        </p>
      </section>
    </div>
  );
};

export default MealsSummary;
