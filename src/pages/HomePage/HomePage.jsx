import { useState, useEffect } from "react";
import { QuestionCard } from "../../components/QuestionCard";
import { API_URL } from "../../constans";
import cls from "./HomePage.module.css";

export const HomePage = ()=>{

    const [cards, setCards] = useState([]);

    const getQuestions = async()=>{
        try{
            const response = await fetch(`${API_URL}/react`);
            const questions = await response.json();
            setCards(questions);

        }catch(error){
            console.error(error);
        }
    }

    useEffect(() =>{
        getQuestions();
    }, [])
    
    return (
        <>
        {cards.map((card,index)=> {
            return <QuestionCard card={card} key={index}/>
        })}
       
        </> );
}