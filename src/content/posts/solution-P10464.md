---
author: Walter_Fang
pubDatetime: 2024-10-09T14:00:00.000Z
modDatetime: 2024-10-09T14:00:00.000Z
title: 题解：P10464 Task
slug: P10464
featured: false
draft: false
tags:
  - OI
description: P10464 Task 的题解。
---

简单贪心。由于时间对收入的影响远大于级别对收入的影响，故优先考虑时间再考虑级别进行排序。然后逆序枚举每个任务，每次选择能满足当前任务所需时间的机器中级别最低的一台即得最优方案。

### 代码

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const ll N=1e5+10,M=1e2+50;
struct Node{ll x,y;}a[N],b[N];
ll n,m,i,j,pos,x,s,ans,f[M];
int main(){
 cin>>n>>m;
 for(i=1;i<=n;i++)cin>>a[i].x>>a[i].y;
 for(i=1;i<=m;i++)cin>>b[i].x>>b[i].y;
    stable_sort(a+1,a+1+n,[](Node x,Node y){return x.x!=y.x?x.x>y.x:x.y>y.y;});
    stable_sort(b+1,b+1+m,[](Node x,Node y){return x.x!=y.x?x.x>y.x:x.y>y.y;});
 for(i=1;i<=m;i++){
  for(j=pos+1;j<=n;j++)
   if(a[j].x>=b[i].x)f[a[j].y]+=1,pos=j;
   else break;
  for(x=b[i].y;x<=100;x++)
   if(f[x]){
    s++;ans+=b[i].x*500+b[i].y*2;f[x]--;
    break;
   }
 }
 cout<<s<<' '<<ans;
}
```
