import 'package:flame/components.dart';

class World extends SpriteComponent with HasGameRef {
  @override
  Future<void>? onLoad() async {
    //sprite = await gameRef.loadSprite('cravity_background.png');
    sprite = await gameRef.loadSprite('sky2.webp');
    size = sprite!.originalSize;
    return super.onLoad();
  }
}
