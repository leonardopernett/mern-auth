import mongoose from 'mongoose'

export async function mongoConnect(){
  try {
    const connection =  await mongoose.connect('mongodb+srv://lnard214:destajador@cluster0.p8wdp3l.mongodb.net/')
    console.log('Conectado a la base de datos',connection.connection.db.databaseName)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }

}

