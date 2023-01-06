import { RepositoryItem } from "./RepositoryItem"

import "../styles/repositories.scss"
import { useEffect, useState } from "react"

export type RepositoryType = {
  name: string;
  description: string;
  html_url: string;
}

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState<RepositoryType[]>([])

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {repositories.map(item => <RepositoryItem repository={item}  key={item.name} />)}
      </ul>
    </section>
  )
}