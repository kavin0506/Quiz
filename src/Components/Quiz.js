import { useEffect, useState } from "react";
import "./quiz.css";
import data from '../Components/Data.json'

const Quiz=()=>{
    const[currentQus,setCurrentQus]=useState(0);
    const[showScore,setShowScore]=useState(false);
    const[score,setScore]=useState(0);
    const[timer,setTimer]=useState(10);

    useEffect(()=>{
    let intervel;
        if(timer>0 && !showScore){
         intervel=setInterval(()=>{
                setTimer((prevTime)=>prevTime-1);
            },1000)
        }
        else{
            clearInterval(intervel);
            setShowScore(true)
            
        }
        return () => clearInterval(intervel)
    },[showScore,timer])

    const handleAnswer=(selectOption)=>{
        if(selectOption===data[currentQus].correctAns){
            setScore((lastScore)=>lastScore+1)
        }
        if(currentQus<data.length-1){
            setCurrentQus((prevQuestion)=>prevQuestion+1);
            setTimer(10)
        }
        else{
            setShowScore(true)
        }
    }
    const handleRestart=()=>{
        setCurrentQus(0);
        setScore(0);
        setTimer(0);
        setShowScore(false)
    }
    return(
        <>
        <div className="container">
                {
                    showScore?(<div className="scoreCard ">
                    <h2>Your Score :{score}/{data.length}</h2>
                    <button onClick={handleRestart}>Restart</button>
                </div>):( <div className="questionSec">
                    <h2>Question {currentQus+1}</h2>
                    <p>{data[currentQus].question}</p>
                    <div className="answerOption">
                        {
                            data[currentQus].option.map((value,index)=>(
                                <button key={index} onClick={()=>handleAnswer(value)}>{value}</button>
                            ))
                        }
                    <div className="timer">
                        <p>Time Left: {timer}s</p>

                    </div>
                    </div>

                </div>
)
                }
               
        </div>
        </>
    )
}

export default Quiz;