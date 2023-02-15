import styled from '@emotion/styled';

export const Main = styled.div`
  width: 100%;
  margin-top: 50px;
`;

export const Container = styled.div`
  background-color: #dcdcdc;
  border-radius: 4px;
  margin: auto;
  width: 350px;
  height: 400px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Description = styled.div`
  padding-top: 25px;
  width: 100%;
  height: 300px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
export const Picture = styled.img`
  background-color: #696969;
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;
export const InfoDescription = styled.p`
  color: #778899;
  margin-bottom: 0;
  margin-top: 0;
`;
export const Name = styled.p`
  font-size: 30px;
  color: #000000;
  margin-bottom: 0;
  margin-top: 0;
`;
export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 0;
  margin-bottom: 0;

  height: 60px;
  border: 1px solid #808080;
  border-width: 2px 0 0 0;
`;
export const Info = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc((100% - 1px) / 3);
  background-color: #b0c4de;
  :first-of-type {
    border-radius: 0px 0px 0 4px;
    border-right: 2px solid #808080;
  }
  :last-of-type {
    border-radius: 0px 0px 4px 0;
    border-left: 2px solid #808080;
  }
`;
export const Label = styled.span`
  font-size: 15px;
  color: #778899;
`;
export const Quantity = styled.span`
  font-size: 25px;
  color: #000000;
`;
