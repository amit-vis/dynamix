const mongoose = require('mongoose');

const checklistRuleSchema = new mongoose.Schema({
    ruleName: {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        required: true,
    },
    isValid: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: true,
});

const ChecklistRule = mongoose.model('ChecklistRule', checklistRuleSchema);
module.exports = ChecklistRule;