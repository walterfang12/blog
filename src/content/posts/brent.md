---
author: Walter_Fang
pubDatetime: 2024-10-14T20:05:11.866Z
modDatetime: 2024-10-14T20:05:11.866Z
title: 函数零点求解法中的布伦特法
slug: brent
featured: false
draft: false
tags:
  - OI
  - Math
description: 函数零点求解法中布伦特法的学习笔记。
---

#### 一般的零点求解方法

给定给定区间 $[a, b]$ ，函数连续且 $f(a) \cdot f(b)<0$ ，那么根据介值定理，函数必然在区间内有根。

- 二分法：将区间不断二分，使端点不断逼近零点。下一次迭代的区间为 $\left[a, c\right.$ 或 $[c, b]$ ，其中 $c=\frac{a+b}{2}$ 。
- 割线法 (线性插值)：基本思想是用弦的斜率近似代替目标函数的切线斜率，并用割线与横轴交点的横坐标作为方程式的根的近似。即给定两个点 $(a, f(a)),(b, f(b))$ 。其割线方程为 $y=\frac{f(b)-f(a)}{b-a} \cdot(x-b)+f(b)$ ，那么令 $y=0$ ， $x$ 的值即为下一次迭代的结果
  $$
  c=b-\frac{f(b) \cdot(b-a)}{f(b)-f(a)}
  $$
- 逆二次插值法：为割线法的进化版本。使用三个点确定一个二次函数，二次函数与横轴交错的点即为下次迭代的值。但是，其二次函数可能不会和横轴相交，因此做出一点改变，以y值作为自变量。给定三个点 $\left(x_{i-2}, f\left(x_{i-2}\right)\right),\left(x_{i-1}, f\left(x_{i-1}\right)\right),\left(x_i, f\left(x_i\right)\right)$, 则通过这三个点确定的二次函数为
  $$
  x=\frac{\left(y-f\left(x_{i-1}\right)\right)\left(y-f\left(x_i\right)\right)}{\left(f\left(x_{i-2}\right)-f\left(x_{i-1}\right)\right)\left(f\left(x_{i-2}\right)-f\left(x_i\right)\right)} \cdot x_{i-2}+\frac{\left(y-f\left(x_{i-2}\right)\right)\left(y-f\left(x_{i-1}\right)\right)}{\left(f\left(x_i\right)-f\left(x_{i-2}\right)\right)\left(f\left(x_i\right)-f\left(x_{i-1}\right)\right)} \cdot x_i+\frac{\left(y-f\left(x_{i-2}\right)\right)\left(y-f\left(x_i\right)\right)}{\left(f\left(x_{i-1}\right)-f\left(x_{i-2}\right)\right)\left(f\left(x_{i-1}\right)-f\left(x_i\right)\right)} \cdot x_{i-1}
  $$
  ，令 $\mathrm{y}=0$ ，求得
  $$
  x_{i+1}=\frac{f\left(x_{i-1}\right) f\left(x_i\right)}{\left(f\left(x_{i-2}\right)-f\left(x_{i-1}\right)\right)\left(f\left(x_{i-2}\right)-f\left(x_i\right)\right)} \cdot x_{i-2}+\frac{f\left(x_{i-2}\right) f\left(x_{i-1}\right)}{\left(f\left(x_i\right)-f\left(x_{i-2}\right)\right)\left(f\left(x_i\right)-f\left(x_{i-1}\right)\right)} \cdot x_i+\frac{f\left(x_{i-2}\right) f\left(x_i\right)}{\left(f\left(x_{i-1}\right)-f\left(x_{i-2}\right)\right)\left(f\left(x_{i-1}\right)-f\left(x_i\right)\right)} \cdot x_{i-1}
  $$

#### 布伦特法

初始化区间 $\left(a_0, b_0\right)$ 使得 $f\left(a_0\right) \cdot f\left(b_0\right)<0$ 。其中 $b_k$ 是上次迭代中的根估计值。如果 $\left|f\left(a_0\right)\right|<\left|f\left(b_0\right)\right|$,那么赋值互换（我们认为对应函数值的绝对值较小的点更接近真正的根值) 。

每次迭代包含四个点:

