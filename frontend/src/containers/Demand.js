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
    // axios.fetch ...
  }, [props]);

  return (
    <Container maxWidth="lg">
      <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
      </ReactToPdf>

      <div className="flexContainer" ref={ref}>
        <Bar data={data} />
        <Line data={data} />
        <Pie data={data} />
        <Line data={data} />
      </div>
      <Worlds />
    </Container>
  );
}

export default Entry;
