---
title: "カオスの熱力学的コスト"
date: "2026-02-25"
status: "raw"
---

## 一文要約
カオス系の予測には h_KS × kT ln2 の最小散逸パワーが必要であり、MSS境界と組み合わせるとプランクパワーが自然に現れる。

## 核心的主張

### 予測コスト不等式
```
P_predict ≥ h_KS × k_B T_computer × ln2
```

### 量子上限
```
P_predict ≤ 2πN k_B²T² ln2 / ℏ    （最大カオス系、T_sys = T_comp の場合）
```

### ブラックホールの計算不透明性
```
P_track = c⁵ ln2 / (8πG) ～ O(P_Planck) ≫ P_Hawking（大質量BH）
```

## 新規と思われる点
1. Landauer × KS × MSS の三角関係の明示的定量化
2. P_track の質量非依存性
3. ブラックホールの「計算不透明性」概念

## 弱点・要検証
- 粗視化の正当化（ユニタリ系でのLandauer適用）
- 量子KSエントロピーの厳密な定義
- 「全自由度が独立に最大カオス」仮定の妥当性
- 似た議論が既にある可能性（より徹底した文献調査が必要）

## 関連研究
- Maldacena, Shenker & Stanford (2016) "A bound on chaos"
- Lloyd (2000) "Ultimate physical limits to computation"
- Landauer (1961) "Irreversibility and heat generation"
- Pesin (1977) Pesinの定理
