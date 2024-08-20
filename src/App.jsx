import "./App.css";
import { useEffect, useState } from "react";
import CatsList from "./CatList.jsx";
import AddCatForm from "./AddCatForm.jsx";

function App() {
  const [catList, setCatList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function addCat(newCatTitle) {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              title: newCatTitle,
            },
          },
        ],
      }),
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${
      import.meta.env.VITE_TABLE_NAME
    }`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const data = await response.json();

      const newCat = {
        title: data.records[0].fields.title,
        id: data.records[0].id,
      };

      setCatList((prevCatList) => [newCat, ...prevCatList]);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  async function fetchData() {
    const options = {
      method: "GET",
      headers: { Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}` },
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${
      import.meta.env.VITE_TABLE_NAME
    }`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const data = await response.json();

      const cats = data.records.map((cat) => {
        return { id: cat.id, title: cat.fields.title };
      });

      setCatList(cats);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
