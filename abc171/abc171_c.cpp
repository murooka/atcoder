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

    ll N;
    cin >> N;

    ll d = N;
    int digits = 0;
    for (int i = 1; i < 40; i++)
    {
        if (d <= 0)
            break;
        ll D = pow(26, i);
        d -= D;
        digits = i;
    }

    for (int i = 1; i < digits; i++)
    {
        N -= pow(26, i);
    }

    N--;

    string s;
    for (int i = 0; i < digits; i++)
    {
        int r = N % 26;
        N /= 26;
        s += static_cast<char>(97 + r);
    }
    reverse(s.begin(), s.end());
    cout << s << endl;
}
