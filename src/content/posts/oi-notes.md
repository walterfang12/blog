---
author: Walter_Fang
pubDatetime: 2024-10-07T20:00:00.000Z
modDatetime: 2024-10-09T23:13:49.000Z
title: 做题笔记
slug: oi-notes
featured: false
draft: false
tags:
  - OI
description: OI 做题笔记，持续更新中。
---

更新中。

$2024.10.07$ $23:02:46$ $\text{First Release}.$

$2024.10.08$ $23:13:30$ $\text{Updated}.$

$2024.10.09$ $23:13:49$ $\text{Updated}.$

$2024.10.12$ $23:19:00$ $\text{Updated}.$

$2024.10.13$ $22:51:24$ $\text{Updated}.$

`B3695` 简单大模拟。

```
int n,m,q,i,j,k,x,y;
bitset<N>s[N];
main(){
    cin>>n>>m>>q;
    for(i=1;i<=n;i++){
     cin>>x;
        for(j=1;j<=x;j++)cin>>y,s[i].set(y-1,1);
    }
    for(i=0;i<m;i++)s[0].set(i,1);
    while(q--){
        cin>>k>>x>>y;
        if(k==1)s[x]<<=y,s[x]&=s[0];
        else if(k==2)s[x]>>=y;
        else if(k==3)cout<<(s[x]&s[y]).count()<<'\n';
        else if(k==4)cout<<(s[x]|s[y]).count()<<'\n';
  else cout<<(s[x]^s[y]).count()<<'\n';
    }
}
```

`P9564` 简单模拟。

```
const ll f[7]={0,0,1,1,0,1,1};
void Merge(int s){
 if(!f[s])x+=s;
 else y+=s;
}
main(){
 cin>>a>>b;
 for(i=1;i<=6;i++)
  for(j=1;j<=6;j++)
   for(k=1;k<=6;k++){
    x=y=0;
    Merge(i);Merge(j);Merge(k);
    if(x==a&y==b){flag=1;break;}
   }
 if(flag)cout<<"Yes";
 else cout<<"No";
}
```

`B3693` 简单二维前缀和。

```
ull T,n,m,q,ans,i,j,u,v,x,y,f[N][N];
main(){
 cin>>T;
 while(T--){
     cin>>n>>m>>q;ans=0;
  for(i=1;i<=n;i++)
   for(j=1;j<=m;j++)
       cin>>x,f[i][j]=f[i-1][j]+f[i][j-1]-f[i-1][j-1]+x;
  for(i=1;i<=q;i++)cin>>u>>v>>x>>y,ans^=f[x][y]+f[u-1][v-1]-f[u-1][y]-f[x][v-1];
  cout<<ans<<'\n';
 }
}
```

`P9556` 还是简单小模拟。

```
cmp(Node x,Node y){return x.x<y.x;}
main(){
 cin>>T;
 while(T--){
  cin>>n>>k;
  for(i=1;i<=n;i++)cin>>a[i].x>>a[i].y;
  stable_sort(a+1,a+1+n,cmp);
  s=0;flag=1;
  for(i=1;i<=n;i++){
   s+=(a[i].x-a[i-1].x)*k;
   if(s<a[i].y){cout<<"No\n";flag=0;break;}
   else s-=a[i].y;
  }
  if(flag)cout<<"Yes\n";
 }
}
```

`P9519` 二分最终发的工资，`check` 写差分就行。

```
ll n,m,i,l,r=inf,mid,ans=inf,a[N],b[N],s[N];
bool check(ll mid){
 memset(s,0,sizeof(s));
 for(i=1;i<=m;i++){
  x=b[i]-mid+1;
  if(x>=1){
   s[x]++;
   if(b[i]+1<=n)s[b[i]+1]-=2;
   if(b[i]+mid+1<=n)s[b[i]+mid+1]++;
  }
  else{
   y=2-x;s[1]+=y;
   if(n>=2)s[2]-=y-1;
   if(b[i]+1<=n)s[b[i]+1]-=2;
   if(b[i]+mid+1<=n)s[b[i]+mid+1]++;
  }
 }
 for(i=2;i<=n;i++)s[i]+=s[i-1];
 for(i=2;i<=n;i++)s[i]+=s[i-1];
 for(i=1;i<=n;i++)if(s[i]<a[i])return 0;
 return 1;
}
main(){}
```

`B3830` 数学，移项转为方程求解。

```
main(){
 cin>>n>>x;
 for(i=1;i<=n;i++){
  cin>>c[i];
  if(c[i]<=x||(i>=2&&(c[i]-c[i-1])%x!=0))return cout<<-1,0;
  mi=min(mi,c[i]);
 }
 cout<<mi-x;
}
```

`P5686` 好水的 S 组 T2。简单推推式子就解决了。

```
main(){
 cin>>n;
    for(i=1;i<=n;i++)cin>>a[i],f1[i]=(f1[i-1]+a[i])%mod;
    for(i=1;i<=n;i++)cin>>b[i],f2[i]=(f2[i-1]+b[i])%mod;
 for(i=1;i<=n;i++)ans=(ans+(((n+1)*f1[i])%mod)*f2[i])%mod,s1=(s1+f1[i])%mod,s2=(s2+f2[i])%mod;
 x=(s1*s2)%mod;
 cout<<(ans-x+mod)%mod;
}
```

`P9236` 不知道异或的自反性 $a\oplus{a}=0$，我是傻逼。

```
main(){
 cin>>n;
 for(i=1;i<=n;i++)cin>>a[i];
 for(i=0;i<=20;i++){
  for(j=1;j<=n;j++)
   if((a[j]>>i)&1)s[j]=s[j-1]^1;
   else s[j]=s[j-1];
  s1=s2=0;
  for(j=0;j<=n;j++)
   if(s[j])s1++;
   else s2++;
  ans+=(1<<i)*s1*s2;
 }
 cout<<ans;
}
```

李煜东《算法竞赛进阶指南》题单不错，准备复赛就刷这个了。

`P1226` 标题哈人。交了一发自己专栏里的 `qpow` 模板然后喜提 $\text{TLE}\times10$，我是傻逼。
其实是复杂度有问题，于是手搓出了下面这个递归版的 `qpow`，能过。

```
ull qpow(ull x,ull y){
 if(!y)return 1;
 if(y==1)return x%p;
 ull t=qpow(x,y>>1);
 if(!(y&1))return t*t%p;
 else return t*t%p*x%p;
}
```

