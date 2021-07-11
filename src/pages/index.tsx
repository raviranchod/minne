import styled from "styled-components";

import { Button } from "../components/Button";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "../components/Tabs";

const StyledTabPanel = styled(TabPanel)`
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const Home = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Your packs</Tab>
        <Tab>Starred packs</Tab>
      </TabList>
      <TabPanels>
        <StyledTabPanel>
          <Link href='/build' passHref>
            <Button as='a'>Create your pack</Button>
          </Link>
        </StyledTabPanel>
        <StyledTabPanel>
          <p>two!</p>
        </StyledTabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Home;
