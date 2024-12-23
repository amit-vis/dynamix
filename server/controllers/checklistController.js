const { fetchApplicationData, evaluateChecklist } = require('../services/checklistService');

const getChecklistResults = async (req, res) => {
    try {
        const applicationData = await fetchApplicationData();
        const checklistResults = evaluateChecklist(applicationData);
        res.status(200).json({ success: true, checklistResults });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getChecklistResults };
