import CardInfo from "./CardInfo"
import CardTitle from "./CardTitle"


function Cards({cards}){

    const myArray = [...Array(cards).keys()]

    return(
        <>
            {
                myArray.map( (card) => {
                    return (
                            <section>
                                <CardTitle card={card}/>
                                <CardInfo card={card}/>
                            </section>
                        )
                    }

                )
            }
        </>
    )
}

export default Cards