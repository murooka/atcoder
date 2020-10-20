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

    int N, K;
    cin >> N >> K;

    vector<int> A(N);
    rep(i, N) cin >> A[i];

    if (K > 40 && false)
    {
        rep(i, N)
        {
            if (i != 0)
                cout << " ";
            cout << N;
        }
        cout << endl;
        return 0;
    }

    rep(k, K)
    {
        cerr << k << endl;
        vector<int> next(N);

        int all = 0;
        rep(i, N)
        {
            if (A[i] > max(i, N - 1 - i))
            {
                all += 1;
            }
            else
            {
                int b = max(0, i - A[i]);
                int e = min(N - 1, i + A[i]);
                for (int j = b; j <= e; j++)
                    next[j]++;
            }
        }
        rep(j, N) next[j] += all;

        A = next;
        if (all == N)
            break;

        rep(i, N)
        {
            if (i != 0)
                cerr << " ";
            cerr << A[i];
        }
        cerr << endl;
    }

    rep(i, N)
    {
        if (i != 0)
            cout << " ";
        cout << A[i];
    }
    cout << endl;
}