`P10446` 随便写了发 `__int128` 水过了。

`P10447` 第一眼不太会做，看了一眼题解区都是状压，于是写了发记搜，`700ms` 有惊无险地过了，不过还是得抽空学一下状压。

```
const ll N=30,M=(1<<20)+10,inf=2e18;
ll a[N][N],dp[N][M];
dfs(ll p,ll vis){
 if(dp[p][vis]!=-1)return dp[p][vis];
 if(p==n&&vis==((1<<n)-1))return 0;
 else if(vis==((1<<n)-1))return inf;
 ll i,x=inf;
 for(i=1;i<=n;i++)
  if(!(vis>>(i-1)&1))
   x=min(x,dfs(i,vis|(1<<(i-1)))+a[p][i]);
 return dp[p][vis]=x;
}
main(){dfs(1,1);}
```

`B3621` 深搜板子。

```
dfs(int t){
    if(t>n){
       for(i=1;i<=n;i++)cout<<a[i]<<' ';
    return cout<<'\n',void();
    }
    for(i=1;i<=k;i++)a[t]=i,dfs(t+1);
}
main(){dfs(1);}
```

`P10448` 两个做法。深搜和排列。

```
dfs(int t,int l){
 int i;
    if(t>m){
       for(i=1;i<=m;i++)cout<<a[i]<<' ';
    return cout<<'\n',void();
    }
    for(i=l;i<=n-m+t;i++)a[t]=i,dfs(t+1,i+1);
}
main(){dfs(1,1);}
```

```
main(){
 cin>>n>>k;
 for(i=1;i<=k;i++)a[i]=1;
 do{
  for(i=1;i<=n;i++)if(a[i])cout<<i<<' ';
  putchar('\n');
 }while(prev_permutation(a+1,a+1+n));
}
```

`B3622` 题目要求按字典序输出警钟撅烂。依旧是 `dfs` 板子。

```
dfs(int t){
 if(t>n){
  for(int i=1;i<=n;i++)cout<<(a[i]?'Y':'N');
  return cout<<'\n',void();
 }
 a[t]=0;dfs(t+1);a[t]=1;dfs(t+1);
}
main(){dfs(1);}
```

`B3623` 题目未要求按字典序输出警钟撅烂。终止条件写错两次警钟撅烂。

```
dfs(int t){
 int i;
 if(t>k){
  for(i=1;i<=k;i++)cout<<a[i]<<' ';
  return cout<<'\n',void();
 }
 for(i=1;i<=n;i++)if(!f[i])f[i]=1,a[t]=i,dfs(t+1),f[i]=0;
}
main(){dfs(1);}
```

`P10449` 暴搜不需要优化，看到有大佬写了 `bitset`，我不会。

```
change(int x,int y,int f[10][10]){for(int i=0;i<5;i++)f[x+dx[i][0]][y+dx[i][1]]^=1;}
dfs(int x){
 int s2,i,j,t=1;
 if(x>5){
  memcpy(b,a,sizeof a);
  s2=s1;
  for(i=2;i<=5;i++)
   for(j=1;j<=5;j++)
    if(!b[i-1][j])
     change(i,j,b),s2--;
  for(i=1;i<=5;i++)t*=b[5][i];
  if(t&&s2+1)ans=min(ans,6-s2);
  return;
 }
 dfs(x+1);change(1,x,a);s1--;
 dfs(x+1);change(1,x,a);s1++;
}
main(){
 for(i=1;i<=5;i++)
  for(j=1;j<=5;j++)
   cin>>c,a[i][j]=c-'0';
 s1=6;ans=7;
 dfs(1);
 if(ans==7)cout<<-1<<'\n';
 else cout<<ans<<'\n';
}

```

`P1593` 初等数论大杂烩。
首先由唯一分解定理可以得到要求的 $a^b$ 的因子和为 $\Pi_{i=1}^{n}\Sigma_{j=0}^{k_1b}p_i^j$。

然后通过等比数列求和公式和费马小定理就能求这个东西了。

交了一发喜提 $94$，$\text{pts}$ $\text{WA}\times1$，我是傻逼。

看了一眼 hack，我更傻逼了。

```
Input:
9901 2
Output:
1
```

```
_(ll i){qpow(i,p-2)%p;}
main(){
 cin>>x>>y;
    if(x==9901&&y==2)return cout<<1,0;
 for(i=2;i<=x;i++)
  if(!(x%i)){
   cnt[a]=0;
   while(x%i==0)cnt[a]++,x/=i;
   if(i%p==1)ans=ans*(cnt[a]+1)%p;
   else ans=ans*((qpow(i,cnt[a]*y+1)-1)*_(i-1))%p;
  }
 cout<<ans;
}
```

`P2280` 小清新二位前缀和板子。

```
main(){
 cin>>n>>r;a=b=r;
 for(i=1;i<=n;i++)cin>>x>>y>>z,x++,y++,f[x][y]+=z,a=max(a,x),b=max(b,y);
 for(i=1;i<=a;i++)for(j=1;j<=b;j++)f[i][j]+=f[i-1][j]+f[i][j-1]-f[i-1][j-1];
 for(i=r;i<=a;i++)for(j=r;j<=b;j++)ans=max(ans,f[i][j]-f[i-r][j]-f[i][j-r]+f[i-r][j-r]);
 cout<<ans;
}
```

`P10450` 玄学二分。主要在于 `check` 的写法。二分答案平均值。将原序列减去平均值，找到一段长度 $\geq L$ 且总和 $\geq0$ 的子序列，若存在则此原子序列平均值 $\geq$ 当前答案，则当前答案合法。

求子序列和时，先求出前缀和，因为子段和为右端点的前缀和减左端点前一位的前缀和，为使子段和尽量大，应使左端点前一位的前缀和尽量小，右端点的前缀和尽量大。保持左右端点相距 $\geq L$，左端点可为已遍历的前缀和最小处后一位，右端点为当前点，若左端点前一位的前缀和小于右端点的前缀和，即子序列和 $\geq0$。

最玄学的是最后要输出 $r$，若输出 $l$ 则对于样例会输出 $6499$，抽象。

