const mongoose = require('mongoose');
const moderationLogSchema = new mongoose.Schema({
  // Moderation log schema
});
const ModerationLog = mongoose.model('ModerationLog', moderationLogSchema);

module.exports = ModerationLog;