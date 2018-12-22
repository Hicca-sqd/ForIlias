const express = require( 'express' )
const router = express.Router() //все

const Employer = require( '../models/Employer' )






router.use( '/team', require( './team' ) )
router.use( '/service', require( './service' ) ) 
module.exports = router
