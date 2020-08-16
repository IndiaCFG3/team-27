import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Bar from "../Components/BarGraph";
import Line from "../Components/LineGraph";
import Pie from "../Components/PieGraph";
import Worlds from "../Components/worldmap";
import axios from "axios";
import ReactToPdf from "react-to-pdf";

function Entry(props) {
  const [data, updateData] = useState();
  const ref = React.createRef();

  useEffect(() => {
    axios({
      url: "http://localhost:5000/eggsDemand",
      method: "get",
      headers: {
        country: "Albania",
      },
    }).then((req) => console.log(req));

    axios({
      url: "http://localhost:5000/eggsPrice",
      method: "get",
      headers: {
        country: props.country,
      },
    }).then((req) => console.log(req));

    axios({
      url: "https://localhost:5000/eggsMalnutrition",
      method: "get",
      headers: {
        country: props.country,
      },
    }).then((req) => console.log(req));

    axios({
      url: "http://localhost:5000/eggsProtein",
      method: "get",
      headers: {
        country: props.country,
      },
    }).then((req) => console.log(req));
  }, [props]);

  return (
    <Container maxWidth="lg">
      <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            style={{
              background: "orange",
              padding: "20px",
              fontWeight: 600,
              fontSize: "medium",
              border: "none",
            }}
          >
            Generate pdf
          </button>
        )}
      </ReactToPdf>

      <div
        className="flexContainer"
        ref={ref}
        style={{ position: "absolute", height: "-webkit-fill-available" }}
      >
        <div style={{ display: "flex", marginBottom: "20vh" }}>
          <Bar data={data} />
          <Line data={data} />
        </div>
        <div style={{ display: "flex" }}>
          <Pie data={data} />
          <Line data={data} />
        </div>
      </div>
      <Worlds />
    </Container>
  );
}

export default Entry;
