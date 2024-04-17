import express from 'express'
export const couponRoute = () => {
    const router = express.Router()

    router.get("coupons/")
    router.get("coupons/:id")
    router.post("coupons/")
    

    return router
}