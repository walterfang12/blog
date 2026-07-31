---
author: Walter_Fang
pubDatetime: 2024-10-21T16:45:00.000Z
modDatetime: 2024-10-21T16:45:00.000Z
title: 题解：P4526 【模板】自适应辛普森法 2
slug: P4526
featured: false
draft: false
tags:
  - OI
description: P4526 【模板】自适应辛普森法 2 的题解。
---

## 自适应辛普森法题解与学习笔记

### 前言

首先看到[P4525 【模板】自适应辛普森法 1](https://www.luogu.com.cn/problem/P4525)。这题是很好的辛普森板题，但是用牛顿-莱布尼茨公式就可以算出答案：

当 $a=0$ 时，
$$
\begin{aligned}
\int \frac{c x+d}{a x+b} d x
& =\int \frac{c x+d}{b} d x \\
& =\frac{1}{b}\left(\int c x d x\right)+\frac{1}{b}\left(\int d d x\right) \\
& =\frac{c x^2}{2 b}+\frac{d x}{b}
\end{aligned}
$$
当 $a\not=0$ 时，
$$
\begin{aligned}
\int \frac{c x+d}{a x+b} d x
& =\int \frac{\frac{c}{a}(a x+b)-\frac{b c}{a}+d}{a x+b} d x \\
& =\left(\int \frac{c}{a} d x\right)+\left(\left(-\frac{b c}{a}+d\right) \int \frac{1}{a x+b} d x\right) \\
& =\frac{c x}{a}+(d-\frac{b c}{a}) \frac{\ln |a x+b|}{a}
\end{aligned}
$$
虽然这样我们就可以通过这题，但是肯定还要讲一下自适应辛普森法。

### 算法介绍

$\text{Simpson}$ 法的思想是将原曲线近似为一段段抛物线，再求每一段的面积。具体地，我们令 $f(x)=\frac{c x+d}{a x+b}, g(x)=A x^2+B x+C$ 为拟合函数，则有
$$
\begin{aligned}
\int_L^R f(x) d x & \approx \int_L^R g(x) \\
& =\frac{A}{3}\left(b^3-a^3\right)+\frac{B}{2}\left(b^2-a^2\right)+C(b-a) \\
& =\frac{b-a}{6}\left(A a^2+B a+C+A b^2+B b+C+A(b-a)^2+2B(b-a)+4 C\right) \\
& =\frac{b-a}{6}\left(f(a)+f(b)+f\left(\frac{b-a}{2}\right)\right)
\end{aligned}
$$
介绍完 $\text{Simpson}$ 法后我们再回过头看这题。

### 题解

题目要求$\int_0^{\infty}x^{\frac{a}{x}-x}\text{d}x$，肯定不能用牛顿-莱布尼茨公式。经过讨论可得：

当 $a<0$ 时，$\lim _{x \rightarrow 0} x^{\frac{a-x^2}{x}}=e^{\lim _{x \rightarrow 0} \frac{a-x^2}{x} \ln x}=+\infty$ ，原函数发散，输出 $\text{orz}$。

当 $a \geq 0$ 时。
$\lim _{x \rightarrow+\infty} x^2 x^{\frac{a-x^2}{x}}=e^{\lim _{x \rightarrow \infty} \frac{a-x^2+2 x}{x} \ln x}=0$ ，原函数收敛。用 $\text{Simpson}$ 法解决即可。

```cpp
#include<bits/stdc++.h>
using namespace std;
const double eps=1e-10;
double a;
double f(double x){return pow(x,a/x-x);}
double Simpson(double l,double r){return (f(l)+f(r)+4*f((l+r)/2))*(r-l)/6;}
double Query(double l,double r,double t){
 double mid=(l+r)/2,x=Simpson(l,mid),y=Simpson(mid,r);
 if(fabs(x+y-t)<=1e-9)return t;
 else return Query(l,mid,x)+Query(mid,r,y);
}
int main(){
 cin>>a;
 if(a<0)return cout<<"orz",0;
 cout<<fixed<<setprecision(5)<<Query(eps,20,Simpson(eps,20));
}
```
