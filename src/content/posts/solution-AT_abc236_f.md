---
author: Walter_Fang
pubDatetime: 2024-10-09T11:45:00.000Z
modDatetime: 2024-10-09T11:45:00.000Z
title: 题解：AT_abc236_f [ABC236F] Spices
slug: AT_abc236_f
featured: false
draft: false
tags:
  - OI
description: AT_abc236_f [ABC236F] Spices 的题解。
---

贪心好题。题意不再赘述。

### 思路

将 $c$ 数组升序排序，并依次判断每个数 $x$。若 $x$ 可被已被取的数字异或得出，则不取 $x$，否则比取。

### 正确性证明

若 $x$ 可被已取的数异或得出，那么显然不用取。若不可被异或得出，则之后定存在取的 $y$ 使得组合出 $x$ 必要取 $y$，故取 $x$ 定不劣。

### 代码

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const ll N=(1<<16)+10;
ll t,n,i,j,ans,a[N],p[N],f[N];
int main(){
 cin>>t;n=(1<<t)-1;f[0]=1;
 for(i=1;i<=n;i++)cin>>a[i],p[i]=i;
 stable_sort(p+1,p+1+n,[](int x,int y){return a[x]<a[y];});
 for(i=1;i<=n;i++)
  if(!f[p[i]]){
   ans+=a[p[i]];
   for(j=0;j<=n;j++)f[j^p[i]]|=f[j];
  }
 cout<<ans;
}
```
