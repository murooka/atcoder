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

    ll A, B, V, W, T;
    cin >> A >> V >> B >> W >> T;

    ll M = V - W;
    if (M <= 0)
    {
        cout << "NO" << endl;
        return 0;
    }

    if (abs(B - A) <= M * T)
    {
        cout << "YES" << endl;
    }
    else
    {

        cout << "NO" << endl;
    }
}
