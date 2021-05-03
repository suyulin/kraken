import 'dart:collection';

import 'package:kraken/bridge.dart';

class UiCommandManager {
  factory UiCommandManager() => _ins;
  Map<int, JSContextCommands> _commandsMap;

  UiCommandManager._() {
    _commandsMap = Map();
  }

  static final UiCommandManager _ins = UiCommandManager._();

  static UiCommandManager get instance => _ins;

  addCommand(int jsContextId, int targetId, UICommand command) {
    _commandsMap.putIfAbsent(jsContextId, () => JSContextCommands());
    JSContextCommands commands = _commandsMap[jsContextId];
    commands._addTargetCommand(targetId, command);
  }

  JSContextCommands flushCommand(int jsContextId) {
    if (jsContextId == null) {
      return null;
    }
    JSContextCommands commands = _commandsMap[jsContextId];
    if (_commandsMap.containsKey(jsContextId)) {
      _commandsMap.remove(jsContextId);
    }
    return commands;
  }

  bool get hasCommands => _commandsMap.isNotEmpty;
}

class JSContextCommands {
  List<int> targetIds = List();

  Map<int, List<MergedCommands>> cacheCommands = Map();

  void _addTargetCommand(int targetId, UICommand command) {
    if (targetId == null || command == null) {
      return;
    }

    bool canMerge = command.type != UICommandType.insertAdjacentNode;
    cacheCommands.putIfAbsent(targetId, () => List());
    MergedCommands mergedCommands;
    if (canMerge == true) {
      bool merged = false;
      if (targetIds.contains(targetId)) {
        if (cacheCommands[targetId].length == 0) {
          mergedCommands = MergedCommands(targetId, canMerge: true,);
          mergedCommands.commands.add(command);
          cacheCommands[targetId].add(mergedCommands);
        } else {
          List<MergedCommands> commandList = cacheCommands[targetId];
          for (MergedCommands value in commandList) {
            if (value != null && value.canMerge == true) {
              mergedCommands = value;
              value.commands.add(command);
              merged = true;
              break;
            }
          }
          if(merged != true){
            mergedCommands = MergedCommands(targetId, canMerge: true,);
            mergedCommands.commands.add(command);
            cacheCommands[targetId].add(mergedCommands);
          }
        }

      } else {
        merged = false;
        mergedCommands = MergedCommands(targetId, canMerge: true);
        mergedCommands.commands.add(command);
        cacheCommands[targetId].add(mergedCommands);
      }

      if (merged != true) {
        targetIds.add(targetId);
        mergedCommands.targetIdIndex = targetIds.length -1;
      }
    } else {
      MergedCommands mergedCommands = MergedCommands(targetId, canMerge: false);
      mergedCommands.commands.add(command);
      mergedCommands.targetIdIndex = targetIds.length -1;
      cacheCommands[targetId].add(mergedCommands);
      targetIds.add(targetId);
    }
  }

  void clear(){
    targetIds.clear();
    cacheCommands.clear();
  }

  bool get hasCommands => cacheCommands.isNotEmpty;

//  List<UICommand> flushCommands(int target,int index) {
//    if (target == null) {
//      return null;
//    }
//    List<UICommand> uiCommand = List();
//    List<MergedCommands> commands = cacheCommands[target];
//    for (int i = 0; i < commands.length; i++) {
//      MergedCommands element = commands[i];
//      if (element != null && element.targetIdIndex == index) {
//        uiCommand.addAll(element.commands);
//        commands.removeAt(i);
//        break;
//      }
//    };
//
//    if(commands.isEmpty) {
//      cacheCommands?.remove(target);
//    }
//    targetIds?.removeAt(index);
//    return uiCommand;
//  }

  List<UICommand> flushCommands(int target,int index) {
    if (target == null) {
      return null;
    }
    List<UICommand> uiCommand = List();
    List<MergedCommands> commands = cacheCommands[target];
    for (int i = 0; i < commands.length; i++) {
      MergedCommands element = commands[i];
      if (element != null && element.targetIdIndex == index) {
        uiCommand.addAll(element.commands);
        break;
      }
    };
    return uiCommand;
  }
}

class MergedCommands {
  int targetId;
  List<UICommand> commands;
  bool canMerge;
  int targetIdIndex;

  MergedCommands(int targetId, {this.canMerge = true, this.targetIdIndex}) {
    this.targetId = targetId;
    commands = List();
  }
}
