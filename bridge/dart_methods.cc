/*
 * Copyright (C) 2019 Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */

#include "dart_methods.h"
#include "bridge_export.h"
#include <memory>

namespace kraken {

std::shared_ptr<DartMethodPointer> methodPointer =
    std::make_shared<DartMethodPointer>();

std::shared_ptr<DartMethodPointer> getDartMethod() {
  return methodPointer;
}

void registerInvokeUIManager(InvokeUIManager callback) {
  methodPointer->invokeUIManager = callback;
}

void registerInvokeModuleManager(InvokeModuleManager callback) {
  methodPointer->invokeModuleManager = callback;
}

void registerReloadApp(ReloadApp callback) {
  methodPointer->reloadApp = callback;
}

void registerSetTimeout(SetTimeout callback) {
  methodPointer->setTimeout = callback;
}

void registerSetInterval(SetInterval callback) {
  methodPointer->setInterval = callback;
}

void registerClearTimeout(ClearTimeout callback) {
  methodPointer->clearTimeout = callback;
}

void registerRequestAnimationFrame(RequestAnimationFrame callback) {
  methodPointer->requestAnimationFrame = callback;
}

void registerCancelAnimationFrame(CancelAnimationFrame callback) {
  methodPointer->cancelAnimationFrame = callback;
}

void registerGetScreen(GetScreen callback) {
  methodPointer->getScreen = callback;
}

void registerInvokeFetch(InvokeFetch invokeFetch) {
  methodPointer->invokeFetch = invokeFetch;
}

void registerDevicePixelRatio(DevicePixelRatio devicePixelRatio) {
  methodPointer->devicePixelRatio = devicePixelRatio;
}

void registerPlatformBrightness(PlatformBrightness platformBrightness) {
  methodPointer->platformBrightness = platformBrightness;
}

void registerOnPlatformBrightnessChanged(OnPlatformBrightnessChanged onPlatformBrightnessChanged) {
  methodPointer->onPlatformBrightnessChanged = onPlatformBrightnessChanged;
}

} // namespace kraken