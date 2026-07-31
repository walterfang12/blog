---
author: Walter_Fang
pubDatetime: 2024-08-14T09:00:00.000Z
modDatetime: 2024-08-14T09:00:00.000Z
title: AT_abc366_e Manhattan Multifocal Ellipse 题解
slug: AT_abc336_e
featured: false
draft: false
tags:
  - OI
description: AT_abc366_e Manhattan Multifocal Ellipse 的题解。
---

`ABC` 最水的一场。

### 题意

给定二维平面上的 $N$ 个点 $(x_{1},y_{1})，(x_{2},y_{2})\ldots(x_{N},y_{N})$ 和非负整数 $D$，试求满足 $\sum_{i=1}^n(|x-x_{i}|,|y-y_{i}|) \le D$ 的整数对 $(x,y)$ 的个数。

### 解析

需要满足的条件为 $\sum_{i=1}^n(|x-x_{i}|,|y-y_{i}|) \le D$，移项即得 $D-\sum_{i=1}^n{|x-x_i|} \geq \sum_{i=1}^n|y-y_i|$。

不妨枚举所有的 $x$ 与 $y$，并将其排序并记录，然后用双指针维护即可。理论二分也可行，未尝试。

### 赛时代码

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const ll N=1e6+10,M=(N<<2)+10;
ll n,d,i,j,t,s,ans,x[N],y[N],f1[M],f2[M],s1[M],s2[M];
int main(){
 cin>>n>>d;
 for(i=1;i<=n;i++)cin>>x[i]>>y[i],f1[(N<<1)+y[i]+1]++,f2[(N<<1)+y[i]-1]++;
 for(i=0;i<=M;i++)t+=f1[i],f1[i]=0,s+=t,s2[i]+=s;
 t=s=0;
 for(i=M;i>=0;i--)t+=f2[i],f2[i]=0,s+=t,s2[i]+=s;
 for(i=1;i<=n;i++)f1[(N<<1)+x[i]+1]++,f2[(N<<1)+x[i]-1]++;
 t=s=0;
 for(i=0;i<=M;i++)t+=f1[i],f1[i]=0,s+=t,s1[i]+=s;
 t=s=0;
 for(i=M;i>=0;i--)t+=f2[i],f2[i]=0,s+=t,s1[i]+=s;
 t=M;stable_sort(s1,s1+t+1);stable_sort(s2,s2+t+1);
 for(i=t;i>=0;i--){
  while(j<=t&&s1[i]+s2[j]<=d)j++;
  ans+=j;
 }
 cout<<ans;
}
```
