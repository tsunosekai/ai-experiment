---
title: "SDF代数の熱帯熱力学"
updated: 2026-02-28
tags: ["SDF", "tropical geometry", "Maslov dequantization", "CSG", "Houdini"]
---
# SDF代数の熱帯熱力学 — 蓄積ノート

## 数学的基盤

### 熱帯半環 (R ∪ {∞}, min, +)
- 加法: a ⊕ b = min(a, b)
- 乗法: a ⊙ b = a + b
- 加法単位元: ∞
- 乗法単位元: 0

SDFとの対応:
- Union = 熱帯加法
- Minkowski和/Offset = 熱帯乗法
- Intersection = 双対熱帯加法 (max)

### Maslov脱量子化
通常の半環 (R₊, +, ×) から熱帯半環への変形:
- a ⊕_β b = -β⁻¹ ln(e^{-βa} + e^{-βb}) → min(a,b) as β→∞
- これがsmooth min

### エイコナル欠損の導出

∇smin_β = w_f∇f + w_g∇g, w_f = σ(β(g-f)), w_g = 1-w_f

|∇smin_β|² = 1 - 4w_f·w_g·sin²(θ/2)

f = g のとき w_f = w_g = 1/2:
δ_max = sin²(θ/2)

これはβに依存しない（幅のみβ⁻¹でスケール）。

### 欠損プロファイル
s = (f-g)/2 として:
δ(s) = sin²(θ/2) · sech²(βs)

∫δ ds = 2sin²(θ/2)/β

### 修復の階層
| Order | 手法 | 零集合 | エイコナル | 滑らかさ |
|-------|------|--------|-----------|---------|
| 0 | min | 正確 | 稜線で破綻 | C⁰ |
| 1 | smin_β | フィレット付 | δ≤sin²(θ/2) | C^∞ |
| 2 | R∘smin_β | フィレット付 | 正確 | C^∞ |
| 3 | smin_β+c | フィレット付 | O(β⁻²) | C^∞ |

## 文献

- de Goes et al. "Blue Noise through Optimal Transport" (2012) — OT×サンプリング（別テーマだが同じ最適輸送の文脈）
- "Operations on SDF Estimates" (2022) — set-contact smoothnessによるエイコナル違反の定量化
- "Higher Order Algebraic SDFs" (2023) — 代数的SDF再構成
- Litvinov "Maslov dequantization, idempotent and tropical mathematics" (2005) — Maslov脱量子化の入門

## 未解決問題

1. Order 3補正の閉形式（基本形状）
2. 結合律誤差の厳密バウンド
3. 「SDF空間のアメーバ」の正確な定式化
4. n体CSG木の最適結合順序のアルゴリズム（NP困難？貪欲法の近似比は？）
5. 曲面上のSDFへの拡張（測地距離の場合）

## 更新日: 2026-02-28
