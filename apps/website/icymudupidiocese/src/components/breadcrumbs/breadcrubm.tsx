import { Box, Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes";

export default function Breadcrumb() {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter((path) => path);
  function getByTitle(path: string): string | null {
    return routes.find((route) => route.path === path)?.title || null;
  }
  return (
    <Box mt={2}>
      <Breadcrumbs sx={{ whiteSpace: "nowrap" }}>
        {pathname !== "/" && (
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              color={pathname !== "/" ? "primary.main" : "#1B001B"}
              fontWeight={700}
              variant="h6"
            >
              Home
            </Typography>
          </Link>
        )}
        {pathname !== "/" &&
          paths?.map((path, index) => {
            let constructPath = "/" + paths.slice(0, index + 1).join("/");
            let title = getByTitle(constructPath);
            let isEndPath: boolean = paths.length - 1 === index;
            return (
              <Link
                to={title ? constructPath : ""}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  textTransform={"capitalize"}
                  color={isEndPath ? "text.primary" : "primary.main"}
                  fontWeight={700}
                  variant="h6"
                >
                  {title || path}
                </Typography>
              </Link>
            );
          })}
      </Breadcrumbs>
    </Box>
  );
}
