// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React example components
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

function BasicLayout({ title, description, children }) {
  return (
    <PageLayout>
      <Grid container justifyContent="center" sx={{ textAlign: "center", marginTop: "2rem" }}>
        <Grid item xs={10} lg={4}>
          <SuiBox mt={6} mb={1}>
            <SuiTypography variant="h1" color="white" fontWeight="bold">
              {title}
            </SuiTypography>
          </SuiBox>
          <SuiBox mb={2}>
            <SuiTypography variant="body2" color="white" fontWeight="regular">
              {description}
            </SuiTypography>
          </SuiBox>
        </Grid>
      </Grid>

      <SuiBox mt={{ xs: -26, lg: -24 }} px={1}>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </SuiBox>
      <Footer />
    </PageLayout>
  );
}

// Setting default values for the props of BasicLayout
BasicLayout.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
