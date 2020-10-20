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

    int N, M, K;
    cin >> N >> M >> K;

    vector<int> A(N);
    vector<int> B(M);
    rep(i, N) cin >> A[i];
    rep(i, M) cin >> B[i];

    int AS = A.size();
    int BS = B.size();
    int ai = 0;
    int bi = 0;

    int result = 0;

    while (true)
    {
        if (ai >= AS)
            break;
        int a = A[ai];
        if (a > K)
            break;

        K -= a;
        result++;
        ai++;
    }

    while (true)
    {
        if (bi >= BS)
            break;
        int b = B[bi];
        if (b > K)
            break;

        K -= b;
        result++;
        bi++;
    }

    cerr << result << endl;

    int t = result;
    int prev = result;
    rep(i, t)
    {
        int tmp = prev;

        if (ai > 0)
        {
            ai--;
            tmp--;
            K += A[ai];
        }

        while (true)
        {
            if (bi >= BS)
                break;
            int b = B[bi];
            if (b > K)
                break;

            K -= b;
            tmp++;
            bi++;
        }

        cerr << tmp << endl;
        result = max(result, tmp);
        prev = tmp;
    }

    cout << result << endl;
}
