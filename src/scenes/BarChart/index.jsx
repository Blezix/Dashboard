import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { useTheme } from "@emotion/react";
import { tokens } from '../../theme';
import { Box,Skeleton } from '@mui/material';

const chartSetting = {
    yAxis: [
      {
        label: 'rainfall (mm)',
      },
    ],
    
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };
const data = [
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
      month: 'June',
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      seoul: 319,
      month: 'July',
    },
    {
      london: 65,
      paris: 60,
      newYork: 106,
      seoul: 249,
      month: 'Aug',
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
      month: 'Sept',
    },
    {
      london: 60,
      paris: 65,
      newYork: 97,
      seoul: 55,
      month: 'Oct',
    },
    {
      london: 67,
      paris: 64,
      newYork: 76,
      seoul: 48,
      month: 'Nov',
    },
    {
      london: 61,
      paris: 70,
      newYork: 103,
      seoul: 25,
      month: 'Dec',
    },
  ];

  
  function BarChartSite() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [loading,setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    });

    if (loading) {
        return (
            <Box flexShrink={1} width="100%" height="100%">
                <Skeleton animation="wave" variant="rectangular" width="100%" height="100%" />
            </Box>
        );
    }
    return (
        <BarChart     
        dataset={data}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[
          { dataKey: 'london', label: 'London', color: colors.blueAccent[800]},
          { dataKey: 'paris', label: 'Paris', color: colors.blueAccent[200]},
          { dataKey: 'newYork', label: 'New York', color: colors.blueAccent[400]},
          { dataKey: 'seoul', label: 'Seoul', color: colors.blueAccent[600]},
        ]}
        {...chartSetting}
      />

      );
  }

export default BarChartSite;