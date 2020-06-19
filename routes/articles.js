const express = require('express');
const mockData = require('../data');
const Article = require('../models/article');
const router = express.Router();

router.get('/', (req, res) => {
    // DB에서 전체글을 조회해서 JSON 형태 만들어서 응답..
    Article.find({}).exec(function (err, doc) {
      res.send(doc);
    });
});
router.post('/', (req, res) => {
    Article.create(req.body, function (err, saved) {
      if (err) {
        res.send('에러입니다.');
      }
      res.send(saved);
    });
    // const forSave = new Article(req.body);
    // forSave.save()
    //   .then(function (saved) {
    //     res.send(saved);
    //   })
    //   .catch(function (err) {
    //     res.send(err);
    //   });
});
router.get('/:articleId', (req, res) => {
    const aId = req.params.articleId
    Article.find({articleId : aId}).exec(function (err, doc) {
      if (err) {
        res.send('에러 발생');
      }
      res.send(doc[0]);
    });
    // DB를 조회해서 데이터를 검색 응답..
    // mockData.forEach(function (item) {
    //     if (item.articleId === articleId) {
    //         res.send(item);
    //     }
    // })
    // res.send('찾으려는 글이 없습니다.');
});
router.put('/', (req, res) => {
    const article = req.body;
    res.send('글이 정상적으로 수정 되었습니다.');
})
router.delete('/:articleId', (req, res) => {
    const keyForDelete = req.params.articleId;
    res.send(keyForDelete + ' 번 글이 정상적으로 삭제 되었습니다.');
})

module.exports = router;