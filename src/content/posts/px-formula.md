---
author: Walter_Fang 刮风落雪
pubDatetime: 2024-08-30T16:00:00.000Z
modDatetime: 2024-08-30T16:00:00.000Z
title: PX Formula
slug: px-formula
featured: true
draft: false
tags:
  - Math
description: 一种求解三角形中带系数线段和最大值的方法。
---

## 适用问题

![问题图示](https://cdn.luogu.com.cn/upload/image_hosting/ndk73g1v.png)

在 $\triangle ACB$ 中，$\angle ACB=\alpha$，$AB=a$（$\alpha$，$a$ 均为定值），求 $mAC+nBC$ 的最大值。

**结论:** $(mAC + nBC)_{\text{max}} = \frac{\sqrt{n^2 + 2mn\cos\alpha + m^2}}{\sin\alpha} \cdot a$。

**推导过程:** 将原式转化为 $m\left(AC + \frac{n}{m}BC\right)$。

- 当 $\alpha > 90^{\circ}$ 时:

#### (i) $\frac{n}{m} > -\cos\alpha$

延长 $AC$ 至 $D$，使得 $CD = \frac{n}{m}BC$，作 $BH \perp AD$，如图：

![图示1](https://cdn.luogu.com.cn/upload/image_hosting/0rzcd2od.png)

令 $\lambda = \frac{n}{m}$, $CH = BC \cdot (-\cos\alpha)$, $DH = CD - CH = (\lambda + \cos\alpha)BC$。

$BH = BC \cdot \sin\alpha$。

$\therefore \tan\angle ADB = \frac{HB}{DH} = \frac{\sin\alpha}{\lambda + \cos\alpha}$， $(\Leftrightarrow\angle ADB = \arctan\frac{\sin\alpha}{\lambda + \cos\alpha})$。

可以求出 $\sin\angle ADB = \frac{\sin\alpha}{\sqrt{\lambda^2 + 2\lambda\cos\alpha + 1}}$。

$\angle ADB$ 为定角，$AB$ 为定弦 $\Rightarrow$ $D$ 在 $\triangle ADB$ 的外接圆上运动。

则 $\triangle ADB$ 的外接圆半径的 $2$ 倍 $2r = \frac{AB}{\sin\angle ADB} = \frac{a}{\sin\alpha} \cdot \sqrt{\lambda^2 + 2\lambda\cos\alpha + 1}$。

$\because AD \leq 2r$

$\therefore AD_{\text{max}} = \frac{\sqrt{\lambda^2 + 2\lambda\cos\alpha + 1}}{\sin\alpha} \cdot a$。

#### (ii) $\frac{n}{m} < -\cos\alpha$

延长 $AC$ 至 $D$，使得 $CD = \frac{n}{m}BC$，作 $BH \perp AD$，如图：

![图示2](https://cdn.luogu.com.cn/upload/image_hosting/geq60ysa.png)

令 $\lambda = \frac{n}{m}$，$CH = BC \cdot (-\cos\alpha)$, $DH = CH - CD = (-\lambda - \cos\alpha)BC$。

$BH = BC \cdot \sin\alpha$。

$\therefore \tan\angle HDB = \frac{HB}{DH} = -\frac{\sin\alpha}{\lambda + \cos\alpha}$。

$\therefore \tan \angle ADB = -\tan \angle DHB = \frac{\sin\alpha}{\lambda + \cos\alpha}$ $(\Leftrightarrow \angle ADB = \arctan \frac{\sin\alpha}{\lambda + \cos\alpha})$

$\angle ADB$ 为定角，$AB$ 为定弦 $\Rightarrow$ $D$ 在 $\triangle ADB$ 的外接圆上运动。

可以求出 $\sin\angle ADB = \frac{\sin\alpha}{\sqrt{\lambda^2 + 2\lambda\cos\alpha + 1}}$。

则 $\triangle ADB$ 的外接圆半径的 $2$ 倍 $2r = \frac{AB}{\sin\angle ADB} = \frac{a}{\sin\alpha} \cdot \sqrt{\lambda^2 + 2\lambda\cos\alpha + 1}$。

$\because AD \leq 2r$

$\therefore AD_{\text{max}} = \frac{\sqrt{\lambda^2 + 2\lambda\cos\alpha + 1}}{\sin\alpha} \cdot a$。

- 当 $\alpha < 90^{\circ}$ 时:

延长 $AC$ 至 $D$，使得 $CD = \frac{n}{m}BC$，作 $BH \perp AD$，如图：

![图示3](https://cdn.luogu.com.cn/upload/image_hosting/ro4g3ctd.png)

令 $\lambda = \frac{n}{m}$。

$CH = BC \cdot \cos\alpha$，$DH = CD + CH = (\lambda + \cos\alpha)BC$。

$BH = BC \cdot \sin\alpha$。

$\therefore \tan\angle ADB = \frac{HB}{DH} = \frac{\sin\alpha}{\lambda + \cos\alpha}$， $(\Leftrightarrow\angle ADB = \arctan\frac{\sin\alpha}{\lambda + \cos\alpha})$。

$\angle ADB$ 为定角，$AB$ 为定弦 $\Rightarrow$ $D$ 在 $\triangle ADB$ 的外接圆上运动。

可以求出 $\sin\angle ADB = \frac{\sin\alpha}{\sqrt{\lambda^2 + 2\lambda\cos\alpha + 1}}$。

则 $\triangle ADB$ 的外接圆半径的 $2$ 倍 $2r = \frac{AB}{\sin\angle ADB} = \frac{a}{\sin\alpha} \cdot \sqrt{\lambda^2 + 2\lambda\cos\alpha + 1}$。

$\because AD \leq 2r$

$\therefore AD_{\text{max}} = \frac{\sqrt{\lambda^2 + 2\lambda \cos\alpha + 1}}{\sin\alpha} \cdot a$。

综上，$(AC+\frac{n}{m}\cdot BC)_{\max}=AD_{\max}=\frac{\sqrt{\lambda^2+2\lambda\cos\alpha+1}}{\sin\alpha} \cdot a$。

$\Leftrightarrow(m\cdot AC+n\cdot BC)_{\text{max}}=m\cdot AD_{\text{max}}=\frac{\sqrt{m^2+2mn\cos\alpha+n^2}}{\sin\alpha}\cdot a$。
