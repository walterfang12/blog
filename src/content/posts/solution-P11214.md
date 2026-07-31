---
author: Walter_Fang
pubDatetime: 2024-10-20T10:00:00.000Z
modDatetime: 2024-10-20T10:00:00.000Z
title: 题解：P11214 【MX-J8-T2】黑洞
slug: P11214
featured: false
draft: false
tags:
  - OI
description: P11214 【MX-J8-T2】黑洞 的题解。
---

### 前言

优化过的暴搜时间复杂度 $O(2^n)$，理论过不了，但是过了。傻逼数据组。

### 题意

给定 $n$ 及 $n$ 个正整数 $m_i$ 和 $n$ 个正整数 $a_i$，保证 $a_i\leq m_i$。

构造长度为 $n$ 的数组 $b$ 使得存在一个整数 $k \geq 0$，使得对每个 $1 \leq i \leq n$，都有 $\lvert a_i - b_i \rvert = k$ 且 $b_i\leq m_i$。

试求出 $b_i$ 所有的可能的数量总和，对 $10^9+7$ 取模。

### 解析

观察不等式 $\lvert a_i-b_i\rvert=k$，注意到对于每个数只有加和减两种可能，暴搜算一遍即可。

当然这样是会超时的，所以我们要考虑优化。注意到每一次能将每个数改变多少只取决于最小的一个，故按可改变范围的最小值排序，搜到后面的最小值超过了当前最小值时即可中止。

### 代码

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const ll N=1e6+10,p=1e9+7,inf=1e18;
ll n,i,x,ans,m[N],table[N],f[N];
struct Node{ll x,y;}a[N];
void dfs(ll x,ll dep){
 if(dep>n)return (ans+=x)%=p,void();
 if(x<=f[dep])return (ans+=x*table[n-dep+1]%p)%=p,void();
 dfs(min(x,a[dep].x),dep+1);dfs(min(x,a[dep].y),dep+1);
}
int main(){
 cin>>n;table[0]=ans=1;
 for(i=1;i<=n;i++)cin>>m[i],table[i]=(table[i-1]<<1)%p;
 for(i=1;i<=n;i++)cin>>x,a[i].x=m[i]-x,a[i].y=x-1;
 stable_sort(a+1,a+1+n,[](Node x,Node y){return min(x.x,x.y)<min(y.x,y.y);});
 f[n+1]=inf;
 for(i=n;i;i--)f[i]=min(f[i+1],min(a[i].x,a[i].y));
 dfs(inf,1);
 cout<<ans;
}
```
