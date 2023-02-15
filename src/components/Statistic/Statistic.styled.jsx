import styled from '@emotion/styled';

export const Section = styled.div`
  margin: auto;
  padding-top: 20px;
  width: 350px;
  height: auto;
`;
export const TitleStatistics = styled.h2`
  margin: 0;
  text-transform: uppercase;
  text-align: center;
`;
export const StatisticsBox = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 0;
  margin-bottom: 0;
`;
export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc((100% - 3px) / 5);
  gap: 25px;
  background-color: #d3d3d3;
  padding-top: 10px;
  padding-bottom: 10px;

  :first-of-type {
    border-radius: 0px 0px 0 4px;
  }
  :last-of-type {
    border-radius: 0px 0px 4px 0;
  }
`;

export const Percentage = styled.span`
  font-size: 25px;
  color: #7b68ee;
`;
