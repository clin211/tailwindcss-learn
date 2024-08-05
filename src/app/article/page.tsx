import { readFileSync } from 'fs'
import React from 'react'
import Code from '@/components/Code'
import markdownit from 'markdown-it'
const md = markdownit('commonmark')

const readMarkdownFile = () => {
    const pwd = process.cwd()
    const markdownFile = readFileSync(`${pwd}/src/post/next.md`, 'utf-8')
    console.log('🚀 ~ readMarkdownFile ~ markdownFile:', markdownFile)
    return markdownFile
}
export default function Article() {
    const markdownContent = readMarkdownFile()
    const content = md.render(markdownContent)
    return (
        <main>
            <div>Article</div>
            <Code code="let a = 1 + 4" lang="js" theme="slack-dark" />
            <Code code="console.log('Hello, world!')" lang="typescript" theme="slack-dark" />
            <Code
                code={`fn main() { println!(\"Hello, world!\"); }`}
                lang="rust"
                theme="github-dark"
            />
            <h2>next</h2>
            <div>{content}</div>
        </main>
    )
}
