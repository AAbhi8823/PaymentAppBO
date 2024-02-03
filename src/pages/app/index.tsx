import { FC } from "react";
import AppRoutes from "@app/routes/AppRoutes";
import DisableInspect from "./DisableInspect";

/***
1) this page contains routes for all the page
2) Warning:- don't add any page related data here 
***/

const index: FC = () => {
  return (
    <>
      <DisableInspect/>
      <AppRoutes />
    </>
  )
}

export default index;