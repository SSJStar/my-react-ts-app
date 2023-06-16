import {useSearchParams} from "react-router-dom";

export default function FirstLevelView(){

    // TODO: search方式 - 接收参数
    let [params] = useSearchParams();
    const titleValue = params.get("title")
    // const nameValue = params.get("name")
    // console.log(`useSearchParams --> ${params.toString()}`);
    // console.log(`title --> ${titleValue} name --> ${nameValue}`);

    // TODO: params方式 - 接收参数
    // let params = useParams()
    // console.log("useParams-->" + params["name"])

    // TODO: state方式 - 接收参数
    // let stateValue = useLocation()
    // const titleValue = stateValue.state["title"]
    // const nameValue = stateValue.state["name"]
    // console.log("stateValue-->" + JSON.stringify(stateValue))
    // console.log(`title --> ${titleValue} name --> ${nameValue}`);
    return (
        <div>
            <h1>This is FirstLevelView, and the title is { titleValue }.</h1>
        </div>
    );
}