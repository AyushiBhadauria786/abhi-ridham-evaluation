import {
  Box,
  Button,
  FormLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useId, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import emailjs from "@emailjs/browser";
import type { User } from "../types";
import axios from "axios";

interface UserProps {
  fullName: User[];
  email: User[];
}

const Contact: React.FC<UserProps> = () => {
  const [name, setName] = useState<UserProps>();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // const fetchUser = async () => {
  //   const res = await axios.get("http://localhost:3001/users");
  //   console.log(res.data);
  //   setName(res.data[1].fullName);
  // };

  // // useEffect(() => {
  // //   console.log(name);
  // // }, [name]);
  // useEffect(() => {
  //   fetchUser();
  // }, []);

  const onSubmit = (data: any) => {
    const templateParams = {
      email: `${data.email}`,
      name: `${data.name}`,
      subject: `${data.subject}`,
      notes: "Check this out!",
    };

    emailjs
      .send("service_lyhchv4", "template_oyzi44l", templateParams, {
        publicKey: "yfL3dDO6VBRMIIONV",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    console.log(data);
    reset({name: "", email: "",subject: "",message:""});
    alert("Form submitted successfully! Check console for data.");
  };

  return (
    <Box sx={{ padding: "24px" }}>
      <Typography variant="h5" sx={{ fontWeight: 700, fontSize: "24px" }}>
        Contact Us
      </Typography>

      <Grid sx={{ display: "flex", gap: 5 }}>
        <Paper
          sx={{ p: 3, mt: 4, borderRadius: 3, boxShadow: 3, width: "50%" }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, fontSize: "24px" }}>
              Send us a Message
            </Typography>
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    type="name"
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ""}
                  />
                </>
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="mail"
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                />
              )}
            />
            <Controller
              name="subject"
              control={control}
              rules={{ required: "Subject is required" }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    type="name"
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ""}
                  />
                </>
              )}
            />
            <Controller
              name="message"
              control={control}
              rules={{ required: "Message is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Your Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  error={!!errors.message}
                  helperText={errors.message ? errors.message.message : ""}
                />
              )}
            />
          </form>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            fullWidth
            onClick={handleSubmit(onSubmit)}
          >
            Send Message
          </Button>
        </Paper>

        {/* Static Data */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Paper sx={{ p: 3, mt: 4, borderRadius: 3, boxShadow: 3 }}>
            <Grid sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, fontSize: "24px" }}
              >
                Get in Touch
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                We're here to help! Reach out to us through any of the following
                channels:
              </Typography>

              <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                <EmailIcon sx={{ mt: 2 }} />
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    Email<span>support@financeflow.com</span>
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                <LocalPhoneIcon sx={{ mt: 2 }} />
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    Phone<span>1-800-FINANCE-1</span>
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                <LocationOnIcon sx={{ mt: 2 }} />
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    Address<span>123 Finance Street Budget City, BC 12345</span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Paper>

          <Paper sx={{ p: 3, mt: 4, borderRadius: 3, boxShadow: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, fontSize: "24px" }}>
              Office Hours
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography component="span" sx={{ fontSize: "16px" }}>
                  Monday-Friday
                </Typography>
                <Typography component="span" sx={{ fontSize: "16px" }}>
                  9:00 AM - 6:00 PM
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Typography component="span" sx={{ fontSize: "16px" }}>
                  Saturday
                </Typography>
                <Typography component="span" sx={{ fontSize: "16px" }}>
                  10:00 AM - 4:00 PM
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Typography component="span" sx={{ fontSize: "16px" }}>
                  Sunday
                </Typography>
                <Typography component="span" sx={{ fontSize: "16px" }}>
                  Closed
                </Typography>
              </Box>

              <Typography sx={{ mt: 3 }} variant="body1">
                All times are in Eastern Standard Time (EST)
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
