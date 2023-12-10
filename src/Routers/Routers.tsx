import { Route, Routes } from "react-router-dom";

import App from "../App";
import PrivacyPolicyIren from "../page/PrivacyPolicyIren";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
        </Route>
        <Route path="/privacy-policy-iren" element={<PrivacyPolicyIren />} />
        {/* #order */}
      </Routes>
    </>
  );
};
