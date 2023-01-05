import { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  // requisição com promise

  // api
  //   .get("https://jsonplaceholder.typicode.com/todos/")
  //   .then((response) => setData(response));

  const getApi = async () => {
    let response = await api.get("https://jsonplaceholder.typicode.com/photos");
    setData(response.data);
  };

  const getUsers = async () => {
    let response = await api.get("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
    getApi();
  }, []);

  return (
    <div className="App">
      {data
        .filter((predicate) => predicate.albumId === 1)
        .map((photo) => (
          <div style={{ backgroundColor: "red", borderRadius: "10px" }}>
            <h1>{photo.id}</h1>
            <h2> {photo.title} </h2>
            <h3> {photo.url} </h3>
            <img src={photo.thumbnailUrl} alt="Imagem nao encontrada" />
          </div>
        ))}
      {data
        .filter((predicate) => predicate.albumId === 2)
        .map((photo) => (
          <div style={{ backgroundColor: "green", borderRadius: "10px" }}>
            <h1>{photo.id}</h1>
            <h2> {photo.title} </h2>
            <h3> {photo.url} </h3>
            <img src={photo.thumbnailUrl} alt="Imagem nao encontrada" />
          </div>
        ))}
      {users
        .filter((predicate) => predicate.id <= 5)
        .map((user) => (
          <div>
            <h1>{user.name}</h1>
            <h2> {user.email} </h2>
            <h3> {user.adress} </h3>
            <div>{user.city}</div>
          </div>
        ))}
    </div>
  );
}
