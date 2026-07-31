---
author: Walter_Fang
pubDatetime: 2024-08-25T17:30:00.000Z
modDatetime: 2024-08-25T17:30:00.000Z
title: 题解：AT_abc368_c [ABC368C] Triple Attack
slug: AT_abc368_c
featured: false
draft: false
tags:
  - OI
description: AT_abc368_c [ABC368C] Triple Attack 的题解。
---

题意言简意赅无需赘述。注意每次只攻击最前面生命值为正数的怪物。

### 思路解析

由题意可知怪物生命减少数量以 `1 1 3` 为一组循环，所以只需先将每组血量一起减少 $5$，如果这只怪物在本回合没有死则再次执行上述操作即可。

### 代码实现

代码实现非常简单。

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const ll N=2e5+10;
ll n,i,x,t,f,a[N];
int main(){
 cin>>n;
 for(i=1;i<=n;i++)cin>>a[i];
 for(i=1;i<=n;i++){
  if(a[i]>0&&!f)a[i]--,f++,x++;
  if(a[i]>0&&f==1)a[i]--,f++,x++;
  if(a[i]>0&&f==2)a[i]-=3,f=0,x++;
  t=a[i]/5;x+=t*3;a[i]-=t*5;
  if(a[i]>0)a[i]--,f++,x++;
  if(a[i]>0)a[i]--,f++,x++;
  if(a[i]>0)a[i]-=3,f=0,x++;
 }
 cout<<x;
}
```
