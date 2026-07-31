---
author: Walter_Fang
pubDatetime: 2024-10-16T10:30:00.000Z
modDatetime: 2024-10-16T10:30:00.000Z
title: P2880 做题笔记
slug: P2880
featured: false
draft: false
tags:
  - OI
description: P2880 做题笔记。
---

萌新不会线段树于是写了自己改的树状数组，跑得还挺快。

```cpp
#include<bits/stdc++.h>
using namespace std;
const int N=5e5+10,inf=2e9;
int n,q,i,l,r,T_min[N],T_max[N],a[N];
int lowbit(int x){return x&(-x);}
void Add(int p,int v){while(p<=n)T_min[p]=min(T_min[p],v),T_max[p]=max(T_max[p],v),p+=lowbit(p);}
int Query_min(int l,int r){return (l<r?(l<r-lowbit(r)?min(T_min[r],Query_min(l,r-lowbit(r))):min(a[r],Query_min(l,r-1))):a[l]);}
int Query_max(int l,int r){return (l<r?(l<r-lowbit(r)?max(T_max[r],Query_max(l,r-lowbit(r))):max(a[r],Query_max(l,r-1))):a[l]);}
int main(){
 cin>>n>>q;
 for(i=0;i<N;i++)T_min[i]=inf,T_max[i]=-inf;
 for(i=1;i<=n;i++)cin>>a[i],Add(i,a[i]);
 while(q--)cin>>l>>r,cout<<Query_max(l,r)-Query_min(l,r)<<'\n';
}
```
