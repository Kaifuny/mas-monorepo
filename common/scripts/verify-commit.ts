// Invoked on the commit-msg git hook by yorkie.
// NOTE: chalk@^5 goes to support ESM but is under development
// from chalk README
// IMPORTANT: Chalk 5 is ESM. If you want to use Chalk with TypeScript or a build tool, you will probably want to use Chalk 4 for now.
import fs from "fs";
import { ArgumentParser } from "argparse";
const chalk = require("chalk");
const osLocale = require("os-locale");

const parser = new ArgumentParser({
    description: "Commit verify cli"
});

parser.add_argument("COMMIT_MSG_PATH", { help: "String of the commit message", type: "str" });

const namespace = parser.parse_args();
const commit_msg = fs.readFileSync(namespace.COMMIT_MSG_PATH, { encoding: "utf-8" });
const commitRE =
    /^(((\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]) )?(revert: )?(feat|fix|docs|UI|refactor|perf|workflow|build|CI|typos|chore|tests|types|wip|release|dep|locale)(\(.+\))?: .{1,50}/;

if (!commitRE.test(commit_msg)) {
    console.log();
    osLocale().then((locale: string) => {
        if (locale === "zh-CN") {
            console.error(
                `  ${chalk.bgRed.white(" ERROR ")} ${chalk.red(`提交日志不符合规范`)}\n\n${chalk.red(
                    `  合法的提交日志格式如下(emoji 和模块可选填):\n\n`
                )}
        ${chalk.green(`[<emoji>] [revert: ?]<type>[(scope)?]: <message>\n`)}
        ${chalk.green(`💥 feat: 添加了个很棒的功能`)}
        ${chalk.green(`🐛 fix: 修复了一些 bug`)}
        ${chalk.green(`📝 docs: 更新了一下文档`)}
        ${chalk.green(`🌷 UI: 修改了一下样式`)}
        ${chalk.green(`🏰 chore: 对脚手架做了些更改`)}
        ${chalk.green(`🌐 locale: 为国际化做了微小的贡献\n`)}
        ${chalk.green(
            `其他提交类型: refactor, perf, workflow, build, CI, typos, tests, types, wip, release, dep\n`
        )}
        ${chalk.red(`See https://github.com/vuejs/core/blob/main/.github/commit-convention.md\n`)}`
            );
        } else {
            console.error(
                `  ${chalk.bgRed.white(" ERROR ")} ${chalk.red(
                    `invalid commit message format.`
                )}\n\n${chalk.red(
                    `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
                )}
        ${chalk.green(`[<emoji>] [revert: ?]<type>[(scope)?]: <message>\n`)}
        ${chalk.green(`💥 feat: add 'comments' option`)}
        ${chalk.green(`🐛 fix: fix some bug`)}
        ${chalk.green(`📝 docs: add some docs`)}
        ${chalk.green(`🌷 UI: better styles`)}
        ${chalk.green(`🏰 chore: Made some changes to the scaffolding`)}
        ${chalk.green(`🌐 locale: Made a small contribution to internationalization\n`)}
        ${chalk.green(
            `Other commit types: refactor, perf, workflow, build, CI, typos, tests, types, wip, release, dep\n`
        )}
        ${chalk.red(`See https://github.com/vuejs/core/blob/main/.github/commit-convention.md\n`)}`
            );
        }

        process.exit(1);
    });
}

export default () => {};
