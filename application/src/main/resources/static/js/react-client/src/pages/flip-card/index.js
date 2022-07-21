import "bootstrap/dist/css/bootstrap.min.css";
import "./style.module.scss";
import cn from "classnames";


const cards = [
  {
    id: "1",
    variant: "hover",
    front: "Hover",
    back: "Back"
  },
  {
    id: "2",
    variant: "click",
    front: "Click",
    back: "Back"
  },
  {
    id: "3",
    variant: "focus",
    front: "Focus",
    back: "Back"
  }
]

const  App=() =>{
  const flipCard= ({ card })=> {
    return (
      <div className="flip-card-outer">
        <div className="flip-card-inner">
          <div className="card front">
            <div className="card-body d-flex justify-content-center align-items-center">
              <p className="card-text fs-1 fw-bold">{card.front}</p>
            </div>
          </div>
          <div className="card back">
            <div className="card-body d-flex justify-content-center align-items-center">
              <p className="card-text fs-1 fw-bold">{card.back}</p>
            </div>
          </div>
        </div>
  <div
    className={cn("flip-card-inner", {
      "hover-trigger": card.variant === "hover"
    })}
  ></div>
      </div>
    );
  }
  

 return(
    <div className="container">
      <div className="row h-100">
        <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {cards.map((card) => (
            <flipCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
 )

  }
  const styles={
    container: {
      height: '100vh'
    },
    flipCardOuter: {
      width: '300px',
      height: '400px',
      margin: '25px 0',
    } 
  }
export default App;