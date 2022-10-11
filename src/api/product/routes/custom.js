module.exports = {
    routes: [
       {
        method : "GET",
        path: "/custom",
        handler: "product.customAction",
        config: {
            auth: false
        }
       }

    ]
}