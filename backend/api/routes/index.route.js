const homeRoute = require("../routes/home.route")

module.exports = (app) => {
    const version = "/api"

    app.use(version + "/", homeRoute)
    
    // app.use(version + "/nha-cho-thue", userRoutes)

    // app.use(version + "/cho-thue-can-ho", userRoutes)

    // app.use(version + "/cho-thue-can-ho-chung-cu-mini", userRoutes)

    // app.use(version + "/cho-thue-can-ho-dich-vu", userRoutes)

    // app.use(version + "/tim-nguoi-o-ghep", userRoutes)

    // app.use(version + "/cho-thue-mat-bang", userRoutes)

    // app.use(version + "/blog", userRoutes)

    // app.use(version + "/bang-gia-dich-vu", userRoutes)
}
