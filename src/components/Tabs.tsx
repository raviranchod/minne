import styled, { css } from "styled-components";
import { lighten } from "polished";
import "@reach/tabs/styles.css";

import {
  Tabs as ReachTabs,
  TabList as ReachTabList,
  Tab as ReachTab,
  TabPanels as ReachTabPanels,
  TabPanel as ReachTabPanel,
} from "@reach/tabs";

export const Tabs = styled(ReachTabs)``;
export const TabList = styled(ReachTabList)`
  ${({ theme }) => {
    return css`
      background-color: transparent;
      [data-reach-tab] {
        font-size: 1.25rem;
        color: ${theme.colors.grey.light};
        border-bottom: 4px solid ${theme.colors.grey.light};
        padding: 0;
        padding-bottom: 0.5rem;
        margin-right: 2rem;

        &:hover,
        &:focus {
          color: ${lighten(0.2, theme.colors.primary)};
          border-bottom-color: ${lighten(0.2, theme.colors.primary)};
        }
      }

      [data-reach-tab][data-selected] {
        color: ${theme.colors.grey.dark};
        border-bottom: 4px solid ${theme.colors.primary};
      }
    `;
  }}
`;
export const Tab = styled(ReachTab)``;
export const TabPanels = styled(ReachTabPanels)``;
export const TabPanel = styled(ReachTabPanel)``;
