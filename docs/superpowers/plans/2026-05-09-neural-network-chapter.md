# Neural Network Chapter Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 新增 `docs/00-neural_network/` 入门章节，用 8 篇中文文档帮助初学者理解神经网络训练闭环。

**Architecture:** 这是纯文档变更。每篇 Markdown 独立负责一个概念，但全部使用同一个“小测是否通过”例子贯穿，并共同服务于“预测 -> 计算错误 -> 反向传播 -> 更新参数 -> 再预测”的训练闭环。

**Tech Stack:** Markdown, shell verification commands, git.

---

## File Structure

- Create: `docs/00-neural_network/01-what-is-neural-network.md`
  - 解释模型、参数、神经网络作为可学习预测函数的直觉。
- Create: `docs/00-neural_network/02-neuron-layer-and-activation.md`
  - 解释神经元、权重、偏置、层和激活函数。
- Create: `docs/00-neural_network/03-forward-pass.md`
  - 解释前向传播如何从输入得到预测。
- Create: `docs/00-neural_network/04-loss-function.md`
  - 解释损失函数如何衡量预测错误。
- Create: `docs/00-neural_network/05-gradient-descent.md`
  - 解释梯度下降和学习率的直觉。
- Create: `docs/00-neural_network/06-backpropagation.md`
  - 解释反向传播如何把错误信号逐层传回。
- Create: `docs/00-neural_network/07-training-loop.md`
  - 串起完整训练循环。
- Create: `docs/00-neural_network/08-summary.md`
  - 总结全章核心心智模型。

## Shared Writing Constraints

所有任务都必须遵守：

- 始终使用中文正文。
- 代码块里的说明也使用中文。
- 不提前引入大语言模型、Transformer、embedding 或 attention。
- 不放完整 Python/Numpy 代码。
- 不推导偏导公式。
- 保持现有 `docs/01-inference/` 的写作风格：直觉解释优先，少量公式辅助。
- 每篇围绕同一个例子：`学习时长 = 2 小时`、`复习次数 = 1 次`、目标是预测小测是否通过。
- 每篇尽量控制在 1200 到 1800 字。

### Task 1: Create 00-neural_network Directory

**Files:**
- Create: `docs/00-neural_network/`

- [ ] **Step 1: Create the chapter directory**

Run:

```bash
mkdir -p docs/00-neural_network
```

Expected: command exits with status 0.

- [ ] **Step 2: Verify the directory exists**

Run:

```bash
test -d docs/00-neural_network && echo "docs/00-neural_network exists"
```

Expected:

```text
docs/00-neural_network exists
```

- [ ] **Step 3: Commit the empty setup if git tracks a placeholder**

Do not commit an empty directory by itself. If no file was created, skip this commit step and continue to Task 2.

### Task 2: Write 01-what-is-neural-network.md

**Files:**
- Create: `docs/00-neural_network/01-what-is-neural-network.md`

- [ ] **Step 1: Draft the article**

Create `docs/00-neural_network/01-what-is-neural-network.md` with these sections:

```markdown
## 神经网络是什么

## 从一个预测问题开始

## 模型不是手写规则

## 参数：模型里会被训练调整的数字

## 神经网络可以看成一个函数

## 小结
```

Required content:

- 用“小测是否通过”引入预测问题。
- 明确说明神经网络是一种可以通过训练调整参数的预测函数。
- 解释手写规则和训练模型的区别。
- 解释参数是模型内部会被调整的数字。
- 可以使用 `输入 -> 模型 -> 预测` 这样的 `text` 流程图。

- [ ] **Step 2: Verify required headings and example**

Run:

```bash
rg -n "## 神经网络是什么|## 从一个预测问题开始|## 模型不是手写规则|## 参数：模型里会被训练调整的数字|## 神经网络可以看成一个函数|## 小结|学习时长|复习次数" docs/00-neural_network/01-what-is-neural-network.md
```

Expected: output includes all six headings plus `学习时长` and `复习次数`.

- [ ] **Step 3: Verify excluded topics are absent**

Run:

```bash
! rg -n "大语言模型|Transformer|embedding|attention|偏导|Python|NumPy" docs/00-neural_network/01-what-is-neural-network.md
```

Expected: command exits with status 0 and prints no matches.

- [ ] **Step 4: Commit**

Run:

```bash
git add docs/00-neural_network/01-what-is-neural-network.md
git commit -m "docs: add neural network introduction"
```

Expected: commit succeeds.

### Task 3: Write 02-neuron-layer-and-activation.md

**Files:**
- Create: `docs/00-neural_network/02-neuron-layer-and-activation.md`

- [ ] **Step 1: Draft the article**

Create `docs/00-neural_network/02-neuron-layer-and-activation.md` with these sections:

