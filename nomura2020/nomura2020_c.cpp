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

#define rep(i, n) for (int i=0; i<n; i++)
#define repi(i, n, iv) for (int i=iv; i<n; i++)
#define all(v) v.begin(), v.end()

using namespace std;
typedef long long ll;


int main() {
	ios::sync_with_stdio(false);
	cin.tie(0);

	int N;
	cin >> N;

	vector<ll> A(N+1);
	vector<ll> B(N+1);
	rep(i, N+1) cin >> A[i];

  ll p = 1;
  for (int i=0; i<=N; i++) {
    if (A[i] > 0) p -= A[i];
    if (p < 0) {
      cout << -1 << endl;
      return 0;
    }
    B[i] = p;
    p *= 2;
  }
  B[N] = 0;

  for (int i = N-1; i>0; i--) {
    if (B[i] > A[i + 1] + B[i + 1]) {
      B[i] = A[i + 1] + B[i + 1];
    }
  }

  ll result = 0;
  for (int i = 0; i <= N; i++) {
    result += A[i] + B[i];
  }
  cout << result << endl;
}
