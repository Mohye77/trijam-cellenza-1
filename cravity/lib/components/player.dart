import 'package:cellenza/cravity_world_game.dart';
import 'package:flame/collisions.dart';
import 'package:flame/components.dart';
import 'package:flame/flame.dart';
import 'package:flutter/widgets.dart';
import '../helper/direction.dart';
import 'world_collidable.dart';
import 'package:flame/sprite.dart';
import 'package:flutter/painting.dart';

class Player extends SpriteAnimationComponent with HasGameRef<CravityWorldGame>, CollisionCallbacks {
  final double _playerSpeed = 100.0;
  final double _animationSpeed = 0.15;

  late final SpriteAnimation _runDownAnimation;
  late final SpriteAnimation _runLeftAnimation;
  late final SpriteAnimation _runUpAnimation;
  late final SpriteAnimation _runRightAnimation;
  late final SpriteAnimation _standingAnimation;
  late final Image _plane1;
  late final Image _plane2;
  late final Image _plane3;

  Direction direction = Direction.none;
  Direction _collisionDirection = Direction.none;
  bool _hasCollided = false;
  int loop = 1;
  Player()
      : super(
          size: Vector2.all(80.0),
        ) {
    //addHitbox(HitboxRectangle());
  }

  @override
  Future<void> onLoad() async {
    super.onLoad();

    await _loadAnimations();
  }

  @override
  void update(double delta) {
    super.update(delta);
    movePlayer(delta * _playerSpeed);
  }

  /*@override
  void onCollisionEnd(Collidable other) {
    _hasCollided = false;
  }*/

  Future<void> _loadAnimations() async {
    final imagesLoader = await Flame.images.load('helicopter1.png');
    final spriteSheet = SpriteSheet(
      image: imagesLoader,
      srcSize: Vector2(83.0, 73.0),
    );

    _standingAnimation = spriteSheet.createAnimation(
      row: 0,
      stepTime: 0.2,
      from: 0, // Indice du premier frame
      to: 8, // Indice du dernier frame plus un
    );

    /*_runDownAnimation = spriteSheet.createAnimation(row: 0, stepTime: _animationSpeed, to: 4);

    _runLeftAnimation = spriteSheet.createAnimation(row: 1, stepTime: _animationSpeed, to: 4);

    _runUpAnimation = spriteSheet.createAnimation(row: 2, stepTime: _animationSpeed, to: 4);

    _runRightAnimation = spriteSheet.createAnimation(row: 3, stepTime: _animationSpeed, to: 4);
*/
    //_standingAnimation = spriteSheet.createAnimation(row: 0, stepTime: _animationSpeed, to: 1);
  }

  void movePlayer(double delta) {
    switch (direction) {
      case Direction.up:
        if (canPlayerMoveUp()) {
          //animation = _runUpAnimation;
          moveUp(delta);
        }
        break;
      case Direction.down:
        if (canPlayerMoveDown()) {
          //animation = _runDownAnimation;
          moveDown(delta);
        }
        break;
      case Direction.left:
        if (canPlayerMoveLeft()) {
          //animation = _runLeftAnimation;
          moveLeft(delta);
        }
        break;
      case Direction.right:
        if (canPlayerMoveRight()) {
          //animation = _runRightAnimation;
          moveRight(delta);
        }
        break;
      case Direction.none:
        animation = _standingAnimation;
        break;
    }
  }

  bool canPlayerMoveUp() {
    if (_hasCollided && _collisionDirection == Direction.up) {
      return false;
    }
    return true;
  }

  bool canPlayerMoveDown() {
    if (_hasCollided && _collisionDirection == Direction.down) {
      return false;
    }
    return true;
  }

  bool canPlayerMoveLeft() {
    if (_hasCollided && _collisionDirection == Direction.left) {
      return false;
    }
    return true;
  }

  bool canPlayerMoveRight() {
    if (_hasCollided && _collisionDirection == Direction.right) {
      return false;
    }
    return true;
  }

  void moveUp(double delta) {
    y += delta;
    //position.add(Vector2(0, delta * -_playerSpeed));
  }

  void moveDown(double delta) {
    y -= delta;
    //position.add(Vector2(0, delta * _playerSpeed));
  }

  void moveLeft(double delta) {
    x -= delta;
    //position.add(Vector2(delta * -_playerSpeed, 0));
  }

  void moveRight(double delta) {
    x += delta;
    //position.add(Vector2(delta * _playerSpeed, 0));
  }
}
