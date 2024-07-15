import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


import Grid from "@mui/material/Unstable_Grid2";

import "../css/components/jobApplyForm.css"; // Your custom styles

const JobApplyForm = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className="text-semi btn btn-applyNow" onClick={handleClickOpen}>
                Apply now <ArrowForwardIcon />
            </button>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <div className='popup__content'>
                    <>
                        <p className='text-lg popup__title'>Fill out the information below</p>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{ position: 'absolute', right: 20, top: 20, color: (theme) => theme.palette.grey[500] }}
                        >
                            <CloseIcon className='close__icon' />
                        </IconButton>
                    </>
                    <>
                        <form className="form-container">
                            <Grid
                                container
                                spacing={2}
                            >
                                <Grid lg={12} sm={12} md={6} xs={12} >
                                    <TextField
                                        margin="dense"
                                        label="Full Name"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        InputProps={{
                                            style: { fontSize: 18 }, // Increase font size
                                        }}
                                        InputLabelProps={{
                                            style: { fontSize: 18 } // Increase label font size
                                        }}
                                    />
                                </Grid>
                                <Grid lg={6} sm={12} md={6} xs={12}>
                                    <TextField
                                        margin="dense"
                                        label="Phone Number"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        InputProps={{
                                            style: { fontSize: 18 } // Increase font size
                                        }}
                                        InputLabelProps={{
                                            style: { fontSize: 18 } // Increase label font size
                                        }}
                                    />
                                </Grid>
                                <Grid lg={6} sm={12} md={6} xs={12}  >
                                    <TextField
                                        margin="dense"
                                        label="E-mail"
                                        type="email"
                                        fullWidth
                                        variant="outlined"
                                        InputProps={{
                                            style: { fontSize: 18 } // Increase font size
                                        }}
                                        InputLabelProps={{
                                            style: { fontSize: 18 } // Increase label font size
                                        }}
                                    />

                                </Grid>

                                <Grid lg={6} sm={12} md={6} xs={12}  >
                                    <TextField
                                        margin="dense"
                                        label="Current Salary"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        InputProps={{
                                            style: { fontSize: 18 } // Increase font size
                                        }}
                                        InputLabelProps={{
                                            style: { fontSize: 18 } // Increase label font size
                                        }}
                                    />
                                </Grid>
                                <Grid lg={6} sm={12} md={6} xs={12} >
                                    <TextField
                                        margin="dense"
                                        label="Work Experience"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        InputProps={{
                                            style: { fontSize: 18 } // Increase font size
                                        }}
                                        InputLabelProps={{
                                            style: { fontSize: 18 } // Increase label font size
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <div className='uploadBtn'>
                                <input className='' type="file" name="" placeholder='upload file' id="" />
                            </div>

                        </form>
                    </>
                    <div className='button__wrapper'>
                        <button className='btn btn-nav text-semi'>Submit <ArrowForwardIcon /></button>
                    </div>

                    <img className='popup__watermark' src="https://www.rootit.in/_next/static/media/ellipseGroup2.7334971d.svg" alt="" />
                </div>
            </Dialog>
        </div>
    );
};

export default JobApplyForm;
