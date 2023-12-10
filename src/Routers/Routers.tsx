import { Route, Routes } from "react-router-dom";

import App from "../App";
import PrivacyPolicyIren from "../page/PrivacyPolicyIren";
import DeleteAccountIren from "../page/DeleteAccountIren";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
        </Route>
        <Route path="/privacy-policy-iren" element={<PrivacyPolicyIren />} />
        <Route path="/delete-accountIren-iren" element={<DeleteAccountIren />} />
        {/* #order */}
      </Routes>
    </>
  );
};
