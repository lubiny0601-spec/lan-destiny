# engines/ · 排盘引擎来源与授权

这些脚本**不是本项目原创**，是从外部 skill 目录收进仓库的第三方排盘引擎，目的是让项目自包含（换电脑、交接、部署时不再依赖 `~/.claude/skills/bazi-mingli`）。

| 文件 | 作用 |
|---|---|
| `paipan.py` | 八字排盘：四柱 / 藏干 / 十神 / 五行动力 / 大运 / 流年流月；`--partner` 参数兼做合婚双盘对照 |
| `ziwei.py` | 紫微斗数安星：十二宫、五行局、紫微星系、天府星系、四化、六吉六煞、大限小限 |
| `meihua.py` | 梅花易数起卦：先天数取卦、互卦、变卦、体用定位 |
| `liuyao.py` | 六爻纳甲装卦：纳甲、八宫世应、六亲、六神、动爻变卦、月建日辰旬空 |
| `qimen.py` | 时家奇门排局（转盘）：定局、地盘三奇六仪、值符值使、天盘九星、八门、八神 |

## 来源与授权

- 来源：`HeiGe-SuanMing / bazi-mingli` skill（本地安装在 `~/.claude/skills/bazi-mingli/scripts/`）
- 授权：**PolyForm Noncommercial License 1.0.0**
- 依赖：`lunar_python >= 1.4.8`（见 `engines/requirements.txt`）

## 需要留意的一条

PolyForm Noncommercial 是**非商业授权**。当前项目个人使用、免费分享没有问题；但**一旦要收费、接商单、或作为商业产品的一部分，就必须先取得该引擎的商业授权或替换引擎**。这条限制跟着这五个文件走，不会因为被收进本仓库而改变。

## 服务端怎么找它们

`server.py` 的查找顺序（改过）：

1. 仓库自带的 `engines/`（**默认，已内置**）
2. `BAZI_SKILL_DIR` 指向的目录下的 `scripts/`
3. `~/.claude/skills/bazi-mingli/scripts/`（旧行为，作为兜底）

所以把仓库拷到任何一台装了 Python + `lunar_python` 的机器上，专业版都能直接跑起来。

## 脚本之间的依赖关系

五个脚本互相 import（`liuyao` 依赖 `meihua` 与 `paipan`；`meihua` / `ziwei` / `qimen` 依赖 `paipan`），所以它们必须**平铺在同一个目录**里，不能拆开放。
