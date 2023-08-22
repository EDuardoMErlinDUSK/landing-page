import Style from "./conteudo1.module.css";

function Conteudo1 (props)
{
    return(
        <>
        <div> <h6>{props.conte1}</h6></div>
            <figure className={Style.conteudo1}>
               <div className="doisgato"> <img src={props.img} alt="" /> </div>
               
               <div className="textodoisgato"> <h5>{props.conte11}</h5> </div>
            </figure>
            <div>
               
            </div>
            <div>
               
            </div>
        </>
    )
}
export default Conteudo1