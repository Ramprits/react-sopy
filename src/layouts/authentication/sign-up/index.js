import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import PageLayout from "examples/LayoutContainers/PageLayout";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // eslint-disable-next-line no-console
  const onSubmit = (data) => console.log(data);

  const [agreement, setAgreement] = useState(true);

  const handleSetAgreement = () => setAgreement(!agreement);

  return (
    <PageLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3rem",
        }}
      >
        <Card style={{ width: "30rem" }}>
          <SuiBox p={3} mb={1} textAlign="center">
            <SuiTypography variant="h5" fontWeight="medium">
              Register with
            </SuiTypography>
          </SuiBox>
          <SuiBox mb={2}>
            <Socials />
          </SuiBox>
          <Separator />
          <SuiBox pt={2} pb={3} px={3}>
            <SuiBox component="form" role="form" onSubmit={handleSubmit(onSubmit)}>
              <SuiBox mb={2}>
                <SuiInput
                  placeholder="Name"
                  {...register("name", { required: true })}
                  error={!!errors.name}
                />
              </SuiBox>
              <SuiBox mb={2}>
                <SuiInput
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  {...register("email", { required: true })}
                />
              </SuiBox>
              <SuiBox mb={2}>
                <SuiInput
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  {...register("password", { required: true })}
                />
              </SuiBox>
              <SuiBox display="flex" alignItems="center">
                <Checkbox checked={agreement} onChange={handleSetAgreement} />
                <SuiTypography
                  variant="button"
                  fontWeight="regular"
                  onClick={handleSetAgreement}
                  sx={{ cursor: "poiner", userSelect: "none" }}
                >
                  &nbsp;&nbsp;I agree the&nbsp;
                </SuiTypography>
                <SuiTypography
                  component="a"
                  href="#"
                  variant="button"
                  fontWeight="bold"
                  textGradient
                >
                  Terms and Conditions
                </SuiTypography>
              </SuiBox>
              <SuiBox mt={4} mb={1}>
                <SuiButton type="submit" variant="gradient" color="dark" fullWidth>
                  sign up
                </SuiButton>
              </SuiBox>
              <SuiBox mt={3} textAlign="center">
                <SuiTypography variant="button" color="text" fontWeight="regular">
                  Already have an account?&nbsp;
                  <SuiTypography
                    component={Link}
                    to="/authentication/sign-in"
                    variant="button"
                    color="dark"
                    fontWeight="bold"
                    textGradient
                  >
                    Sign in
                  </SuiTypography>
                </SuiTypography>
              </SuiBox>
            </SuiBox>
          </SuiBox>
        </Card>
      </div>
    </PageLayout>
  );
}

export default SignUp;
