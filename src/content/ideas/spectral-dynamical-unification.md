---
title: "スペクトル-動力学統一仮説"
date: "2026-02-26"
status: "developing"
---

## 一行要約
SGDノイズの裾指数 α_SGD と重量行列スペクトルの裾指数 α_W は因果的に接続されており、α_SGD の変化が α_W に先行する。この時間ラグが grokking 遅延の本質。

## 核心
- α_SGD: 勾配ノイズの裾指数（動力学的量）
- α_W: W^T W 固有値分布の裾指数（スペクトル的量、HTSR理論）
- 既存研究は片方しか見ていない
- 両者を接続し、α_SGD → α_W の因果的写像として grokking を理解

## Critical Speeding Up
- α > 2: Kramers 脱出、τ ~ exp(ΔE/η)（指数的）
- α < 2: Lévy 脱出、τ ~ R^α（べき的）
- α = 2 での不連続的切り替わり → grokking の突然さ

## 検証可能な予測
1. log(τ_grok) vs log(η) の傾き = -α
2. α_SGD の変化は α_W の変化に時間的に先行する
3. Anti-grokking はシード間で再現的（landscape駆動、noise駆動ではない）
4. batch size 2倍 → τ_grok 約 1.6 倍（α ≈ 1.5 付近）
