import RecipeCard from './RecipeCard.tsx';

import Styles from './recipeList.module.scss';

interface Recipes {
  recipes: any,
  email: string,
}

interface Recipe {
  id: string,
  name: string,
  description: string,
  ingredientsArray: Array<string>,
  email: string,
}

function RecipeList({
  recipes,
  email,
}: Recipes) {
  return (
    <>
      <div className={Styles.listWrapper}>
        {recipes.map((recipe: Recipe) => {
          const {
            name,
            description,
            ingredientsArray,
            id,
          } = recipe;
          
          return (
            <RecipeCard
              title={name}
              description={description}
              ingredients={ingredientsArray}
              email={email}
              id={id}
              key={name}
            />
          )
        })}
      </div>
    </>
  );
}

export default RecipeList;