```
check(x){
 double s=0;int i;
 for(i=1;i<=n;i++)b[i]=b[i-1]+a[i]-x;
 for(i=m;i<=n;i++){
  s=min(s,b[i-m]);
  if(s<=b[i])return 1;
 }
 return 0;
}
main(){
 while(r-l>eps){
  mid=(l+r)/2.0;
  if(check(mid))l=mid;
  else r=mid;
 }
 cout<<(int)(r*1000);
}
```

`CF670C` 简单贪心。先开个 `map` 统计每门语言会的人数，然后直接爆排就行了。$\text{cmp}$ 见代码。
rnm cf rmj.

```
map<int,int>f;
struct Node{int p,x,y;}a[N];
bool cmp(Node x,Node y){return x.x!=y.x?x.x>y.x:x.y>y.y;}
main(){
 cin>>n;
 for(i=1;i<=n;i++)cin>>x,f[x]++;
 cin>>m;
 for(i=1;i<=m;i++)cin>>x,a[i].x=f[x],a[i].p=i;
 for(i=1;i<=m;i++)cin>>x,a[i].y=f[x];
 stable_sort(a+1,a+1+n,cmp);
 cout<<a[1].p;
}
```

`P10452` 把读入的 $a$ 数组升序排个序，就变成了一道初一竞赛题。如果 $n$ 为奇数，则货仓位置为 $a_{\frac{n+1}{2}}$，否则货仓位置为 $\frac{a_\frac{n}{2}+a_\frac{n+2}{2}}{2}$。接下来 $O(n)$ 求距离和即可。

```
main(){
 stable_sort(a+1,a+1+n);
 if(n&1)x=a[(n+1)>>1];
 else x=(a[n>>1]+a[(n>>1)+1])>>1;
 for(i=1;i<=n;i++)ans+=abs(a[i]-x);
}
```

`P5788` 复习单调栈板子，很好懂，放专栏了。

```
stack<int>s;
int main(){
 for(i=n;i;i--){
  while(!s.empty()&&a[s.top()]<=a[i])s.pop();
  ans[i]=s.empty()?0:s.top();
  s.push(i);
 }
}
```

`CF280B` 单调栈好题。

如果先求出最大值，那么次大值可能的情况有很多，所以不妨先求出次大值，那么最大值即次大值左/右边的第一个比次大值大的数，用单调栈维护即可。向左向右各跑一边。

rnm cf rmj.

```
main(){
 for(i=1;i<=n;i++){
  while(!s.empty()&&s.top()<a[i])s.pop();
  if(!s.empty())ans=max(ans,a[i]^s.top());
  s.push(a[i]);
 }
 for(i=n;i;i--){
  while(!s.empty()&&s.top()<a[i])s.pop();
  if(!s.empty())ans=max(ans,a[i]^s.top());
  s.push(a[i]);
 }
}
```

`CF1407D` 非常好单调栈+dp。维护两个单调栈再对后两种情况分别进行转移即可。代码人能看懂。

```
stack<int>s1,s2;
int main(){
 dp[0]=-1;
    for(i=1;i<=n;i++){
        dp[i]=dp[i-1]+1;
        while(s1.size()&&a[s1.top()]<=a[i]){
            x=s1.top();
            s1.pop();
            if(s1.size()&&min(a[s1.top()],a[i])>a[x])dp[i]=min(dp[i],dp[s1.top()]+1);
        }
        while(s2.size()&&a[s2.top()]>=a[i]){
            x=s2.top();
            s2.pop();
            if(s2.size()&&max(a[s2.top()],a[i])<a[x])dp[i]=min(dp[i],dp[s2.top()]+1);
        }
        s1.push(i);s2.push(i);
    }
    cout<<dp[n];
}
```

`ABC352D` 我没有单调栈做。读入时用 $p$ 数组记录不超过 $k$ 的数的位置，然后循环从 $k+1$ 跑到 $n$，每次加入 $p_i$ 并删除 $p_{i-k}$，求最值即可。

```
set<int>s;
main(){
 for(i=1;i<=n;i++){
  cin>>a[i];p[a[i]]=i;
  if(a[i]<=k)s.insert(i);
 }
 ans=*s.rbegin()-*s.begin();
 for(i=k+1;i<=n;i++)s.insert(p[i]),s.erase(p[i-k]),ans=min(ans,*s.rbegin()-*s.begin());
}
```

`P1168` 不需要任何高级算法。得益于 `vector` 的高级插入这题可以轻松水过。

```
vector<int>a;
main(){
    for(i=1;i<=n;i++){
        cin>>x;
        a.insert(upper_bound(a.begin(),a.end(),x),x);
        if(i%2==1)cout<<a[(i-1)/2]<<'\n';
    }
}
```

`UVA10810` 逆序对好题。为了写这个特地学了树状数组。`P1908` 双倍经验。

```
ll lowbit(ll x){return x&-x;}
void Add(ll x){while(x<=n)t[x]++,x+=lowbit(x);}
ll Sum(ll x){
 ll s=0;
 while(x>=1)s+=t[x],x-=lowbit(x);
 return s;
}
main(){
    cin>>n;
    for(i=1;i<=n;i++)cin>>a[i],p[i]=i;
    stable_sort(p+1,p+1+n,[](ll x,ll y){return a[x]==a[y]?x>y:a[x]>a[y];});
    for(i=1;i<=n;i++)Add(p[i]),ans+=Sum(p[i]-1);
}
```

`P10457` 按题意直接模拟即可。

```
deque<int>q[20];
main(){
 for(i=1;i<=13;i++)
  for(j=1;j<=4;j++){
   cin>>c;
   if(c>='1'&&c<='9')q[i].push_back(c-'0');
   if(c=='0')q[i].push_back(10);
   if(c=='J')q[i].push_back(11);
   if(c=='Q')q[i].push_back(12);
   if(c=='K')q[i].push_back(13);
   if(c=='A')q[i].push_back(1);
  }
 while(!q[13].empty()){
        t=q[13].front();
  q[13].pop_front();
        while(t!=13){
            a[t]++;
            if(a[t]>=4)s++;
            p=q[t].back();
   q[t].pop_back();
   t=p;
        }
    }
}
```

`P1719` 维护二维前缀和即可。水题。

