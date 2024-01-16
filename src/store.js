import { configureStore } from "@reduxjs/toolkit";

import emailTagger from "./modules/email-tagger/redux/index";

export default configureStore({
  reducer: { emailTagger },
});
