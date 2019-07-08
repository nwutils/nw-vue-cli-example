const express = require('express');
const app = express();
app.use(express.static('./dist-vue'));
app.listen(8965);
