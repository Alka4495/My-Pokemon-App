import React, {FunctionComponent,useState} from "react"
import Pokemon from "../models/pokemon";
import "./pokemon-card.css"



type Props = {
    pokemon: Pokemon,
    borderColor?: string
};

const PokemonCard: FunctionComponent<Props> = ({pokemon,borderColor = '#009688'}) => {

    const [color,setColor] = useState<string>();
   
    const showBorder = () => {
        setColor(borderColor);
    }

    const hideColor = () => {
        setColor('#f5f5f5'); // we make a grey border-color as default
    }


    const formatedDate = (date: Date): string => {
      return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }

    return (
    <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideColor}>
      <div className="card horizontal" style={{borderColor: color}}>
        <div className="card-image"> 
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p><small>{formatedDate}</small></p>
            <p><small>{pokemon.created.toString()}</small></p>
          </div>
        </div>
      </div> 
    </div>
  );
}
  


export default PokemonCard;