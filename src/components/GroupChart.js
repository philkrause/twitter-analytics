import React from 'react'
import { VictoryChart, VictoryScatter, VictoryLine, VictoryVoronoiContainer, VictoryTooltip, VictoryGroup } from 'victory';



class GroupChart extends React.Component {
  render() {
    return (
      <VictoryChart height={800} width={1000}
        containerComponent={<VictoryVoronoiContainer />}
        style={{
          parent: { maxWidth: "50%" }
        }}
      >
        <VictoryGroup
          color="004DFF"
          labels={(d) => `y: ${d.y}`}
          labelComponent={
            <VictoryTooltip
              style={{ fontSize: 8 }}
            />
          }
          data={[
            { x: 'Jan', y: 140000000 },
            { x: 'Feb', y: 20000000 },
            { x: 'March', y: 125000000 },
            { x: 'April', y: 135000000 },
            { x: 'June', y: 120000000 },
            { x: 'July', y: 110000000 },
            { x: 'Aug', y: 190000000 },
            { x: 'Sep', y: 120000000 },
            { x: 'Oct', y: 130000000 },
            { x: 'Nov', y: 150000000 },
            { x: 'Dec', y: 13000000 }
          ]}
        >
          <VictoryLine />
          <VictoryScatter
            size={(d, a) => { return a ? 6 : 3; }}
          />
        </VictoryGroup>
        {/* <VictoryGroup
          labels={(d) => `y: ${d.y}`}
          labelComponent={
            <VictoryTooltip
              style={{ fontSize: 10 }}
            />
          }
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 1 },
            { x: 3, y: 2 },
            { x: 4, y: -6 },
            { x: 5, y: -1 },
            { x: 6, y: 2 },
            { x: 6, y: 2 },
            { x: 6, y: 2 },
            { x: 6, y: 2 },
            { x: 6, y: 2 },
            { x: 6, y: 2 },
            { x: 7, y: 3 }
          ]}
        >
          <VictoryLine />
          <VictoryScatter
            size={(d, a) => { return a ? 8 : 3; }}
          />
        </VictoryGroup> */}
      </VictoryChart>
    );
  }
}

export default GroupChart