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
      <div className={Styles.card}>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          <li>{ingredients}</li>
        </ul>
      </div>
    </>
  );
}

export default RecipeCard;
