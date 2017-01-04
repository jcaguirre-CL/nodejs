var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/todo-api');
var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  update_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Todo', TodoSchema);
