import {
  Avatar,
  Box,
  Card,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
  getImageListItemBarUtilityClass,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessibilityOutlinedIcon from "@mui/icons-material/AccessibilityOutlined";
import AccessibleOutlinedIcon from "@mui/icons-material/AccessibleOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import Progress from "@delowar/react-circle-progressbar";
import "./ProfilePage.css";

const user = {
  name: "S.Meena",
  gender: "F",
  age: 23,
  picture: undefined,
  phone: 8022334455,
  email: "abc@gmail.com",
  patientID: 12345679101112,
  affected_side: "Bilateral",
  condition: "Ortho",
  speciality: "Osteoarthritis",
  medical_history: ["Hypertension", "DM", "Hypothyrodism"],
  progress: 40,
};

function ProfilePage() {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Paper sx={{ width: 500, mb: 7 }}>
      <Box sx={{ height: 20, bgcolor: "#002647" }} />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 2 }}>
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="subtitle1" sx={{ color: "#012E57" }}>
          View patient
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box p={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Box>
              <Typography variant="subtitle1" sx={{ color: "#012E57" }}>
                {user.name}, {user.gender}/{user.age}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#012E57" }}>
                Patient ID: {user.patientID}
              </Typography>
            </Box>
            {user.picture ? (
              <Avatar src={`${user.picture}`} />
            ) : (
              <IconButton>
                <PersonIcon
                  sx={{
                    fontSize: 35,
                    border: "2px solid #012E57",
                    color: "#012E57",
                    borderRadius: "50%",
                  }}
                />
              </IconButton>
            )}
          </Box>
          <Card
            sx={{
              width: "100%",
              bgcolor: "#002647",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mb: 3,
              py: 2,
              gap: phone ? 1 : 2,
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "#fff" }}>
              Goal Reached
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Progress
                size={130}
                percent={user.progress}
                className="progress-bar"
                fillColor="#FCB000"
                borderBgWidth={6}
                borderWidth={6}
                isShadow
              >
                {user.progress}%
              </Progress>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Card sx={{ width: 100, p: 1 }}>
                  <Typography variant="subtitle2">EMG</Typography>
                </Card>
                <Card sx={{ width: 100, p: 1 }}>
                  <Typography variant="subtitle2">ROM</Typography>
                </Card>
              </Box>
            </Box>
          </Card>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Stack spacing={2}>
              <Typography variant="subtitle2" sx={{ color: "#7D7D7D" }}>
                Phone No
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#7D7D7D" }}>
                Mail ID
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#7D7D7D" }}>
                Affected Side
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#7D7D7D" }}>
                Condition
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#7D7D7D" }}>
                Speciality
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <PhoneIcon sx={{ color: "#012E57" }} />
                {user.phone}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <EmailOutlinedIcon sx={{ color: "#012E57" }} />
                {user.email}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <AccessibilityOutlinedIcon sx={{ color: "#012E57" }} />
                {user.affected_side}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <AccessibleOutlinedIcon sx={{ color: "#012E57" }} />
                {user.condition}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <MedicalServicesOutlinedIcon sx={{ color: "#012E57" }} />
                {user.speciality}
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            my: 1,
            px: phone ? 2 : 3,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: "#012E57",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton>
              <DescriptionIcon sx={{ color: "#012E57" }} />
            </IconButton>
            Medical History
          </Typography>
          <Box display="flex">
            {user.medical_history.map((disease) => (
              <Typography
                variant="subtitle2"
                sx={{ display: "flex", color: "#000" }}
              >
                {`${disease}, `}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default ProfilePage;
