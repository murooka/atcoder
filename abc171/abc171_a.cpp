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

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);

    char c;
    cin >> c;

    cout << (0x41 <= c && c <= 0x5a ? "A" : "a") << endl;
}
