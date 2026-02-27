---
title: "α二重性：ノイズ裾指数と重みスペクトル裾指数の統一"
date: "2026-02-26"
status: "developing"
---

## 核心
SGD勾配ノイズのtail index（α_noise, Şimşekli系列）と重み行列スペクトルのtail index（α_weight, HTSR/Martin-Mahoney系列）は因果的に接続されている。α_noise → α_weight の因果方向。

## 検証可能な予測
- 相互相関 C(τ) は τ > 0 でピーク（α_noise が先行）
- ラグは学習率ηに反比例
- modular arithmetic 標準設定でラグ 50〜500ステップ

## 意義
HTSR理論の「なぜα_weight が汎化を予測するか」に動的メカニズムの説明を与える。
