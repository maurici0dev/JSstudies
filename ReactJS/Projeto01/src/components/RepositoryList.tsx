import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repository.scss";

interface Repository {
  id: string,
  name: string,
  description: string,
  html_url: string,
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/maurici0nunesdev/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositorios:</h1>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
