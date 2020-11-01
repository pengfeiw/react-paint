## React Template

**语言**：TypeScript

**UI框架**：antd

**代码提交规则commitlint**:

| Type     | 描述         |
| -------- | ------------ |
| feat     | 新功能       |
| fix      | 修改bug      |
| docs     | 文档相关     |
| style    | 样式相关     |
| refactor | 代码重构     |
| test     | 增加测试     |
| revert   | 代码回滚     |
| config   | 构建配置相关 |
| chore    | 其他改动     |

配和husky和lint-staged，进行提交检查。

**husky**: 强制用户提交按照commitlint规则进行提交，否则报错。

**lint-staged**: 在用户提交前运行eslint，检查代码错误。

**eslint**: 统一代码风格，检查代码语法错误（@typescript-eslint）。

**less**: css预处理器。 