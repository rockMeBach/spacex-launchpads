import * as React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";
import ReactLoading from "react-loading";

function LaunchesList({launchpad_id}) {
    const [launches, setLaunches] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(()=>{
        //sort by date and limit to 3 so that it returns the top 3 launches
        axios.post("https://api.spacexdata.com/v4/launches/query", {
            query : {
                "launchpad": launchpad_id
            },
            options: {
                "limit": 3,
                sort: {
                    "date_utc": -1
                }
            }
        }).then((res_launches)=>{
            console.log(res_launches.data.docs)
            setLoading(false)
            setLaunches(res_launches.data.docs)
        })
    }, [])

    return (
        <div>
            {
                loading &&
                <div style={{marginTop: 5}}>
                    <ReactLoading type="spin" color="#0000FF"
                        height={100} width={20} />
                </div>
            }
            {
                (launches!==undefined && launches.length>0) ?
                <ul>
                    {launches.map((launch, i)=>
                        <li key={i}>
                            <Link to={"/launchinfo"} state={{
                                launch: launch
                            }}>
                                {launch.name}
                            </Link>
                        </li>
                    )}
                </ul>
                :
                !loading && <Card.Text>No launch available</Card.Text>
            }
        </div>
    );
}

export default LaunchesList;