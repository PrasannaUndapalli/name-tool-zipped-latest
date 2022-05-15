

import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

import CloseIcon from '@material-ui/icons/Close';

import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select, { SelectChangeEvent } from '@material-ui/core/Select';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';


function Preferences() {

    const [openPanel, setOpenPanel] = useState(false);

    const [country, setCountry] = useState('');

    const [gender, setGender] = useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const openSettings = () => {
        setOpenPanel(true);
    }

    const handleClose = () => {
        setOpenPanel(false);
    }

    const savePreferences = () => {
        //make axios
        setOpenPanel(false);
    }

    const cancelPreferences = () => {
        setOpenPanel(false);
        setGender("");
        setCountry("");
    }

    const playAudio = () => {

    }



    return (
        <>
            <Button variant="contained" size="medium" onClick={openSettings} startIcon={<SettingsOutlinedIcon />}>Preferences</Button>
            <Dialog onClose={handleClose} aria-labelled-by="customized-dialog-title" open={openPanel}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Preferences
                    <IconButton className="float-right" onClick={() => setOpenPanel(false)} >
                        <CloseIcon /> </IconButton>
                </DialogTitle>
                <DialogContent>
                    <div> Select a country and voice in which you would like to listen the pronounciation in</div>
                    <div className="user-details margin-top-50 margin-bottom-50">
                    <Box sx={{ minWidth: 250 }} className="margin-right-50">
                        <FormControl fullWidth>
                            
                            <InputLabel id="demo-simple-select-label">Select a Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={country}
                                label="Country"
                                onChange={handleChange}
                            >
                                <MenuItem value={"IND"}>India</MenuItem>
                                <MenuItem value={"US"}>US</MenuItem>
                                <MenuItem value={"SL"}>SriLanka</MenuItem>
                            </Select>                              
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 130 }}>
                        <FormControl fullWidth>
                            
                            <InputLabel id="demo-simple-select-label">Select Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={gender}
                                label="Gender"
                                onChange={handleGenderChange}
                            >
                                <MenuItem value={"M"}>Male</MenuItem>
                                <MenuItem value={"F"}>Female</MenuItem>
                            </Select>                           
                            {/* <InputLabel id="demo-simple-select-label">Select a Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={country}
                                label="Country"
                                onChange={handleChange}
                            >
                                <MenuItem value={"IND"}>India</MenuItem>
                                <MenuItem value={"US"}>US</MenuItem>
                                <MenuItem value={"SL"}>SriLanka</MenuItem>
                            </Select> */}
                            
                        </FormControl>
                    </Box>
                    </div>
                    <div className="user-details margin-bottom-20">
                    <Button variant="contained" size="medium" onClick={playAudio} disabled={country === "" && gender ===""} startIcon={<PlayCircleFilledIcon />}>Play</Button>
                    <Button variant="outlined" onClick={savePreferences} disabled={country === "" && gender ===""} className="save-audio"> Save </Button>
                    <Button variant="outlined" onClick={cancelPreferences} className="cancel-audio"> Cancel </Button>
                    </div>
                   
                </DialogContent>
            </Dialog>

        </>

    );
}

export default Preferences;
