---
author: Walter_Fang
pubDatetime: 2024-10-20T08:30:00.000Z
modDatetime: 2024-10-20T08:30:00.000Z
title: 题解：P11217 【MX-S4-T1】「yyOI R2」youyou 的垃圾桶
slug: P11217
featured: false
draft: false
tags:
  - OI
description: P11217 【MX-S4-T1】「yyOI R2」youyou 的垃圾桶 的题解。
---

### 前言

这题卡人的地方很多，做法是线段树加二分。

听说标程时间复杂度线性，期待住了。

### 解析

读完题再结合数据范围即可发现每个垃圾桶的伤害数组要用线段树或树状数组维护。这里我开了一个线段树。然后计算每场战斗的评分就需要二分了。我们二分查找一个尽可能大的位置 $p$ 使得 $s\times2^p\leq W$，其中 $s$ 表示当前这轮战斗每个垃圾桶的伤害总和。得出 $p$ 之后的输出直接调用线段树即可。注意若伤害刚好等于 $W$ 时要加个特判。

### 几个坑点

- $1$ 要写成 `unsigned long long` 类型不然会炸掉 $10$ 分。
- 要写快读不然实测 $2$ 秒的程序会跑到 $10$ 秒。

### 代码

写的有点丑了。

```cpp
#include<bits/stdc++.h>
#define ls p<<1ull
#define rs p<<1ull|1ull
namespace FastIO{
 char *p1,*p2,buf[1<<14];
 #define getchar() (p1==p2&&(p2=(p1=buf)+fread(buf,1,(1<<14),stdin),p1==p2)?EOF:*p1++)
 template <typename T>
 inline void read(T& x){
     x=0;
     register int t=1;
     register char ch=getchar();
     while(ch<'0'||ch>'9'){
         if(ch=='-')t=-1;
         ch=getchar();
     }
     while(ch>='0'&&ch<='9')x=(x<<1)+(x<<3)+(ch^48),ch=getchar();
     x*=t;
 }
 template <typename T>
 void write(T x){
     if(x<0)putchar('-'),x=-x;
     if(x>9)write(x/10);
     putchar(x%10^48);
 }
 template <typename T>
 inline void writeln(T x,char sep='\n'){
  write(x);putchar(sep);
 }
}
using namespace FastIO;
using namespace std;
typedef long long ll;
const ll N=2e5+10;
ll n,q,W,s,i,p,l,r,k,mid,a[N];
struct info{ll s,id,tag;}tr[N<<2];
void Build(ll p,ll l,ll r){
    if(l==r)return tr[p].s=a[l],tr[p].id=l,void();
    ll mid=(l+r)>>1ull;
    Build(ls,l,mid);Build(rs,mid+1ull,r);
    tr[p].s=tr[ls].s+tr[rs].s;
}
void Pushdown(ll p,ll l,ll r){
    ll mid=(l+r)>>1ull;
    if(tr[p].tag)tr[ls].s+=tr[p].tag*(mid-l+1ull),tr[rs].s+=tr[p].tag*(r-mid),tr[ls].tag+=tr[p].tag,tr[rs].tag+=tr[p].tag,tr[p].tag=0;
}
void change(ll p,ll l,ll r,ll L,ll R,ll k){
    if(L<=l&&R>=r)return tr[p].tag+=k,tr[p].s+=(r-l+1ull)*k,void();
    Pushdown(p,l,r);
    ll mid=(l+r)>>1ull;
    if(L<=mid)change(ls,l,mid,L,R,k);
    if(R>mid)change(rs,mid+1ull,r,L,R,k);
    tr[p].s=tr[ls].s+tr[rs].s;
}
ll Query(ll p,ll l,ll r,ll k,ll now){
    if(tr[p].id) return tr[p].id;
    Pushdown(p,l,r);
    ll mid=(l+r)>>1ull;
    if(tr[ls].s*k>=now)return Query(ls,l,mid,k,now);
    return Query(rs,mid+1ull,r,k,now-tr[ls].s*k);
}
int main(){
    cin>>n>>q>>W;
    for(i=1ull;i<=n;i++)read(a[i]),s+=a[i];
    Build(1ull,1ull,n);
    while(q--){
        read(l);read(r);read(k);p=0;
        change(1ull,1ull,n,l,r,k);
        s+=(r-l+1ull)*k;
        l=1ull;r=log2(W/s);
        while(l<=r){
            mid=(l+r)>>1ull;
            if((((1ull<<mid+1ull)-1ull)*s)<=W)p=max(p,mid),l=mid+1ull;
            else r=mid-1ull;
        }
        if((((1ull<<p+1ull)-1ull)*s)==W)write(n*(p+1ull)-1ull),putchar('\n');
        else write(Query(1ull,1ull,n,(1ull<<p+1ull),W-(((1ull<<p+1ull)-1ull)*s))+n*(p+1ull)-1ull),putchar('\n');
    }
}
```
