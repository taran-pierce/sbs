import Styles from './recipeCard.module.scss'

function RecipeCard({
  title,
  description,
  ingredients,
  id,
  email,
}: {
  title: string,
  description: string,
  ingredients: Array<string>,
  id: string,
  email: string,
}) {
  return (
    <>
      <div className={Styles.card}>
        <div className={Styles.titleWrapper}>
          <div>
            <h3>{title}</h3>
          </div>
          <div>
            <button
            >
              Favorite
            </button>
            {/* <form action={`/api/favorite/`} method="get">
              <input type="hidden" id={`id-${id}`} value={id} />
              <input type="hidden" id={`email-${id}`} value={email} />
              <button type="submit">Favorite</button>
            </form> */}
          </div>
        </div>
        <div className={Styles.textWrapper}>
          <p>{description}</p>
          <ul>
            {ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
