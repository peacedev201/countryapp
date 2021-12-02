import React from 'react'
import {
    Grid,
    Button,
    Container,
    AppBar,
    Typography,
    Toolbar,
    MenuItem,
    Divider,
    Menu,
    Avatar
} from "@material-ui/core";

export default function Footer() {
    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="md" >
                <Toolbar style={{ paddingTop: 30 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Typography variant="body1" color="inherit">
                                Programs
                            </Typography>
                            <Typography variant="body1" color="inherit">
                                Certificates
                            </Typography>
                            <Typography variant="body1" color="inherit">
                                Claims
                            </Typography>
                            <Typography variant="body1" color="inherit">
                                Users
                            </Typography>
                            <Typography variant="body1" color="inherit">
                                Payments
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body1" color="inherit">
                                Terms of Use
                            </Typography>
                            <Typography variant="body1" color="inherit">
                                Legal Notice
                            </Typography>
                            <Typography variant="body1" color="inherit">
                                Privacy
                            </Typography>

                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body1" color="inherit">
                                Contact Us
                            </Typography>

                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar>
                    <Typography variant="body1" color="inherit" style={{ width: '100%', textAlign: 'center' }}>
                        © 2021 American International Group, Inc. All rights reserved.
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}