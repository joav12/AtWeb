export default function Home(props){

    return(
        <>
        
            <section id="home" className="intro main-bg section">

                <div className="main-content intro-content">

                    <div className="intro-text-content">

                        <h2>{props.titulo}</h2>
                        </div>

                        <div className="intro-img">
                        <p>{props.texto}</p>

                    </div>

                </div>

            </section>
        
        </>
    )

}