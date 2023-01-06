import { RepositoryType } from "./RepositoryList"

export const RepositoryItem = ({ repository: { name, description, html_url } }: { repository: RepositoryType }) => {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>

      <a href={html_url}>
        Acessar repositorio
      </a>
    </li>
  )
}