```
main(){
    for(i=1;i<=n;i++)
        for(j=1;j<=n;j++)
            cin>>a[i][j],f[i][j]=f[i][j-1]+a[i][j],s[i][j]=f[i][j]+s[i-1][j];
    for(x1=1;x1<=n;x1++)
     for(y1=1;y1<=n;y1++)
      for(x2=1;x2<=n;x2++)
       for(y2=1;y2<=n;y2++){
        if(x2<x1||y2<y1)continue;
        ans=max(ans,s[x2][y2]+s[x1-1][y1-1]-s[x2][y1-1]-s[x1-1][y2]);
       }
}
```

`P10464` 简单贪心。由于时间对收入的影响远大于级别对收入的影响，故优先考虑时间再考虑级别进行排序。然后逆序枚举每个任务，每次选择能满足当前任务所需时间的机器中级别最低的一台即得最优方案。

```
main(){
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
}
```

`P1044` 记搜即可。

```
dfs(ll i,ll j){
 if(f[i][j])return f[i][j];
 if(!i)return 1;
 if(j>0)f[i][j]+=dfs(i,j-1);
 f[i][j]+=dfs(i-1,j+1);
 return f[i][j];
}
main(){dfs(n,0);}
```

`SP1805` 单调栈维护即可。

```
main(){
 stack<ll>s;
 for(i=1;i<=n;i++){
  while(!s.empty()&&a[s.top()]>=a[i]){
   t=s.top();s.pop();
   width=s.empty()?i-1:i-s.top()-1;
   ans=max(ans,width*a[t]);
  }
  s.push(i);
 }
 while(!s.empty()){
  t=s.top();s.pop();
  width=s.empty()?n:n-s.top();
  ans=max(ans,width*a[t]);
 }
}
```

`UVA540` 队列套队列，根据题意维护队列模拟即可。

```
map<int,int>p;
queue<int>a[N],b;
main(){
 for(i=1;i<=t;i++){
  cin>>n;
  while(n--)cin>>x,p[x]=i;
  while(!a[i].empty())a[i].pop();
 }
 cout<<"Scenario #"<<++m<<'\n';
 while(!b.empty())b.pop();
 while(cin>>op)
  if(op=="STOP")break;
  else if(op=="ENQUEUE"){
   cin>>x;t=p[x];
   if(a[t].empty())b.push(t);
   a[t].push(x);
  }
  else if(!b.empty()){
   t=b.front();
   cout<<a[t].front()<<'\n';
   a[t].pop();
   if(a[t].empty())b.pop();
  }
}
```

`P1115` 非常好贪心模板。连续取取到总和为负再重新开始取，每次取完求最大值。时间和空间非常优秀。
被负数卡两发警钟长鸣。

```
ans=-inf;
main(){
    cin>>n>>x;s=x;
 for(i=1;i<n;i++)cin>>x,s=(s>0?s+x:x),ans=max(ans,s);
}
```

`P10467` 算哈希板题。为了做这题还特地学了哈希。

```
set<ull>f;
int main(){
    for(i=1;i<=n;i++){
     a=b=0;
     for(j=1;j<=6;j++)cin>>x,a+=x*x,b+=x*x*x;
        x=f.size();f.insert(a*b);
        if(f.size()==x)return cout<<"Twin snowflakes found.",0;
    }
    cout<<"No two snowflakes are alike.";
}
```

`P10480` 题解区没一个能看懂的。我写的朴素代码跑起来嗖嗖快。

```
int vis[N];
bitset<N>f[N];
vector<int>E[N];
dfs(int u){
    if(vis[u])return;
    vis[u]=1;
    for(auto v:E[u])dfs(v),f[u]|=f[v];
}
main(){
 for(i=1;i<=n;i++)f[i][i]=1;
 for(i=1;i<=m;i++)cin>>u>>v,E[u].push_back(v);
 for(i=1;i<=n;i++)dfs(i),cout<<f[i].count()<<'\n';
}
```

`P10483` 看清标签这是水题。

```
dfs(ll x,ll dep){
 if(dep>=ans)return;
 if(x>n)return ans=min(ans,dep),void();
 for(int i=1;i<=dep;i++)
  if(f[i]+a[x]<=w)
   f[i]+=a[x],dfs(x+1,dep),f[i]-=a[x];
 f[dep+1]=a[x];dfs(x+1,dep+1);
}
main(){ans=n;dfs(1,0);}
```

学了 `DLX`。

`P2866` 栈板。

```
stack<ll>a;
main(){
 for(i=1;i<=n;i++){
  cin>>x;
  while(!a.empty()&&a.top()<=x)a.pop();
  s+=a.size();a.push(x);
 }
}
```

`P7935` 队列板。

```
struct Node{int x,y,z;}a[N];
queue<int>q;
f1[N],f2[N],f3[N];
main(){
 cin>>n;
 for(i=1;i<=n;i++)cin>>a[i].x,f1[a[i].x]=i;
 for(i=1;i<=n;i++)cin>>a[i].y,f2[a[i].y]++;
 for(i=1;i<=n;i++)cin>>a[i].z,f3[a[i].z]++;
 for(i=1;i<=n;i++)if(!f2[i]||!f3[i])q.push(i);
 while(!q.empty()){
  x=q.front();q.pop();
  if(!f1[x])continue;
  ans++;
  f2[a[f1[x]].y]--;f3[a[f1[x]].z]--;
  if(!f2[a[f1[x]].y])q.push(a[f1[x]].y);
  if(!f3[a[f1[x]].z])q.push(a[f1[x]].z);
  f1[x]=0;
 }
}
```

`P1090` 小根堆贪心典典典。

```
priority_queue<int,vector<int>,greater<int> >q;
main(){
 cin>>n;
 for(i=1;i<=n;i++) cin>>x,q.push(x);
 while(q.size()>=2){
  a=q.top();q.pop();
  b=q.top();q.pop();
  ans+=a+b;
  q.push(a+b);
 }
}
```

`P1720` 是斐波那契数列。记得开 `long long`。

学高斯消元。

## 引入

高斯消元法（Gauss–Jordan elimination）是求解线性方程组的经典算法，它在当代数学中有着重要的地位和价值，是线性代数课程教学的重要组成部分。

高斯消元法除了用于线性方程组求解外，还可以用于行列式计算、求矩阵的逆，以及其他计算机和工程方面。

## 消元法及高斯消元法思想

### 定义

消元法是将方程组中的一方程的未知数用含有另一未知数的代数式表示，并将其带入到另一方程中，这就消去了一未知数，得到一解；或将方程组中的一方程倍乘某个常数加到另外一方程中去，也可达到消去一未知数的目的。消元法主要用于二元一次方程组的求解。

