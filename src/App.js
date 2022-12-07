import React, {useEffect, useState} from "react";
import Scoreboard from "./components/scoreboard/Scoreboard.jsx";
import './App.scss'
import AppContext from "./store/app-context.js";
import {Outlet} from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import RulesModal from "./components/rules-modal/RulesModal.jsx";
import {useCookies} from "react-cookie";
import picksInitialValue from "./const/picks-initial-value";

const App = () => {
    const [score, setScore] = useState(0);
    const [picks, setPicks] = useState({...picksInitialValue})
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cookies, setCookie] = useCookies(['score']);

    const setPlayerPick = (pickedType, player) => {
        setPicks(prevState => ({
            ...prevState,
            [player]: pickedType
        }));
    }

    const saveCurrentScoreToCookie = (currentScore) => {
        setCookie('score', currentScore.toString(), {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })
    }

    const changeScore = (number) => {
        setScore(prevState => {
            const nextValue = prevState + number;
            saveCurrentScoreToCookie(nextValue);
            return nextValue;
        });
    }

    const handleRulesModal = () => {
        setIsModalOpen(prevState => !prevState);
    }

    useEffect(() => {
        if (!cookies.score) {
            return;
        }

        const parsed = parseInt(cookies.score);

        if (isNaN(parsed)) {
            return;
        }

        setScore(parsed);

    }, [])

    return (

        <div className={'App'}>
            <Scoreboard score={score}/>
            <AppContext.Provider value={{
                setPlayerPick,
                changeScore,
                picks,
                setPicks
            }}>
                <Outlet/>
            </AppContext.Provider>
            <Footer onClickRulesButton={handleRulesModal}/>
            <RulesModal handleClose={handleRulesModal} show={isModalOpen}/>
        </div>


    )
}

export default App;