```markdown
## 神经元、层和激活函数

## 一个神经元在做什么

## 权重和偏置

## 多个神经元组成一层

## 为什么需要激活函数

## 小结
```

Required content:

- 用学习时长和复习次数作为两个输入。
- 解释权重表示不同输入的重要性。
- 解释偏置是模型可以调整的基础倾向。
- 展示一个简单公式，如 `输出 = 输入1 × 权重1 + 输入2 × 权重2 + 偏置`。
- 说明激活函数让网络不只是简单直线关系。
- 不要求读者理解矩阵乘法。

- [ ] **Step 2: Verify required headings and concepts**

Run:

```bash
rg -n "## 神经元、层和激活函数|## 一个神经元在做什么|## 权重和偏置|## 多个神经元组成一层|## 为什么需要激活函数|## 小结|学习时长|复习次数|权重|偏置|激活函数" docs/00-neural_network/02-neuron-layer-and-activation.md
```

Expected: output includes all required headings and concepts.

- [ ] **Step 3: Verify excluded topics are absent**

Run:

```bash
! rg -n "大语言模型|Transformer|embedding|attention|偏导|Python|NumPy" docs/00-neural_network/02-neuron-layer-and-activation.md
```

Expected: command exits with status 0 and prints no matches.

- [ ] **Step 4: Commit**

Run:

```bash
git add docs/00-neural_network/02-neuron-layer-and-activation.md
git commit -m "docs: explain neurons layers and activations"
```

Expected: commit succeeds.

### Task 4: Write 03-forward-pass.md

**Files:**
- Create: `docs/00-neural_network/03-forward-pass.md`

- [ ] **Step 1: Draft the article**

Create `docs/00-neural_network/03-forward-pass.md` with these sections:

```markdown
## 前向传播是什么

## 输入如何进入网络

## 中间层如何加工信息

## 输出层如何给出预测

## 前向传播还不知道自己对不对

## 小结
```

Required content:

- 说明前向传播是从输入一路算到输出的过程。
- 用 `学习时长 = 2` 和 `复习次数 = 1` 走一个小数字流程。
- 说明训练和使用模型时都会发生前向传播。
- 明确前向传播只产生预测，不负责判断预测是否正确。
- 使用一个 `text` 代码块展示 `输入 -> 中间层 -> 输出预测`。

- [ ] **Step 2: Verify required headings and concepts**

Run:

```bash
rg -n "## 前向传播是什么|## 输入如何进入网络|## 中间层如何加工信息|## 输出层如何给出预测|## 前向传播还不知道自己对不对|## 小结|学习时长|复习次数|输入 ->|输出预测" docs/00-neural_network/03-forward-pass.md
```

Expected: output includes all required headings and concepts.

- [ ] **Step 3: Verify excluded topics are absent**

Run:

```bash
! rg -n "大语言模型|Transformer|embedding|attention|偏导|Python|NumPy" docs/00-neural_network/03-forward-pass.md
```

Expected: command exits with status 0 and prints no matches.

- [ ] **Step 4: Commit**

Run:

```bash
git add docs/00-neural_network/03-forward-pass.md
git commit -m "docs: explain forward pass"
```

Expected: commit succeeds.

### Task 5: Write 04-loss-function.md

**Files:**
- Create: `docs/00-neural_network/04-loss-function.md`

- [ ] **Step 1: Draft the article**

Create `docs/00-neural_network/04-loss-function.md` with these sections:

```markdown
## 损失函数是什么

## 预测值和真实答案

## 用一个数字表示错得多严重

## 损失给训练提供方向

## 本章不展开复杂公式

## 小结
```

Required content:

- 设定真实标签：通过记为 `1`，未通过记为 `0`。
- 使用一个预测例子，例如模型预测通过概率是 `0.7`，真实标签是 `1`。
- 说明损失越大表示预测越差。
- 说明损失函数让“模型表现好不好”变成可计算数字。
- 不展开复杂损失公式。

- [ ] **Step 2: Verify required headings and concepts**

Run:

```bash
rg -n "## 损失函数是什么|## 预测值和真实答案|## 用一个数字表示错得多严重|## 损失给训练提供方向|## 本章不展开复杂公式|## 小结|真实标签|损失越大|0\\.7|通过" docs/00-neural_network/04-loss-function.md
```

Expected: output includes all required headings and concepts.

- [ ] **Step 3: Verify excluded topics are absent**

Run:

```bash
! rg -n "大语言模型|Transformer|embedding|attention|偏导|Python|NumPy" docs/00-neural_network/04-loss-function.md
```

Expected: command exits with status 0 and prints no matches.

- [ ] **Step 4: Commit**

Run:

```bash
git add docs/00-neural_network/04-loss-function.md
git commit -m "docs: explain loss functions"
```

