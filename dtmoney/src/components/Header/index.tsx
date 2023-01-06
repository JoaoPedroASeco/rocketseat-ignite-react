import Logo from "../../assets/Logo.svg"
import { Cointainer, Content } from "./styles"

export const Header = ({ setIsNewTramnsactionOpen }: { setIsNewTramnsactionOpen: (_: boolean) => void; }) => {
  return (
    <Cointainer>
      <Content>
        <img src={Logo} alt="dt money" />
        <button 
          type="button"
          onClick={() => setIsNewTramnsactionOpen(true)}
        >
          Nova transação
        </button>
      </Content>
    </Cointainer>
  )
}