import RecipeCard from './RecipeCard.tsx';

import Styles from './RecipeList.module.scss';

interface Recipes {
  recipes: any,
}

interface Recipe {
  fields: any,
}

interface Fields {
  name: string,
  description: string,
  ingredients: Array<string>,
}

function RecipeList({
  recipes,
}: Recipes) {
  return (
    <>
      <div>
        <h3>Here are some recipes.</h3>
        <div className={Styles.container}>
          {recipes.map((recipe: Recipe) => {
            const fields: Fields = recipe.fields;

            const {
              name,
              description,
              ingredients
            } = fields;
            
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
      </div>
    </>
  );
}

export default RecipeList;
