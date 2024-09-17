import { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from "@mui/material";

const Settings = () => {
  const [settingsState, setSettingsState] = useState<{
    [key: string]: boolean;
  }>({
    revenue: true,
    profit: true,
    orders: true,
    customers: true,
  });

  const handleOnChange = (key: string) => {
    setSettingsState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <h1>Settings</h1>
      <Box>
        <Typography variant="h4" gutterBottom>
          Dashboard Features
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormGroup>
                  {Object.keys(settingsState).map((key) => (
                    <FormControlLabel
                      key={key}
                      control={
                        <Switch
                          checked={settingsState[key]}
                          onChange={() => handleOnChange(key)}
                        />
                      }
                      label={key}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Settings
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default Settings;
