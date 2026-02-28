---
title: "SDF Smooth CSG = Entropic Optimal Transport"
date: "2026-03-01"
status: "testable"
---

## 仮説

SDF のsmooth min演算は、エントロピー正則化W₁最適輸送のKantorovich双対ポテンシャル更新と数学的に同一。β = 1/ε。

## 検証可能な予測

1. エイコナル欠損積分 = 2ε·sin²(θ/2) — entropic duality gap O(ε)
2. n体接合点: |∇smin_β| = 1/√n（相互直交）
3. CSG木誤差スケーリング: バランス木 O(n log n/β), 最適木 O(n/β)

## 検証方法

- Houdini VDB: n個直交平面のsmooth unionで勾配ノルム測定
- Python: 離散SDFでeikonal欠損とentropic OT duality gap比較
