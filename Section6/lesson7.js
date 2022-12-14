const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=8e56ba7f6c9a0b61482594f2bd59f90a&query=New%20York'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.location.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.location.lat
        const longitude = response.body.location.lon
        console.log('Latitude, Longtitude : ' + latitude + ', ' + longitude)
    }
})