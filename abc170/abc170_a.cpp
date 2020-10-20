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

    int x1, x2, x3, x4, x5;
    cin >> x1 >> x2 >> x3 >> x4 >> x5;
    if (x1 == 0)
    {
        cout << 1 << endl;
    }
    else if (x2 == 0)
    {

        cout << 2 << endl;
    }
    else if (x3 == 0)
    {

        cout << 3 << endl;
    }
    else if (x4 == 0)
    {

        cout << 4 << endl;
    }
    else
    {

        cout << 5 << endl;
    }
}
