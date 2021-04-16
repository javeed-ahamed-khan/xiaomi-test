import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NewApi = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const response = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((e) => e.json())
        .then((d) => setData(d));
    };
    response();
  }, []);
  return (
    <div className="container">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((t) => {
              return (
                t.title.includes(search.trim()) ||
                t.body.includes(search.trim()) ||
                t.id.toString().includes(search.trim())
              );
            })
            .map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.userId}</td>
                  <td>{e.id}</td>
                  <td>{e.title}</td>
                  <td>{e.body}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default NewApi;
