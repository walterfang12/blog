---
author: Walter_Fang
pubDatetime: 2024-01-31T14:00:00.000Z
modDatetime: 2024-01-31T14:00:00.000Z
title: P3122 做题笔记
slug: P3122
featured: false
draft: false
tags:
  - OI
  - Python
description: P3122 做题笔记。
---

### 省流

`Python` 大获全胜。

### 分析

首先得知道 `eval` 库。然后这道题目可以看成三则运算，`FD` 是加， `BK` 是减，`REPEAT` 是乘。

然后手动把输入的字符串处理一下，丢给 `eval` 库解决。

了吗？

看个例子：

`REPEAT 114[]`

显然是 `0`，但是 `eval` 把它转换成了这样：

`114*()`

然后因为 `Python` 里空括号是空元组，所以上面这种情况手动处理一下就行了。
