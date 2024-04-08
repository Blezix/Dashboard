import React from "react";
import { Card, CardHeader, CardContent, Box, Skeleton, Typography } from "@mui/material";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";

function DataCard({ sx, title, data, CardColor }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [loading, setLoading] = React.useState(true);
    
    React.useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 1500);
    });
    
    if (loading) {
        return (
        <Box flexShrink={1}>
            <Skeleton animation="wave" variant="rectangular" width="100%" height="100%" />
        </Box>
        );
    }
    return (
        <Card sx={{ display: 'flex', flexDirection: 'row', 
        backgroundColor: colors.blueAccent[900], borderRadius: "15px",
        ...sx }}>
        <Box bgcolor={CardColor} sx={{ width: "20%", height: "100%" }}></Box>
        <Box sx={{ fontSize:"1.2em", width: "80%", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <CardHeader 
            title={
                <Typography variant="h5" sx={{ fontSize: "1.8em" }}>
                {title}
                </Typography>
            } 
            />          
            <CardContent>
            <Typography fontSize={"1.2em"} m="0" variant="body2">{data}</Typography>
          </CardContent>
        </Box>
      </Card>
    );
}
export default DataCard;