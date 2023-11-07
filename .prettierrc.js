module.exports = {
  // 一行长度至多 150 个字符
  "printWidth": 150,
  // 每个缩进的空格数量为 2
  "tabWidth": 2,
  // 使用空格缩进
  "useTabs": false,
  // 使用单引号
  "singleQuote": true,
	// 行末有分号
  "semi": true,
  // vue 缩进脚本和样式
  "vueIndentScriptAndStyle": false,
  // 换行格式维持已有的不变（lf/crlf 皆可）
  "endOfLine": "auto",
  "overrides": [
    {
      "files": "*.vue",
      "options": {
        // script 和 style 标签内的代码不需要缩进
        "vueIndentScriptAndStyle": false,
      }
    },
  ]
}