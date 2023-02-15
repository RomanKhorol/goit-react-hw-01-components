import PropTypes from 'prop-types';
import {
  Table,
  TableHeadItem,
  TableBodyItem,
  TableBodyTypeItem,
  TableBodyTr,
} from 'components/Transaction/Transaction.styled';
export const Transaction = ({ datas }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </thead>

      <tbody>
        {datas.map(data => {
          return (
            <TableBodyTr key={data.id}>
              <TableBodyTypeItem>{data.type}</TableBodyTypeItem>
              <TableBodyItem>{data.amount}</TableBodyItem>
              <TableBodyItem>{data.currency}</TableBodyItem>
            </TableBodyTr>
          );
        })}
      </tbody>
    </Table>
  );
};
Transaction.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
