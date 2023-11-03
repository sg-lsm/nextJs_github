import Link from "next/link";

const Tomato = () =>{
    return(
        <div>
            <h2>Lint to 'main' page</h2>
            <Link id="move" href="/">
                <p>Move to '/'</p>
            </Link>
        </div>
    )
}

export default Tomato;