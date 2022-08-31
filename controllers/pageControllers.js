//require
const express =require('express')
const {readFileSync} =require('fs')
const path =require('path')

//showHomePage
const showHomePage = (req, res) =>{
    const slide = readFileSync(path.join(__dirname, '../db/slider.json'))
    const clients = readFileSync(path.join(__dirname, '../db/clients.json'))
    const glogs = readFileSync(path.join(__dirname, '../db/blog.json'))
    const testimonials = readFileSync(path.join(__dirname, '../db/testimonial.json'))
    res.render('index',{
        slide : JSON.parse(slide.toString()),
        clients : JSON.parse(clients.toString()),
        blogs : JSON.parse(glogs.toString()),
        testimonials : JSON.parse(testimonials.toString())

    })
}

//showHomeTwoPage
const showHomeTwoPage = (req, res) =>{
    const slide = readFileSync(path.join(__dirname, '../db/slider.json'))
    const clients = readFileSync(path.join(__dirname, '../db/clients.json'))
    const glogs = readFileSync(path.join(__dirname, '../db/blog.json'))
    const testimonials = readFileSync(path.join(__dirname, '../db/testimonial.json'))
    res.render('index-2',{
        slide: JSON.parse(slide.toString()),
        clients : JSON.parse(clients.toString()),
        blogs : JSON.parse(glogs.toString()),
        testimonials : JSON.parse(testimonials.toString())
    })
}

//showShopPage
const showShopPage = (req, res) =>{
    const products = readFileSync(path.join(__dirname, '../db/shop.json'))
    res.render('shop-3col',{
        products : JSON.parse(products.toString())
    })
}

//showSingleProductPage
const showSingleProductPage = (req, res) =>{
    const products = JSON.parse(readFileSync(path.join(__dirname, '../db/shop.json')))
    const singleShop = products.find( data => data.id == req.params.id)
    
    res.render('single-product',{
        product : singleShop
    })
}


//exports
module.exports = {showHomePage, showHomeTwoPage, showShopPage, showSingleProductPage}