import { BundledLanguage, BundledTheme, codeToHtml } from "shiki";

interface Props {
    code: string;
    lang: BundledLanguage;
    theme: BundledTheme;
}
export default async function Code({ code, lang, theme }: Props) {
    const html = await codeToHtml(code, {
        lang,
        theme,
    });

    return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}