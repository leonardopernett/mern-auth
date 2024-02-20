import app from './app.js'
import color from 'colors'

app.listen(process.env.PORT, () => {
    console.log(color.bold(`Server is running on port ${process.env.PORT}`))
})