- $b_k$ ：为当前迭代的根估算值；
- $a_k$ : 对位点，即满足 $\left|f\left(a_k\right)\right|<\left|f\left(b_k\right)\right|_{\text {且 }} f\left(a_k\right) \cdot f\left(b_k\right)<0$ 的值。
- $b_{k-1}$ : 上一次迭代的根估算值，第一次迭代设置为 $b_{k-1}=a_0$
- $b_{k-2}$ ：上上此迭代的根估算值（不用初始化，在首次迭代过程中，不会用到他来进行判断，结尾进行赋值）。

#### 方法的选择

有以下四个不等式:

$$
\begin{aligned}
& |\delta|<\left|b_k-b_{k-1}\right| \text { (1) } \\
& |\delta|<\left|b_{k-1}-b_{k-2}\right| \text { (2) } \\
& \left|s-b_k\right|<\frac{1}{2}\left|b_k-b_{k-1}\right| \text { (3) } \\
& \left|s-b_k\right|<\frac{1}{2}\left|b_{k-1}-b_{k-2}\right|\text { (4) }
\end{aligned}
$$

上次迭代为二分法且 $(1)$ 为假；上次迭代为二分法且 $(3)$ 为假；上次迭代为插值法且 $(2)$ 为假；上次迭代为插值法且 $(4)$ 为假；以插值法计算的临时值不在 $\frac{3a_k+bk}{4}$ 和 $b_k$ 中间，以上五个条件满足一个，那么本次迭代的值采用二分法，否则采用插值法。

而插值法的选择如下：如果三点各不同，则用二次插值；否则用线性插值。

本次迭代的临时值 $s$ 作为区间的一个端点，另一个端点在 $a_k$ 和 $b_k$ 中选择，二者作为 $a_{k+1}, b_{k+1}$ ，且满足 $f\left(a_{k+1}\right) \cdot f\left(b_{k+1}\right)<0$ ， $\left|f\left(a_{k+1}\right)\right|>\left|f\left(b_{k+1}\right)\right|$

---

Brent's method is a root-finding algorithm which combines root bracketing, bisection, and inverse quadratic interpolation. It is sometimes known as the van Wijngaarden-Deker-Brent method. Brent's method is implemented in the Wolfram Language as the undocumented option `Method` $\rightarrow$ `Brent` in FindRoot[eqn, $\{x, x_0, x_1\}]$.

Brent's method uses a Lagrange interpolating polynomial of degree 2. Brent (1973) claims that this method will always converge as long as the values of the function are computable within a given region containing a root. Given three points $x_1$, $x_2$, and $x_3$, Brent's method fits $x$ as a quadratic function of $y$, then uses the interpolation formula

$$
x=\frac{\left[y-f\left(x_1\right)\right]\left[y-f\left(x_2\right)\right] x_3}{\left[f\left(x_3\right)-f\left(x_1\right)\right]\left[f\left(x_3\right)-f\left(x_2\right)\right]}+\frac{\left[y-f\left(x_2\right)\right]\left[y-f\left(x_3\right)\right] x_1}{\left[f\left(x_1\right)-f\left(x_2\right)\right]\left[f\left(x_1\right)-f\left(x_3\right)\right]}+\frac{\left[y-f\left(x_3\right)\right]\left[y-f\left(x_1\right)\right] x_2}{\left[f\left(x_2\right)-f\left(x_3\right)\right]\left[f\left(x_2\right)-f\left(x_1\right)\right]}
$$

Subsequent root estimates are obtained by setting $y=0$, giving

$$
x=x_2+\frac{P}{Q}
$$

where

$$
\begin{aligned}
& P=S\left[T(R-T)\left(x_3-x_2\right)-(1-R)\left(x_2-x_1\right)\right] \\
& Q=(T-1)(R-1)(S-1)
\end{aligned}
$$

with

$$
\begin{aligned}
R & \equiv \frac{f\left(x_2\right)}{f\left(x_3\right)} \\
S & \equiv \frac{f\left(x_2\right)}{f\left(x_1\right)} \\
T & \equiv \frac{f\left(x_1\right)}{f\left(x_3\right)}
\end{aligned}
$$

---

Brent's Method

