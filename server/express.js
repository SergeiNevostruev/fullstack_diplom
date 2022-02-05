import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
// import Template from './../template.js'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
import postRoutes from './routes/post.routes.js'
// import { expressCspHeader, NONCE, INLINE, SELF, NONE } from 'express-csp-header'
// const { expressCspHeader, NONCE } = require('express-csp-header');


import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const cspOptoin = {
//   directives: {
//       'script-src': [INLINE]
//   }
// }
// const cspOptoin = {
//   directives: {
//       'default-src': [SELF],
//       'script-src': [SELF, INLINE, '/'],
//       'style-src': [SELF, '/'],
//       'img-src': ['data:', '/'],
//       'worker-src': [NONE],
//       'block-all-mixed-content': true
//   }
// }

const CURRENT_WORKING_DIR = process.cwd()
const app = express()


// app.use(expressCspHeader(cspOptoin));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())


app.use('/', authRoutes)
app.use('/', userRoutes)
app.use('/', postRoutes)


if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, './../client', 'build')))
  console.log(path.join(__dirname, './../client', 'build'));
  console.log(path.resolve(__dirname,'./../client', 'build', 'index.html'))
  app.get('*', expressCspHeader(cspOptoin), (req,res) => {
    res.sendFile(path.resolve(__dirname,'./../client', 'build', 'index.html'))
  })
}


app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});


export default app