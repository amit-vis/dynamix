const axios = require('axios');
const { APPLICATION_DATA_URL } = require('../config/api');

const fetchApplicationData = async () => {
    try {
        const response = await axios.get(APPLICATION_DATA_URL);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch application data');
    }
};

const evaluateChecklist = (data) => {
    return [
        {
            ruleName: 'Valuation Fee Paid',
            isValid: data.isValuationFeePaid === true,
        },
        {
            ruleName: 'UK Resident',
            isValid: data.isUkResident === true,
        },
        {
            ruleName: 'Risk Rating Medium',
            isValid: data.riskRating === 'Medium',
        },
        {
            ruleName: 'LTV Below 60%',
            isValid: (data.loanRequired / data.purchasePrice) * 100 < 60,
        },
    ];
};

module.exports = { fetchApplicationData, evaluateChecklist };
