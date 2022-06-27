require('dotenv').config();

import { mongoConnect } from './loaders/db-connect';
import { app } from './main';
(async () => {
  const PORT = process.env.PORT || 3001;
  await mongoConnect();
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
})();
