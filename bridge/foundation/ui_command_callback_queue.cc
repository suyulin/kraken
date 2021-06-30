/*
 * Copyright (C) 2020 Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */

#include "kraken_bridge.h"

namespace foundation {

std::recursive_mutex ui_command_callback_mutex_;
UICommandCallbackQueue *UICommandCallbackQueue::instance() {
    std::lock_guard<std::recursive_mutex> guard(ui_command_callback_mutex_);
    static UICommandCallbackQueue *queue = nullptr;

  if (queue == nullptr) {
    queue = new UICommandCallbackQueue();
  }

  return queue;
}

void UICommandCallbackQueue::flushCallbacks() {
    std::lock_guard<std::recursive_mutex> guard(ui_command_callback_mutex_);
    for (auto &item : queue) {
    item.callback(item.data);
  }
  queue.clear();
}

void UICommandCallbackQueue::registerCallback(const Callback &callback, void *data) {
    std::lock_guard<std::recursive_mutex> guard(ui_command_callback_mutex_);
    CallbackItem item{callback, data};
  queue.emplace_back(item);
}

} // namespace foundation
