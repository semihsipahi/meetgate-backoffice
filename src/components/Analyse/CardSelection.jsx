import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

function CardSection(props) {
  return (
    <div style={{ marginTop: '2rem' }}>
      <Grid container spacing={2}>
        {props?.records &&
          props?.records.map((record, index) => (
            <Grid item xs={12} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="body1" component="p">
                    {record.givenAnswer}
                  </Typography>
                </CardContent>

                <CardContent>
                  <Typography variant="body2" component="z">
                    {record.sentimentReview}
                  </Typography>
                </CardContent>

                <CardContent>
                  <Typography variant="body3" component="y">
                    {record.sentimentEmotions}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="body4" component="i">
                    {record.score}
                  </Typography>
                </CardContent>
              </Card>
              <br />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default CardSection;
