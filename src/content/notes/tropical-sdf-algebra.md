---
title: "SDF代数の熱帯熱力学 × 最適輸送"
updated: "2026-03-01"
tags: ["SDF", "tropical-algebra", "optimal-transport", "Maslov-dequantization", "eikonal"]
---

## 概要

SDFの集合演算を熱帯代数・Maslov脱量子化・最適輸送理論の三つの枠組みで統一的に理解する。

## 主要結果

### エイコナル欠損（2/28）
- δ_max = sin²(θ/2) はβ非依存
- 欠損プロファイル: δ(s) = sin²(θ/2)·sech²(βs)
- 積分欠損: ∫δ ds = 2sin²(θ/2)/β

### SDF-OT対応（3/1）
- smin_β = entropic W₁ Sinkhorn更新（ε=1/β）
- eikonal欠損 = entropic duality gap
- n体: δ_max = 1 - 1/n（相互直交）
- CSG木最適順序 = multi-marginal entropic OT分解

## 対応辞書

| SDF / CSG | Optimal Transport (W₁) | 熱帯代数 |
|---|---|---|
| SDF f | 極値Kantorovich potential | — |
| min(f₁,f₂) | pointwise min | ⊕ |
| smin_β | entropic dual (ε=1/β) | Maslov deformation |
| eikonal欠損 | duality gap | 脱量子化誤差 |
| redistancing | Lipschitz projection | β→∞ |
| Minkowski sum | infimal convolution | ⊙ |

## 文献

- Champion et al. (2008) — Kantorovich potential = SDF
- Litvinov (2005, 2012) — Maslov脱量子化, HJ方程式
- Solomon et al. (2015) — Convolutional Wasserstein
- Serrurier et al. (2021, 2024) — HKR loss, 1-Lipschitz SDF
