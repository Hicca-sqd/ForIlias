const express = require( 'express' )
const router = express.Router()
const multer = require( 'multer' )
const upload = multer( {
	dest: 'public/uploads/'
} )
const fs = require( 'fs' )
const path = require( 'path' )
const asyncMiddleware = require('../async')
const Employer = require( '../models/Employer' )

router.get( '/', ( req, res, next ) => {
	Employer.find().exec( ( err, employers ) => {
			if ( err ) return res.send( err );
			res.send({ employers: employers})
		} )
} )

router.get( '/:id', ( req, res, next ) => {
			Employer.findById( req.params.id )
			.exec( ( err, employer ) => {
			if ( err ) return res.send( err )
			res.send( employer )
		} )	
} )


router.post( '/', upload.single( 'file' ), ( req, res, next ) => {
	var employer = new Employer( {
		name: req.body.name,
		profession: req.body.prof,
		skill: req.body.skill
	} )
	let tempPath = req.file.path;
	let targetPath = path.resolve(
		`public/uploads/${employer._id}.${req.file.originalname.split('.').pop()}` )
	fs.rename( tempPath, targetPath, ( err ) => {
		if ( err ) return res.send( err )
		employer.link = `/uploads/${employer._id}.${req.file.originalname.split('.').pop()}`
		employer.save( ( err, employer ) => {
			if ( err ) return res.send( err )
			res.send( employer )
		} )
	} )
} )

module.exports = router 
