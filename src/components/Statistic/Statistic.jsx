import PropTypes from 'prop-types';
import {
  Section,
  TitleStatistics,
  StatisticsBox,
  StatisticsItem,
  Percentage,
} from 'components/Statistic/Statistic.styled';

export const Statistic = ({ stats, title = 'Upload stats' }) => {
  return (
    <Section>
      {title && <TitleStatistics>{title}</TitleStatistics>}

      <StatisticsBox>
        {stats.map(stat => {
          return (
            <StatisticsItem key={stat.id}>
              <span className="label">{stat.label}</span>
              <Percentage>{stat.percentage} %</Percentage>
            </StatisticsItem>
          );
        })}
      </StatisticsBox>
    </Section>
  );
};
Statistic.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
  title: PropTypes.string,
};