Expected: commit succeeds.

### Task 6: Write 05-gradient-descent.md

**Files:**
- Create: `docs/00-neural_network/05-gradient-descent.md`

- [ ] **Step 1: Draft the article**

Create `docs/00-neural_network/05-gradient-descent.md` with these sections:

```markdown
## 梯度下降是什么

## 参数不是一次调对的

## 往损失变小的方向走

## 学习率：每次走多大一步

## 梯度下降在训练闭环里的位置

## 小结
```

Required content:

- 解释梯度是方向信息，帮助判断参数往哪边改会让损失变小。
- 解释学习率控制每次更新幅度。
- 用小测例子说明预测太低时，某些权重可能需要被调大。
- 明确这只是直觉解释，不推导梯度公式。

- [ ] **Step 2: Verify required headings and concepts**

Run:

```bash
rg -n "## 梯度下降是什么|## 参数不是一次调对的|## 往损失变小的方向走|## 学习率：每次走多大一步|## 梯度下降在训练闭环里的位置|## 小结|梯度|学习率|损失变小|小测" docs/00-neural_network/05-gradient-descent.md
```

Expected: output includes all required headings and concepts.

- [ ] **Step 3: Verify excluded topics are absent**

Run:

```bash
! rg -n "大语言模型|Transformer|embedding|attention|偏导|Python|NumPy|Adam|动量|学习率调度" docs/00-neural_network/05-gradient-descent.md
```

Expected: command exits with status 0 and prints no matches.

- [ ] **Step 4: Commit**

Run:

```bash
git add docs/00-neural_network/05-gradient-descent.md
git commit -m "docs: explain gradient descent"
```

Expected: commit succeeds.

### Task 7: Write 06-backpropagation.md

**Files:**
- Create: `docs/00-neural_network/06-backpropagation.md`

- [ ] **Step 1: Draft the article**

Create `docs/00-neural_network/06-backpropagation.md` with these sections:

```markdown
## 反向传播是什么

## 它要解决什么问题

## 从输出层开始看错误

## 错误信号如何往前传

## 每个参数如何知道自己的责任

## 小结
```

Required content:

- 明确问题：输出错了以后，怎么知道每个参数该往哪个方向改。
- 说明反向传播沿着前向传播留下的计算关系，从输出层往前走。
- 用“责任分配”解释不同权重对错误的影响不同。
- 可以提到“链式影响”的直觉，但不要推偏导公式。
- 不出现复杂数学推导。

- [ ] **Step 2: Verify required headings and concepts**

Run:

```bash
rg -n "## 反向传播是什么|## 它要解决什么问题|## 从输出层开始看错误|## 错误信号如何往前传|## 每个参数如何知道自己的责任|## 小结|输出层|错误信号|责任|方向改" docs/00-neural_network/06-backpropagation.md
```

Expected: output includes all required headings and concepts.

- [ ] **Step 3: Verify excluded topics are absent**

Run:

```bash
! rg -n "大语言模型|Transformer|embedding|attention|偏导|Python|NumPy|\\frac|\\partial" docs/00-neural_network/06-backpropagation.md
```

Expected: command exits with status 0 and prints no matches.

- [ ] **Step 4: Commit**

Run:

```bash
git add docs/00-neural_network/06-backpropagation.md
git commit -m "docs: explain backpropagation"
```

Expected: commit succeeds.

### Task 8: Write 07-training-loop.md

**Files:**
- Create: `docs/00-neural_network/07-training-loop.md`

- [ ] **Step 1: Draft the article**

Create `docs/00-neural_network/07-training-loop.md` with these sections:

```markdown
## 训练循环是什么

## 一轮训练包含哪些步骤

## 为什么要训练很多轮

## 参数更新后预测会变化

## 把完整流程串起来

## 小结
```

Required content:

- 串起前向传播、损失函数、反向传播、参数更新。
- 使用核心闭环：`预测 -> 计算错误 -> 调整参数 -> 再预测`。
- 说明多轮训练为什么可能逐步降低损失。
- 说明参数更新后，同一个输入可能得到不同预测。
- 使用 `text` 代码块展示完整流程。

- [ ] **Step 2: Verify required headings and concepts**

Run:

```bash
rg -n "## 训练循环是什么|## 一轮训练包含哪些步骤|## 为什么要训练很多轮|## 参数更新后预测会变化|## 把完整流程串起来|## 小结|预测 -> 计算错误 -> 调整参数 -> 再预测|前向传播|反向传播|参数更新" docs/00-neural_network/07-training-loop.md
```

Expected: output includes all required headings and concepts.

- [ ] **Step 3: Verify excluded topics are absent**

Run:

```bash
! rg -n "大语言模型|Transformer|embedding|attention|偏导|Python|NumPy|Adam|动量|学习率调度" docs/00-neural_network/07-training-loop.md
```

