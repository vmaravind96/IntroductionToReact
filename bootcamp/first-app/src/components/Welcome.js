import {useParams} from "react-router-dom";

function Welcome(props) {
    const { name } = useParams();

    return (
        <div>
            <h1>Hello, { name || props.name || "Guest"}!</h1>
        </div>
    );
}

export default Welcome;