import { Button } from "../Button";
import cls from "./Header.module.css"
import ReactLogo from "../../../src/assets/icons8-react-native-64.png"

export const Header = () =>{
    return(
        <header className={cls.header}>
            <p>
                <img src={ReactLogo} />
                <span>React Cards</span>
            </p>
            <div className={cls.headerButtons}>
                <Button>
                    Add card
                </Button>
                <Button>
                    Login
                </Button>
            </div>
        </header>
    )
}