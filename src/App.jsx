import "./App.css";
import { useEffect, useState } from "react";
import CatsList from "./CatList.jsx";
import AddCatForm from "./AddCatForm.jsx";

function App() {
  const [catList, setCatList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const existingCats = JSON.parse(localStorage.getItem("savedCatList")) ?? [];
        const object = {
          data: {
            catList: existingCats,
          },
        };
        resolve(object);
      }, 2000);
    }).then((result) => {
      const retrievedCatList = result.data.catList;
      setCatList(retrievedCatList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const catListString = JSON.stringify(catList);
      localStorage.setItem("savedCatList", catListString);
    }
  }, [catList, isLoading]);

  function addCat(newCat) {
    setCatList((previousCatList) => [...previousCatList, newCat]);
  }

  function removeCat(id) {
    const filteredCats = catList.filter((cat) => cat.id !== id);
    setCatList(filteredCats);
  }

  return (
    <main>
      <h1>CATS</h1>
      <AddCatForm onAddCat={addCat} />
      {isLoading ? <p>Loading...</p> : <CatsList onRemoveCat={removeCat} catList={catList} />}
    </main>
  );
}

export default App;
