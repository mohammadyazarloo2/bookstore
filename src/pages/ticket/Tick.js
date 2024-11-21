import { useParams } from "react-router-dom"

export default function Tick(){
    const tick=useParams();
    return(
        <h2> hleoo {tick.id} </h2>
    )
}