Expected: command exits with status 0 and prints no matches.

- [ ] **Step 4: Commit**

Run:

```bash
git add docs/00-neural_network/07-training-loop.md
git commit -m "docs: explain the training loop"
```

Expected: commit succeeds.

### Task 9: Write 08-summary.md

**Files:**
- Create: `docs/00-neural_network/08-summary.md`

- [ ] **Step 1: Draft the article**

Create `docs/00-neural_network/08-summary.md` with these sections:

```markdown
## 本章小结

## 神经网络是一种可训练的预测函数

## 前向传播负责预测

## 损失函数负责衡量错误

## 反向传播负责分配责任

## 梯度下降负责更新参数

## 训练循环让模型逐步变好
```

Required content:

- 总结本章的训练闭环。
- 回到“小测是否通过”的例子，但不要引入新概念。
- 明确每个概念在闭环里的职责。
- 结尾自然过渡到后续章节：读者已经理解神经网络的基础工作方式。
- 不提前展开大模型细节。

- [ ] **Step 2: Verify required headings and concepts**

Run:

```bash
rg -n "## 本章小结|## 神经网络是一种可训练的预测函数|## 前向传播负责预测|## 损失函数负责衡量错误|## 反向传播负责分配责任|## 梯度下降负责更新参数|## 训练循环让模型逐步变好|小测|预测 -> 计算错误 -> 调整参数 -> 再预测" docs/00-neural_network/08-summary.md
```

Expected: output includes all required headings and concepts.

- [ ] **Step 3: Verify excluded topics are absent**

Run:

```bash
! rg -n "大语言模型|Transformer|embedding|attention|偏导|Python|NumPy" docs/00-neural_network/08-summary.md
```

Expected: command exits with status 0 and prints no matches.

- [ ] **Step 4: Commit**

Run:

```bash
git add docs/00-neural_network/08-summary.md
git commit -m "docs: summarize neural network basics"
```

Expected: commit succeeds.

### Task 10: Whole-Chapter Verification

**Files:**
- Verify: `docs/00-neural_network/*.md`

- [ ] **Step 1: Verify all 8 chapter files exist**

Run:

```bash
find docs/00-neural_network -maxdepth 1 -type f -name '*.md' | sort
```

Expected:

```text
docs/00-neural_network/01-what-is-neural-network.md
docs/00-neural_network/02-neuron-layer-and-activation.md
docs/00-neural_network/03-forward-pass.md
docs/00-neural_network/04-loss-function.md
docs/00-neural_network/05-gradient-descent.md
docs/00-neural_network/06-backpropagation.md
docs/00-neural_network/07-training-loop.md
docs/00-neural_network/08-summary.md
```

- [ ] **Step 2: Verify shared example appears in every article**

Run:

```bash
for file in docs/00-neural_network/*.md; do rg -q "学习时长|复习次数|小测" "$file" || echo "missing shared example: $file"; done
```

Expected: no output.

- [ ] **Step 3: Verify excluded topics are absent from the chapter**

Run:

```bash
! rg -n "大语言模型|Transformer|embedding|attention|Python|NumPy|Adam|动量|学习率调度|\\frac|\\partial" docs/00-neural_network
```

Expected: command exits with status 0 and prints no matches.

- [ ] **Step 4: Verify chapter word-count range approximately**

Run:

```bash
wc -m docs/00-neural_network/*.md
```

Expected: each article should be roughly 1200 to 1800 Chinese characters or slightly above if needed for clarity. If one file is far shorter than 1000 characters or far longer than 2200 characters, revise it before continuing.

- [ ] **Step 5: Review narrative continuity**

Read the files in order:

```bash
sed -n '1,220p' docs/00-neural_network/01-what-is-neural-network.md
sed -n '1,240p' docs/00-neural_network/02-neuron-layer-and-activation.md
sed -n '1,240p' docs/00-neural_network/03-forward-pass.md
sed -n '1,240p' docs/00-neural_network/04-loss-function.md
sed -n '1,240p' docs/00-neural_network/05-gradient-descent.md
sed -n '1,260p' docs/00-neural_network/06-backpropagation.md
sed -n '1,240p' docs/00-neural_network/07-training-loop.md
sed -n '1,220p' docs/00-neural_network/08-summary.md
```

Expected:

- The chapter progresses from model basics to training loop.
- The shared example stays consistent.
- Later articles do not rely on concepts that were never introduced.
- The style matches `docs/01-inference/`.

- [ ] **Step 6: Commit verification fixes if any**

If Step 5 required edits, commit them:

```bash
git add docs/00-neural_network
git commit -m "docs: polish neural network chapter"
```

Expected: commit succeeds. If no edits were needed, skip this step.
