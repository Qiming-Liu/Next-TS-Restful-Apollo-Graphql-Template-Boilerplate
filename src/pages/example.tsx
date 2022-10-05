import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { hello, getUser1 } from "@/services/api/hello";
import { GET_USER } from "@/services/gql/user";

const Example: NextPage = () => {
  const [helloData, setHelloData] = useState("");
  const { loading, error, data } = useQuery(GET_USER);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => {
            hello().then((response) => {
              setHelloData(response.data);
            });
          }}
        >
          Nextjs api Get Hello Data
        </Button>
        <Typography variant="subtitle1">{JSON.stringify(helloData)}</Typography>
        <Typography sx={{ mt: 2 }} variant="h5">
          Backend api Get getUser1:
        </Typography>
        <Typography sx={{ mt: 2 }} variant="h5">
          Graphql Get User:
        </Typography>
        <Typography variant="subtitle1">{JSON.stringify(loading || error || data)}</Typography>
      </Box>
    </Container>
  );
};

export default Example;
