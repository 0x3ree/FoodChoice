import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});
// in here we can pass an initial value to the context, but we don't need to do that right now. We can just pass an empty object.
//which will als help in auto completion when we use the context in other components.

//in here this function will contain the logic we will use to manage our favorite mealsids.
function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  // so here we are updating the state of the favoriteMealIds with the setFavoriteMealIds, which will be updating based on the previous state
  //*when updating a state based on the previouse state, we should pass a fucntion to the state updating function which will recieve the previouse state snapshot(currentFavids) which will then return a new state snapshot(we spread the ...currentfavids and add the new Id(new fav) as the last) .
  function addFavorite(id) {
    setFavoriteMealIds((currentFavids) => [...currentFavids, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
// in here we are passing the children prop to the provider which will be used to wrap the components that will use this context. This is how we can use the context in other components.
export default FavoritesContextProvider;