Brent's method for approximately solving $f(x)=0$, where $f: \mathbb{R} \rightarrow \mathbb{R}$, is a "hybrid" method that combines aspects of the bisection and secant methods with some additional features that make it completely robust and usually very efficient. Like bisection, it is an "enclosure" method that begins with an initial interval across which $f$ changes sign and, as the iterations proceed, determines a sequence of nested intervals that share this property and decrease in length. Convergence of the iterates is guaranteed, even in floating-point arithmetic. If $f$ is continuous on the initial interval, then each of the decreasing intervals determined by the method contains a solution, and the limit of the iterates is a solution. Like the bisection and secant methods, the method requires only one evaluation of $f$ at each iteration; in particular, $f^{\prime}$ is not required.
The following provides a rough outline of how the method works. The full details of the method are complicated and can be found in R. P. Brent, Algorithms for Minimization without Derivatives, Prentice-Hall, 1973. The method builds upon an earlier method of T. J. Dekker and is the basis of MATLAB's fzero routine.
At each iteration, Brent's method first tries a step of the secant method or something better. If this step is unsatisfactory, which usually means too long, too short, or too close to an endpoint of the current interval, then the step reverts to a bisection step. There is also a feature that occasionally forces a bisection step to guard against too little progress for too many iterations. In the details of the method, a great deal of attention has been paid to considerations of floating-point arithmetic (overflow and underflow, accuracy of computed expressions, etc.).
An overview of the operation of the method is as follows:

- The method begins with
- a stopping tolerance $\delta>0$,
- points $a$ and $b$ such that $f(a) f(b)<0$.

If necessary, $a$ and $b$ are exchanged so that $|f(b)| \leq|f(a)|$; thus $b$ is regarded as the better approximate solution. A third point $c$ is initialized by setting $c=a$.

- At each iteration, the method maintains $a, b$, and $c$ such that $b \neq c$ and
  (i) $f(b) f(c)<0$, so that a solution lies between $b$ and $c$ if $f$ is continuous;
  (ii) $|f(b)| \leq|f(c)|$, so that $b$ can be regarded as the current approximate solution;
  (iii) either $a$ is distinct from $b$ and $c$, or $a=c$ and is the immediate past value of $b$.

Each iteration proceeds as follows:

1. If $|b-c| \leq \delta$, then the method returns $b$ as the approximate solution.
2. Otherwise, the method determines a trial point $\hat{b}$ as follows:

(i) If $a=c$, then $\hat{b}$ is determined by linear (secant) interpolation: $\hat{b}=\frac{a f(b)-b f(a)}{f(b)-f(a)}$.
(ii) Otherwise, $a, b$, and $c$ are distinct, and $\hat{b}$ is determined using inverse quadratic interpolation:

- Determine $\alpha, \beta$, and $\gamma$ such that $p(y)=\alpha y^2+\beta y+\gamma$ satisfies $p(f(a))=a$, $p(f(b))=b$, and $p(f(c))=c$.
- Set $\hat{b}=\gamma$.

1. If necessary, $\hat{b}$ is adjusted or replaced with the bisection point. (The rules are complicated.)
2. Once $\hat{b}$ has been finalized, $a, b, c$, and $\hat{b}$ are used to determine new values of $a, b$, and $c$.
   (The rules are complicated.)
   Remark: In part (ii) of step 2, the coefficients $\alpha, \beta$, and (especially) $\gamma$ are easily determined using standard methods at the cost of a few arithmetic operations. (Of course, there needs to be a safeguard against the unlikely event that $f(a), f(b)$, and $f(c)$ are not distinct.) Note that $\gamma$ is just $p(0)$, so if $f$ really were the inverse of a quadratic, i.e., $f^{-1}(y)=p(y)=\alpha y^2+\beta y+\gamma$ for all $y$, then $\hat{b}=\gamma$ would satisfy $f(\hat{b})=f(p(0))=f\left(f^{-1}(0)\right)=0$. Thus inverse quadratic interpolation provides a low-cost approximate zero of $f$ that should be more accurate than that obtained by linear (secant) interpolation. Note that if direct quadratic interpolation were used instead of inverse quadratic interpolation, i.e., if we found $p(x)=\alpha x^2+\beta x+\gamma$ such that $p(a)=f(a), p(b)=f(b)$, and $p(c)=f(c)$, then it would be necessary to find a $\hat{b}$ such that $p(\hat{b})=0$ using the quadratic formula, which involves a square root. By using inverse quadratic interpolation, Brent's method avoids this square root.
