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

int count(int s)
{
    return floor(sqrt(2 * s + 0.25) - 0.5);
};

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);

    ll N;
    cin >> N;

    auto max = sqrt(N);
    map<int, int> p;
    for (int i = 2; i < max; i++)
    {
        while (N % i == 0)
        {
            N /= i;
            p[i]++;
        }
    }
    if (N != 1)
        p[N]++;

    int res = 0;
    for (auto e : p)
    {
        res += count(e.second);
    }

    cout << res << endl;
}
