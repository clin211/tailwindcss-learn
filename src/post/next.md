Next.js 是一个由 Vercel 开发和维护的 React 框架，它以其简单易用、功能强大而受到开发者的广泛欢迎。Next.js 通过在 React 之上构建，使得开发者可以轻松实现服务端渲染（SSR）、静态站点生成（SSG）、客户端渲染（CSR）等多种渲染方式，并能够快速地创建现代化的、SEO 友好的 Web 应用。

Next.js 提供了一系列开箱即用的特性，如文件路由、API 路由、内置的 CSS 和 Sass 支持等，使得开发者无需过多关注繁琐的配置，而是能够专注于业务逻辑和用户体验的开发。


> 本文搭建的环境：
> - Node.js 版本：v20.9.0
> - pnpm 版本：8.10.5
> - IDE工具：Vs Code
> - Docker 版本：24.0.7

## 使用 create-next-app 创建项目
使用 `pnpx create-next-app` 创建项目

<img src="https://files.mdnice.com/user/8213/a0b73d35-49da-4c5d-96ac-976c2673db0e.png" />

使用自己熟悉的IDE 工具打开项目，下图是在 vs code 打开后样子：

<img src="https://files.mdnice.com/user/8213/1f3f81a2-9cc9-4050-a99b-9ccd1848f844.png" />

在终端中运行 `npm run dev`，终端中就会打印出运行在哪个端口，如下图：

<img src="https://files.mdnice.com/user/8213/e91c125c-8d9b-47e1-bb9e-9c1e5aec7c0a.png" />

从图中可以看到服务是启动在 3000 端口的，然后在浏览器中访问 `http://localhost:3000` 后如下界面：
<img src="https://files.mdnice.com/user/8213/003376c1-f04d-4944-9919-54c6e94e6f47.png" style="border-radius:12px" />



## 集成 editorconfig

