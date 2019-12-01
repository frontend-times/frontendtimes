const AV = require('leancloud-storage');
import { init as LeanCloudInit } from '../../utils/leancloud';

LeanCloudInit();

AV.debug.enable();

/**
 * POST
 * {
      "ClassName": "Feeds",
      "params": {
        "title": "sina",
        "link": "www.sina.com"
      }
    }
 */

module.exports = (req, res) => {
  const { ClassName, params: propertyKeyValue } = req.body;

  // 声明 class
  const ClassObject = AV.Object.extend(ClassName);

  // 构建对象
  const item = new ClassObject();

  // 为属性赋值
  item.set(propertyKeyValue);

  // 将对象保存到云端
  item.save().then(dataSource => {
    res.json({
      body: req.body,
      query: req.query,
      cookies: req.cookies,
      data: {
        ...dataSource,
      }
    })
  }, error => {
    // 异常处理
    res.json({
      body: req.body,
      query: req.query,
      cookies: req.cookies,
      data: {
        ...error,
      }
    })
  });
}