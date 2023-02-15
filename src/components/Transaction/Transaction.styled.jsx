import styled from '@emotion/styled';
export const Table = styled.table`
  margin: auto;
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.1),
    0px 1px 2px rgba(0, 0, 0, 0.08), 1px 2px 4px 4px rgba(0, 0, 0, 0.12);
  border-radius: 4px 4px 4px 4px;
`;
<th>Type</th>;
export const TableHeadItem = styled.th`
  width: 250px;
  height: 50px;
  background-color: #87ceeb;
  :first-of-type {
    border-radius: 4px 0px 0px 0px;
  }
  :last-of-type {
    border-radius: 0px 4px 0px 0px;
  }
`;
export const TableBodyItem = styled.td`
  width: 250px;
  height: 50px;
  text-align: center;
`;
export const TableBodyTypeItem = styled.td`
  width: 250px;
  height: 50px;
  text-align: center;
  text-transform: capitalize;
  :nth-of-type(2n) {
    background-color: #dcdcdc;
  }
`;
export const TableBodyTr = styled.tr`
  :nth-of-type(2n) {
    background-color: #dcdcdc;
  }
`;