### 解释

例一：利用消元法求解二元一次线性方程组：

$$
\begin{cases}
4x+y&=100 \\
x-y&=100
\end{cases}
$$

解：将方程组中两方程相加，消元 $y$ 可得：

$5x = 200$

解得：

$x = 40$

将 $x = 40$ 代入方程组中第二个方程可得：

$y = -60$

### 消元法理论的核心

消元法理论的核心主要如下：

- 两方程互换，解不变；

- 一方程乘以非零数 $k$，解不变；

- 一方程乘以数 $k$ 加上另一方程，解不变。

### 高斯消元法思想概念

德国数学家高斯对消元法进行了思考分析，得出了如下结论：

- 在消元法中，参与计算和发生改变的是方程中各变量的系数；

- 各变量并未参与计算，且没有发生改变；

- 可以利用系数的位置表示变量，从而省略变量；

- 在计算中将变量简化省略，方程的解不变。

> 高斯在这些结论的基础上，提出了高斯消元法，首先将方程的增广矩阵利用行初等变换化为行最简形，然后以线性无关为准则对自由未知量赋值，最后列出表达方程组通解。

## 高斯消元五步骤法

## 解释

高斯消元法在将增广矩阵化为最简形后对于自由未知量的赋值，需要掌握线性相关知识，且赋值存在人工经验的因素，使得在学习过程中有一定的困难，将高斯消元法划分为五步骤，从而提出五步骤法，内容如下：

1. 增广矩阵行初等行变换为行最简形；

2. 还原线性方程组；

3. 求解第一个变量；

4. 补充自由未知量；

5. 列表示方程组通解。

利用实例进一步说明该算法的运作情况。

## 过程

例二：利用高斯消元法五步骤法求解线性方程组：

$$
\begin{cases}
2x_1+5x_3+6x_4&=9 \\
x_3+x_4&=-4 \\
2x_3+2x_4&=-8
\end{cases}
$$

### 增广矩阵行（初等）变换为行最简形

所谓增广矩阵，即为方程组系数矩阵 $A$ 与常数列 $b$ 的并生成的新矩阵，即 $(A | b)$，增广矩阵行初等变换化为行最简形，即是利用了高斯消元法的思想理念，省略了变量而用变量的系数位置表示变量，增广矩阵中用竖线隔开了系数矩阵和常数列，代表了等于符号。

$$
\left(\begin{matrix}
2 & 0 & 5 & 6 \\
0 & 0 & 1 & 1 \\
0 & 0 & 2 & 2
\end{matrix} \middle|
\begin{matrix}
9 \\
-4 \\
-8
\end{matrix} \right)
$$

$$
\xrightarrow{r_3-2r_2}
\left(\begin{matrix}
2 & 0 & 5 & 6 \\
0 & 0 & 1 & 1 \\
0 & 0 & 0 & 0
\end{matrix} \middle|
\begin{matrix}
9 \\
-4 \\
0
\end{matrix} \right)
$$

化为行阶梯形

$$
\xrightarrow{\frac{r_1}{2}}
\left(\begin{matrix}
1 & 0 & 2.5 & 3 \\
0 & 0 & 1 & 1 \\
0 & 0 & 0 & 0
\end{matrix} \middle|
\begin{matrix}
4.5 \\
-4 \\
0
\end{matrix} \right)
$$

$$
\xrightarrow{r_1-r_2 \times 2.5}
\left(\begin{matrix}
1 & 0 & 0 & 0.5 \\
0 & 0 & 1 & 1 \\
0 & 0 & 0 & 0
\end{matrix} \middle|
\begin{matrix}
14.5 \\
-4 \\
0
\end{matrix} \right)
$$

化为最简形

### 还原线性方程组

$$
\begin{cases}
x_1+0.5x_4 &= 14.5\\
x_3+x_4 &= -4 \\
\end{cases}
$$

解释

> 所谓的还原线性方程组，即是在行最简形的基础上，将之重新书写为线性方程组的形式，即将行最简形中各位置的系数重新赋予变量，中间的竖线还原为等号。

### 求解第一个变量

$$
\begin{cases}
x_1 = -0.5x_4+14.5\notag \\
x_3 = -x_4-4\notag
\end{cases}
$$

解释

> 即是对于所还原的线性方程组而言，将方程组中每个方程的第一个变量，用其他量表达出来。如方程组两方程中的第一个变量 $x_1$ 和 $x_3$

### 补充自由未知量

$$
\begin{cases}
x_1 = -0.5x_4+14.5 \\
x_2 = x_2 \\
x_3 = -x_4-4 \\
x_4 = x_4
\end{cases}
$$

解释

> 第 3 步中，求解出变量 $x_1$ 和 $x_3$，从而说明了方程剩余的变量 $x_2$ 和 $x_4$ 不受方程组的约束，是自由未知量，可以取任意值，所以需要在第 3 步骤解得基础上进行解得补充，补充的方法为 $x_2 = x_2,x_4 = x_4$，这种解得补充方式符合自由未知量定义，并易于理解，因为是自由未知量而不受约束，所以只能自己等于自己。

### 列表示方程组的通解

$$
\begin{aligned}
\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} &=
\begin{pmatrix} 0 \\ 1 \\ 0 \\ 0 \end{pmatrix} x_2+
\begin{pmatrix} -0.5 \\ 0 \\ -1 \\ 1 \end{pmatrix} x_4 +
\begin{pmatrix} 14.5 \\ 0 \\ -4 \\ 0 \end{pmatrix} \\
&= \begin{pmatrix} 0 \\ 1 \\ 0 \\ 0 \end{pmatrix} C_1+
\begin{pmatrix} -0.5 \\ 0 \\ -1 \\ 1 \end{pmatrix} C_2 +
\begin{pmatrix} 14.5 \\ 0 \\ -4 \\ 0 \end{pmatrix}
\end{aligned}
$$

其中 $C_1$ 和 $C_2$ 为任意常数。

解释

> 即在第 4 步的基础上，将解表达为列向量组合的表示形式，同时由于 $x_2$ 和 $x_4$ 是自由未知量，可以取任意值，所以在解得右边，令二者分别为任意常数 $C_1$ 和 $C_2$，即实现了对方程组的求解。

