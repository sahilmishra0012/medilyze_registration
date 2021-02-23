import React, { useCallback, useRef, useState } from 'react';
import './PatientRegistration.css';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import Webcam from "react-webcam";
import { Button, Grid, Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, Select, MenuItem, Input, Checkbox } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function PatientRegistration() {
    const webcamRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [gender, setGender] = useState('female');
    const [maritalStatus, setMaritalStatus] = useState('unmarried');
    const [bg, setBG] = useState('');
    const [occupation, setOccupation] = useState('');
    const [state, setState] = useState("");
    const [authenticated, setAuthenticated] = useState(true);
    const [imgSrc, setImgSrc] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg");
    const videoConstraints = {
        width: 400,
        height: 400,
        facingMode: "user"
    };
    const stateList = [ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram","Nagaland", "Odisha","Punjab", "Rajasthan","Sikkim", "Tamil Nadu","Telangana", "Tripura","Uttarakhand", "Uttar Pradesh","West Bengal", "Andaman and Nicobar Islands","Chandigarh", "Dadra and Nagar Haveli","Daman and Diu", "Delhi","Lakshadweep", "Puducherry"];

    const handleCapture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot({width: 400, height: 400});
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleMaritalStatusChange = (event) => {
        setMaritalStatus(event.target.value);
    };

    const handleBGChange = (event) => {
        setBG(event.target.value);
    };

    const handleOccupationChange = (event) => {
        setOccupation(event.target.value);
    }

    const handleStateChange = (event) => {
        setState(event.target.value);
    }

    function handleLogout() {

    }
    return (
        <div className="container-registration">
            <img src={Logo} alt="navbar" className="navbar-image" />
            <div className="navbar-registration">
                <AccountCircleIcon />
                <Typography style={{marginRight: "2.5rem", marginLeft: "0.5rem"}}>
                    admin
                </Typography>
                <Typography>
                    <Link to="/" onClick={handleLogout}>Logout</Link>
                </Typography>
            </div>
            <div className="content-registration">
                {imgSrc && (<img src={imgSrc} className="patient-registration-image" />)}
                <Button variant="contained" onClick={handleClickOpen} color="secondary" className="click-photo-button">
                    Click Picture
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="contact">
                    <DialogTitle id="camera">Capture Picture</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Press the camera button to click the perfect picture. Press close to return to registration form.
                        </DialogContentText>
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            videoConstraints={videoConstraints}
                            screenshotFormat="image/jpeg"
                            style={{position: "relative", left: "4.5rem"}}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCapture} color="secondary">
                            <PhotoCameraIcon />
                        </Button>
                        <Button onClick={handleClose} color="secondary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
                <div className="aadhar-otp">
                    <Typography variant="h4" style={{margin: "1rem", color: "#1990EA"}}>
                        Personal Identity
                    </Typography>
                    <Grid container spacing={6}>
                        <Grid container item xs={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="aadhar-no"
                                label="Aadhar Number"
                                name="aadhar"
                                autoComplete="number"
                                size="small"
                            />
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="otp"
                                label="OTP"
                                name="otp"
                                size="small"
                            />
                        </Grid>
                        <Grid container item xs={6}>
                            <Button variant="contained" color="primary">
                                Verify
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <div className="form-container-registration">
                    <form>
                        <div className="patient-details">
                            <Grid container spacing={3}>
                                <Grid container item xs={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="patient-first-name"
                                        label="First Name"
                                        name="firstName"
                                        autoComplete="name"
                                        size="small"
                                    />
                                </Grid>
                                <Grid container item xs={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="patient-last-name"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="name"
                                        size="small"
                                    />
                                </Grid>
                                <Grid container item xs={4}>
                                    <TextField
                                        id="date"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="DOB"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        size="small"
                                        InputLabelProps={{
                                          shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid container item xs={4}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Gender</FormLabel>
                                        <RadioGroup row aria-label="gender" name="gender1" value={gender} onChange={handleGenderChange}>
                                            <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                                            <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid container item xs={4}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Marital Status</FormLabel>
                                        <RadioGroup row aria-label="maritalStatus" name="maritalStatus1" value={maritalStatus} onChange={handleMaritalStatusChange}>
                                            <FormControlLabel value="maried" control={<Radio color="primary" />} label="Married" />
                                            <FormControlLabel value="unmarried" control={<Radio color="primary" />} label="Unmarried" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid container item xs={4}>
                                    <FormControl variant="outlined" fullWidth size="small">
                                        <InputLabel id="blood-group">Blood Group</InputLabel>
                                        <Select
                                            labelId="blood-group"
                                            id="bg"
                                            value={bg}
                                            onChange={handleBGChange}
                                            label="Blood Group"
                                            style={{textAlign: "left"}}
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'A+'}>A+</MenuItem>
                                        <MenuItem value={'B+'}>B+</MenuItem>
                                        <MenuItem value={'AB+'}>AB+</MenuItem>
                                        <MenuItem value={'O+'}>O+</MenuItem>
                                        <MenuItem value={'A-'}>A-</MenuItem>
                                        <MenuItem value={'B-'}>B-</MenuItem>
                                        <MenuItem value={'AB-'}>AB-</MenuItem>
                                        <MenuItem value={'O-'}>O-</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid container item xs={4}>
                                    <FormControl variant="outlined" fullWidth size="small">
                                        <InputLabel id="select-occupation">Select Occupation</InputLabel>
                                        <Select
                                            labelId="select-occupation"
                                            id="occupation"
                                            value={occupation}
                                            onChange={handleOccupationChange}
                                            label="Select Occupation"
                                            style={{textAlign: "left"}}
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'Armed Forces'}>Armed Forces</MenuItem>
                                        <MenuItem value={'Farmer'}>Farmer</MenuItem>
                                        <MenuItem value={'Student'}>Student</MenuItem>
                                        <MenuItem value={'Teacher'}>Teacher</MenuItem>
                                        <MenuItem value={'A-'}>A-</MenuItem>
                                        <MenuItem value={'B-'}>B-</MenuItem>
                                        <MenuItem value={'AB-'}>AB-</MenuItem>
                                        <MenuItem value={'Other'}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid container item xs={4}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="other-occupation"
                                        label="If other, please specify"
                                        name="other-occupation"
                                        size="small"
                                    />
                                </Grid>
                                <Grid container item xs={4}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="height"
                                        label="Height"
                                        name="height"
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <Typography variant="h4" style={{margin: "1rem", color: "#1990EA"}}>
                            Medical History
                        </Typography>
                        <div className="patient-details">
                            <Input
                                type="file"
                                label="Upload Medical File"
                                size="small"
                                color="primary"
                                variant="outlined"
                            />
                        </div>
                        <Typography variant="h4" style={{margin: "1rem", color: "#1990EA"}}>
                            Contact Details
                        </Typography>
                        <div className="patient-details">
                            <Grid container spacing={3}>
                                <Grid container item xs={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="patient-email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                        size="small"
                                    />
                                </Grid>
                                <Grid container item xs={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="patient-mobile"
                                        label="Mobile Number"
                                        name="mobile"
                                        autoComplete="number"
                                        size="small"
                                    />
                                </Grid>
                                <Grid container item xs={4}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="patient-mobile2"
                                        label="Emergency Mobile Number"
                                        name="mobile2"
                                        autoComplete="number"
                                        size="small"
                                    />
                                </Grid>
                                <Grid container item xs={4}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="country"
                                        value="India"
                                        name="country"
                                        autoComplete="country"
                                        size="small"
                                    />
                                </Grid>
                                <Grid container item xs={4}>
                                    <FormControl variant="outlined" fullWidth required size="small">
                                        <InputLabel id="select-state">State / UT</InputLabel>
                                        <Select
                                            labelId="select-state"
                                            id="state"
                                            value={state}
                                            onChange={handleStateChange}
                                            label="State / UT"
                                            style={{textAlign: "left"}}
                                        >
                                        <MenuItem value="">
                                            <em>Select</em>
                                        </MenuItem>
                                        {stateList.map((state) => <MenuItem value={state}>{state}</MenuItem>)}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid container item xs={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="city"
                                        label="City"
                                        name="city"
                                        autoComplete="city"
                                        size="small"
                                    />
                                </Grid>
                                <Grid container item xs={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="address-line-1"
                                        label="Flat No. / door / Block No."
                                        name="addressLine1"
                                        size="small"
                                    />
                                </Grid>
                                <Grid container item xs={4}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="road-street"
                                        label="Road / Street / Lane"
                                        name="city"
                                        size="small"
                                    />
                                </Grid>
                                <Grid container item xs={4}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="pincode"
                                        label="PIN Code / ZIP Code"
                                        name="pincode"
                                        autoComplete="zipcode"
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <Typography variant="h5" style={{margin: "1rem", color: "#1990EA", display: "inline-flex", position: "relative", right: "21.5rem"}}>
                            Authentication Status
                        </Typography>
                        <FormControlLabel
                            style={{position: "relative", right: "21.5rem", marginBottom: "0.3rem"}}
                            control={<Checkbox checked={authenticated} name="authenticationStatus" size="medium" style={{color: "green", display: "block"}} />}
                        />
                        <Button variant="contained" color="primary" size="large" style={{position: "relative", right: "10rem", top: "6rem"}}>
                            Register
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}