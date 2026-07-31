---
author: Walter_Fang
pubDatetime: 2024-10-11T09:15:00.000Z
modDatetime: 2024-10-11T09:15:00.000Z
title: 题解：P4986 逃离
slug: P4986
featured: false
draft: false
tags:
  - OI
description: P4986 逃离 的题解。
---

### 前言

卷积的不做评价。

正解应该有 $2$ 个做法，牛顿迭代或 $\text{FFT}$。

### 题意

求解区间 $[L,R]$ 内满足 $C^2(x)=A^2(x)+B^2(x)$ 的 $x$。

### 解析

令 $f(x)=C^2(x)-A^2(x)-B^2(x)$，接下来分 $2$ 种做法。

- $f(x)$ 可以直接用 $\text{FFT}$ 求，那么接下来根据零点存在定理二分求函数零点即可。题解区用模拟退火的乱搞做法我没看懂。
- $f'(x)=2C(x)C'(x)-2A(x)A'(x)-2B(x)B'(x)$，根据牛顿迭代公式 $x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}$ 代入迭代几次即可。初值选 $\frac{l+r}{2}$。
