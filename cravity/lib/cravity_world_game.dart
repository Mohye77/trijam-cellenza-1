import 'package:flame/game.dart';
import 'package:flame/input.dart';
import 'package:flutter/services.dart';

import 'components/player.dart';
import 'components/world.dart' as w;
import 'helper/direction.dart';
import 'package:flutter/material.dart';

class CravityWorldGame extends FlameGame with HasCollisionDetection, KeyboardEvents {
  final Player _player = Player();
  final w.World _world = w.World();

  @override
  Future<void> onLoad() async {
    super.onLoad();
    await add(_world);
    add(_player);
    //addWorldCollision();
    final position = size / 2;
    position.x = 0.0;
    camera.findGame();

    _player.position = position;
    //camera.followComponent(_player, worldBounds: Rect.fromLTRB(0, 0, _world.size.x, _world.size.y));
  }

  // void addWorldCollision() async => (await MapLoader.readRayWorldCollisionMap()).forEach((rect) {
  //       add(WorldCollidable()
  //         ..position = Vector2(rect.left, rect.top)
  //         ..width = rect.width
  //         ..height = rect.height);
  //     });

  void onJoypadDirectionChanged(Direction direction) {
    _player.direction = direction;
  }

  @override
  void update(double dt) {
    // TODO: implement update
    super.update(dt);
  }

  @override
  void render(Canvas canvas) {
    // TODO: implement
    super.render(canvas);
  }

  /* WorldCollidable createWorldCollidable(Rect rect) {
    final collidable = WorldCollidable();
    collidable.position = Vector2(rect.left, rect.top);
    collidable.width = rect.width;
    collidable.height = rect.height;
    return collidable;
  }*/

  @override
  KeyEventResult onKeyEvent(RawKeyEvent event, Set<LogicalKeyboardKey> keysPressed) {
    final isKeyDown = event is RawKeyDownEvent;
    Direction? keyDirection = null;

    if (event.logicalKey == LogicalKeyboardKey.keyQ || event.logicalKey == LogicalKeyboardKey.arrowLeft) {
      keyDirection = Direction.left;
    } else if (event.logicalKey == LogicalKeyboardKey.keyD || event.logicalKey == LogicalKeyboardKey.arrowDown) {
      keyDirection = Direction.right;
    } else if (event.logicalKey == LogicalKeyboardKey.keyS || event.logicalKey == LogicalKeyboardKey.arrowUp) {
      keyDirection = Direction.up;
    } else if (event.logicalKey == LogicalKeyboardKey.keyZ || event.logicalKey == LogicalKeyboardKey.arrowDown) {
      keyDirection = Direction.down;
    }

    if (isKeyDown && keyDirection != null) {
      _player.direction = keyDirection;
    } else if (_player.direction == keyDirection) {
      _player.direction = Direction.none;
    }

    return super.onKeyEvent(event, keysPressed);
  }
}
