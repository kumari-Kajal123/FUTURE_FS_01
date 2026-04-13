const Lead = require("../Model/leadModel.model")

//CREATE LEAD FROM CONTACT FORM
const createLead = async (req,res)=>{
try{
    const lead = await Lead.create(req.body)
    res.status(201).json(lead);
}catch(err){
    res.status(500).json({ err: err.message });
}

}

// GET ALL LEADS
const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};


// GET SINGLE LEAD
const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// UPDATE LEAD STATUS AND DATA
const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(lead);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// DELETE LEAD
const deleteLead = async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: "Lead deleted successfully" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = { createLead , getLeads , getLeadById , updateLead , deleteLead }