import React from 'react'
import styled from 'styled-components'
import { Grid, Paper, Typography } from '@material-ui/core'
import { Pie, Bar, defaults } from 'react-chartjs-2'


function StockAverage() {
  return (
    <div>
      <Grid container component={Paper} spacing={2}>
          <Grid item xs={12} align="left"><Typography>Average Sales In %</Typography></Grid>
          <Grid item xs={12}>
          <Bar
        data={{
          labels: ['10', '11', '12', '13', '14'],
          datasets: [
            {
              data: [39, 10, 19, 25, 13],
              backgroundColor: ['rgba(255, 185, 70, 1)'],
              borderWidth: 1,
            }
          ],
        }}
        height={300}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 50,
            },
          },
        }}
      />
          </Grid>
      </Grid>
    </div>
  )
}

export default StockAverage
