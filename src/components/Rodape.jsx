import Style from "./rodape.module.css";

function Rodape (props)
{
    
    return(
        <>
        <div className={Style.Rodape}>
            <span>{props.rodape1}</span>
            <div>
        <input type="text"/>
        </div>
        <div> <button onClick={Rodape}>Cadastre-se</button></div>
        <div>
            <span>{props.rodape2}</span>
        </div>
        </div>
        
        </>
    )
}
export default Rodape;