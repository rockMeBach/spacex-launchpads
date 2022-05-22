import * as React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { BsFillCalendarFill, BsRecycle } from "react-icons/bs"
import moment from "moment";
import { Fade } from "react-reveal";

function LaunchInfo() {
  const location = useLocation();
  const [launch, setLaunch] = React.useState(location.state.launch);
  const date = moment(launch.date_local).format("DD MMM YYYY");

  React.useEffect(()=>{
    console.log(launch)
  }, [])

  return (
      <div className="Launchpad">
        <Fade>
          <Container>

            <h1>{launch.name}</h1>
            <div>

              <strong>Date:</strong> {date.toString()}

              <br/>

              <strong>Reused: </strong>
              {
                launch.fairings.reused!==null?
                launch.fairings.reused?"Yes":"No"
                :
                "No reuse information"
              }

            </div>

            <h3 style={{marginTop: 15}}>Details</h3>

            <p>{launch.details!==null?launch.details:"No details"}</p>

          </Container>
        </Fade>
      </div>
  );
}

export default LaunchInfo;