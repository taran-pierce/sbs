import Styles from './recipeCard.module.scss'

function RecipeCard({
  title,
  description,
  ingredients,
}: {
  title: string,
  description: string,
  ingredients: Array<string>,
}) {
  return (
    <>
      <div className={Styles.wrapper}>
        <h4>{title}</h4>
        <p>{description}</p>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default RecipeCard;
