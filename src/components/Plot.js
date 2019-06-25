import React from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';


export default function Plot() {

  const data2012 = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 14250 },
    { quarter: 5, earnings: 14250 },
    { quarter: 6, earnings: 14250 },
    { quarter: 7, earnings: 14250 },
    { quarter: 8, earnings: 14250 },
    { quarter: 9, earnings: 14250 },
    { quarter: 10, earnings: 19000 }
  ];

  const data2013 = [
    { quarter: 1, earnings: 15000 },
    { quarter: 2, earnings: 12500 },
    { quarter: 3, earnings: 19500 },
    { quarter: 4, earnings: 13000 },
    { quarter: 5, earnings: 14250 },
    { quarter: 6, earnings: 14250 },
    { quarter: 7, earnings: 14250 },
    { quarter: 8, earnings: 14250 },
    { quarter: 9, earnings: 14250 },
    { quarter: 10, earnings: 19000 }
  ];

  const data2014 = [
    { quarter: 1, earnings: 11500 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 20000 },
    { quarter: 4, earnings: 15500 },
    { quarter: 5, earnings: 14250 },
    { quarter: 6, earnings: 14250 },
    { quarter: 7, earnings: 14250 },
    { quarter: 8, earnings: 14250 },
    { quarter: 9, earnings: 14250 },
    { quarter: 10, earnings: 19000 }
  ];

  const data2015 = [
    { quarter: 1, earnings: 18000 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 15000 },
    { quarter: 4, earnings: 12000 },
    { quarter: 5, earnings: 14250 },
    { quarter: 6, earnings: 14250 },
    { quarter: 7, earnings: 14250 },
    { quarter: 8, earnings: 14250 },
    { quarter: 9, earnings: 14250 },
    { quarter: 10, earnings: 19000 }
  ];
  const data2016 = [
    { quarter: 1, earnings: 18000 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 15000 },
    { quarter: 4, earnings: 12000 },
    { quarter: 5, earnings: 14250 },
    { quarter: 6, earnings: 14250 },
    { quarter: 7, earnings: 14250 },
    { quarter: 8, earnings: 14250 },
    { quarter: 9, earnings: 14250 },
    { quarter: 10, earnings: 19000 }
  ];
  const data2017 = [
    { quarter: 1, earnings: 18000 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 15000 },
    { quarter: 4, earnings: 12000 },
    { quarter: 5, earnings: 14250 },
    { quarter: 6, earnings: 14250 },
    { quarter: 7, earnings: 14250 },
    { quarter: 8, earnings: 14250 },
    { quarter: 9, earnings: 14250 },
    { quarter: 10, earnings: 19000 }
  ];
  const data2018 = [
    { quarter: 1, earnings: 18000 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 15000 },
    { quarter: 4, earnings: 12000 },
    { quarter: 5, earnings: 14250 },
    { quarter: 6, earnings: 14250 },
    { quarter: 7, earnings: 14250 },
    { quarter: 8, earnings: 14250 },
    { quarter: 9, earnings: 14250 },
    { quarter: 10, earnings: 19000 }
  ];
  const data2019 = [
    { quarter: 1, earnings: 18000 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 15000 },
    { quarter: 4, earnings: 12000 },
    { quarter: 5, earnings: 14250 },
    { quarter: 6, earnings: 14250 },
    { quarter: 7, earnings: 14250 },
    { quarter: 8, earnings: 14250 },
    { quarter: 9, earnings: 14250 },
    { quarter: 10, earnings: 19000 }
  ];
  const data2020 = [
    { quarter: 1, earnings: 18000 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 15000 },
    { quarter: 4, earnings: 12000 },
    { quarter: 5, earnings: 14250 },
    { quarter: 6, earnings: 14250 },
    { quarter: 7, earnings: 14250 },
    { quarter: 8, earnings: 14250 },
    { quarter: 9, earnings: 14250 },
    { quarter: 10, earnings: 19000 }
  ];
  const data2021 = [
    { quarter: 1, earnings: 18000 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 15000 },
    { quarter: 4, earnings: 12000 },
    { quarter: 5, earnings: 14250 },
    { quarter: 6, earnings: 14250 },
    { quarter: 7, earnings: 14250 },
    { quarter: 8, earnings: 14250 },
    { quarter: 9, earnings: 14250 },
    { quarter: 10, earnings: 19000 }
  ];



  return (
    <>
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
        style={{
          parent: { maxWidth: "100%" }
        }}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          tickFormat={["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryStack
          colorScale={"warm"}
        >
          <VictoryBar
            data={data2012}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2013}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2014}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2015}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2015}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2016}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2017}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2018}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2019}
            x="quarter"
            y="earnings"
          />

        </VictoryStack>
      </VictoryChart >
    </>



  )

}