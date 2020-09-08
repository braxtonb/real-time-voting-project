import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';
import { Vote } from '../../constants/types';
import { useMemo, useState, useEffect } from 'react';
import { FRANCHISE_COLORS } from '../../constants';

interface VoteDistributionMap {
  [franchiseId: number]: VoteDistributionItem;
}

interface VoteDistributionItem {
  franchiseId: number;
  franchiseTitle: string;
  count: number;
}

const _groupVotes = (votes: Vote[]) => {
  let voteMap: VoteDistributionMap = {};

  for (const vote of votes) {
    if (typeof vote?.franchise?.id === 'number') {
      if (vote?.franchise?.id in voteMap) {
        voteMap[vote?.franchise?.id].count++;
      } else {
        voteMap[vote?.franchise?.id] = {
          franchiseId: vote?.franchise?.id,
          franchiseTitle: vote?.franchise?.title,
          count: 1,
        };
      }
    }
  }

  return Object.values(voteMap);
};

interface VotesResultChartProps {
  votes: Vote[];
}

const VotesResultChart: React.FC<VotesResultChartProps> = ({ votes }) => {
  const initialVoteDistribution = useMemo(() => _groupVotes(votes), []);
  const [voteDistribution, setVoteDistribution] = useState<
    VoteDistributionItem[]
  >(initialVoteDistribution);

  useEffect(() => {
    if (votes[0]) {
      const [newVote] = votes;
      const updatedVoteDistribution = voteDistribution.map((v) =>
        v.franchiseId !== newVote.franchise.id
          ? v
          : { ...v, count: v.count + 1 },
      );

      setVoteDistribution(updatedVoteDistribution);
    }
  }, [votes.length]);

  return (
    <ResponsiveContainer>
      <PieChart>
        <Legend verticalAlign="top" />
        <Pie
          data={voteDistribution}
          innerRadius={90}
          outerRadius={110}
          fill="#8884d8"
          paddingAngle={5}
          nameKey="franchiseTitle"
          dataKey="count"
          label
          isAnimationActive={false}
        >
          {voteDistribution.map((v) => (
            <Cell
              key={`cell-${v.franchiseId}`}
              fill={FRANCHISE_COLORS[v.franchiseId]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default VotesResultChart;
