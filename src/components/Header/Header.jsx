import { Button } from "../Button";
import cls from "./Header.module.css"
import ReactLogo from "../../../src/assets/icons8-react-native-64.png"
import { useNavigate } from "react-router-dom";

export const Header = () =>{
    const navigate = useNavigate();
    return(
        <header className={cls.header}>
            <p onClick={()=> navigate("/")}>
                <img src={ReactLogo} />
                <span>React Cards</span>
            </p>
            <div className={cls.headerButtons}>
                <Button onClick={()=>navigate("addquestion")}>
                    Add card
                </Button>
                <Button>
                    Login
                </Button>
            </div>
        </header>
    )
}