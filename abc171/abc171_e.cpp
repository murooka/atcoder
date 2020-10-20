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

    vector<int> A(N);
    int all = 0;
    rep(i, N)
    {
        cin >> A[i];
        all ^= A[i];
    }

    rep(i, N)
    {
        if (i != 0)
            cout << " ";
        cout << (all ^ A[i]);
    }
    cout << endl;
}
