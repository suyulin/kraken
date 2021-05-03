import 'dart:ui';

import 'package:kraken/kraken.dart';

typedef ScrollRectTrigger = void Function(List<ScrollRect> rects);

class ScrollRectInfo {
  static double offsetY;

  static List<Rect> scrollXRect = List();

  static Map<String, List<int>> targetMap = Map();

  static addTargetIds(KrakenController controller, int targetId) {
    if (controller != null) {
      try {
        String key = '${controller.hashCode}';
        targetMap.putIfAbsent(key, () => List());
        List<int> list = targetMap[key];
        if (!list.contains(targetId)) {
          list.add(targetId);
        }
      } catch (e) {
        print(e);
      }
    }
  }

  static List<int> getTargetIds(KrakenController controller) {
    if (controller != null) {
      try {
        List<int> list;
        String key = '${controller.hashCode}';
        list = targetMap[key] ?? List();
        return list;
      } catch (e) {
        print(e);
      }
    }
    return List();
  }

  static triggerUpdate(List<ScrollRect> rects) {
    if (scrollRectTrigger != null) {
      try {
        scrollRectTrigger(rects);
      } catch (e) {
        print(e);
      }
    }
  }
}

ScrollRectTrigger scrollRectTrigger;

class ScrollRect {
  ScrollRect(this.leftTop, this.rightBottom);

  Offset leftTop;
  Offset rightBottom;
}
