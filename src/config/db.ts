import mongoose from "mongoose"

export const connect = async () => {
  const mongoURI = process.env.MONGO_URI

  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    // eslint-disable-next-line no-console
    console.log("MongoDB Connected...")
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.message)
    // Exit processs with failure
    process.exit(1)
  }
}

export default connect
