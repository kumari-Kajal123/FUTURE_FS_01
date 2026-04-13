const express = require('express')
const { createLead, getLeads, getLeadById, updateLead, deleteLead } = require('../Controller/leadController')
const route = express.Router()

route.post('/' , createLead )         //create lead
route.get('/' , getLeads )            //get all leads           
route.get('/:id', getLeadById);       // get single lead
route.put("/:id", updateLead);        // update lead
route.delete("/:id", deleteLead);     // delete lead

module.exports = route