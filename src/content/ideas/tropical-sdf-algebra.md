---
title: "SDF代数の熱帯熱力学"
date: "2026-02-28"
status: developing
---
# SDF代数の熱帯熱力学

## 状態: developing

## 核心アイデア

SDFのboolean演算（min/max）は熱帯半環の演算であり、smooth min（log-sum-exp）はMaslov脱量子化パラメータ β による「量子化」版である。

## 主要な予測

### 1. エイコナル欠損の普遍性
- δ_max = sin²(θ/2) は β に依存しない
- 欠損ゾーンの幅のみが β⁻¹ でスケール

### 2. Order 3摂動補正
- 輸送方程式 dc/dt = δ/2 の特性曲線積分で補正場を構成
- 残差は O(β⁻² sin⁴(θ/2)) に改善

### 3. 再距離化付きunionの結合律の破れ
- 誤差 ~ sin²(θ_1/2) · sin²(θ_2/2) · d
- 接線交差では消失、直交交差で最大

### 4. CSG木の最適結合順序
- 交差角の小さいペアを先に結合すべき

## 検証方法
- Houdini VDB: 3つのVDB球を異なる順序でCombine + Reshape、差分測定
- VEX: Order 3補正の実装、sphere tracingの収束改善を測定

## 接続先
- Houdiniのプロシージャルモデリング（VDB SDF Combine）
- Neural SDF（ニューラルフィールドのCSG操作）
- 代数幾何（アメーバ、熱帯多様体）

## 日付: 2026-02-28
