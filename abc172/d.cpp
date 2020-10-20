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
#include <algorithm>
#include <cctype>
#include <iostream>
#include <string>

#define rep(i, n) for (int i = 0; i < n; i++)
#define repi(i, n, iv) for (int i = iv; i < n; i++)
#define all(v) v.begin(), v.end()

using namespace std;
typedef long long ll;

int f(int n)
{
    if (n == 1)
        return 1;

    int count = 2;
    for (int p = 2; p < n; p++)
    {
        if (n % p == 0)
            count++;
    }

    return count;
}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);

    int N;
    cin >> N;

    vector<ll> fs(N);
    fill(fs.begin(), fs.end(), 2);
    fs[0] = 1;

    int len = sqrt(N) + 1;
    for (int i = 2; i <= N; i++)
    {
        for (int v = i * 2; v <= N; v += i)
        {
            fs[v - 1]++;
        }
    }

    ll result = 0;
    for (int i = 1; i <= N; i++)
    {
        result += i * fs[i - 1];
    }

    cout << result << endl;

    /*
    int result = 0;
    for (int i = 1; i <= N; i++)
        result += i * f(i);

    cout << result << endl;
    */
}