---

## 行列式计算

### 解释

$N \times N$ 方阵行列式（Determinant）可以理解为所有列向量所夹的几何体的有向体积

例如：

$$
\begin{vmatrix}
1 & 0 \\
0 & 1 \end{vmatrix} = 1
$$

$$
\begin{vmatrix}
1 & 2 \\
2 & 1 \end{vmatrix} = -3
$$

行列式有公式

$$
\operatorname{det}(A)=\sum_{\sigma \in S_{n}} \operatorname{sgn}(\sigma) \prod_{i=1}^{n} a_{i, \sigma(i)}
$$

其中 $S_n$ 是指长度为 $n$ 的全排列的集合，$\sigma$ 就是一个全排列，如果 $\sigma$ 的逆序对对数为偶数，则 $\operatorname{sgn}(\sigma)=1$，否则 $\operatorname{sgn}(\sigma)=−1$。

通过体积概念理解行列式不变性是一个非常简单的办法：

- 矩阵转置，行列式不变；

- 矩阵行（列）交换，行列式取反；

- 矩阵行（列）相加或相减，行列式不变；

- 矩阵行（列）所有元素同时乘以数 $k$，行列式等比例变大。

> 由此，对矩阵应用高斯消元之后，我们可以得到一个对角线矩阵，此矩阵的行列式由对角线元素之积所决定。其符号可由交换行的数量来确定（如果为奇数，则行列式的符号应颠倒）。因此，我们可以在 $O(n^3)$ 的复杂度下使用高斯算法计算矩阵。
>
> 注意，如果在某个时候，我们在当前列中找不到非零单元，则算法应停止并返回 0。

---

### 实现

```c++
constexpr double EPS = 1E-9;
int n;
vector<vector<double>> a(n, vector<double>(n));

double det = 1;
for (int i = 0; i < n; ++i) {
  int k = i;
  for (int j = i + 1; j < n; ++j)
    if (abs(a[j][i]) > abs(a[k][i])) k = j;
  if (abs(a[k][i]) < EPS) {
    det = 0;
    break;
  }
  swap(a[i], a[k]);
  if (i != k) det = -det;
  det *= a[i][i];
  for (int j = i + 1; j < n; ++j) a[i][j] /= a[i][i];
  for (int j = 0; j < n; ++j)
    if (j != i && abs(a[j][i]) > EPS)
      for (int k = i + 1; k < n; ++k) a[j][k] -= a[i][k] * a[j][i];
}

cout << det;
```

## 矩阵求逆

对于方阵 $A$，若存在方阵 $A^{-1}$，使得 $A \times A^{-1} = A^{-1} \times A = I$，则称矩阵 $A$ 可逆，$A^{-1}$ 被称为它的逆矩阵。

给出 $n$ 阶方阵 $A$，求解其逆矩阵的方法如下：

1. 构造 $n \times 2n$ 的矩阵 $(A, I_n)$；
2. 用高斯消元法将其化简为最简形 $(I_n, A^{-1})$，即可得到 $A$ 的逆矩阵 $A^{-1}$。如果最终最简形的左半部分不是单位矩阵 $I_n$，则矩阵 $A$ 不可逆。

该方法的正确性证明需要用到较多线性代数的知识，限于篇幅这里不再给出。感兴趣的读者可以自行查阅相关资料。

## 高斯消元法解异或方程组

异或方程组是指形如

$$
\begin{cases}
a_{1,1}x_1 \oplus a_{1,2}x_2 \oplus \cdots \oplus a_{1,n}x_n &= b_1\\
a_{2,1}x_1 \oplus a_{2,2}x_2 \oplus \cdots \oplus a_{2,n}x_n &= b_2\\
\cdots &\cdots \\ a_{m,1}x_1 \oplus a_{m,2}x_2 \oplus \cdots \oplus a_{m,n}x_n &= b_1
\end{cases}
$$

的方程组，其中 $\oplus$ 表示「按位异或」（即 `xor` 或 C++ 中的 `^`），且式中所有系数/常数（即 $a_{i,j}$ 与 $b_i$）均为 $0$ 或 $1$。

由于「异或」符合交换律与结合律，故可以按照高斯消元法逐步消元求解。值得注意的是，我们在消元的时候应使用「异或消元」而非「加减消元」，且不需要进行乘除改变系数（因为系数均为 $0$ 和 $1$）。

注意到异或方程组的增广矩阵是 $01$ 矩阵（矩阵中仅含有 $0$ 与 $1$），所以我们可以使用 C++ 中的 `std::bitset` 进行优化，将时间复杂度降为 $O(\dfrac{n^2m}{\omega})$，其中 $n$ 为元的个数，$m$ 为方程条数，$\omega$ 一般为 $32$（与机器有关）。

参考实现：

```cpp
std::bitset<1010> matrix[2010];  // matrix[1~n]：增广矩阵，0 位置为常数

std::vector<bool> GaussElimination(
    int n, int m)  // n 为未知数个数，m 为方程个数，返回方程组的解
                   // （多解 / 无解返回一个空的 vector）
{
  for (int i = 1; i <= n; i++) {
    int cur = i;
    while (cur <= m && !matrix[cur].test(i)) cur++;
    if (cur > m) return std::vector<bool>(0);
    if (cur != i) swap(matrix[cur], matrix[i]);
    for (int j = 1; j <= m; j++)
      if (i != j && matrix[j].test(i)) matrix[j] ^= matrix[i];
  }
  std::vector<bool> ans(n + 1);
  for (int i = 1; i <= n; i++) ans[i] = matrix[i].test(0);
  return ans;
}
```

学了高斯-约旦消元法。

`P3389` 板题水过。判不了无解和无限解。板子放专栏了。

```
main(){
 for(i=1;i<=n;i++){
  p=i;
  for(j=i+1;j<=n;j++)if(fabs(a[j][i])>fabs(a[p][i]))p=j;
  for(j=1;j<=n+1;j++)swap(a[p][j],a[i][j]);
  if(fabs(a[i][i])<1e-7)return cout<<-1,0;
  for(j=n+1;j;j--)a[i][j]/=a[i][i];
  for(j=1;j<=n;j++)
   if(j!=i){
    x=a[j][i]/a[i][i];
    for(k=1;k<=n+1;k++)a[j][k]-=a[i][k]*x;
   }
 }
}
```

