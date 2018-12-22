const express = require( 'express' )
const router = express.Router()
const multer = require( 'multer' )
const upload = multer( {
	dest: 'public/uploads/'
} )
const fs = require( 'fs' )
const path = require( 'path' )
const asyncMiddleware = require('../async')
const Video = require( '../models/Video' )

router.get( '/', ( req, res, next ) => {
	Video.find().exec( ( err, videos ) => {
			if ( err ) return res.send( err );
			res.send({ videos: videos })
		} )
} )

router.get( '/:id', ( req, res, next ) => {
			Video.findById( req.params.id )
			.exec( ( err, video ) => {
			if ( err ) return res.send( err )
			res.send( video )
		} )	
} )


router.post( '/', upload.single( 'file' ), ( req, res, next ) => {
	var video = new Video( {
		name: req.body.name,
	} )
	let tempPath = req.file.path;
	let targetPath = path.resolve(
		`public/uploads/${video._id}.${req.file.originalname.split('.').pop()}` )
	fs.rename( tempPath, targetPath, ( err ) => {
		if ( err ) return res.send( err )
		video.link = `/uploads/${video._id}.${req.file.originalname.split('.').pop()}`
		video.save( ( err, video ) => {
			if ( err ) return res.send( err )
			res.send( video )
		} )
	} )
} )

module.exports = router 
