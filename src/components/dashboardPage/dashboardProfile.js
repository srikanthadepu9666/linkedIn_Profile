import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function DashboardProfile(props) {
    return (
        <Card sx={{ maxWidth: 545, marginLeft: "620px", marginTop: "50px" }}>
            <CardActionArea style={{ display: "flex", flexDirection: "column" }}>
                <CardMedia
                    component="img"
                    height="345"
                    width="200"
                    image={props.image}
                    alt="green iguana"
                    style={{ objectFit: "inherit" }}
                />
                <CardContent>
                    <Typography style={{ fontFamily: "ui-serif" }} gutterBottom variant="h4" component="div">
                        {props?.data?.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" style={{ fontFamily: "ui-serif" }} component="div">
                        {props?.data?.email}
                    </Typography>
                    <Typography gutterBottom variant="h6" style={{ fontFamily: "ui-serif", fontSize: "larger" }} component="div">
                        {`Experience :${props?.data?.experience} yrs`}
                    </Typography>
                    <Typography gutterBottom variant="h6" style={{ fontFamily: "ui-serif", fontSize: "larger" }} component="div">
                        {`Current Company :${props?.data?.currentCompany} `}
                    </Typography>
                    <Typography gutterBottom variant="h6" style={{ fontFamily: "ui-serif", fontSize: "larger" }} component="div">
                        {`Location :${props?.data?.location} `}
                    </Typography>
                    <Typography gutterBottom variant="h6" style={{ fontFamily: "ui-serif", fontSize: "larger" }} component="div">
                        {`Qualification :${props?.data?.qualification} `}
                    </Typography>

                    <Typography variant="body1" color="text.secondary">
                        <span style={{ fontWeight: "bolder", color: "red" }}>Bio : </span> {`${props?.data?.bio}`}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}