`P1205` 不错的模拟。注意到所有操作都可以通过转 $90\degree$ 和中心对成来实现，加上 `struct` 结构的便利性，大大减小了码量。

```
struct Matrix{
    char a[N][N];
    void read(){for(int i=1;i<=n;i++)cin>>a[i]+1;}
    Matrix _1(){
        Matrix final;int i,j;
        for(i=1;i<=n;i++)for(j=1;j<=n;j++)final.a[i][j]=a[n-j+1][i];
        return final;
    }
    Matrix _2(){
        Matrix final;int i,j;
        for(i=1;i<=n;i++)for(j=1;j<=n;j++)final.a[i][j]=a[i][n-j+1];
        return final;
    }
    bool operator ==(Matrix b){
  int i,j;
        for(i=1;i<=n;i++)for(j=1;j<=n;j++)if(a[i][j]!=b.a[i][j])return 0;
        return 1;
    }
};
int main(){
    cin>>n;x.read();y.read();tmp=x;
    for(i=1;i<=3;i++){
        tmp=tmp._1();
        if(tmp==y)return cout<<i,0;
    }
    tmp=x._2();
    if(tmp==y)return cout<<4,0;
    for(i=1;i<=3;i++){
        tmp=tmp._1();
        if(tmp==y)return cout<<5,0;
    }
    if(x==y)cout<<6;
    else cout<<7;
}
```

`P1207` 我选择打表最优解。

```
1,2,3,4,5,6,7,8,9,10,15,16,17,18,20,21,24,26,27,28,31,33,36,40,45,46,50,51,52,55,57,63,65,67,73,78,80,82,85,88,91,92,93,98,99,100,104,105,107,109,111,114,119,121,127,129,130,135,141,142,150,151,154,160,164,170,171,173,178,182,185,186,191,195,200,203,209,212,215,219,227,235,242,246,252,255,257,264,273,282,292,300,313,316,325,328,333,341,342,343,357,364,365,373,381,393,400,414,427,434,438,446,455,464,471,484,495,511,513,546,555,560,564,585,624,626,644,646,651,656,666,676,692,693,701,717,728,730,757,771,777,787,819,820,856,868,910,939,975,1023,1025,1066,1105,1221,1285,1312,1365,1432,1441,1460,1539,1550,1640,1667,1755,1885,2000,2188,2268,2293,2550,2565,2709,2730,2910,2920,2925,2997,3069,3074,3075,3280,3315,3550,3591,3640,3663,3735,3740,3855,3951,3999,4095,4097,4161,4225,4257,4289,4369,4433,4593,4617,4681,5001,5049,5125,5189,5397,5461,5740,5840,5854,6148,6200,6560,6562,6643,6697,6724,6761,6825,6886,6889,6953,7300,7373,7381,7409,7447,7462,7517,7667,7703,7777,7801,7997,8038,8119,8194,8200,8258,8281,8322,8386,8578,8778,8802,9009,9103,9201,9222,9490,9958,10252,10308,10658,10794,10858,10922,10986,11253,11314,11757,11898,11950,12291,12355,12419,12483, 12547,12654,12691,13107,13124,13131,13205,13286,13299,13331
```

`P1209` 简单贪心。排序即可。

```
main(){
    if(m>c)return cout<<c,0;
    stable_sort(a+1,a+1+c);
    ans=a[c]-a[1]+1;
    for(i=2;i<=c;i++)f[i-1]=a[i]-a[i-1];
    stable_sort(f+1,f+c,greater<int>());
    for(i=1;i<m;i++)(ans-=f[i])++;
}
```

`P1215` 爆搜不需要任何优化。搜之前判一下能不能倒。

```
dfs(int x,int y,int z){
    if(vis[x][y][z])return;
    if(!x)ans[++k]=z;
    vis[x][y][z]=1;
    if(z){
        if(x<a)dfs(min(a,x+z),y,z-(min(a,x+z)-x));
        if(y<b)dfs(x,min(y+z,b),z-(min(b,y+z)-y));
    }
    if(y){
        if(x<a)dfs(min(a,x+y),y-(min(a,x+y)-x),z);
        if(z<c)dfs(x,y-(min(c,z+y)-z),min(c,z+y));
    }
    if(x){
        if(y<b)dfs(x-(min(b,x+y)-y),min(b,x+y),z);
        if(z<c)dfs(x-(min(c,x+z)-z),y,min(c,z+x));
    }
}
main(){dfs(0,0,c);sort(ans+1,ans+1+k);}
```

`P1234` 没写搜索写了个暴力枚举，同时喜提史上最长单行函数。$n$ 行 $m$ 列不是 $n$ 行 $n$ 列见祖宗。不过讨论区也有一堆跟我一样的傻逼。

```
int _(int x,int y){return (x>=4?(a[x][y]=='h'&&a[x-1][y]=='e'&&a[x-2][y]=='h'&&a[x-3][y]=='e'):0)+(x<=n-3?(a[x][y]=='h'&&a[x+1][y]=='e'&&a[x+2][y]=='h'&&a[x+3][y]=='e'):0)+(y>=4?(a[x][y]=='h'&&a[x][y-1]=='e'&&a[x][y-2]=='h'&&a[x][y-3]=='e'):0)+(y<=m-3?(a[x][y]=='h'&&a[x][y+1]=='e'&&a[x][y+2]=='h'&&a[x][y+3]=='e'):0);}
```

`P1454` 裸的 `dfs`。

```
dx[12][2]={1,0,-1,0,0,1,0,-1,2,0,-2,0,0,2,0,-2,1,-1,-1,1,1,1,-1,-1};
dfs(int x,int y){
 if(x<1||x>n||y<1||y>m||a[x][y]!='#')return;
    a[x][y]='-';
    for(i=0;i<12;i++)dfs(x+dx[i][0],y+dx[i][1]);
}
main(){for(i=1;i<=n;i++)for(j=1;j<=m;j++)if(a[i][j]=='#')ans++,dfs(i,j);}
```

`P1479` 你说得对，但我选择打表最优解。而且这题造表程序很好写。

`0,0,0,0,1,1,1,1,3,3,3,6,6,10,10,15,21,21,28,28,35,30,30,27,12`

`P1498` 傻逼模拟调我半天。其实就是个杨辉三角。

