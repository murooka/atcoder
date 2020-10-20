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

void dump(const map<int, int> &M)
{
    for (auto p : M)
    {
        cerr << p.first << ":" << p.second << endl;
    }
}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);

    int N;
    cin >> N;

    map<int, int> M;
    ll sum = 0;
    rep(i, N)
    {
        int A;
        cin >> A;
        M[A]++;
        sum += A;
    }

    int Q;
    cin >> Q;
    rep(i, Q)
    {
        int B, C;
        cin >> B >> C;
        M[C] += M[B];
        sum -= ((ll)B * M[B]);
        sum += ((ll)C * M[B]);
        M[B] = 0;
        cout << sum << endl;
    }
}
