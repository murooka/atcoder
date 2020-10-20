#include <algorithm>
#include <array>
#include <bitset>
#include <cassert>
#include <cmath>
#include <cstdio>
#include <iostream>
#include <iterator>
#include <list>
#include <map>
#include <numeric>
#include <queue>
#include <random>
#include <set>
#include <sstream>
#include <stack>
#include <string>
#include <tuple>
#include <utility>
#include <vector>

#define rep(i, n) for (int i = 0; i < n; i++)
#define repi(i, n, iv) for (int i = iv; i < n; i++)
#define all(v) v.begin(), v.end()

using namespace std;
typedef long long ll;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);

    int N;
    cin >> N;

    vector<ll> A(N);
    rep(i, N) cin >> A[i];

    sort(A.begin(), A.end());

    if (A[0] == 0)
    {
        cout << 0 << endl;
        return 0;
    }

    double d = 1.0;
    for (auto a : A)
    {
        d *= a;
        if (d > 2000000000000000000)
        {
            cout << -1 << endl;
            return 0;
        }
    }

    ll res = 1;
    for (auto a : A)
    {
        res *= a;
        if (res > 1000000000000000000)
        {
            cout << -1 << endl;
            return 0;
        }
    }

    cout << res << endl;

    return 0;
}