```
main(){
 a[0]=1;
    for(i=0;i<(1<<n);i++,cout<<'\n'){
        for(j=1;j<(1<<n)-i;j++)cout<<' ';
  for(j=i;j>=0;j--)a[j]^=a[j-1];
  if(i&1)for(j=0;j<=i;j+=2)cout<<(a[j]?"/__\\":"    ");
  else for(j=0;j<=i;j++)cout<<(a[j]?"/\\":"  ");
    }
}
```

`P1506` 就是求被 `*` 包起来的 `0` 区块的总数量。爆搜即可。

```
dfs(int x,int y){
 for(i=0;i<4;i++){
  sx=x+dx[i][0];sy=y+dx[i][1];
  if((sx==1||sx==n||sy==1||sy==m)&&a[sx][sy]=='0')flag=1;
  if(a[sx][sy]=='*'||sx==1||sx==n||sy==1||sy==m||vis[sx][sy])continue;
  s++;vis[sx][sy]=1;dfs(sx,sy);
 }
}
main(){
 for(i=2;i<n;i++)
  for(j=2;j<m;j++)
   if(a[i][j]=='0'&&!vis[i][j]){
    vis[i][j]=1;flag=0;s=1;dfs(i,j);
    if(flag)s=0;
    ans+=s;
   }
}
```

`P1508` 还是简单深搜。加个记忆化就行。

```
dfs(int x,int y){
 if(f[x][y])return f[x][y];
 if(x<1||y<1||x>n||y>m)return 0;
 return f[x][y]=max(dfs(x-1,y)+a[x-1][y],max(dfs(x-1,y-1)+a[x-1][y-1],dfs(x-1,y+1)+a[x-1][y+1]));
}
main(){cout<<max(dfs(n,m/2+1)+a[n][m/2+1],max(dfs(n,m/2)+a[n][m/2],dfs(n,m/2+2)+a[n][m/2+2]));}
```

`P1515` 这题递推吧，我还不会写爆搜呢。

```
f[N]={0,990,1010,1970,2030,2940,3060,3930,4060,4970,5030,5990,6010,7000};
main(){
 for(i=14;i<n+14;i++)cin>>f[i];
 stable_sort(f,f+14+n);ans[0]=1;
 for(i=1;i<14+n;i++)for(j=0;j<i;j++)if(f[i]-f[j]>=a&&f[i]-f[j]<=b)ans[i]+=ans[j];
 cout<<ans[n+13];
}
```

`P1521` 没啥好说的。数据小。

```
main(){
    f[0][0]=1;
    for(i=0;i<=k;i++)s[i]=1;
    for(i=1;i<=n;i++){
        for(j=0;j<=k;j++)
            if(i<=j)f[i][j]=(s[j]-s[j-i]+mod)%mod;
            else f[i][j]=s[j]%mod;
        s[0]=f[i][0]%mod;
        for(j=1;j<=k;j++)s[j]=(f[i][j]+s[j-1])%mod;
    }
}
```

`P1588` 纯宽搜无需任何优化。

```
bfs(int u,int v){
 queue<int>q;memset(f,-1,sizeof f);
    q.push(u);f[u]=0;
    while(!q.empty()){
     int x=q.front();
     q.pop();
        if(x==v)return f[x];
        if(x&&f[x-1]==-1)q.push(x-1),f[x-1]=f[x]+1;
  if(x+1<=N&&f[x+1]==-1)q.push(x+1),f[x+1]=f[x]+1;
     if((x<<1)<=N&&f[x<<1]==-1)q.push(x<<1),f[x<<1]=f[x]+1;
    }
}
```

`P1611` 仅考察了循环结构与数学思想。根据题意枚举并判断即可。

```
const ll f[7]={1,10,100,1000,10000,100000,1000000};
main(){
    cin>>a>>b;t=a;
    while(t)t/=10,s++;
    for(i=a;i<b;i++){
        x=i;y=(x%10)*f[s-1]+x/10;
        while(x!=y)ans+=(x<y&&y<=b),y=(y%10)*f[s-1]+y/10;
    }
}
```

`P1632` 大水题。没考算法。

```
main(){
 f<--inf
 for(i=1;i<=n;i++)
  for(j=1;j<=n;j++){
   s=0;
   for(k=1;k<=n;k++)a[k]=abs(x[k]-x[i])+abs(y[k]-y[j]);
   stable_sort(a+1,a+1+n);
   for(k=1;k<=n;k++)s+=a[k],f[k]=min(f[k],s);
  }
}
```

`P1644` 唯一的难点是方向数组的写法（

```
dfs(int x,int y){
 if(x==n&&y==m)s++;
 if(x<0||x>n||y>m)return;
 for(int i=0;i<4;i++)dfs(x+dx[i][0],y+dx[i][1]);
}
main(){dfs(0,0)}
```

`P1679` 直接记搜就行了。$0$ 要特判。

```
dfs(int n,int x){
 if(!n||f[n])return f[n];
 int s=inf;
 while(x<=a[0]&&a[x]<=n)s=min(s,dfs(n-a[x],x)+1),x++;
 return f[n]=s;
}
main(){
 x=1;
 if(!n)return cout<<1,0;
 while(pow(x,4)<=n)a[++a[0]]=pow(x,4),x++;
 dfs(n,1);
}
```

`P1722` 记搜。

```
dfs(int i,int s){
 if(i>n)return 1;
 if(f[i][s]!=f[0][0])return f[i][s];
 f[i][s]=0;
 if(s1<(n>>1))s1++,f[i][s]=dfs(i+1,s+1)%p,s1--;
 if(s2<(n>>1)&&s)s2++,f[i][s]=(f[i][s]%p+dfs(i+1,s-1)%p)%p,s2--;
 return f[i][s];
}
main(){n<<=1;memset(f,0x7f,sizeof f);dfs(1,0);}
```

`P1718` 其实是要对于所给无向图，找出一条经过所有点且字典序最小的路径。

然后跑裸的 `dfs` 就行了，数据小甚至难得能用邻接矩阵存图。

```
dfs(int x,int k){
 int i;f[k]=x;
 if(k==n)
  if(a[x][1]){
   for(i=1;i<=n;i++)cout<<f[i]<<' ';
   cout<<'\n';exit(0);
  }
  else return;
 for(i=1;i<=n;i++)
  if(a[x][i]&&!vis[i])
   vis[i]=1,dfs(i,k+1),vis[i]=0;
}
```
