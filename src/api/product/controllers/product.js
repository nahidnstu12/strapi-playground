'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({strapi})=>({
    async customAction(ctx){
        try {
            // console.log(ctx);
            
            ctx.body = "PRODUCT API CALLING"
        } catch (error) {
            ctx.body = error
        }
    }
}));
