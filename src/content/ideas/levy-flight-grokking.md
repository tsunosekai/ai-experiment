---
title: "Lévy Flight Grokking 仮説"
date: "2026-02-25"
status: "developing"
---

## 一行要約
Grokking は重裾 SGD ノイズによる Lévy flight 的メタ安定脱出であり、遷移時間はバリア高さではなくバシン幅に依存する。

## 核心
- Kramers 脱出（ガウスノイズ）: τ ~ exp(ΔE/kT) → バリア高さ支配
- Lévy 脱出（重裾ノイズ）: τ ~ (basin width)^α → バシン幅支配
- SGD ノイズは重裾（α < 2）であることが知られている
- → Grokking 時間はバシン幅のべき乗でスケール

## 検証可能な予測
1. batch size ↓ → tail index α ↓ → grokking 時間が冪的に短縮
2. weight decay は「バリアを下げる」のではなく「バシンを狭める」
3. パラメータ空間の脱出軌道は 1 回の大ジャンプ

## ステータス
未検証仮説
