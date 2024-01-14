import RecipeCard from './RecipeCard.tsx';

import Styles from './RecipeList.module.scss';

interface Recipes {
  recipes: any,
}

interface Recipe {
  id: string,
  name: string,
  description: string,
  ingredients: Array<string>,
}

function RecipeList({
  recipes,
}: Recipes) {
  return (
    <>
      <div className={Styles.listWrapper}>
        {recipes.map((recipe: Recipe) => {
          const {
            name,
            description,
            ingredients
          } = recipe;
          
          return (
            <RecipeCard
              title={name}
              description={description}
              ingredients={ingredients}
              key={name}
            />
          )
        })}
      </div>
    </>
  );
}

export default RecipeList;
