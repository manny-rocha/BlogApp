import app from "./app.js";
import { createServer } from "http";
import * as config from "./utils/config.js";
import { info } from "./utils/logger.js";

const server = createServer(app);
const PORT = config.PORT;

server.listen(PORT, () => {
  info(`Server running on port ${PORT}`);
});
