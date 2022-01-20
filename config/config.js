const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "Neo_secret_key",
  mongoUri: "mongodb+srv://neo:diplom@cluster0.d7huc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
}
export default config
