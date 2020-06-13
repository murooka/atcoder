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

	vector<ll> A(N);
	rep(i, N) cin >> A[i];
  std::sort(A.begin(), A.end());

  if (A[0] == 0) {
    cout << 0 << endl;
    exit(0);
  }

  double result = 1;
  for (int i=0; i<N; i++) result *= A[i];

  if (result >= 2000000000000000000) {
    cout << -1 << endl;
    exit(0);
  }

  ll r = 1;
  for (int i=0; i<N; i++) r *= A[i];
   if (r > 1000000000000000000) {
     cout << -1 << endl;
   } else {
     cout << r << endl;
   }
}