[EditorConfig](https://editorconfig.org/) 可帮助多个开发人员在不同的编辑器和 IDE 上维护同一个项目的一致编码风格。

如果实在 vs code 开发者工具上，需要安装插件 [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)：

<img src="https://files.mdnice.com/user/8213/f61cb74d-c689-4ec8-a33a-6f1661fe6bbe.png" />

然后在项目的根目录中创建 `.editorconfig` 文件并添加如下配置项：

```
# EditorConfig helps developers define and maintain consistent coding styles across different editors and IDEs
# For more information about EditorConfig, please visit http://editorconfig.org

# Top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
charset = utf-8 # 使用 UTF-8 编码
indent_style = space # 使用空格缩进
indent_size = 4 # 缩进大小为 4 个空格
end_of_line = lf # 使用 Unix 风格的换行符
insert_final_newline = true # 每个文件末尾插入空行
trim_trailing_whitespace = true # 删除行尾多余的空格

[.{yml,yaml,editorconfig,md}]
indent_size = 2 # 对于 YAML、Markdown 等文件，缩进大小为 2 个空格
```

## 集成 Prettier
通过配置 Prettier，我们可以为前端工程化项目提供一致的代码格式化风格。虽然这看似只是一个小功能，但在一个完整的前端工程化项目中，这却是至关重要作用。尤其在多人协作时，Prettier 能帮助团队统一编码风格，减少代码风格上的争议和不一致。这不仅简化了项目的维护工作，还显著提升了项目的可读性和可管理性，为持续迭代和高效开发奠定了坚实的基础。

安装 prettier 之前，记得在 IDE 中安装 prettier 的插件

vs code 安装 [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 如下所示：
<img src="https://files.mdnice.com/user/8213/d29aa110-c4d3-405d-b02c-be629b18767a.png" />

WebStorm 中安装 如下图所示：
<img src="https://files.mdnice.com/user/8213/b5bbab6b-488a-4e84-aecf-07f5347399f7.png" />

安装 prettier
```sh
$ pnpm add -D prettier eslint-plugin-prettier eslint-config-prettier
```
在项目的根目录创建 `.prettierrc.js` 文件，然后再文件中加入下面内容（下面配置项可根据团队适当调整）：
```json
module.exports = {
    printWidth: 120, // 指定每行应保持在 120 个字符以内，超过后会进行换行
    tabWidth: 4, // 一个制表符等于 4 个空格
    useTabs: false, // 不使用制表符进行缩进
    semi: true, // 在语句末尾使用分号
    singleQuote: true, // 使用单引号而不是双引号。统一代码中字符串的引号样式
    jsxSingleQuote: true, // 在 JSX 中使用单引号
    trailingComma: 'es5', // 在 ES5 支持的多行结构中（如数组和对象）使用尾随逗号
    bracketSpacing: true, // 在对象的花括号 `{}` 内部保留空格，如 `{ foo: bar }`
    bracketSameLine: false, // 将多行 HTML 元素的闭合标签单独放在下一行，而不是与最后一个属性或内容同一行
    arrowParens: 'always', // 始终在箭头函数的唯一参数周围使用括号
    endOfLine: 'lf', // 使用 Unix 风格的换行符（\n）
    singleAttributePerLine: true, // JSX 中，每行强制只显示一个属性
};
```

上面是 prettier 的规则，当然不是项目中所有的文件都要用这套规则，有一些文件我们是可以忽略，下面来配置一个 prettier 规则生效时，要忽略那些文件的配置；在项目的根目录创建一个 `.prettierignore` 的文件，并添加如下内容：
```
.next
.log
.DS_Store
.jest-*
node_modules
*.log
**/.env*
.yarn
.yarnrc
.gitignore
.idea
```

配置完成之后再 package.json 文件中添加 scripts:
```json
"format": "prettier -w ."
```
在终端中执行 `pnpm foramt` 后效果如下：
<img src="https://files.mdnice.com/user/8213/78aa7fbc-15a2-4762-a9a4-ec1387a27eb5.png" />

## 集成 ESlint

ESLint 是一个用于 JavaScript 和 TypeScript 代码的静态代码分析工具。它的主要作用是帮助开发团队在代码编写阶段发现和修复代码中的错误、代码风格问题以及潜在的 bug，从而提高代码质量和可维护性。

next.js 的脚手架在初始化项目的时候，默认会安装 eslint，下面我们来根据项目进行扩充一些规则，在扩充规则之前，我们先安装 IDE 的插件。

在 vs code 中的插件是：

<img src="https://files.mdnice.com/user/8213/bbcc8ddc-2287-4ea9-b339-87e79b188af3.png" />

然后就安装 ESlint 相关依赖：
```sh
$ pnpm add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-next prettier-plugin-tailwindcss eslint-plugin-tailwindcss eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort eslint-plugin-unused-imports typescript-eslint
```
看着这么多 ESlint 的依赖，下面来看看他们都是些什么东西：
- `@typescript-eslint/eslint-plugin` 和 `@typescript-eslint/parser`: 用于支持 TypeScript 代码的 ESLint 检查和解析
- `eslint-config-next` 这是一个为 Next.js 项目提供的 ESLint 配置。
- `eslint-plugin-import`：专门用于检查和优化模块导入和导出的 ESLint 插件
- `eslint-plugin-jsx-a11y`：用于检查 React JSX 元素中的无障碍（a11y）问题的 ESLint 插件，检查 JSX 元素是否符合无障碍标准，如是否添加了必要的 alt 属性、是否使用了语义化的 HTML 标签等
- `eslint-plugin-react` 用于提供对 React 代码的规范检查和优化。
- `eslint-plugin-react-hooks` 则专门用于检查 React Hooks 的使用规范。如依赖项的管理、Hooks 的调用位置等。
- `eslint-plugin-simple-import-sort`：可以按照指定的顺序（如字母顺序、按组件类型分组等）对导入语句进行自动排序。提高代码的一致性和可读性，减少人为错误。
- `eslint-plugin-unused-imports`：识别和移除项目中未使用的模块导入，减少打包文件大小和提升加载速度。
- `prettier-plugin-tailwindcss` 这是一个 Prettier 插件，用于格式化 Tailwind CSS 类名。它会自动对 Tailwind CSS 类名进行排序和格式化，使你的 CSS 更加整洁和一致。

安装完成之后在项目的根目录创建一个 `.eslintrc.js` 的文件，并添加如下配置：
```js
mmodule.exports = {
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
    extends: [
        'eslint:recommended',
        'next',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    rules: {
        'no-unused-vars': 'off',
        'no-console': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/no-unescaped-entities': 'off',

        'react/display-name': 'off',
        'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],

        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': [
            'warn',
            {
                groups: [
                    ['^@?\\w', '^\\u0000'],
                    ['^@/lib', '^@/hooks'],
                    ['^@/data'],
                    ['^@/components'],
                    ['^@/store'],
                    ['^@/'],
                    [
                        '^\\./?$',
                        '^\\.(?!/?$)',
                        '^\\.\\./?$',
                        '^\\.\\.(?!/?$)',
                        '^\\.\\./\\.\\./?$',
                        '^\\.\\./\\.\\.(?!/?$)',
                        '^\\.\\./\\.\\./\\.\\./?$',
                        '^\\.\\./\\.\\./\\.\\.(?!/?$)',
                    ],
                    ['^@/types'],
                    ['^.+\\.s?css$'],
                    ['^'],
                ],
            },
        ],
    },
    globals: {
        React: true,
        JSX: true,
    },
};
```
解释下这段配置：
```js
'simple-import-sort/imports': [
    'warn', // 设置警告级别为 'warn'，如果 import 语句的顺序不符合以下规则，ESLint 将发出警告
    {
        groups: [
            // 匹配外部库和副作用导入。这包括第三方库（如 react, lodash 等）以及以 \u0000 开头的副作用导入。
            ['^@?\\w', '^\\u0000'], 
            // 匹配 .css 和 .scss 文件的导入。
            ['^.+\\.s?css$'], 
            // 匹配从 @/lib 和 @/hooks 目录导入的模块。通常用来导入库函数和自定义 Hook。
            ['^@/lib', '^@/hooks'], 
            // 匹配从 @/data 目录导入的静态数据文件。
            ['^@/data'], 
            // 匹配从 @/components目录导入的组件。
            ['^@/components', '^@/container'], 
            // 匹配从 @/store 目录导入的 Zustand 状态管理模块。
            ['^@/store'], 
            // 匹配其他以 @/ 开头的导入，这些导入没有被之前的规则捕获。
            ['^@/'], 
            // 这组规则用于匹配相对路径的导入，最多支持 3 级目录深度：
            [
                '^\\./?$', // 当前目录文件
                '^\\.(?!/?$)', // 当前目录中的文件
                '^\\.\\./?$', // 上一级目录中的文件
                '^\\.\\.(?!/?$)', // 上一级目录中的文件
                '^\\.\\./\\.\\./?$', // 上上一级目录中的文件
                '^\\.\\./\\.\\.(?!/?$)', // 上上一级目录中的文件
                '^\\.\\./\\.\\./\\.\\./?$', // 上上上一级目录中的文件
                '^\\.\\./\\.\\./\\.\\.(?!/?$)', // 上上上一级目录中的文件
            ], 
            // 匹配从 @/types 目录导入的类型定义文件。
            ['^@/types'], 
            // 匹配所有其他没有被之前规则匹配到的导入。
            ['^'], 
        ],
    },
],
```

## 集成husky、lint-staged、commitlint

在项目中已集成 ESLint 和 Prettier，在编码时，这些工具可以对我们写的代码进行实时校验，在一定程度上能有效规范我们写的代码，开发时可能觉得这些条条框框的限制很麻烦，选择视“提示”而不见，依旧按自己的一套风格来写代码，或者干脆禁用掉这些工具，开发完成就直接把代码提交到了仓库，日积月累，ESLint 也就形同虚设。

所以，还需要做一些限制，让没通过 ESLint 检测和修复的代码禁止提交，从而保证仓库代码都是符合规范的。

为了解决这个问题需要用到 Git Hook，在本地执行 git commit 的时候，就对所提交的代码进行 ESLint 检测和修复（即执行 eslint --fix），如果这些代码没通过 ESLint 规则校验，则禁止提交。


安装依赖
```sh
$ pnpm add -D husky lint-staged commitizen cz-customizable @commitlint/config-conventional
```
生成配置文件
```sh
pnpm exec husky init
```
这个命令执行完成之后，就会在项目的根目录生成一个 .husky 的文件夹，里面是 pre-commit 文件，还会在 package.json 中添加一条 scripts —— `"prepare": "husky"`。

然后在 package.json 中 dependencies 同级添加配置如下：
```json
"lint-staged": {
    "**/*.{js,jsx,ts,tsx}": [
        "eslint --max-warnings=0",
        "prettier -w"
    ],
    "**/*.{json,css,scss,md,webmanifest}": [
        "prettier -w"
    ]
}
```

在修改 .husky 目录下的 pre-commit 文件
```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```


配置 `commitlint.config.ts`，在配置之前，需要安装 `@commitlint/types` 依赖：
- 安装依赖
  ```sh
  pnpm add -D @commitlint/types
  ```

- 添加配置
  ```js
  import type { UserConfig } from '@commitlint/types';

  const Configuration: UserConfig = {
      extends: ['@commitlint/config-conventional'],
  };

  export default Configuration;
  ```

配置自定义的 commit 格式，在项目根目录下创建 `.cz-config.js` 文件，然后添加如下配置：
```js
module.exports = {
    // type 类型
    types: [
        { value: 'feat', name: 'feat:     引入新功能' },
        { value: 'fix', name: 'fix:      修复 bug' },
        { value: 'style', name: 'style:    更新 UI 样式文件' },
        { value: 'format', name: 'format:   格式化代码' },
        { value: 'docs', name: 'docs:     添加/更新文档' },
        { value: 'perf', name: 'perf:     提高性能/优化' },
        { value: 'test', name: 'test:     增加测试代码' },
        { value: 'refactor', name: 'refactor: 改进代码结构/代码格式' },
        { value: 'patch', name: 'patch:    添加重要补丁' },
        { value: 'file', name: 'file:     添加新文件' },
        { value: 'publish', name: 'publish:  发布新版本' },
        { value: 'config', name: 'config:   修改配置文件' },
        { value: 'git', name: 'git:      添加或修改 .gitignore 文件' },
    ],
    messages: {
        type: '选择你要提交的类型:',
        subject: '填写一个简短精炼的描述语句 (必填):\n',
        body: '添加一个更加详细的描述，可以附上新增功能的描述或 bug 链接、截图链接 (可选)。使用 "|" 换行:\n',
        breaking: '列举非兼容性重大的变更 (可选):\n',
        footer: '列举出所有变更的 ISSUES CLOSED (可选)。 例如.: #31, #34:\n',
        confirmCommit: '确认提交?（y/n）',
    },

    // 是否允许自定义填写 scope ，设置为 true ，会自动添加两个 scope 类型 [{ name: 'empty', value: false },{ name: 'custom', value: 'custom' }]
    allowCustomScopes: false,
    allowBreakingChanges: ['feat', 'fix'],
};
```

然后就在 package.json 中添加一条 scripts：
```json
"commit": "git add . && cz"
```

接下来在终端中运行下 `pnpm  commit`，正常情况应该是下面这样：

<img src="https://files.mdnice.com/user/8213/1b4fd526-9b50-4f13-a487-4a5750650a38.png" />

填写完相关信息后如下图：

<img src="https://files.mdnice.com/user/8213/184dd66e-7e15-4c38-9132-92defc87c617.png" />

从上面的图中也可以看到，最后在 lint 的时候报错了，原因也说得很直白，解决方案也提示了，就按照它提示处理，处理方式有三种：
- 在命令行中使用 --ignore-pattern 参数
  ```js
  eslint --ignore-pattern '!cz-config.js' .
  ```
- 在 .eslintignore 文件中添加相反的忽略模式
  ```js
  !cz-config.js
  ```
- 在 ESLint 配置文件中添加 ignorePatterns
  ```js
  module.exports = {
      // 你的其他 ESLint 配置
      ignorePatterns: ['!cz-config.js'],
  };
  ```
我就按照第一种处理，直接修改 package.json 中的 lint：
```json
"lint": "eslint src --fix --ext .ts,.tsx,.js,.jsx --max-warnings 0 --ignore-pattern '!.cz-config.js'"
```

调整完的效果就是这样：

<img src="https://files.mdnice.com/user/8213/80abd74f-c3a2-4005-bb10-63f8d46337e1.png" />

## 配置环境变量

Next.js 内置里对环境变量的支持，可以通过，使用环境变量有两种方式：
- 通过 .env.local 加载环境变量
- 通过 NEXT_PUBLIC_前缀在浏览器中获取环境变量

覆盖优先级为：.env.local > .env.production | .env.development > .env

### .env.local 加载环境变量
Next.js 支持从 `.env.local` 中加载环境变量到 process.env。在项目根目录下建立一个 `.env.local`文件
```js
DB_HOST=localhost
DB_USER=lin
DB_PASS=123456
```
这会自动将 `process.env.DB_HOST`、`process.env.DB_USER` 和加载到 Node.js 环境中，从而允许您在 Next.js 数据获取方法和API 路由 `process.env.DB_PASS` 中使用它们。

服务端组件或者路由处理程序中通过 `process.env` 获取到该值：
```tsx
export default function Page() {
    console.log(process.env.DB_HOST)
    return <h1>Hello World!</h1>
}
```
Next.js 数据获取方法中使用:
```ts
export async function getStaticProps() {
    const db = await myDB.connect({
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
    });
    // ...
}
```
### 定义客户端组件使用的环境变量
使用NEXT_PUBLIC_前缀定义客户端组件的环境变量

- 开发环境
  ```js
  //.env.development
  NEXT_PUBLIC_BASEURL = 'http://127.0.0.1:9000/api'
  ```
- 生产环境：
  ```
  //.env.production
  NEXT_PUBLIC_BASEURL = 'http://api.test.com/v1'
  ```

### 配置 Typescript 类型提示
在项目根目录下创建 typings.d.ts 文件，然后添加如下内容：
```ts
declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_BASEURL: string;
        DB_PORT: string;
        DB_HOST: string;
        DB_USER: string;
        DB_PASS: string;
    }
}
```

将 typings.d.ts 文件添加到 tsconfig.json 的 include 中：
```json
// other config
"include": [
    // other config
    "typing.d.ts"
]
```

如下图：
<img src="https://files.mdnice.com/user/8213/7da2929e-23b5-45e9-a95e-e13acb3059d3.png" style="width: 30em" />

之后在 vs code 中输入 `process.env.`，将会提示出下面的内容：

<img src="https://files.mdnice.com/user/8213/fd3be213-4359-4b0b-b2df-2886c731baaf.png" style="width: 30em" />

## 配置 SCSS

随着 Next.js 逐渐弃用 Less，Antd5也弃用Less改用css-in-js方案，我们这里就用 sass

Next.js内置支持 sass，只需要安装 sass 包：
```sh
$ pnpm add -D sass
```

项目的所有样式资源都在 `assets/styles/` 目录下；此时就需要在 next.config.mjs 中添加配置项：
```js
/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'styles')],
    },
};

export default nextConfig;
```

然后在 `src/assets/styles/` 下创建一个 home.module.scss 的样式文件：
```scss
$brand-color: #ff4500;

.container {
    background-color: #f7f7f7;
    min-height: 100vh;

    .title {
        color: $brand-color;
        font-size: 16px;
    }
}
```

然后在 page.tsx 中引入，完整代码如下：

```tsx
import styles from '@/assets/styles/home.module.scss';

export default function Home() {
    const DB_HOST = process.env.DB_HOST;
    console.log('🚀 ~ Home ~ DB_HOST:', DB_HOST);
    return (
        <main className={`${styles.container} p-24`}>
            <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
                <p className={styles.title}>this is title</p>
            </div>
        </main>
    );
}
```
效果如下：
<img src="https://files.mdnice.com/user/8213/dd54f984-eaa4-4546-ade7-18e0426e2304.png" style="border-radius: 10px" />

## 配置状态管理库

仓库不选择传统的redux，@reduxjs/toolkit。而是选择更为轻便的 zustand + immer（虽然zustand中内置了immer，但是后续还可以配合其他地方使用，所以单独安装 immer） 来管理

### 安装依赖
zustand 是一个更轻量级的状态管理库，immer 是以更方便的方式处理不可变状态。
```sh
pnpm add zustand immer
```

### 创建 store
新建 src/store/counter.ts
```ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
    count: number;
};

type Actions = {
    increment: (qty: number) => void;
    decrement: (qty: number) => void;
};

export const useCountStore = create<State & Actions>()(
    immer((set) => ({
        count: 0,
        increment: (qty: number) =>
            set((state) => {
                state.count += qty;
            }),
        decrement: (qty: number) =>
            set((state) => {
                state.count -= qty;
            }),
    }))
);
```
### 使用 store
在 scr/components/count/ 下创建 index.tsx，这是一个服务端组件，所以需要在顶部声明组件模式。然后引入 store 中的 counter，代码如下：
```ts
'use client';

import React from 'react';

import { useCountStore } from '@/store/counter';

import styles from './count.module.scss';

const Index = () => {
    const { count, increment, decrement } = useCountStore();
    return (
        <div>
            <h2 className={styles.title}>{count}</h2>
            <button
                onClick={() => increment(1)}
                className={styles.button}
            >
                数量加
            </button>
            <button
                onClick={() => decrement(1)}
                className={`${styles.button} ml-2`}
            >
                数量减
            </button>
        </div>
    );
};

export default Index;
```
让 UI 更美观一点，在同级目录下创建一个 `count.module.scss` 的文件并添加如下内容：
```scss
$button-padding: 8px 24px;
$button-font-size: 14px;
$button-font-weight: 600;
$button-color: #ffffff;
$button-bg-gradient: linear-gradient(45deg, #ff6b6b, #ff9e6b);
$button-border-radius: 25px;
$button-box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
$button-hover-bg-gradient: linear-gradient(45deg, #ff9e6b, #ff6b6b);
$button-hover-box-shadow: 0 15px 20px rgba(255, 107, 107, 0.4);
$button-active-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
$button-disabled-bg: #cccccc;

.title {
    font-size: 16px;
    font-weight: 600;
    color: #ff6b6b;
}

.button {
    display: inline-block;
    padding: $button-padding;
    font-size: $button-font-size;
    font-weight: $button-font-weight;
    color: $button-color;
    background: $button-bg-gradient;
    border: none;
    border-radius: $button-border-radius;
    box-shadow: $button-box-shadow;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: $button-hover-bg-gradient;
        box-shadow: $button-hover-box-shadow;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
        box-shadow: $button-active-box-shadow;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        background: $button-disabled-bg;
        cursor: not-allowed;
        box-shadow: none;
    }
}
```
上面组件准备完毕后，就在 page 中引入，效果如下：

<img src="https://files.mdnice.com/user/8213/f716eb74-8f78-4510-88a9-d5644a562f05.gif" style="border-radius: 10px" />

## 集成 UI 组件
antd 是一个设计精美、响应式的组件库，简化 UI 开发。

- 引入 antd
  ```sh
  $ pnpm add antd
  ```
  
- 使用 antd 组件

  修改 src/app/page.tsx，引入 antd 的按钮组件：
  
  ```jsx
  import { Button } from 'antd';

  import Counter from '@/components/Counter';

  import styles from '@/assets/styles/home.module.scss';

  export default function Home() {
      const DB_HOST = process.env.DB_HOST;
      return (
          <main className={`${styles.container} p-24`}>
              <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
                  <p className={styles.title}>this is title</p>
                  <h6 className='text-xl text-black'>环境变量：{DB_HOST}</h6>
              </div>
              <Counter />

              <Button type='primary'>Button</Button>
          </main>
      );
  }
  ```
- 目前按钮样式在首屏刷新时会闪动，还需配合 `@ant-design/nextjs-registry` 包使用
  ```sh
  pnpm add @ant-design/nextjs-registry
  ```

  在 app/layout.tsx 中使用
  ```jsx
  import { AntdRegistry } from '@ant-design/nextjs-registry';
  import type { Metadata } from 'next';
  import { Inter } from 'next/font/google';

  import '../assets/styles/globals.scss';

  const inter = Inter({ subsets: ['latin'] });

  export const metadata: Metadata = {
      title: 'Create Next App',
      description: 'Generated by create next app',
  };

  export default function RootLayout({
      children,
  }: Readonly<{
      children: React.ReactNode;
  }>) {
      return (
          <html lang='en'>
              <body className={inter.className}>
                  <AntdRegistry>{children}</AntdRegistry>
              </body>
          </html>
      );
  }
  ```

  > Next.js App Router 当前不支持直接使用 `.` 引入的子组件，如 <Select.Option />、<Typography.Text /> 等，需要从路径引入这些子组件来避免错误


参考开源项目：

- [create-t3-app](https://github.com/t3-oss/create-t3-app) 
- [Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate)
- [Blitz](https://github.com/blitz-js/blitz)
- [nextjs-app-dir-template](https://github.com/gitgitWi/nextjs-app-dir-template)
- [notion-clone-nextjs](https://github.com/evanch98/notion-clone-nextjs/tree/main)