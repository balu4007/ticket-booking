import {
  Box,
  Button,
  Modal,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QRCode from "react-qr-code";

const Timingdata = {
  1: "11.30 AM",
  2: "2.30 PM",
  3: "6.30 PM",
  4: "9.30PM",
};

const BookTickets = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = JSON.parse(localStorage.getItem(id));
  const [values, setValues] = useState({
    date: new Date().toISOString().split("T")[0],
    time: "1",
    tickets: 1,
  });

  const handleAlignment = (event, newAlignment) => {
    setValues({ ...values, time: newAlignment });
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70vw",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handelSubmit = () => {
    console.log(values);
    setOpen(true);
  };

  return (
    <>
      <Stack direction={"row"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flex: 1,
          }}
        >
          <Typography variant="h6">Book Tickets</Typography>
          <input
            style={{
              padding: "10px",
              border: "1px solid black",
              borderRadius: "5px",
            }}
            value={values.date}
            onChange={(e) => setValues({ ...values, date: e.target.value })}
            type="date"
            min={new Date().toISOString().split("T")[0]}
          />
          <ToggleButtonGroup
            value={values.time}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="1">{Timingdata[1]}</ToggleButton>
            <ToggleButton value="2">{Timingdata[2]}</ToggleButton>
            <ToggleButton value="3">{Timingdata[3]}</ToggleButton>
            <ToggleButton value="4">{Timingdata[4]}</ToggleButton>
          </ToggleButtonGroup>
          <TextField
            id="outlined-basic"
            label="Number of Tickets"
            variant="outlined"
            type={"number"}
            value={values.tickets}
            onChange={(e) => setValues({ ...values, tickets: e.target.value })}
          />
          <Stack direction={"row"} gap="1rem">
            <Button
              variant="contained"
              sx={{ flex: 1 }}
              onClick={() => {
                handelSubmit();
              }}
            >
              Confirm
            </Button>
            <Button
              variant="outlined"
              sx={{ flex: 1 }}
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Box>
        <Box sx={{ flex: 1 }}></Box>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Box sx={{ flex: 1 }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Tickets Confirmed
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Your tickets are confirmed for {movie.name} on{" "}
                {dayjs(values.date).format("DD MMM YYYY")} at{" "}
                {Timingdata[values.time]}
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <QRCode
                value={JSON.stringify({ ...values, ...movie })}
                style={{ height: "200px", maxWidth: "100%", width: "200px" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="outlined"
              sx={{ mt: 2, textAlign: "center", px: 20 }}
              onClick={handleClose}
            >
              OK
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default BookTickets;