import Style from "./tela1.module.css";


function PrimeiraTela (props)
{
    return(
        <>
        <div>
        <figure className={Style.primeiratela}>
            <img src={props.primeiratela} alt=""></img> 
        </figure>
        </div>
        </>
    )
}

export default PrimeiraTela;