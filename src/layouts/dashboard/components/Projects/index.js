// @mui material components
import Card from "@mui/material/Card";
import Table from "examples/Tables/Table";

// Data
import data from "layouts/dashboard/components/Projects/data";

function Projects() {
  const { columns, rows } = data();

  return (
    <Card>
      <Table columns={columns} rows={rows} />
    </Card>
  );
}

export default Projects;
