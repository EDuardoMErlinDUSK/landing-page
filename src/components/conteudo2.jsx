import Style from "./conteudo2.module.css"

function Conteudo2 (props)
{
    return( 
        <>
        <div>
            <figure className={Style.conteudo2}>
                <img src={props.img} alt="" /> 
                <h5>{props.conte2}</h5>
            </figure>
            
               
            </div>
        </>
    )
}

export default Conteudo2