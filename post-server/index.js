const fs = require('fs');
const express = require('express');
const cors = require('cors')
const marked = require('marked');
const { JSDOM } = require('jsdom');

const app = express();
const port = 3000;


app.use(cors())

// 假设有一个函数来模拟从数据库获取文章内容
function getArticleContent () {
    // 这里应该是数据库查询逻辑
    // 模拟返回一个文章字符串
    const cwd = process.cwd();
    const content = fs.readFileSync(`${cwd}/server/next.md`, 'utf-8');
    return content;
}

app.get('/article', (req, res) => {
    const markdownContent = getArticleContent();
    const htmlContent = marked.parse(markdownContent);

    // 使用JSDOM来解析HTML内容
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;

    // 这里需要自定义逻辑来确定"30%"的内容
    // 例如，根据可视高度或者其他标准来截取DOM元素
    // 以下是一个简化的示例，仅用于说明
    const allElements = document.body.children;
    const numElementsToShow = Math.ceil(allElements.length * 0.1);
    const elementsToShow = Array.from(allElements).slice(0, numElementsToShow);

    // 重新构建HTML字符串
    let renderedHtml = '';
    elementsToShow.forEach(el => {
        renderedHtml += el.outerHTML;
    });

    res.send(renderedHtml);
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});