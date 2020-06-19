const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ArticleSchema = new mongoose.Schema({
    articleId: {
        type: String,
        required: true
    },
    title: String,
    content: String,
    author: {
        type: String,
        default: 'noname'
    }
});

module.exports = mongoose.model('Article', ArticleSchema);