'use strict';

/**
 * webshop service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::webshop.webshop');
