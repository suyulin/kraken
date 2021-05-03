/*
 * Copyright (C) 2020 Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */

#include "platform_view_event.h"

#include "media_error_event.h"

namespace kraken::binding::jsc {

void bindPlatformViewEvent(std::unique_ptr<JSContext> &context) {
  auto event = JSPlatformViewEvent::instance(context.get());
  JSC_GLOBAL_SET_PROPERTY(context, "PlatformViewEvent", event->classObject);
};

std::unordered_map<JSContext *, JSPlatformViewEvent *> JSPlatformViewEvent::instanceMap{};

JSPlatformViewEvent::~JSPlatformViewEvent() {
  instanceMap.erase(context);
}

JSPlatformViewEvent::JSPlatformViewEvent(JSContext *context) : JSEvent(context, "PlatformViewEvent") {}

JSObjectRef JSPlatformViewEvent::instanceConstructor(JSContextRef ctx, JSObjectRef constructor, size_t argumentCount,
                                                const JSValueRef *arguments, JSValueRef *exception) {
  if (argumentCount != 1) {
      throwJSError(ctx, "Failed to construct 'JSPlatformViewEvent': 1 argument required, but only 0 present.", exception);
    return nullptr;
  }

  JSStringRef dataStringRef = JSValueToStringCopy(ctx, arguments[0], exception);
  auto event = new PlatformViewEventInstance(this, dataStringRef);
  return event->object;
}

JSValueRef JSPlatformViewEvent::getProperty(std::string &name, JSValueRef *exception) {
  return nullptr;
}

PlatformViewEventInstance::PlatformViewEventInstance(JSPlatformViewEvent *jsPlatformViewEvent, NativePlatformViewEvent *nativePlatformViewEvent)
  : EventInstance(jsPlatformViewEvent, nativePlatformViewEvent->nativeEvent), nativePlatformViewEvent(nativePlatformViewEvent) {
  if (nativePlatformViewEvent->name != nullptr) m_name.setString(nativePlatformViewEvent->name);
  if (nativePlatformViewEvent->data != nullptr) m_data.setString(nativePlatformViewEvent->data);
}

PlatformViewEventInstance::PlatformViewEventInstance(JSPlatformViewEvent *jsPlatformViewEvent, JSStringRef data)
  : EventInstance(jsPlatformViewEvent, "platformview", nullptr, nullptr) {
  nativePlatformViewEvent = new NativePlatformViewEvent(nativeEvent);
}

JSValueRef PlatformViewEventInstance::getProperty(std::string &name, JSValueRef *exception) {
  auto propertyMap = JSPlatformViewEvent::getPlatformViewEventPropertyMap();

  if (propertyMap.count(name) == 0) return EventInstance::getProperty(name, exception);

  auto property = propertyMap[name];

  switch(property) {
    case JSPlatformViewEvent::PlatformViewEventProperty::name:
        return m_name.makeString();
    case JSPlatformViewEvent::PlatformViewEventProperty::data:
        return m_data.makeString();
}

  return nullptr;
}

bool PlatformViewEventInstance::setProperty(std::string &name, JSValueRef value, JSValueRef *exception) {
  auto propertyMap = JSPlatformViewEvent::getPlatformViewEventPropertyMap();
  if (propertyMap.count(name) > 0) {
    auto property = propertyMap[name];

    switch(property) {
    case JSPlatformViewEvent::PlatformViewEventProperty::name: {
      JSStringRef str = JSValueToStringCopy(ctx, value, exception);
      m_name.setString(str);
      break;
    }
    case JSPlatformViewEvent::PlatformViewEventProperty::data: {
      JSStringRef str = JSValueToStringCopy(ctx, value, exception);
      m_data.setString(str);
      break;
    }
    }
    return true;
  } else {
      return EventInstance::setProperty(name, value, exception);
  }

}

PlatformViewEventInstance::~PlatformViewEventInstance() {
  nativePlatformViewEvent->name->free();
  nativePlatformViewEvent->data->free();
  delete nativePlatformViewEvent;
}

void PlatformViewEventInstance::getPropertyNames(JSPropertyNameAccumulatorRef accumulator) {
  EventInstance::getPropertyNames(accumulator);

  for (auto &property : JSPlatformViewEvent::getPlatformViewEventPropertyNames()) {
    JSPropertyNameAccumulatorAddName(accumulator, property);
  }
}

} // namespace kraken::binding::jsc
