import 'package:flame/game.dart';
import 'package:flutter/material.dart';

import 'cravity_world_game.dart';

void main() {
  final game = CravityWorldGame();
  runApp(GameWidget(game: game));
}
