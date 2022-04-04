export default function Intro(props){
    return(

        <>
        
        <section id="objetivo" className="white-bg section">

            <div className="main-content top3-content">

                <h2>{props.titulo}</h2>
                <p>{props.texto}</p>

            </div>

        </section>
        
        </>

    )
}