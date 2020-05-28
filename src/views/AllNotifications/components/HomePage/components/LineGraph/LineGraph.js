import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardHeader,
    CardContent,
  } from '@material-ui/core';
import { data, options } from './Chart';

  const useStyles = makeStyles(() => ({
    root: {height: '100%'},
    chartContainer: {
      position: 'relative',
      height: 200 
    },
    actions: {
      justifyContent: 'flex-end'
    }
  }));  


const LineGraph = props => {
    const { className, ...rest } = props;
  
    const classes = useStyles();
  
    return (
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardHeader    
          title="FUND Completion with Time"
        />
        <CardContent >
          <div className={classes.chartContainer}>
          <Line  data={data} options={options} />
          </div>
        </CardContent>
      </Card>
    );
  };
  

// class LineDemo extends Component {
//   render() {
//     return (
//         <Card style={{height:'100%'}} >
//         <h2>FUND Completion with Time</h2>
//         <Line ref="chart" data={data} />
//       </Card>
//     );
//   }

// }
export default LineGraph