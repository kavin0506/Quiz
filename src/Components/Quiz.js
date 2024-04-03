import "./quiz.css";

const Quiz=()=>{
    return(
        <>
        <div className="container">
            <div className="scoreCard " style={{display:"none"}}>
                <h2>Your Score :3/3</h2>
                <button>Restart</button>
            </div>
                <div className="questionSec">
                    <h2>Question 1</h2>
                    <p>This is sample question</p>
                    <div className="answerOption">
                        <button>Option 1</button>
                        <button>Option 2</button>
                        <button>Option 3</button>
                        <button>Option 4</button>
                    <div className="timer">
                        <p>Time Left:10s</p>

                    </div>
                    </div>

                </div>

        </div>
        </>
    )
}

export default Quiz;