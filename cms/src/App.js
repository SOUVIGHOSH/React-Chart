import styled from 'styled-components';
import { VictoryLine, VictoryChart } from "victory";


import './App.css';

const data = [
  { x: "Sunday", y: 1 },
  { x: "Monday", y: 3 },
  { x: "Tuesday", y: 5 },
  { x: "Wednesday", y: 2 },
  { x: "Thursday", y: 6 },
  { x: "Friday", y: 1 },
  { x: "Saturday", y: 0 },
  { x: "Sunday", y: 9 }
]
const data2 = [
  { x: "Sunday", y: 3 },
  { x: "Monday", y: 2 },
  { x: "Tuesday", y: 0 },
  { x: "Wednesday", y: 8 },
  { x: "Thursday", y: 4 },
  { x: "Friday", y: 2 },
  { x: "Saturday", y: 4 },
  { x: "Sunday", y: 6 }
]
const data3 = [
  { x: "Sunday", y: 1 },
  { x: "Monday", y: 2 },
  { x: "Tuesday", y: 2 },
  { x: "Wednesday", y: 4 },
  { x: "Thursday", y: 0 },
  { x: "Friday", y: 1 },
  { x: "Saturday", y: 4 },
  { x: "Sunday", y: 6 }
]

function App() {
  return (
    <div>
      <Header>
        <Icon><img src="./logo.png" alt="logo"/></Icon>
        <Menu>
          <a href="">Dashboard</a>
          <a href="">Campaign</a>
          <a href="">Project</a>
          <a href="">Report</a>
          <a href="">User</a>
          <a href="">Logout</a>

        </Menu>
        </Header>
        <Container>
          <MetricList>
            <Metric>
              <h4>2,034</h4>
              <h5>Impression</h5>
            </Metric>
            <Metric>
              <h4>2,034</h4>
              <h5>Impression</h5>
            </Metric>
            <Metric>
              <h4>2,034</h4>
              <h5>Impression</h5>
            </Metric>
            <Metric>
              <h4>2,034</h4>
              <h5>Impression</h5>
            </Metric>
            <Metric>
              <h4>2,034</h4>
              <h5>Impression</h5>
            </Metric>
            <Metric>
              <h4>2,034</h4>
              <h5>Impression</h5>
            </Metric>
            <Metric>
              <h4>2,034</h4>
              <h5>Impression</h5>
            </Metric><Metric>
              <h4>2,034</h4>
              <h5>Impression</h5>
            </Metric><Metric>
              <h4>2,034</h4>
              <h5>Impression</h5>
            </Metric><Metric>
              <h4>2,034</h4>
              <h5>Impression</h5>
            </Metric>
          </MetricList>
          <Graph>
            <Selectors>
            <select name="dsp" id="dsp">
              <option value="all">All DSP</option>
              <option value="xandr">Xandr</option>
              <option value="quantcost">Quantcost</option>
              <option value="google">Google</option>
            </select>
          <select name="month" id="month">
              <option value="30">Last 30 days</option>
              <option value="24">Last 24 days</option>
              <option value="7">Last 7 days</option>
          </select>
          <select name="kpis" id="kpis">
              <option value="all">ALL KPIS</option>
              <option value="saab">Impressions</option>
              <option value="mercedes">Clicks</option>
              <option value="audi">CPA</option>
              <option value="audi">CPM</option>
              <option value="audi">CTR</option>
          </select>
            </Selectors>
            <VictoryChart 
              domainPadding={{ x: 10 }}
              padding={{ top: 50, bottom: 50, right: 0, left: 0 }}>
              <VictoryLine data={data} />
              <VictoryLine data={data2} />
              <VictoryLine data={data3} />
            </VictoryChart>
          </Graph>
        </Container>
    </div>
  );
}
const Selectors = styled.div`
  display: flex;
  align-items: flex-start;
  select {
    margin-left: 20px;
  }
  margin-left: 20px;

`;
const Metric=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 15vh;
  width: 10vw;
  border: 1px solid black;
  h5{
    font-weight: 400;
  }
`;
const MetricList = styled.div`
  height: 35vh;
  width: 60vw;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content:center;
  margin-top: 5vh;
  gap: 20px;
`;
const Graph = styled.div`
  height: 35vh;
  width: 60vw;
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  margin-left: 20px;
  margin-top: 20px;
  `;
const Container=styled.main`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  margin-left: 15vw;
  margin-right: 15vw;
  height: 90vh;
  align-items:center;
`

const Icon=styled.a`
  text-decoration: none;
  margin: 20px;
  img{
    height: 40px;
    width: 50px;
  }
`
const Menu=styled.nav`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: 10px;
  a {
    margin: 10px;
    padding: 10px;
    border-right: 2px solid black ;
  }
`

const Header = styled.nav`
  position: absolute;
  top: 0;
  left:0;
  width:100vw;
  height: 5vh;
  border-bottom-style: solid;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

export default App;
