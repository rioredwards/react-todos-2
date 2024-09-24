import "./App.css";
import { useEffect, useState } from "react";
import CatsList from "./components/CatList.jsx";
import AddCatForm from "./components/AddCatForm.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const BASE_URL = `https://api.airtable.com/v0/${
  import.meta.env.VITE_AIRTABLE_BASE_ID
}/${import.meta.env.VITE_TABLE_NAME}`;

function App() {
  const [catList, setCatList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function removeCat(catId) {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    };

    const url = `${BASE_URL}/${catId}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const data = await response.json();

      if (!data.deleted) {
        throw new Error("Cat not deleted for some reason 🤷‍♂️");
      }

      setCatList((previousCatList) =>
        previousCatList.filter((cat) => cat.id !== data.id)
      );
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

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

    try {
      const response = await fetch(BASE_URL, options);

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
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(BASE_URL, options);

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

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>CATS</h1>
              <AddCatForm onAddCat={addCat} />
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <CatsList onRemoveCat={removeCat} catList={catList} />
              )}
            </main>
          }
        />
        <Route path="/new" element={<h1>New Cat List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
